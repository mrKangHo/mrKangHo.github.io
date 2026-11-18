/**
 * App Store / Google Play 개발자 페이지의 앱 목록을 수집해 data/store-apps.json 으로 저장합니다.
 * 번들 ID(iOS bundleId == Android packageName)로 매칭하며, 화면 노출 정보는 iOS 데이터를 우선하고
 * iOS 앱이 없으면 Android 데이터를 사용합니다. (GitHub Actions: .github/workflows/sync-stores.yml)
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import gplay from 'google-play-scraper';

const APP_STORE_ARTIST_ID = '1094561300';
const PLAY_STORE_DEV_ID = '이강호';
const COUNTRY = 'kr';
const LANG = 'ko';
const MAX_SCREENSHOTS = 8;

const OUTPUT_PATH = resolve(dirname(fileURLToPath(import.meta.url)), '../data/store-apps.json');

async function fetchAppStoreApps() {
  const url = `https://itunes.apple.com/lookup?id=${APP_STORE_ARTIST_ID}&entity=software&country=${COUNTRY}&limit=200`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`iTunes lookup failed: HTTP ${res.status}`);
  const data = await res.json();
  const apps = (data.results || []).filter(r => r.wrapperType === 'software');
  if (apps.length === 0) throw new Error('iTunes lookup returned no apps');

  return apps.map(app => {
    const screenshots = (app.screenshotUrls && app.screenshotUrls.length > 0)
      ? app.screenshotUrls
      : (app.ipadScreenshotUrls || []);
    return {
      bundleId: app.bundleId,
      id: app.trackId,
      name: app.trackName,
      artist: app.artistName,
      icon: app.artworkUrl512 || app.artworkUrl100,
      url: app.trackViewUrl,
      genre: app.primaryGenreName || 'App',
      rating: app.averageUserRating ? app.averageUserRating.toFixed(1) : 'N/A',
      ratingCount: app.userRatingCount || 0,
      version: app.version || '1.0',
      description: (app.description || '').trim(),
      screenshots: screenshots.slice(0, MAX_SCREENSHOTS)
    };
  });
}

async function fetchPlayStoreApps() {
  const list = await gplay.developer({ devId: PLAY_STORE_DEV_ID, lang: LANG, country: COUNTRY, num: 100 });
  if (list.length === 0) throw new Error('Google Play developer page returned no apps');

  return Promise.all(list.map(async ({ appId }) => {
    const app = await gplay.app({ appId, lang: LANG, country: COUNTRY });
    return {
      bundleId: app.appId,
      name: app.title,
      artist: app.developer,
      icon: app.icon,
      url: app.url,
      genre: app.genre || 'App',
      rating: app.score ? app.score.toFixed(1) : 'N/A',
      ratingCount: app.ratings || 0,
      version: app.version && app.version !== 'VARY' ? app.version : '1.0',
      description: (app.description || app.summary || '').trim(),
      screenshots: (app.screenshots || []).slice(0, MAX_SCREENSHOTS)
    };
  }));
}

function mergeByBundleId(iosApps, androidApps) {
  const androidById = new Map(androidApps.map(a => [a.bundleId, a]));

  const merged = iosApps.map(ios => {
    const android = androidById.get(ios.bundleId);
    androidById.delete(ios.bundleId);
    return {
      ...ios,
      platforms: android ? ['ios', 'android'] : ['ios'],
      playStoreUrl: android ? android.url : undefined
    };
  });

  // iOS 앱이 없는 Android 전용 앱
  for (const android of androidById.values()) {
    const { url, ...rest } = android;
    merged.push({ ...rest, id: android.bundleId, platforms: ['android'], playStoreUrl: url });
  }
  return merged;
}

const [iosApps, androidApps] = await Promise.all([fetchAppStoreApps(), fetchPlayStoreApps()]);
const apps = mergeByBundleId(iosApps, androidApps);

await mkdir(dirname(OUTPUT_PATH), { recursive: true });
await writeFile(OUTPUT_PATH, `${JSON.stringify({ apps }, null, 2)}\n`);
console.log(`Synced ${apps.length} apps (iOS ${iosApps.length}, Android ${androidApps.length}) → ${OUTPUT_PATH}`);

/**
 * mrKangHo GitHub Repositories Showcase
 * Apple / Linear / Raycast Bespoke UI Loader, Filtering & i18n System
 */

const GITHUB_USERNAME = 'mrKangHo';
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`;
const EXCLUDED_REPOS = ['mrKangHo', 'mrKangHo.github.io'];

// Internationalization (i18n) UI Dictionary
const TRANSLATIONS = {
  ko: {
    statusPill: 'macOS & iOS 오픈 소스 프로젝트 진행 가능',
    bio: '<i class="fa-brands fa-apple"></i> macOS & iOS 개발자 | 네이티브 애플 앱, 시스템 도구 및 스킬(Skills) 개발',
    statRepos: '저장소 수',
    statStars: '총 별 수',
    statForks: '포크 수',
    statTechStack: '기술 스택',
    featuredHeading: '주요 소프트웨어',
    featuredSubtext: '엄선된 macOS 애플리케이션, CLI 유틸리티 및 오픈 소스 라이브러리',
    searchPlaceholder: '이름, 언어, 주제로 검색...',
    searchHint: '검색',
    allLang: '전체',
    forksCheckbox: '포크 포함',
    sortUpdated: '최근 업데이트순',
    sortStars: '별 많은순',
    sortName: '이름순 (A-Z)',
    allReposTitle: '전체 저장소',
    noResultsTitle: '검색된 저장소가 없습니다',
    noResultsDesc: '검색 키워드를 수정하거나 언어 필터를 변경해 보세요.',
    resetFilters: '필터 초기화',
    copyToast: '클립보드에 복사되었습니다:',
    copyTooltip: 'git clone 명령어 복사',
    viewRepo: '저장소 보기',
    viewCode: '코드 보기',
    githubProfile: 'GitHub 프로필',
    repositoryLink: '저장소',
    rights: 'All rights reserved.'
  },
  en: {
    statusPill: 'Available for macOS & iOS Open Source Projects',
    bio: '<i class="fa-brands fa-apple"></i> macOS & iOS Engineer | Crafting Native Apple Apps, Developer Tools & AI Agent Skills',
    statRepos: 'Repositories',
    statStars: 'Total Stars',
    statForks: 'Forks',
    statTechStack: 'Tech Stack',
    featuredHeading: 'Featured Software',
    featuredSubtext: 'Selected macOS applications, CLI utilities, and open source libraries',
    searchPlaceholder: 'Search by name, language, or topic...',
    searchHint: 'Search',
    allLang: 'All',
    forksCheckbox: 'Forks',
    sortUpdated: 'Recently Updated',
    sortStars: 'Most Stars',
    sortName: 'Name (A-Z)',
    allReposTitle: 'All Repositories',
    noResultsTitle: 'No matching repositories found',
    noResultsDesc: 'Try refining your search keyword or switching language filters.',
    resetFilters: 'Reset Filters',
    copyToast: 'Copied to clipboard:',
    copyTooltip: 'Copy git clone',
    viewRepo: 'View Repository',
    viewCode: 'View Code',
    githubProfile: 'GitHub Profile',
    repositoryLink: 'Repository',
    rights: 'All rights reserved.'
  }
};

// Curated metadata enrichment for repos (Bilingual)
const REPO_ENRICHMENTS = {
  'FloatingTube': {
    category: { ko: 'macOS 앱', en: 'macOS App' },
    description: {
      ko: 'macOS 네이티브 플로팅 유튜브 플레이어 (인앱 전체화면, 최상단 고정, 클릭 투과 모드 및 메뉴바 트레이 지원).',
      en: 'macOS native floating YouTube player with in-app fullscreen, always-on-top, click-through mode and menu bar tray.'
    },
    featured: true,
    topics: ['macOS', 'Swift', 'SwiftUI', 'YouTube', 'Pip'],
    icon: 'assets/icons/floatingtube.png'
  },
  'brew-manager': {
    category: { ko: 'macOS 앱', en: 'macOS App' },
    description: {
      ko: 'Homebrew 패키지를 편리하게 탐색, 검색, 설치 및 업데이트할 수 있는 macOS GUI 애플리케이션.',
      en: 'macOS GUI application for browsing, searching, installing, and updating Homebrew packages with ease.'
    },
    featured: true,
    topics: ['macOS', 'Swift', 'Homebrew', 'GUI'],
    icon: 'assets/icons/brew-manager.png'
  },
  'youtubeDownloader': {
    category: { ko: 'macOS 앱', en: 'macOS App' },
    description: {
      ko: 'yt-dlp 기반의 macOS GUI 비디오 & 오디오 다운로더 (사용자 정의 해상도 및 음원 포맷 옵션 지원).',
      en: 'macOS GUI video & audio downloader powered by yt-dlp with custom resolution & audio format options.'
    },
    featured: true,
    topics: ['macOS', 'Swift', 'yt-dlp', 'YouTube'],
    icon: 'assets/icons/youtubedownloader.png'
  },
  'homebrew-ytdownloader': {
    category: { ko: 'Homebrew 탭', en: 'Homebrew Tap' },
    description: {
      ko: 'YTDownloader를 위한 Homebrew tap - macOS GUI YTDownloader 간편 포뮬러 설치 지원.',
      en: 'Homebrew tap for YTDownloader - simplified formula installation for macOS GUI YTDownloader.'
    },
    featured: true,
    topics: ['Homebrew', 'Tap', 'Ruby', 'yt-dlp'],
    icon: 'assets/icons/homebrew-ytdownloader.svg'
  },
  'TuistProjectMaker': {
    category: { ko: 'CLI 도구', en: 'CLI Tool' },
    description: {
      ko: '모듈식 iOS 및 macOS 앱 아키텍처 스캐폴딩을 위한 자동화된 Tuist Swift 프로젝트 생성기.',
      en: 'Automated Tuist Swift project generator for scaffolding modular iOS and macOS app architectures.'
    },
    featured: true,
    topics: ['Swift', 'Tuist', 'Xcode', 'Architecture'],
    icon: 'assets/icons/tuistprojectmaker.svg'
  },
  'clean-arch-checker': {
    category: { ko: '감사 도구', en: 'Audit Tool' },
    description: {
      ko: '클린 아키텍처 경계 및 레이어 의존성을 검사하고 감사하는 가이드 스크립트 도구.',
      en: 'Architecture compliance checker script for auditing Clean Architecture boundaries & layer dependencies.'
    },
    featured: true,
    topics: ['skills', 'JavaScript', 'Clean-Architecture', 'Linter'],
    icon: 'assets/icons/clean-arch-checker.svg'
  },
  'iTorrent': {
    category: { ko: 'iOS 앱', en: 'iOS App' },
    description: {
      ko: 'iOS 16+ 기기를 위해 Swift로 작성된 기능 풍부한 BitTorrent 클라이언트.',
      en: 'Feature-rich BitTorrent client written in Swift for iOS 16+ devices.'
    },
    featured: false,
    topics: ['iOS', 'Swift', 'BitTorrent'],
    icon: 'assets/icons/itorrent.svg'
  },
  'LibTorrent-Swift': {
    category: { ko: '라이브러리', en: 'Library' },
    description: {
      ko: 'C++ libtorrent 라이브러리를 위한 Swift 래퍼 및 통합 레이어.',
      en: 'Swift wrapper and integration layer around the C++ libtorrent library.'
    },
    featured: false,
    topics: ['Objective-C++', 'Swift', 'libtorrent'],
    icon: 'assets/icons/libtorrent-swift.svg'
  },
  'DesignSystemMake': {
    category: { ko: '라이브러리', en: 'Library' },
    description: {
      ko: '디자인 시스템 토큰과 컴포넌트를 표준화하고 구축하기 위한 Swift 라이브러리 및 유틸리티 도구.',
      en: 'Swift library and utility tool for creating and standardizing design system tokens and components.'
    },
    featured: false,
    topics: ['Swift', 'Design-System', 'SwiftUI'],
    icon: 'assets/icons/designsystemmake.png'
  },
  'Grassie': {
    category: { ko: 'macOS 도구', en: 'macOS Tool' },
    description: {
      ko: '시스템 자동화를 위한 Swift 유틸리티 애플리케이션 및 도구.',
      en: 'Swift utility application and tool for system automation.'
    },
    featured: false,
    topics: ['Swift', 'macOS'],
    icon: 'assets/icons/grassie.svg'
  }
};

// Automatic Language Detection (System / Browser / Saved Preference)
function detectInitialLanguage() {
  const saved = localStorage.getItem('preferred_lang');
  if (saved === 'ko' || saved === 'en') {
    return saved;
  }
  const navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (navLang.startsWith('ko')) {
    return 'ko';
  }
  return 'en';
}

// Application State
let currentLang = detectInitialLanguage();
let rawReposData = [];
let processedRepos = [];
let currentFilter = 'all';
let currentSearch = '';
let includeForks = true;
let currentSort = 'updated';
let isFallbackActive = false;

// DOM Elements
const featuredContainer = document.getElementById('featured-container');
const repoGrid = document.getElementById('repo-grid');
const repoCountBadge = document.getElementById('repo-count-badge');
const noResults = document.getElementById('no-results');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const filterBtns = document.querySelectorAll('.segment-btn');
const toggleForks = document.getElementById('toggle-forks');
const sortSelect = document.getElementById('sort-select');
const resetFiltersBtn = document.getElementById('reset-filters-btn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const shortcutTrigger = document.getElementById('shortcut-trigger');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  updateUIStrings();
  initEvents();
  fetchRepositories();
});

// Event Listeners Setup
function initEvents() {
  // Language Switcher Buttons
  const langBtns = document.querySelectorAll('[data-lang-switch]');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.dataset.langSwitch;
      if (targetLang !== currentLang) {
        setLanguage(targetLang);
      }
    });
  });

  // Search input
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    clearSearchBtn.classList.toggle('hidden', currentSearch === '');
    render();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentSearch = '';
    clearSearchBtn.classList.add('hidden');
    render();
  });

  // Global Keyboard Shortcut: '/' or '⌘K' / 'Ctrl+K'
  document.addEventListener('keydown', (e) => {
    if ((e.key === '/' && document.activeElement !== searchInput) || 
        ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });

  if (shortcutTrigger) {
    shortcutTrigger.addEventListener('click', () => {
      searchInput.focus();
    });
  }

  // Language filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.lang;
      render();
    });
  });

  // Toggle Forks
  toggleForks.addEventListener('change', (e) => {
    includeForks = e.target.checked;
    render();
  });

  // Sort dropdown
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    render();
  });

  // Reset button
  resetFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentSearch = '';
    clearSearchBtn.classList.add('hidden');
    currentFilter = 'all';
    filterBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === 'all'));
    includeForks = true;
    toggleForks.checked = true;
    currentSort = 'updated';
    sortSelect.value = 'updated';
    render();
  });
}

// Switch Active Language and Update UI
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferred_lang', lang);
  updateUIStrings();
  if (processedRepos.length > 0) {
    updateStats(processedRepos);
    render();
  }
}

// Update all UI elements based on current language
function updateUIStrings() {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  document.documentElement.lang = currentLang;

  // Active state on switch buttons
  document.querySelectorAll('[data-lang-switch]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langSwitch === currentLang);
  });

  const statusTextEl = document.getElementById('status-pill-text');
  if (statusTextEl) statusTextEl.textContent = t.statusPill;

  const bioTextEl = document.getElementById('hero-bio-text');
  if (bioTextEl) bioTextEl.innerHTML = t.bio;

  const lblReposEl = document.getElementById('lbl-stat-repos');
  if (lblReposEl) lblReposEl.textContent = t.statRepos;

  const lblStarsEl = document.getElementById('lbl-stat-stars');
  if (lblStarsEl) lblStarsEl.textContent = t.statStars;

  const lblForksEl = document.getElementById('lbl-stat-forks');
  if (lblForksEl) lblForksEl.textContent = t.statForks;

  const featuredHeadingEl = document.getElementById('featured-heading');
  if (featuredHeadingEl) featuredHeadingEl.textContent = t.featuredHeading;

  const featuredSubtextEl = document.getElementById('featured-subtext');
  if (featuredSubtextEl) featuredSubtextEl.textContent = t.featuredSubtext;

  const searchInputEl = document.getElementById('search-input');
  if (searchInputEl) searchInputEl.placeholder = t.searchPlaceholder;

  const searchHintEl = document.getElementById('lbl-search-hint');
  if (searchHintEl) searchHintEl.textContent = t.searchHint;

  const btnAllEl = document.getElementById('btn-lang-all');
  if (btnAllEl) btnAllEl.textContent = t.allLang;

  const lblForksCheckboxEl = document.getElementById('lbl-forks');
  if (lblForksCheckboxEl) lblForksCheckboxEl.textContent = t.forksCheckbox;

  const optUpdatedEl = document.getElementById('opt-sort-updated');
  if (optUpdatedEl) optUpdatedEl.textContent = t.sortUpdated;

  const optStarsEl = document.getElementById('opt-sort-stars');
  if (optStarsEl) optStarsEl.textContent = t.sortStars;

  const optNameEl = document.getElementById('opt-sort-name');
  if (optNameEl) optNameEl.textContent = t.sortName;

  const allReposTitleEl = document.getElementById('all-repos-title-text');
  if (allReposTitleEl) allReposTitleEl.textContent = t.allReposTitle;

  const noResultsTitleEl = document.getElementById('no-results-title');
  if (noResultsTitleEl) noResultsTitleEl.textContent = t.noResultsTitle;

  const noResultsDescEl = document.getElementById('no-results-desc');
  if (noResultsDescEl) noResultsDescEl.textContent = t.noResultsDesc;

  const resetFiltersBtnEl = document.getElementById('reset-filters-btn');
  if (resetFiltersBtnEl) resetFiltersBtnEl.textContent = t.resetFilters;

  const footerRightsEl = document.getElementById('footer-rights');
  if (footerRightsEl) footerRightsEl.textContent = t.rights;

  const footerLinkGithubEl = document.getElementById('footer-link-github');
  if (footerLinkGithubEl) footerLinkGithubEl.textContent = t.githubProfile;

  const footerLinkRepoEl = document.getElementById('footer-link-repo');
  if (footerLinkRepoEl) footerLinkRepoEl.textContent = t.repositoryLink;
}

// Fetch Repositories from GitHub API
async function fetchRepositories() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`GitHub API HTTP ${response.status}`);
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error('GitHub API response is not an array');
    }
    processAndSetData(data);
  } catch (error) {
    console.warn('GitHub API fetch failed or rate limited. Using static fallback data.', error);
    useFallbackData();
  }
}

// Helper to extract localized text from field (string or object)
function getLocalizedField(field, lang) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'object') {
    return field[lang] || field.en || field.ko || '';
  }
  return String(field);
}

// Process raw GitHub API items and enrich metadata
function processAndSetData(repos) {
  try {
    if (!Array.isArray(repos) || repos.length === 0) {
      if (!isFallbackActive) useFallbackData();
      return;
    }

    const filteredRaw = repos.filter(r => !EXCLUDED_REPOS.includes(r.name));
    rawReposData = filteredRaw;

    processedRepos = filteredRaw.map(repo => {
      const enrichment = REPO_ENRICHMENTS[repo.name] || {};
      
      return {
        id: repo.id || Math.random(),
        name: repo.name || 'unnamed',
        fullName: repo.full_name || repo.name || '',
        htmlUrl: repo.html_url || `https://github.com/${GITHUB_USERNAME}/${repo.name}`,
        category: enrichment.category || (repo.fork ? { ko: '포크', en: 'Fork' } : { ko: '오픈 소스', en: 'Open Source' }),
        description: enrichment.description || repo.description || { ko: '설명이 없습니다.', en: 'No description provided.' },
        language: repo.language || (enrichment.topics ? enrichment.topics[0] : 'Other'),
        stars: typeof repo.stargazers_count === 'number' ? repo.stargazers_count : 0,
        forks: typeof repo.forks_count === 'number' ? repo.forks_count : 0,
        isFork: Boolean(repo.fork),
        updatedAt: repo.updated_at ? new Date(repo.updated_at) : new Date(),
        pushedAt: repo.pushed_at ? new Date(repo.pushed_at) : new Date(),
        topics: (Array.isArray(repo.topics) && repo.topics.length > 0) ? repo.topics : (enrichment.topics || []),
        homepage: repo.homepage || null,
        featured: enrichment.featured || false,
        cloneUrl: repo.clone_url || (repo.html_url ? repo.html_url + '.git' : ''),
        icon: enrichment.icon || null
      };
    });

    updateStats(processedRepos);
    render();
  } catch (err) {
    console.error('Error processing repositories:', err);
    if (!isFallbackActive) useFallbackData();
  }
}

// Static Fallback Data
function useFallbackData() {
  isFallbackActive = true;
  const fallbackList = [
    {
      id: 1,
      name: 'FloatingTube',
      full_name: 'mrKangHo/FloatingTube',
      html_url: 'https://github.com/mrKangHo/FloatingTube',
      description: 'macOS native floating YouTube player with in-app fullscreen, always-on-top, click-through mode and menu bar tray.',
      language: 'Swift',
      stargazers_count: 1,
      forks_count: 0,
      fork: false,
      updated_at: '2026-09-01T00:00:00Z',
      topics: ['macOS', 'Swift', 'SwiftUI', 'YouTube', 'Pip']
    },
    {
      id: 2,
      name: 'brew-manager',
      full_name: 'mrKangHo/brew-manager',
      html_url: 'https://github.com/mrKangHo/brew-manager',
      description: 'macOS GUI app for browsing, searching, installing, and updating Homebrew packages with ease.',
      language: 'Swift',
      stargazers_count: 0,
      forks_count: 0,
      fork: false,
      updated_at: '2026-08-30T00:00:00Z',
      topics: ['macOS', 'Swift', 'Homebrew', 'GUI']
    },
    {
      id: 3,
      name: 'youtubeDownloader',
      full_name: 'mrKangHo/youtubeDownloader',
      html_url: 'https://github.com/mrKangHo/youtubeDownloader',
      description: 'macOS GUI video & audio downloader powered by yt-dlp with custom format options.',
      language: 'Swift',
      stargazers_count: 0,
      forks_count: 0,
      fork: false,
      updated_at: '2026-09-01T00:00:00Z',
      topics: ['macOS', 'Swift', 'yt-dlp', 'YouTube']
    },
    {
      id: 4,
      name: 'homebrew-ytdownloader',
      full_name: 'mrKangHo/homebrew-ytdownloader',
      html_url: 'https://github.com/mrKangHo/homebrew-ytdownloader',
      description: 'Homebrew tap for YTDownloader (macOS GUI for yt-dlp).',
      language: 'Ruby',
      stargazers_count: 0,
      forks_count: 0,
      fork: false,
      updated_at: '2026-08-28T00:00:00Z',
      topics: ['Homebrew', 'Tap', 'Ruby', 'yt-dlp']
    },
    {
      id: 5,
      name: 'TuistProjectMaker',
      full_name: 'mrKangHo/TuistProjectMaker',
      html_url: 'https://github.com/mrKangHo/TuistProjectMaker',
      description: 'Automated Tuist Swift project generator for scaffolding modular iOS and macOS architectures.',
      language: 'Swift',
      stargazers_count: 1,
      forks_count: 0,
      fork: false,
      updated_at: '2026-08-29T00:00:00Z',
      topics: ['Swift', 'Tuist', 'Xcode', 'Architecture']
    },
    {
      id: 6,
      name: 'clean-arch-checker',
      full_name: 'mrKangHo/clean-arch-checker',
      html_url: 'https://github.com/mrKangHo/clean-arch-checker',
      description: 'Codebase analysis tool to inspect and audit Clean Architecture compliance across layers.',
      language: 'JavaScript',
      stargazers_count: 0,
      forks_count: 0,
      fork: false,
      updated_at: '2026-08-25T00:00:00Z',
      topics: ['skills', 'JavaScript', 'Clean-Architecture', 'Linter']
    },
    {
      id: 7,
      name: 'iTorrent',
      full_name: 'mrKangHo/iTorrent',
      html_url: 'https://github.com/mrKangHo/iTorrent',
      description: 'Feature-rich BitTorrent client written in Swift for iOS 16+.',
      language: 'Swift',
      stargazers_count: 0,
      forks_count: 0,
      fork: true,
      updated_at: '2026-08-20T00:00:00Z',
      topics: ['iOS', 'Swift', 'BitTorrent']
    },
    {
      id: 8,
      name: 'LibTorrent-Swift',
      full_name: 'mrKangHo/LibTorrent-Swift',
      html_url: 'https://github.com/mrKangHo/LibTorrent-Swift',
      description: 'Swift wrapper around libtorrent C++ library.',
      language: 'Objective-C++',
      stargazers_count: 0,
      forks_count: 0,
      fork: true,
      updated_at: '2026-08-15T00:00:00Z',
      topics: ['Objective-C++', 'Swift', 'libtorrent']
    },
    {
      id: 9,
      name: 'DesignSystemMake',
      full_name: 'mrKangHo/DesignSystemMake',
      html_url: 'https://github.com/mrKangHo/DesignSystemMake',
      description: 'Swift library for building consistent design system components.',
      language: 'Swift',
      stargazers_count: 0,
      forks_count: 0,
      fork: false,
      updated_at: '2026-08-10T00:00:00Z',
      topics: ['Swift', 'Design-System', 'SwiftUI']
    },
    {
      id: 10,
      name: 'Grassie',
      full_name: 'mrKangHo/Grassie',
      html_url: 'https://github.com/mrKangHo/Grassie',
      description: 'Swift utility application repository.',
      language: 'Swift',
      stargazers_count: 0,
      forks_count: 0,
      fork: false,
      updated_at: '2026-08-05T00:00:00Z',
      topics: ['Swift', 'macOS']
    }
  ];

  processAndSetData(fallbackList);
}

// Update Top Profile Statistics
function updateStats(repos) {
  const totalRepos = repos.length;
  const totalStars = repos.reduce((sum, r) => sum + r.stars, 0);
  const totalForks = repos.reduce((sum, r) => sum + r.forks, 0);
  
  const langCounts = {};
  repos.forEach(r => {
    if (r.language && r.language !== 'Other' && r.language !== 'None') {
      langCounts[r.language] = (langCounts[r.language] || 0) + 1;
    }
  });

  const sortedLangs = Object.keys(langCounts).sort((a, b) => langCounts[b] - langCounts[a]);

  document.getElementById('stat-repos').textContent = totalRepos;
  document.getElementById('stat-stars').textContent = totalStars;
  document.getElementById('stat-forks').textContent = totalForks;

  const langStackEl = document.getElementById('stat-languages-stack');
  const langLabelEl = document.getElementById('stat-languages-label');

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  if (langLabelEl) {
    langLabelEl.textContent = `${t.statTechStack} (${sortedLangs.length})`;
  }

  if (langStackEl) {
    langStackEl.innerHTML = '';
    sortedLangs.forEach((lang, index) => {
      const circle = document.createElement('span');
      const langClass = getLanguageDotClass(lang);
      const iconHtml = getLanguageIconHtml(lang);
      
      circle.className = `lang-circle-avatar ${langClass}`;
      circle.setAttribute('title', `${lang} (${langCounts[lang]} repos) - Click to filter`);
      circle.style.zIndex = 20 - index;
      circle.innerHTML = iconHtml;

      circle.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetBtn = Array.from(filterBtns).find(b => 
          b.dataset.lang.toLowerCase() === lang.toLowerCase() || 
          (lang.includes('Objective-C') && b.dataset.lang === 'Objective-C++')
        );
        if (targetBtn) {
          targetBtn.click();
        }
      });

      langStackEl.appendChild(circle);
    });
  }
}

function getLanguageIconHtml(lang) {
  if (!lang) return '<i class="fa-solid fa-code"></i>';
  const lower = lang.toLowerCase();
  if (lower.includes('swift')) return '<i class="fa-brands fa-swift"></i>';
  if (lower.includes('ruby')) return '<i class="fa-brands fa-ruby"></i>';
  if (lower.includes('javascript') || lower === 'js') return '<i class="fa-brands fa-js"></i>';
  if (lower.includes('c++') || lower.includes('objective-c') || lower.includes('objc')) return '<span class="lang-badge-text">C++</span>';
  if (lower.includes('html')) return '<i class="fa-brands fa-html5"></i>';
  if (lower.includes('css')) return '<i class="fa-brands fa-css3-alt"></i>';
  return '<i class="fa-solid fa-code"></i>';
}

// Main Render Function
function render() {
  let filtered = processedRepos.filter(repo => {
    if (!includeForks && repo.isFork) return false;

    if (currentFilter !== 'all') {
      if (currentFilter === 'Objective-C++') {
        if (!['Objective-C++', 'C++', 'C'].includes(repo.language)) return false;
      } else if (repo.language.toLowerCase() !== currentFilter.toLowerCase()) {
        return false;
      }
    }

    if (currentSearch) {
      const categoryStr = getLocalizedField(repo.category, currentLang).toLowerCase();
      const descStr = getLocalizedField(repo.description, currentLang).toLowerCase();
      const matchName = repo.name.toLowerCase().includes(currentSearch);
      const matchDesc = descStr.includes(currentSearch);
      const matchTopic = repo.topics.some(t => t.toLowerCase().includes(currentSearch));
      const matchLang = repo.language.toLowerCase().includes(currentSearch);
      const matchCategory = categoryStr.includes(currentSearch);
      if (!matchName && !matchDesc && !matchTopic && !matchLang && !matchCategory) return false;
    }

    return true;
  });

  filtered.sort((a, b) => {
    if (currentSort === 'stars') {
      return b.stars - a.stars;
    } else if (currentSort === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return b.updatedAt - a.updatedAt;
    }
  });

  renderFeatured();

  repoGrid.innerHTML = '';
  repoCountBadge.textContent = filtered.length;

  if (filtered.length === 0) {
    noResults.classList.remove('hidden');
  } else {
    noResults.classList.add('hidden');
    filtered.forEach(repo => {
      repoGrid.appendChild(createRepoCard(repo));
    });
  }
}

function getRepoIcon(repo) {
  if (repo.icon) return repo.icon;
  const lang = (repo.language || '').toLowerCase();
  if (lang.includes('swift')) return 'assets/icons/tuistprojectmaker.svg';
  if (lang.includes('ruby')) return 'assets/icons/homebrew-ytdownloader.svg';
  if (lang.includes('javascript') || lang.includes('js')) return 'assets/icons/clean-arch-checker.svg';
  return 'assets/icons/portfolio.svg';
}

// Render Featured Projects Section
function renderFeatured() {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const featuredRepos = processedRepos.filter(r => r.featured);
  featuredContainer.innerHTML = '';

  featuredRepos.forEach(repo => {
    const card = document.createElement('div');
    card.className = 'featured-card';
    
    const langDotClass = getLanguageDotClass(repo.language);
    const topicsHtml = repo.topics.slice(0, 4).map(t => `<span class="topic-pill">${escapeHtml(t)}</span>`).join('');
    const iconSrc = getRepoIcon(repo);
    const categoryStr = getLocalizedField(repo.category, currentLang);
    const descStr = getLocalizedField(repo.description, currentLang);

    card.innerHTML = `
      <div>
        <div class="card-header-row">
          <div class="card-app-icon">
            <img src="${iconSrc}" alt="${escapeHtml(repo.name)} App Icon" loading="lazy" onerror="this.onerror=null; this.src='assets/icons/portfolio.svg';">
          </div>
          <div class="card-title-group">
            <div class="card-badge-row">
              <span class="category-tag">${escapeHtml(categoryStr)}</span>
              ${repo.isFork ? '<span class="topic-pill">Fork</span>' : ''}
            </div>
            <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="card-title-link">${escapeHtml(repo.name)}</a>
          </div>
        </div>
        <p class="card-desc">${escapeHtml(descStr)}</p>
        <div class="topics-row">${topicsHtml}</div>
      </div>
      <div class="card-meta-bar">
        <div class="card-stats">
          <span class="meta-lang"><span class="meta-dot ${langDotClass}"></span> ${escapeHtml(repo.language)}</span>
          <span><i class="fa-regular fa-star"></i> ${repo.stars}</span>
        </div>
        <div class="card-actions-group">
          <button class="action-icon-btn" title="${t.copyTooltip}" onclick="copyCloneCommand('${repo.name}', '${repo.cloneUrl || repo.htmlUrl + '.git'}')">
            <i class="fa-regular fa-copy"></i>
          </button>
          <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="action-icon-btn" title="${t.viewRepo}">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    `;
    featuredContainer.appendChild(card);
  });
}

// Create Card Element for standard repo grid
function createRepoCard(repo) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const card = document.createElement('div');
  card.className = 'repo-card';

  const langDotClass = getLanguageDotClass(repo.language);
  const topicsHtml = repo.topics.slice(0, 3).map(t => `<span class="topic-pill">${escapeHtml(t)}</span>`).join('');
  const formattedDate = repo.updatedAt ? repo.updatedAt.toLocaleDateString(currentLang === 'ko' ? 'ko-KR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';
  const iconSrc = getRepoIcon(repo);
  const categoryStr = getLocalizedField(repo.category, currentLang);
  const descStr = getLocalizedField(repo.description, currentLang);

  card.innerHTML = `
    <div>
      <div class="card-header-row">
        <div class="card-app-icon">
          <img src="${iconSrc}" alt="${escapeHtml(repo.name)} App Icon" loading="lazy" onerror="this.onerror=null; this.src='assets/icons/portfolio.svg';">
        </div>
        <div class="card-title-group">
          <div class="card-badge-row">
            <span class="category-tag">${escapeHtml(categoryStr)}</span>
            ${repo.isFork ? '<span class="topic-pill">Fork</span>' : ''}
          </div>
          <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="card-title-link">${escapeHtml(repo.name)}</a>
        </div>
      </div>
      <p class="card-desc">${escapeHtml(descStr)}</p>
      ${topicsHtml ? `<div class="topics-row">${topicsHtml}</div>` : ''}
    </div>
    <div class="card-meta-bar">
      <div class="card-stats">
        <span class="meta-lang"><span class="meta-dot ${langDotClass}"></span> ${escapeHtml(repo.language)}</span>
        <span><i class="fa-regular fa-star"></i> ${repo.stars}</span>
        ${formattedDate ? `<span title="Updated">${formattedDate}</span>` : ''}
      </div>
      <div class="card-actions-group">
        <button class="action-icon-btn" title="${t.copyTooltip}" onclick="copyCloneCommand('${repo.name}', '${repo.cloneUrl || repo.htmlUrl + '.git'}')">
          <i class="fa-regular fa-copy"></i>
        </button>
        <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="action-icon-btn" title="${t.viewCode}">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  `;

  return card;
}

// Helpers
function getLanguageDotClass(lang) {
  if (!lang) return 'other';
  const lower = lang.toLowerCase();
  if (lower.includes('swift')) return 'swift';
  if (lower.includes('ruby')) return 'ruby';
  if (lower.includes('javascript') || lower === 'js') return 'js';
  if (lower.includes('c++') || lower.includes('objective-c')) return 'objc';
  return 'other';
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

window.copyCloneCommand = function(repoName, cloneUrl) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const command = `git clone ${cloneUrl}`;
  navigator.clipboard.writeText(command).then(() => {
    showToast(`${t.copyToast} "git clone ${repoName}"`);
  }).catch(err => {
    console.error('Failed to copy', err);
  });
};

function showToast(msg) {
  toastMessage.textContent = msg;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2500);
}

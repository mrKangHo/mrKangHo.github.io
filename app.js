/**
 * mrKangHo GitHub Repositories Showcase
 * Dynamic GitHub REST API Loader & Interactive Filtering System
 */

const GITHUB_USERNAME = 'mrKangHo';
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`;

// Curated metadata enrichment for repos (used when API fields like description/topics are missing)
const REPO_ENRICHMENTS = {
  'FloatingTube': {
    description: 'macOS native floating YouTube player with in-app fullscreen, always-on-top, click-through mode and menu bar tray.',
    featured: true,
    topics: ['macOS', 'Swift', 'SwiftUI', 'YouTube', 'Pip']
  },
  'brew-manager': {
    description: 'macOS GUI application for browsing, searching, installing, and updating Homebrew packages with ease.',
    featured: true,
    topics: ['macOS', 'Swift', 'Homebrew', 'GUI', 'AppStore']
  },
  'youtubeDownloader': {
    description: 'macOS GUI video & audio downloader powered by yt-dlp with custom resolution & audio format options.',
    featured: true,
    topics: ['macOS', 'Swift', 'yt-dlp', 'YouTube', 'Media']
  },
  'homebrew-ytdownloader': {
    description: 'Homebrew tap for YTDownloader - simplified formula installation for macOS GUI YTDownloader.',
    featured: true,
    topics: ['Homebrew', 'Tap', 'Ruby', 'yt-dlp']
  },
  'TuistProjectMaker': {
    description: 'Automated Tuist Swift project generator for scaffolding modular iOS and macOS app architectures.',
    featured: true,
    topics: ['Swift', 'Tuist', 'Xcode', 'Architecture']
  },
  'clean-arch-checker': {
    description: 'Architecture compliance checker script for auditing Clean Architecture boundaries & layer dependencies.',
    featured: true,
    topics: ['JavaScript', 'Clean-Architecture', 'Linter', 'Audit']
  },
  'iTorrent': {
    description: 'Feature-rich BitTorrent client written in Swift for iOS 16+ devices.',
    featured: false,
    topics: ['iOS', 'Swift', 'BitTorrent', 'Mobile']
  },
  'LibTorrent-Swift': {
    description: 'Swift wrapper and integration layer around the C++ libtorrent library.',
    featured: false,
    topics: ['Objective-C++', 'Swift', 'libtorrent']
  },
  'DesignSystemMake': {
    description: 'Swift library and utility tool for creating and standardizing design system tokens and components.',
    featured: false,
    topics: ['Swift', 'Design-System', 'SwiftUI']
  },
  'Grassie': {
    description: 'Swift utility app & tool for system enhancement.',
    featured: false,
    topics: ['Swift', 'macOS']
  },
  'mrKangHo': {
    description: 'GitHub profile README configuration and developer background showcase.',
    featured: false,
    topics: ['Profile', 'README']
  },
  'mrKangHo.github.io': {
    description: 'Personal GitHub Pages showcase website displaying all public repositories and open-source projects.',
    featured: false,
    topics: ['GitHub-Pages', 'HTML5', 'CSS', 'JavaScript']
  }
};

// Application State
let rawReposData = [];
let processedRepos = [];
let currentFilter = 'all';
let currentSearch = '';
let includeForks = true;
let currentSort = 'updated';

// DOM Elements
const featuredContainer = document.getElementById('featured-container');
const repoGrid = document.getElementById('repo-grid');
const repoCountBadge = document.getElementById('repo-count-badge');
const noResults = document.getElementById('no-results');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const filterBtns = document.querySelectorAll('.pill-btn');
const toggleForks = document.getElementById('toggle-forks');
const sortSelect = document.getElementById('sort-select');
const resetFiltersBtn = document.getElementById('reset-filters-btn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initEvents();
  fetchRepositories();
});

// Event Listeners Setup
function initEvents() {
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

// Fetch Repositories from GitHub API with Static Fallback
async function fetchRepositories() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`GitHub API HTTP ${response.status}`);
    }
    const data = await response.json();
    processAndSetData(data);
  } catch (error) {
    console.warn('GitHub API fetch failed or rate limited. Using static fallback data.', error);
    useFallbackData();
  }
}

// Process raw GitHub API items and enrich metadata
function processAndSetData(repos) {
  rawReposData = repos;

  processedRepos = repos.map(repo => {
    const enrichment = REPO_ENRICHMENTS[repo.name] || {};
    
    return {
      id: repo.id,
      name: repo.name,
      fullName: repo.full_name,
      htmlUrl: repo.html_url,
      description: repo.description || enrichment.description || 'No description provided.',
      language: repo.language || (enrichment.topics ? enrichment.topics[0] : 'Other'),
      stars: repo.stargazers_count || 0,
      forks: repo.forks_count || 0,
      isFork: repo.fork,
      updatedAt: new Date(repo.updated_at),
      pushedAt: new Date(repo.pushed_at),
      topics: (repo.topics && repo.topics.length > 0) ? repo.topics : (enrichment.topics || []),
      homepage: repo.homepage,
      featured: enrichment.featured || false,
      cloneUrl: repo.clone_url
    };
  });

  updateStats(processedRepos);
  render();
}

// Static Fallback Data
function useFallbackData() {
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
      topics: ['macOS', 'Swift', 'SwiftUI', 'YouTube', 'Pip'],
      homepage: null
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
      topics: ['macOS', 'Swift', 'Homebrew', 'GUI'],
      homepage: null
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
      topics: ['macOS', 'Swift', 'yt-dlp', 'YouTube'],
      homepage: null
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
      topics: ['Homebrew', 'Tap', 'Ruby', 'yt-dlp'],
      homepage: null
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
      topics: ['Swift', 'Tuist', 'Xcode', 'Architecture'],
      homepage: null
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
      topics: ['JavaScript', 'Clean-Architecture', 'Linter'],
      homepage: null
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
      topics: ['iOS', 'Swift', 'BitTorrent'],
      homepage: null
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
      topics: ['Objective-C++', 'Swift', 'libtorrent'],
      homepage: null
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
      topics: ['Swift', 'Design-System', 'SwiftUI'],
      homepage: null
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
      topics: ['Swift', 'macOS'],
      homepage: null
    }
  ];

  processAndSetData(fallbackList);
}

// Update Top Profile Statistics
function updateStats(repos) {
  const totalRepos = repos.length;
  const totalStars = repos.reduce((sum, r) => sum + r.stars, 0);
  const totalForks = repos.reduce((sum, r) => sum + r.forks, 0);
  
  // Count frequency of each language
  const langCounts = {};
  repos.forEach(r => {
    if (r.language && r.language !== 'Other') {
      langCounts[r.language] = (langCounts[r.language] || 0) + 1;
    }
  });

  // Sort languages by repository count
  const sortedLangs = Object.keys(langCounts).sort((a, b) => langCounts[b] - langCounts[a]);

  document.getElementById('stat-repos').textContent = totalRepos;
  document.getElementById('stat-stars').textContent = totalStars;
  document.getElementById('stat-forks').textContent = totalForks;

  // Render Overlapping Language Avatar Stack
  const langStackEl = document.getElementById('stat-languages-stack');
  if (langStackEl) {
    langStackEl.innerHTML = '';
    sortedLangs.forEach((lang, index) => {
      const circle = document.createElement('span');
      const langClass = getLanguageDotClass(lang);
      const iconHtml = getLanguageIconHtml(lang);
      
      circle.className = `lang-circle-avatar ${langClass}`;
      circle.setAttribute('title', `${lang} (${langCounts[lang]} repos) - Click to filter`);
      circle.style.zIndex = 10 - index;
      circle.innerHTML = iconHtml;

      // Click to filter by language
      circle.addEventListener('click', () => {
        const targetBtn = Array.from(filterBtns).find(b => b.dataset.lang === lang || (lang.includes('Objective-C') && b.dataset.lang === 'Objective-C++'));
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
  if (lower.includes('swift')) return '<i class="devicon-swift-plain"></i>';
  if (lower.includes('ruby')) return '<i class="devicon-ruby-plain"></i>';
  if (lower.includes('javascript') || lower === 'js') return '<i class="devicon-javascript-plain"></i>';
  if (lower.includes('c++') || lower.includes('objective-c') || lower.includes('objc')) return '<i class="devicon-cplusplus-plain"></i>';
  if (lower.includes('html')) return '<i class="devicon-html5-plain"></i>';
  if (lower.includes('css')) return '<i class="devicon-css3-plain"></i>';
  return '<i class="fa-solid fa-code"></i>';
}

// Main Render Function
function render() {
  // Filter logic
  let filtered = processedRepos.filter(repo => {
    // Hide/Show forks
    if (!includeForks && repo.isFork) return false;

    // Language filter
    if (currentFilter !== 'all') {
      if (currentFilter === 'Objective-C++') {
        if (!['Objective-C++', 'C++', 'C'].includes(repo.language)) return false;
      } else if (repo.language !== currentFilter) {
        return false;
      }
    }

    // Search query filter
    if (currentSearch) {
      const matchName = repo.name.toLowerCase().includes(currentSearch);
      const matchDesc = repo.description.toLowerCase().includes(currentSearch);
      const matchTopic = repo.topics.some(t => t.toLowerCase().includes(currentSearch));
      const matchLang = repo.language.toLowerCase().includes(currentSearch);
      if (!matchName && !matchDesc && !matchTopic && !matchLang) return false;
    }

    return true;
  });

  // Sort logic
  filtered.sort((a, b) => {
    if (currentSort === 'stars') {
      return b.stars - a.stars;
    } else if (currentSort === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      // updated
      return b.updatedAt - a.updatedAt;
    }
  });

  // Render Featured Grid (Only once or on first load)
  renderFeatured();

  // Render Repositories Grid
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

// Render Featured Projects Section
function renderFeatured() {
  const featuredRepos = processedRepos.filter(r => r.featured);
  featuredContainer.innerHTML = '';

  featuredRepos.forEach(repo => {
    const card = document.createElement('div');
    card.className = 'featured-card';
    
    const langDotClass = getLanguageDotClass(repo.language);
    const topicsHtml = repo.topics.slice(0, 4).map(t => `<span class="topic-tag">${escapeHtml(t)}</span>`).join('');

    card.innerHTML = `
      <div class="card-top">
        <div class="repo-header-row">
          <div class="repo-title-wrapper">
            <i class="fa-regular fa-folder-closed repo-icon"></i>
            <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="repo-name">${escapeHtml(repo.name)}</a>
          </div>
          <span class="badge badge-primary"><i class="fa-solid fa-star"></i> Featured</span>
        </div>
        <p class="repo-description">${escapeHtml(repo.description)}</p>
        <div class="topics-list">${topicsHtml}</div>
      </div>
      <div class="card-bottom">
        <div class="meta-stats">
          <span class="lang-indicator"><span class="lang-dot ${langDotClass}"></span> ${escapeHtml(repo.language)}</span>
          <span class="meta-item"><i class="fa-regular fa-star"></i> ${repo.stars}</span>
        </div>
        <div class="card-actions">
          <button class="icon-action-btn" title="Copy Clone Command" onclick="copyCloneCommand('${repo.name}', '${repo.cloneUrl || repo.htmlUrl + '.git'}')">
            <i class="fa-regular fa-copy"></i>
          </button>
          <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="icon-action-btn" title="View Code on GitHub">
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
  const card = document.createElement('div');
  card.className = 'repo-card';

  const langDotClass = getLanguageDotClass(repo.language);
  const forkBadge = repo.isFork ? `<span class="badge badge-fork"><i class="fa-solid fa-code-fork"></i> Fork</span>` : '';
  const topicsHtml = repo.topics.slice(0, 3).map(t => `<span class="topic-tag">${escapeHtml(t)}</span>`).join('');
  const formattedDate = repo.updatedAt ? repo.updatedAt.toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' }) : '';

  card.innerHTML = `
    <div class="card-top">
      <div class="repo-header-row">
        <div class="repo-title-wrapper">
          <i class="fa-regular fa-bookmark repo-icon"></i>
          <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="repo-name">${escapeHtml(repo.name)}</a>
        </div>
        <div class="repo-badges">
          ${forkBadge}
        </div>
      </div>
      <p class="repo-description">${escapeHtml(repo.description)}</p>
      ${topicsHtml ? `<div class="topics-list">${topicsHtml}</div>` : ''}
    </div>
    <div class="card-bottom">
      <div class="meta-stats">
        <span class="lang-indicator"><span class="lang-dot ${langDotClass}"></span> ${escapeHtml(repo.language)}</span>
        <span class="meta-item"><i class="fa-regular fa-star"></i> ${repo.stars}</span>
        ${formattedDate ? `<span class="meta-item" title="Last Updated"><i class="fa-regular fa-clock"></i> ${formattedDate}</span>` : ''}
      </div>
      <div class="card-actions">
        <button class="icon-action-btn" title="Copy git clone command" onclick="copyCloneCommand('${repo.name}', '${repo.cloneUrl || repo.htmlUrl + '.git'}')">
          <i class="fa-regular fa-copy"></i>
        </button>
        <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="icon-action-btn" title="View Code">
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

// Copy clone command to clipboard
window.copyCloneCommand = function(repoName, cloneUrl) {
  const command = `git clone ${cloneUrl}`;
  navigator.clipboard.writeText(command).then(() => {
    showToast(`Copied: "git clone ${repoName}"`);
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

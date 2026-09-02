/**
 * mrKangHo GitHub Repositories Showcase
 * Apple / Linear / Raycast Bespoke UI Loader & Filtering System
 */

const GITHUB_USERNAME = 'mrKangHo';
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`;

// Curated metadata enrichment for repos
const REPO_ENRICHMENTS = {
  'FloatingTube': {
    category: 'macOS App',
    description: 'macOS native floating YouTube player with in-app fullscreen, always-on-top, click-through mode and menu bar tray.',
    featured: true,
    topics: ['macOS', 'Swift', 'SwiftUI', 'YouTube', 'Pip'],
    icon: 'assets/icons/floatingtube.png'
  },
  'brew-manager': {
    category: 'macOS App',
    description: 'macOS GUI application for browsing, searching, installing, and updating Homebrew packages with ease.',
    featured: true,
    topics: ['macOS', 'Swift', 'Homebrew', 'GUI'],
    icon: 'assets/icons/brew-manager.png'
  },
  'youtubeDownloader': {
    category: 'macOS App',
    description: 'macOS GUI video & audio downloader powered by yt-dlp with custom resolution & audio format options.',
    featured: true,
    topics: ['macOS', 'Swift', 'yt-dlp', 'YouTube'],
    icon: 'assets/icons/youtubedownloader.png'
  },
  'homebrew-ytdownloader': {
    category: 'Homebrew Tap',
    description: 'Homebrew tap for YTDownloader - simplified formula installation for macOS GUI YTDownloader.',
    featured: true,
    topics: ['Homebrew', 'Tap', 'Ruby', 'yt-dlp'],
    icon: 'assets/icons/homebrew-ytdownloader.svg'
  },
  'TuistProjectMaker': {
    category: 'CLI Tool',
    description: 'Automated Tuist Swift project generator for scaffolding modular iOS and macOS app architectures.',
    featured: true,
    topics: ['Swift', 'Tuist', 'Xcode', 'Architecture'],
    icon: 'assets/icons/tuistprojectmaker.svg'
  },
  'clean-arch-checker': {
    category: 'Audit Tool',
    description: 'Architecture compliance checker script for auditing Clean Architecture boundaries & layer dependencies.',
    featured: true,
    topics: ['skills', 'JavaScript', 'Clean-Architecture', 'Linter'],
    icon: 'assets/icons/clean-arch-checker.svg'
  },
  'iTorrent': {
    category: 'iOS App',
    description: 'Feature-rich BitTorrent client written in Swift for iOS 16+ devices.',
    featured: false,
    topics: ['iOS', 'Swift', 'BitTorrent'],
    icon: 'assets/icons/itorrent.svg'
  },
  'LibTorrent-Swift': {
    category: 'Library',
    description: 'Swift wrapper and integration layer around the C++ libtorrent library.',
    featured: false,
    topics: ['Objective-C++', 'Swift', 'libtorrent'],
    icon: 'assets/icons/libtorrent-swift.svg'
  },
  'DesignSystemMake': {
    category: 'Library',
    description: 'Swift library and utility tool for creating and standardizing design system tokens and components.',
    featured: false,
    topics: ['Swift', 'Design-System', 'SwiftUI'],
    icon: 'assets/icons/designsystemmake.png'
  },
  'Grassie': {
    category: 'macOS Tool',
    description: 'Swift utility application and tool for system automation.',
    featured: false,
    topics: ['Swift', 'macOS'],
    icon: 'assets/icons/grassie.svg'
  },
  'mrKangHo': {
    category: 'Profile',
    description: 'GitHub profile README configuration and developer background showcase.',
    featured: false,
    topics: ['Profile', 'README'],
    icon: 'https://avatars.githubusercontent.com/u/9712872?v=4'
  },
  'mrKangHo.github.io': {
    category: 'Web App',
    description: 'Personal open source portfolio showcase website built with HTML5, CSS, and GitHub REST API.',
    featured: false,
    topics: ['GitHub-Pages', 'HTML5', 'CSS', 'JavaScript'],
    icon: 'assets/icons/portfolio.svg'
  }
};

// Application State
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

// Process raw GitHub API items and enrich metadata
function processAndSetData(repos) {
  try {
    if (!Array.isArray(repos) || repos.length === 0) {
      if (!isFallbackActive) useFallbackData();
      return;
    }

    rawReposData = repos;

    processedRepos = repos.map(repo => {
      const enrichment = REPO_ENRICHMENTS[repo.name] || {};
      
      return {
        id: repo.id || Math.random(),
        name: repo.name || 'unnamed',
        fullName: repo.full_name || repo.name || '',
        htmlUrl: repo.html_url || `https://github.com/${GITHUB_USERNAME}/${repo.name}`,
        category: enrichment.category || (repo.fork ? 'Fork' : 'Open Source'),
        description: repo.description || enrichment.description || 'No description provided.',
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

  if (langLabelEl) {
    langLabelEl.textContent = `Tech Stack (${sortedLangs.length})`;
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
      const matchName = repo.name.toLowerCase().includes(currentSearch);
      const matchDesc = repo.description.toLowerCase().includes(currentSearch);
      const matchTopic = repo.topics.some(t => t.toLowerCase().includes(currentSearch));
      const matchLang = repo.language.toLowerCase().includes(currentSearch);
      const matchCategory = repo.category.toLowerCase().includes(currentSearch);
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
  const featuredRepos = processedRepos.filter(r => r.featured);
  featuredContainer.innerHTML = '';

  featuredRepos.forEach(repo => {
    const card = document.createElement('div');
    card.className = 'featured-card';
    
    const langDotClass = getLanguageDotClass(repo.language);
    const topicsHtml = repo.topics.slice(0, 4).map(t => `<span class="topic-pill">${escapeHtml(t)}</span>`).join('');
    const iconSrc = getRepoIcon(repo);

    card.innerHTML = `
      <div>
        <div class="card-header-row">
          <div class="card-app-icon">
            <img src="${iconSrc}" alt="${escapeHtml(repo.name)} App Icon" loading="lazy" onerror="this.onerror=null; this.src='assets/icons/portfolio.svg';">
          </div>
          <div class="card-title-group">
            <div class="card-badge-row">
              <span class="category-tag">${escapeHtml(repo.category)}</span>
              ${repo.isFork ? '<span class="topic-pill">Fork</span>' : ''}
            </div>
            <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="card-title-link">${escapeHtml(repo.name)}</a>
          </div>
        </div>
        <p class="card-desc">${escapeHtml(repo.description)}</p>
        <div class="topics-row">${topicsHtml}</div>
      </div>
      <div class="card-meta-bar">
        <div class="card-stats">
          <span class="meta-lang"><span class="meta-dot ${langDotClass}"></span> ${escapeHtml(repo.language)}</span>
          <span><i class="fa-regular fa-star"></i> ${repo.stars}</span>
        </div>
        <div class="card-actions-group">
          <button class="action-icon-btn" title="Copy git clone" onclick="copyCloneCommand('${repo.name}', '${repo.cloneUrl || repo.htmlUrl + '.git'}')">
            <i class="fa-regular fa-copy"></i>
          </button>
          <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="action-icon-btn" title="View Repository">
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
  const topicsHtml = repo.topics.slice(0, 3).map(t => `<span class="topic-pill">${escapeHtml(t)}</span>`).join('');
  const formattedDate = repo.updatedAt ? repo.updatedAt.toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' }) : '';
  const iconSrc = getRepoIcon(repo);

  card.innerHTML = `
    <div>
      <div class="card-header-row">
        <div class="card-app-icon">
          <img src="${iconSrc}" alt="${escapeHtml(repo.name)} App Icon" loading="lazy" onerror="this.onerror=null; this.src='assets/icons/portfolio.svg';">
        </div>
        <div class="card-title-group">
          <div class="card-badge-row">
            <span class="category-tag">${escapeHtml(repo.category)}</span>
            ${repo.isFork ? '<span class="topic-pill">Fork</span>' : ''}
          </div>
          <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="card-title-link">${escapeHtml(repo.name)}</a>
        </div>
      </div>
      <p class="card-desc">${escapeHtml(repo.description)}</p>
      ${topicsHtml ? `<div class="topics-row">${topicsHtml}</div>` : ''}
    </div>
    <div class="card-meta-bar">
      <div class="card-stats">
        <span class="meta-lang"><span class="meta-dot ${langDotClass}"></span> ${escapeHtml(repo.language)}</span>
        <span><i class="fa-regular fa-star"></i> ${repo.stars}</span>
        ${formattedDate ? `<span title="Updated">${formattedDate}</span>` : ''}
      </div>
      <div class="card-actions-group">
        <button class="action-icon-btn" title="Copy git clone" onclick="copyCloneCommand('${repo.name}', '${repo.cloneUrl || repo.htmlUrl + '.git'}')">
          <i class="fa-regular fa-copy"></i>
        </button>
        <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="action-icon-btn" title="View Code">
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

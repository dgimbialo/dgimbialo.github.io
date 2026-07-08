// ── Utilities ───────────────────────────────────────────────────────────────
function esc(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

// Derive a short, human-friendly label for a bare URL found in Notes.
function shortLabelFromUrl(url) {
  const u = url.toLowerCase();
  if (u.includes('.pdf')) return 'PDF';
  if (u.includes('faq'))    return 'FAQ';
  if (u.includes('manual')) return 'Manual';
  if (u.includes('github')) return 'GitHub';
  if (u.includes('youtu'))  return 'Video';
  return 'Web Site';
}

// Render the Notes string as a list, converting any bare URL into a short link.
function formatNotes(notesText) {
  const raw = notesText.trim().replace(/^-\s*/, '');
  const items = raw.split(/\s+-\s+/).map(s => s.trim()).filter(Boolean);
  const urlRe = /(https?:\/\/[^\s<]+)/;
  const lis = items.map(item => {
    const m = item.match(urlRe);
    if (!m) return `<li>${esc(item)}</li>`;
    const url = m[1].replace(/[.,;]+$/, '');
    let label = item.slice(0, m.index).replace(/[:\-–—\s]+$/, '').trim();
    if (!label) label = shortLabelFromUrl(url);
    const after = item.slice(m.index + m[1].length).replace(/^[.,;\s]+/, '').trim();
    return `<li><a href="${esc(url)}" target="_blank" rel="noopener" class="notes-link">${esc(label)}</a>${after ? ' — ' + esc(after) : ''}</li>`;
  });
  return `<ul class="notes-list">${lis.join('')}</ul>`;
}

function categoryColor(group) {
  const map = {
    embedded: 'var(--c-embedded)',
    desktop:  'var(--c-desktop)',
    audio:    'var(--c-audio)',
    web:      'var(--c-web)',
    tools:    'var(--c-tools)',
  };
  return map[group] || '#666';
}

// ── NAV ─────────────────────────────────────────────────────────────────────
function renderNav(activePage) {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-brand">
        <span class="nav-brand-initials">TP</span>
        <span>${esc(PROFILE.name)}</span>
      </a>
      <div class="nav-links">
        <a href="index.html#projects">Projects</a>
        <a href="${esc(PROFILE.github)}" target="_blank" rel="noopener">GitHub</a>
        <a href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener" class="btn-primary">LinkedIn</a>
      </div>
    </div>`;
}

// ── INDEX PAGE ───────────────────────────────────────────────────────────────
function initIndex() {
  renderHero();
  renderAbout();
  renderSkills();
  // Tags (and other md-defined fields) are sourced from each project.md so the
  // markdown is the single source of truth across the whole site. Render the
  // project views once overrides are applied; fall back to data.js on failure.
  Promise.all(PROJECTS.map(applyMarkdownOverrides)).finally(renderProjectsSection);
}

function renderAbout() {
  const el = document.getElementById('about-content');
  if (!el) return;
  const paras = (Array.isArray(PROFILE.about) && PROFILE.about.length)
    ? PROFILE.about
    : [PROFILE.summary];
  el.innerHTML = paras
    .map((t, i) => `<p${i === 0 ? ' class="about-lead"' : ''}>${esc(t)}</p>`)
    .join('');
}

function renderHero() {
  const el = document.getElementById('hero');
  if (!el) return;
  const p = PROFILE;
  el.innerHTML = `
    <div class="hero-inner">
      <div class="hero-avatar">
        <img src="assets/images/avatar.jpg" alt="${esc(p.name)}" width="120" height="120">
      </div>
      <div class="hero-info">
        <div class="hero-eyebrow">Portfolio</div>
        <h1 class="hero-name">${esc(p.name)}</h1>
        <div class="hero-title">${esc(p.title)}</div>
        <div class="hero-location">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          ${esc(p.location)}
        </div>
        <div class="hero-links">
          <a href="${esc(p.github)}" target="_blank" rel="noopener" class="hero-link filled">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="${esc(p.linkedin)}" target="_blank" rel="noopener" class="hero-link">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          ${p.email ? `<a href="mailto:${esc(p.email)}" class="hero-link">✉ ${esc(p.email)}</a>` : ''}
        </div>
      </div>
    </div>`;
}

function renderSkills() {
  const el = document.getElementById('skills-grid');
  if (!el) return;
  el.innerHTML = PROFILE.skills.map(s => `
    <div class="skill-card">
      <h3>${esc(s.category)}</h3>
      <div class="skill-pills">
        ${s.items.map(i => `<span class="skill-pill">${esc(i)}</span>`).join('')}
      </div>
    </div>`).join('');
}

function renderProjectsSection() {
  const countEl = document.querySelector('.projects-head .count');
  if (countEl) countEl.textContent = PROJECTS.length;
  renderMarquee();
  renderProjectCards('all');
  initViewToggle();
}

// Build the auto-scrolling 3-row flow view (default).
function renderMarquee() {
  const el = document.getElementById('projects-marquee');
  if (!el) return;
  const ROWS = 3;
  const per = Math.ceil(PROJECTS.length / ROWS);
  // Duplicate each row's cards so the translateX(-50%) loop is seamless.
  const track = list => `<div class="mq-track">${list.map(marqueeCard).join('')}${list.map(marqueeCard).join('')}</div>`;
  let html = '';
  for (let i = 0; i < ROWS; i++) {
    const slice = PROJECTS.slice(i * per, (i + 1) * per);
    if (!slice.length) continue;
    // Alternate scroll direction per row.
    const dir = i % 2 === 0 ? 'mq-row--left' : 'mq-row--right';
    html += `<div class="mq-row ${dir}">${track(slice)}</div>`;
  }
  el.innerHTML = html;
}

function marqueeCard(p) {
  const color = categoryColor(p.filterGroup);
  const tags = p.tags.slice(0, 3).map(t => `<span class="tag">${esc(t)}</span>`).join('');
  return `
    <a href="project.html?id=${esc(p.id)}" class="mq-card" style="--accent:${color}">
      <div class="mq-card-top">
        <span class="mq-num">#${esc(p.number)}</span>
        <span class="mq-cat">${esc(p.category)}</span>
      </div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.subtitle)}</p>
      <div class="mq-tags">${tags}</div>
    </a>`;
}

// Toggle between the flow (marquee) view and the full grid view.
function initViewToggle() {
  const btn      = document.getElementById('view-toggle');
  const marquee  = document.getElementById('projects-marquee');
  const filters  = document.getElementById('project-filters');
  const grid     = document.getElementById('projects-grid');
  if (!btn || !marquee || !filters || !grid) return;

  let gridMode = false;
  const setGridMode = on => {
    gridMode = on;
    marquee.classList.toggle('hidden', gridMode);
    grid.classList.toggle('hidden', !gridMode);
    btn.classList.toggle('is-grid', gridMode);
    // Label stays "All projects" in both states, per request.
  };
  btn.addEventListener('click', () => {
    const goingGrid = !gridMode;
    setGridMode(goingGrid);
    if (goingGrid) {
      document.querySelectorAll('.cat-quick').forEach(c => c.classList.remove('active'));
      renderProjectCards('all');
    }
  });

  // Colored category shortcuts: jump straight to the grid filtered by group.
  const quicks = document.querySelectorAll('.cat-quick');
  quicks.forEach(q => {
    q.addEventListener('click', () => {
      setGridMode(true);
      quicks.forEach(c => c.classList.toggle('active', c === q));
      renderProjectCards(q.dataset.filter);
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function renderFilters() {
  const el = document.getElementById('project-filters');
  if (!el) return;
  const groups = [
    { id: 'all',      label: `All (${PROJECTS.length})` },
    { id: 'embedded', label: 'Embedded' },
    { id: 'desktop',  label: 'Desktop C++' },
    { id: 'audio',    label: 'Audio / DSP' },
    { id: 'web',      label: 'Web & Python' },
    { id: 'tools',    label: 'Tools' },
  ];
  el.innerHTML = groups.map(g =>
    `<button class="filter-btn${g.id === 'all' ? ' active' : ''}"
             data-filter="${g.id}">${g.label}</button>`
  ).join('');

  el.addEventListener('click', e => {
    if (!e.target.matches('.filter-btn')) return;
    el.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderProjectCards(e.target.dataset.filter);
  });
}

// Technology quick-filters: match by project tags rather than filterGroup.
const TAG_FILTERS = {
  qt:  t => /^qt/i.test(t),
  qml: t => t.trim().toLowerCase() === 'qml',
  mfc: t => /mfc|win ?32|winapi/i.test(t),
};

function renderProjectCards(group) {
  const el = document.getElementById('projects-grid');
  if (!el) return;
  let list;
  if (group === 'all') {
    list = PROJECTS;
  } else if (group.startsWith('tag:')) {
    const match = TAG_FILTERS[group.slice(4)];
    list = match ? PROJECTS.filter(p => (p.tags || []).some(match)) : [];
  } else {
    list = PROJECTS.filter(p => p.filterGroup === group);
  }
  if (list.length === 0) {
    el.innerHTML = '<p style="color:var(--muted);padding:20px">No projects in this category.</p>';
    return;
  }
  el.innerHTML = list.map(p => {
    const color = categoryColor(p.filterGroup);
    const tags = p.tags.slice(0, 4).map(t => `<span class="tag">${esc(t)}</span>`).join('');
    return `
    <div class="project-card">
      <div class="project-card-stripe" style="background:${color}"></div>
      <div class="project-card-body">
        <div class="project-card-header">
          <span class="project-number">#${esc(p.number)}</span>
          <span class="project-category-badge" style="background:${color}">${esc(p.category)}</span>
        </div>
        <h3>${esc(p.title)}</h3>
        <p class="subtitle">${esc(p.subtitle)}</p>
        <div class="project-tags">${tags}</div>
      </div>
      <div class="project-card-footer">
        <a href="project.html?id=${esc(p.id)}" class="btn-view">View project →</a>
      </div>
    </div>`;
  }).join('');
}

// ── PROJECT DETAIL PAGE ──────────────────────────────────────────────────────
function initProject() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = PROJECTS.find(p => p.id === id);
  if (!project) {
    document.getElementById('project-content').innerHTML = `
      <div class="not-found">
        <h1>Project not found</h1>
        <p>No project with id "${esc(id||'')}".</p>
        <a href="index.html" class="btn-view">← Back to portfolio</a>
      </div>`;
    return;
  }
  document.title = project.title + ' — Taras Pavlyk Portfolio';
  // Content is sourced locally from each project's project.md (single source of
  // truth). Fall back to the values in data.js if the file can't be read.
  applyMarkdownOverrides(project).then(() => renderProjectDetail(project));
}

// Fetch a project's project.md and override fields that are defined there.
function applyMarkdownOverrides(project) {
  if (!project.slug) return Promise.resolve();
  const url = `projects/${project.slug}/project.md`;
  // Bypass the HTTP cache so edits to project.md show up immediately instead of
  // serving a stale copy from the browser/CDN.
  return fetch(url, { cache: 'no-cache' })
    .then(r => r.ok ? r.text() : '')
    .then(text => {
      if (!text) return;
      const md = parseProjectMarkdown(text);
      if (md.tags && md.tags.length)                 project.tags = md.tags;
      if (md.contribution && md.contribution.length) project.contribution = md.contribution;
      if (md.ctaLabel)                               project.ctaLabel = md.ctaLabel;
    })
    .catch(() => {});
}

// Extract structured fields from a project.md file.
function parseProjectMarkdown(text) {
  const out = {};
  const tagsM = text.match(/^\s*\*\*Tags:\*\*\s*(.+)$/m);
  if (tagsM) out.tags = tagsM[1].split(',').map(t => t.trim()).filter(Boolean);
  const btnM = text.match(/^\s*\*\*Button:\*\*\s*(.+)$/m);
  if (btnM) out.ctaLabel = btnM[1].trim();
  out.contribution = extractMdListSection(text, 'What I Did');
  return out;
}

// Collect bullet items under a `## <heading>` section of a markdown document.
function extractMdListSection(text, heading) {
  const items = [];
  let inSection = false;
  for (const line of text.split(/\r?\n/)) {
    const h = line.match(/^##\s+(.*)$/);
    if (h) { inSection = h[1].trim().toLowerCase() === heading.toLowerCase(); continue; }
    if (inSection) {
      const m = line.match(/^[-*]\s+(.+)$/);
      if (m) items.push(m[1].trim());
    }
  }
  return items;
}

function isYouTubeUrl(value) {
  try {
    const url = new URL(value, window.location.origin);
    return /^(www\.)?(youtube\.com|youtu\.be)$/i.test(url.hostname) || url.hostname.endsWith('youtube.com') || url.hostname === 'youtu.be';
  } catch {
    return false;
  }
}

function getYouTubeEmbedUrl(value) {
  try {
    const url = new URL(value, window.location.origin);
    let videoId = '';

    if (url.hostname === 'youtu.be') {
      videoId = url.pathname.replace('/', '');
    } else if (url.hostname.includes('youtube.com')) {
      const pathParts = url.pathname.split('/');
      if (pathParts[1] === 'embed' && pathParts[2]) {
        videoId = pathParts[2];
      } else {
        videoId = url.searchParams.get('v') || '';
      }
    }

    if (!videoId) return '';

    const origin = encodeURIComponent(window.location.origin || 'http://localhost');
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&fs=1&controls=1&enablejsapi=1&origin=${origin}`;
  } catch {
    return '';
  }
}

function initFotoGallery(root) {
  if (!root) return;
  const photos = (root.dataset.photos || '').split('|').filter(Boolean);
  if (photos.length === 0) return;

  const mainImage = root.querySelector('.foto-main');
  const counter = root.querySelector('.foto-counter');
  const thumbs = root.querySelectorAll('.foto-thumb');
  const lightbox = root.querySelector('.foto-lightbox');
  const lightboxImage = root.querySelector('.foto-lightbox-image');
  const lightboxCounter = root.querySelector('.foto-lightbox-counter');
  const detailCard = root.closest('.detail-card');
  let current = 0;

  function update(index) {
    current = (index + photos.length) % photos.length;
    if (mainImage) mainImage.src = photos[current];
    const label = `${current + 1} / ${photos.length}`;
    if (counter) counter.textContent = label;
    if (lightboxCounter) lightboxCounter.textContent = label;
    if (lightboxImage) lightboxImage.src = photos[current];
    thumbs.forEach((thumb, i) => thumb.classList.toggle('active', i === current));
  }

  root.querySelector('.foto-prev')?.addEventListener('click', () => update(current - 1));
  root.querySelector('.foto-next')?.addEventListener('click', () => update(current + 1));
  root.querySelector('.foto-lightbox-prev')?.addEventListener('click', () => update(current - 1));
  root.querySelector('.foto-lightbox-next')?.addEventListener('click', () => update(current + 1));
  function openLightbox() {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = photos[current];
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  const fullscreenBtn = detailCard?.querySelector('.foto-fullscreen') || root.querySelector('.foto-fullscreen');
  fullscreenBtn?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    openLightbox();
  });
  root.querySelector('.foto-lightbox-close')?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeLightbox();
  });
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (lightbox && lightbox.classList.contains('is-open')) {
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowRight') {
        update(current + 1);
        lightboxImage.src = photos[current];
      } else if (event.key === 'ArrowLeft') {
        update(current - 1);
        lightboxImage.src = photos[current];
      }
    }
  });

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => update(index));
  });

  update(0);
}

function renderProjectDetail(p) {
  const el = document.getElementById('project-content');
  if (!el) return;
  const color = categoryColor(p.filterGroup);
  const tags  = p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('');
  const feats = p.features.map((f, i) => `
    <div class="feature-item">
      <div class="feature-bullet">${i+1}</div>
      <span>${esc(f)}</span>
    </div>`).join('');
  const stackRows = p.stack.map(r =>
    `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join('');
  const pairedHtml = (() => {
    if (!p.paired) return '';
    const m = p.paired.match(/#(\d+)/);
    const pairedProject = m ? PROJECTS.find(x => parseInt(x.number) === parseInt(m[1])) : null;
    const inner = pairedProject
      ? `<a href="project.html?id=${esc(pairedProject.id)}">${esc(p.paired)}</a>`
      : esc(p.paired);
    return `<div class="paired-notice"><strong>Paired System:</strong> ${inner}</div>`;
  })();
  const ctaLabel = (typeof p.ctaLabel === 'string' && p.ctaLabel.trim()) ? p.ctaLabel.trim() : 'Go to App Website';
  const websiteBtn = p.path && (p.path.startsWith('http://') || p.path.startsWith('https://')) ? `
    <a href="${esc(p.path)}" target="_blank" rel="noopener" class="project-link-btn project-link-btn--site project-cta-site">
      ${esc(ctaLabel)} →
    </a>` : '';
  const githubBtn = p.github ? `
    <a href="${esc(p.github)}" target="_blank" rel="noopener" class="project-link-btn project-link-btn--github">
      GitHub →
    </a>` : '';
  const githubHtml = githubBtn ? `
    <div class="project-links">${githubBtn}</div>` : '';

  const hasFoto  = p.media && p.media.foto  && p.media.foto.length  > 0;
  const hasVideo = p.media && p.media.video && p.media.video.length > 0;
  const notesText = typeof p.notes === 'string' ? p.notes.trim() : '';
  const notesHtml = notesText ? `
    <div class="detail-card">
      <h2>Notes</h2>
      ${formatNotes(notesText)}
    </div>` : '';

  const contribItems = Array.isArray(p.contribution) ? p.contribution.filter(Boolean) : [];
  const contribList = contribItems.map((c, i) => `
    <div class="feature-item">
      <div class="feature-bullet">${i+1}</div>
      <span>${esc(c)}</span>
    </div>`).join('');
  const contributionHtml = contribItems.length ? `
    <div class="detail-card">
      <h2>What I Did</h2>
      <div class="features-list">${contribList}</div>
    </div>` : '';
  const videoHtml = (p.media.video || []).map(src => {
    const embedUrl = isYouTubeUrl(src) ? getYouTubeEmbedUrl(src) : '';
    if (embedUrl) {
      return `<div class="media-item"><iframe src="${esc(embedUrl)}" title="Project video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="eager" referrerpolicy="origin"></iframe></div>`;
    }
    return `<div class="media-item"><video src="${esc(src)}" controls></video></div>`;
  }).join('');

  const fotoHtml = hasFoto ? `
    <div class="foto-gallery" data-photos="${esc((p.media.foto || []).join('|'))}" data-foto-gallery>
      <div class="foto-stage-card">
        <img class="foto-main" src="${esc((p.media.foto || [])[0])}" alt="Project photo" loading="lazy">
        <div class="foto-toolbar">
          <div class="foto-nav-group">
            <button type="button" class="foto-nav-btn foto-prev">← Prev</button>
            <span class="foto-counter">1 / ${esc(String((p.media.foto || []).length))}</span>
            <button type="button" class="foto-nav-btn foto-next">Next →</button>
          </div>
        </div>
      </div>
      <div class="foto-thumbs">
        ${(p.media.foto || []).map((src, index) => `
          <button type="button" class="foto-thumb${index === 0 ? ' active' : ''}" data-index="${index}">
            <img src="${esc(src)}" alt="Project photo ${index + 1}" loading="lazy">
          </button>`).join('')}
      </div>
      <div class="foto-lightbox">
        <button type="button" class="foto-lightbox-close" aria-label="Close fullscreen">×</button>
        <button type="button" class="foto-lightbox-prev" aria-label="Previous photo">←</button>
        <button type="button" class="foto-lightbox-next" aria-label="Next photo">→</button>
        <div class="foto-lightbox-frame">
          <img class="foto-lightbox-image" src="${esc((p.media.foto || [])[0])}" alt="Fullscreen project photo">
          <span class="foto-lightbox-counter">1 / ${esc(String((p.media.foto || []).length))}</span>
        </div>
      </div>
    </div>` : '';

  el.innerHTML = `
    <div class="page-back">
      <a href="index.html#projects">← Back to all projects</a>
    </div>

    <div class="project-hero">
      <div class="container">
        <div class="project-meta-row">
          <span class="project-number">#${esc(p.number)}</span>
          <span class="project-category-badge" style="background:${color}">${esc(p.category)}</span>
        </div>
        <h1>${esc(p.title)}</h1>
        <div class="subtitle">${esc(p.subtitle)}</div>
        <div class="project-tags" style="margin-top:12px">${tags}</div>
      </div>
    </div>

    <div class="container section">
      <div class="project-detail-grid">
        <div class="detail-left">
          <div class="detail-card">
            <h2>Purpose</h2>
            <p>${esc(p.description)}</p>
          </div>
          ${contributionHtml}
          <div class="detail-card">
            <h2>Key Features</h2>
            <div class="features-list">${feats}</div>
          </div>
          ${hasVideo ? `
            <div class="detail-card">
              <h2>Video</h2>
              <div class="video-gallery">${videoHtml}</div>
            </div>` : ''}
          ${hasFoto ? `
            <div class="detail-card">
              <div class="detail-card-head">
                <h2>Foto</h2>
                <button type="button" class="foto-fullscreen">Open fullscreen</button>
              </div>
              ${fotoHtml}
            </div>` : ''}
        </div>
        <div class="detail-right">
          ${websiteBtn}
          <div class="detail-card">
            <h2>Tech Stack</h2>
            <table class="stack-table">
              <tbody>${stackRows}</tbody>
            </table>
          </div>
          <div class="detail-card">
            <h2>Platform</h2>
            <div style="font-size:.95rem;color:var(--text)">
              ${esc(p.platform)}
            </div>
          </div>
          ${notesHtml}
          ${githubHtml}
          ${pairedHtml}
        </div>
      </div>
    </div>`;

  const gallery = document.querySelector('[data-foto-gallery]');
  if (gallery) initFotoGallery(gallery);
}

// ── FOOTER ───────────────────────────────────────────────────────────────────
function renderFooter() {
  const el = document.getElementById('main-footer');
  if (!el) return;
  const year = new Date().getFullYear();
  el.innerHTML = `
    <div class="footer-links">
      <a href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
      <a href="${esc(PROFILE.github)}" target="_blank" rel="noopener">GitHub</a>
      ${PROFILE.email ? `<a href="mailto:${esc(PROFILE.email)}">${esc(PROFILE.email)}</a>` : ''}
    </div>
    <div><small>&copy; ${year} ${esc(PROFILE.name)} — Portfolio</small></div>`;
}

// ── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  const page = document.body.dataset.page;
  if (page === 'index')   initIndex();
  if (page === 'project') initProject();
});

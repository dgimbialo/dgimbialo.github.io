// ── Utilities ───────────────────────────────────────────────────────────────
function esc(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
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
  renderSkills();
  renderProjectsSection();
}

function renderHero() {
  const el = document.getElementById('hero');
  if (!el) return;
  const p = PROFILE;
  el.innerHTML = `
    <div class="hero-inner">
      <div class="hero-avatar">
        <img src="assets/images/avatar.svg" alt="${esc(p.name)}" width="120" height="120">
      </div>
      <div class="hero-info">
        <h1 class="hero-name">${esc(p.name)}</h1>
        <div class="hero-title">${esc(p.title)}</div>
        <div class="hero-location">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          ${esc(p.location)}
        </div>
        <div class="hero-links">
          <a href="${esc(p.linkedin)}" target="_blank" rel="noopener" class="hero-link filled">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="${esc(p.github)}" target="_blank" rel="noopener" class="hero-link">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
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
  renderFilters();
  renderProjectCards('all');
}

function renderFilters() {
  const el = document.getElementById('project-filters');
  if (!el) return;
  const groups = [
    { id: 'all',      label: 'All (22)' },
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

function renderProjectCards(group) {
  const el = document.getElementById('projects-grid');
  if (!el) return;
  const list = group === 'all' ? PROJECTS : PROJECTS.filter(p => p.filterGroup === group);
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
  renderProjectDetail(project);
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
  const pairedHtml = p.paired ? `
    <div class="paired-notice">
      <strong>Парна система:</strong> ${esc(p.paired)}
    </div>` : '';
  const githubHtml = p.github ? `
    <a href="${esc(p.github)}" target="_blank" rel="noopener" class="hero-link" style="margin-top:8px">
      GitHub →
    </a>` : '';

  // media
  let mediaHtml = '';
  const hasFoto  = p.media && p.media.foto  && p.media.foto.length  > 0;
  const hasVideo = p.media && p.media.video && p.media.video.length > 0;
  if (!hasFoto && !hasVideo) {
    mediaHtml = `
      <div class="media-placeholder">
        <p>📷 Додайте фото у <code>projects/${esc(p.slug)}/foto/</code></p>
        <p style="margin-top:8px">🎥 Додайте відео у <code>projects/${esc(p.slug)}/video/</code></p>
        <p style="margin-top:12px;font-size:.8rem">Потім вкажіть шляхи у полі <code>media</code> в <strong>assets/js/data.js</strong></p>
      </div>`;
  } else {
    const fotoItems = (p.media.foto || []).map(src =>
      `<div class="media-item"><img src="${esc(src)}" alt="photo" loading="lazy"></div>`).join('');
    const videoItems = (p.media.video || []).map(src =>
      `<div class="media-item"><video src="${esc(src)}" controls></video></div>`).join('');
    mediaHtml = `<div class="media-gallery">${fotoItems}${videoItems}</div>`;
  }

  el.innerHTML = `
    <div class="page-back">
      <a href="index.html#projects">← Back to all projects</a>
    </div>

    <div class="project-hero">
      <div class="container">
        <div class="project-meta-row">
          <span class="project-category-badge" style="background:${color}">${esc(p.category)}</span>
          <span class="project-number">#${esc(p.number)}</span>
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
            <h2>Призначення</h2>
            <p>${esc(p.description)}</p>
          </div>
          <div class="detail-card">
            <h2>Ключові функції</h2>
            <div class="features-list">${feats}</div>
          </div>
          <div class="detail-card">
            <h2>📷 Медіа</h2>
            ${mediaHtml}
          </div>
        </div>
        <div class="detail-right">
          <div class="detail-card">
            <h2>Технологічний стек</h2>
            <table class="stack-table">
              <tbody>${stackRows}</tbody>
            </table>
          </div>
          <div class="detail-card">
            <h2>Шлях до проекту</h2>
            <div class="path-box">
              ${p.path && (p.path.startsWith('http://') || p.path.startsWith('https://'))
                ? `<a href="${esc(p.path)}" target="_blank" rel="noopener" style="color:var(--primary);text-decoration:none;font-weight:500">${esc(p.path)} ↗</a>`
                : `<code>${esc(p.path)}</code>`}
            </div>
            <div style="margin-top:8px;font-size:.82rem;color:var(--muted)">
              Платформа: ${esc(p.platform)}
            </div>
          </div>
          ${pairedHtml}
          ${githubHtml}
        </div>
      </div>
    </div>`;
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

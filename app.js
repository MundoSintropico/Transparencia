
// ── DATA ──────────────────────────────────────────────
let curInv = 0, curLayer = 0;
let countersObs = null;

// ── NAVIGATION ───────────────────────────────────────
function showHome() {
  ['screen-list','screen-reader'].forEach(hide);
  show('screen-home');
  scrollTo(0,0);
}
function showList() {
  ['screen-home','screen-reader'].forEach(hide);
  show('screen-list');
  renderList();
  scrollTo(0,0);
}
function showReader(i) {
  curInv = i; curLayer = 0;
  ['screen-home','screen-list'].forEach(hide);
  show('screen-reader');
  renderReader();
  scrollTo(0,0);
}
function show(id){document.getElementById(id).classList.remove('hidden');}
function hide(id){document.getElementById(id).classList.add('hidden');}

// ── LIST ─────────────────────────────────────────────
function renderList() {
  document.getElementById('inv-list').innerHTML = investigations.map((inv,i) => `
    <div class="inv-card" data-open-reader="${i}">
      <div class="inv-num">#0${i+1}</div>
      <div class="inv-content">
        <span class="inv-badge ${inv.badgeClass}">${inv.badge}</span>
        <div class="inv-title">${inv.title}</div>
        <div class="inv-subtitle">${inv.subtitle}</div>
        <div class="inv-meta">
          <span>${inv.date}</span><span>${inv.capas} capas</span>
          <span>${inv.mins} min</span><span>${inv.views} lecturas</span>
        </div>
      </div>
      <div class="inv-arrow">›</div>
    </div>`).join('');
}

// ── READER ───────────────────────────────────────────
function renderReader() {
  const inv = investigations[curInv];
  const b = document.getElementById('reader-badge');
  b.className = `reader-badge ${inv.badgeClass}`;
  b.textContent = inv.badge;
  document.getElementById('reader-h1').textContent = inv.title.replace(/"/g,'');
  document.getElementById('reader-subtitle').textContent = inv.subtitle;
  document.getElementById('reader-meta').innerHTML =
    `<span>${inv.date}</span><span>${inv.capas} capas</span><span>${inv.mins} min lectura</span>`;

  // Layer nav
  document.getElementById('layers-nav').innerHTML = inv.layers.map((l,i) => `
    <div class="layer-seg${i===0?' active':''}" id="seg-${i}" data-go-layer="${i}">
      <span class="layer-seg-label">${l.label}</span>
      ${l.title.substring(0,24)}${l.title.length>24?'…':''}
    </div>`).join('');

  // Track
  document.getElementById('layers-track').innerHTML = inv.layers.map((l,i) => `
    <div class="layer-panel" id="lp-${i}">
      <span class="layer-label ${l.labelClass}">${l.label}</span>
      <h2 class="layer-title ${l.titleClass}">${l.title}</h2>
      ${l.html}
      ${i < inv.layers.length-1
        ? `<button class="next-btn" data-go-layer="${i+1}">Descubrir la siguiente capa →</button>`
        : `<button class="next-btn green" data-show-final="1">Ver referencias y apoyar →</button>`}
    </div>`).join('');

  document.getElementById('layers-track').style.transform = 'translateX(0)';
  document.getElementById('final-section').style.display = 'none';
  // Set each panel width = viewport width
  requestAnimationFrame(() => {
    const vp = document.querySelector('.layers-viewport');
    const pw = vp ? vp.offsetWidth : 700;
    document.querySelectorAll('.layer-panel').forEach(p => { p.style.width = pw + 'px'; p.style.minWidth = pw + 'px'; });
  });
  document.getElementById('qr-img').src = QR_SRC;
  renderRefs();
  initCounters();
  window.addEventListener('scroll', updateProgress, {passive:true});
}

function goLayer(i) {
  curLayer = i;
  const vp = document.querySelector('.layers-viewport');
  const pw = vp ? vp.offsetWidth : 700;
  const track = document.getElementById('layers-track');
  track.style.transform = `translateX(-${i * pw}px)`;
  document.querySelectorAll('.layer-seg').forEach((el,j) =>
    el.classList.toggle('active', j===i));
  document.getElementById('final-section').style.display = 'none';
  // Scroll to the top of the layers navigation tabs
  const layersNav = document.getElementById('layers-nav');
  if (layersNav) {
    const top = layersNav.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({top: Math.max(0, top), behavior: 'smooth'});
  }
}

function showFinal() {
  const fs = document.getElementById('final-section');
  fs.style.display = 'block';
  setTimeout(() => fs.scrollIntoView({behavior:'smooth',block:'start'}), 80);
}



function renderRefs() {
  const c = document.getElementById('refs-container');
  const map = [REFS_INV0, REFS_INV1, REFS_INV2, REFS_INV3, REFS_INV4];
  c.innerHTML = map[curInv] || '';
  const content = document.getElementById(`refs-content-${curInv}`);
  if (content) content.style.display = 'none';
  const arrow = document.getElementById(`refs-arrow-${curInv}`);
  if (arrow) arrow.textContent = '▼';
}

// ── COUNTERS ─────────────────────────────────────────
function initCounters() {
  if (countersObs) countersObs.disconnect();
  countersObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.animated) {
        e.target.dataset.animated = '1';
        animateCounter(e.target);
        countersObs.unobserve(e.target);
      }
    });
  }, {threshold:0.3});
  setTimeout(() => {
    document.querySelectorAll('.stat-n[data-target]').forEach(el => {
      delete el.dataset.animated;
      countersObs.observe(el);
    });
  }, 100);
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const DUR = 20000;
  const t0 = performance.now();
  function tick(now) {
    const p = Math.min((now - t0) / DUR, 1);
    const e = 1 - Math.pow(1 - p, 3);
    const v = target * e;
    const disp = target >= 1000 ? Math.floor(v).toLocaleString('es-ES')
               : target % 1 !== 0 ? v.toFixed(1)
               : Math.floor(v);
    el.textContent = disp + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = (Number.isInteger(target) ? target.toLocaleString('es-ES') : target) + suffix;
  }
  requestAnimationFrame(tick);
}

// ── REFS TOGGLE ───────────────────────────────────────
function toggleRefs(id) {
  const c = document.getElementById(`refs-content-${id}`);
  const a = document.getElementById(`refs-arrow-${id}`);
  if (!c) return;
  const open = c.style.display !== 'none';
  c.style.display = open ? 'none' : 'block';
  if (a) a.textContent = open ? '▼' : '▲';
}

// ── SHARE ─────────────────────────────────────────────
function shareX() {
  const inv = investigations[curInv];
  const u = encodeURIComponent(location.href);
  const t = encodeURIComponent(`"${inv.title}" — Lo Que No Ves. Investigación sin filtros.`);
  window.open(`https://twitter.com/intent/tweet?text=${t}&url=${u}`, '_blank');
}
function shareTG() {
  window.open(`https://t.me/share/url?url=${encodeURIComponent(location.href)}`, '_blank');
}
function copyLink() {
  navigator.clipboard.writeText(location.href).then(() => {
    const b = document.getElementById('copy-btn');
    const orig = b.textContent;
    b.textContent = '✓ Copiado'; b.classList.add('ok');
    setTimeout(() => { b.textContent = orig; b.classList.remove('ok'); }, 2000);
  });
}


// ── PROGRESS ─────────────────────────────────────────
function updateProgress() {
  const p = (scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100;
  document.getElementById('read-progress').style.width = Math.min(p, 100) + '%';
}

// ── NODES BACKGROUND ─────────────────────────────────
(function initNodes(){
  const c = document.getElementById('nodes-canvas');
  if (!c) return;
  function resize(){ c.width=innerWidth; c.height=innerHeight; }
  resize(); window.addEventListener('resize', resize);
  const ctx = c.getContext('2d');
  const N = 55;
  const nodes = Array.from({length:N}, () => ({
    x: Math.random()*innerWidth, y: Math.random()*innerHeight,
    vx: (Math.random()-.5)*.35, vy: (Math.random()-.5)*.35,
    r: 1.5 + Math.random()*2.5
  }));
  const CONN = 120;
  function frame(){
    c.width = innerWidth; // clear
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0||n.x > innerWidth) n.vx *= -1;
      if (n.y < 0||n.y > innerHeight) n.vy *= -1;
    });
    // edges
    for (let i=0;i<N;i++) for (let j=i+1;j<N;j++){
      const dx=nodes[i].x-nodes[j].x, dy=nodes[i].y-nodes[j].y;
      const d=Math.sqrt(dx*dx+dy*dy);
      if (d<CONN){
        const a=(1-d/CONN)*.3;
        ctx.beginPath(); ctx.moveTo(nodes[i].x,nodes[i].y);
        ctx.lineTo(nodes[j].x,nodes[j].y);
        ctx.strokeStyle=`rgba(57,255,20,${a*0.12})`; ctx.lineWidth=.6; ctx.stroke();
      }
    }
    // dots
    nodes.forEach(n=>{
      ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fillStyle='rgba(57,255,20,0.10)';
      ctx.shadowColor='#39ff14'; ctx.shadowBlur=0;
      ctx.fill(); ctx.shadowBlur=0;
    });
    requestAnimationFrame(frame);
  }
  frame();
})();



// ── DROPDOWN ─────────────────────────────────────────
function openDD() {
  document.getElementById('inv-dropdown').classList.add('open');
}

function bindStaticUiEvents() {
  document.getElementById('home-open-list-btn')?.addEventListener('click', showList);
  document.getElementById('home-open-dd-btn')?.addEventListener('click', openDD);
  document.getElementById('home-open-dd-btn')?.addEventListener('mouseenter', openDD);
  document.querySelectorAll('.nav-go-home').forEach(el => el.addEventListener('click', showHome));
  document.getElementById('nav-home-btn')?.addEventListener('click', showHome);
  document.getElementById('nav-list-btn')?.addEventListener('click', showList);
  document.getElementById('share-x-btn')?.addEventListener('click', shareX);
  document.getElementById('share-tg-btn')?.addEventListener('click', shareTG);
  document.getElementById('copy-btn')?.addEventListener('click', copyLink);
}

document.addEventListener('click', e => {
  const readerTarget = e.target.closest('[data-open-reader]');
  if (readerTarget) {
    showReader(Number(readerTarget.dataset.openReader));
    return;
  }
  const layerTarget = e.target.closest('[data-go-layer]');
  if (layerTarget) {
    goLayer(Number(layerTarget.dataset.goLayer));
    return;
  }
  if (e.target.closest('[data-show-final]')) {
    showFinal();
    return;
  }
});

document.addEventListener('click', e => {
  const w = document.getElementById('inv-dd-wrap');
  if (w && !w.contains(e.target)) {
    document.getElementById('inv-dropdown').classList.remove('open');
  }
});

bindStaticUiEvents();
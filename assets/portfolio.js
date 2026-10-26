/* ==========================================================================
   Ari Ummanath · Portfolio menu (shared by every project)
   --------------------------------------------------------------------------
   THIS IS THE ONE FILE TO EDIT FOR:
     - your About text, published work and LinkedIn link   (see ABOUT below)
     - the list of projects shown on every project          (see PROJECTS below)
   Change it here once and every project updates.
   ========================================================================== */
(function () {
  if (window.__pfShared) return; window.__pfShared = true;

  /* ---------- EDIT: projects (folder name, title, one-line description) ---------- */
  var PROJECTS = [
    ['aukus',                    'The AUKUS Export-Control Navigator', 'Defence industry · export controls'],
    ['saf',                      'The SAF Mandate Gap',                'Aviation · sustainable fuel policy'],
    ['phoenix',                  'The Phoenix Signal',                 'Tax integrity · illegal phoenix activity'],
    ['national-interest-screen', 'The National Interest Screen',       'Foreign investment · economic security'],
    ['assurance-gap',            'The Assurance Gap',                  'Defence autonomy · assurance & test and evaluation'],
    ['tail-number',              'Tail Number Exposed',                'Business-jet flight-data privacy · aviation security'],
    ['ranking',                  'Does the Ranking Hold?',             'Rail procurement security scorecard'],
    ['index-lag',                'The Index Lag Protocol',             'Passive funds · geopolitical shock response'],
    ['companion-briefs',         'Companion Briefs',                   'Geopolitical risk · Indo-Pacific & passive-index protocol'],
    ['grand-prix',               'Is the Grand Prix Worth It?',        'Economic & soft-power impact'],
    ['real-selectors',           'The Real Selectors',                 'Cricket governance · two live case studies']
  ];

  /* ---------- EDIT: About & contact ---------- */
  var ABOUT = {
    name: 'Arpitha (Ari) Ummanath',
    bio: 'Policy researcher and writer based in Canberra, working on international security, defence and strategic policy. My portfolio is a set of independent, source-linked case studies that turn public evidence into analysis and practical recommendations.',
    pubs: [
      ['Women are integral to closing Australia’s defence workforce gap', 'ASPI, The Strategist (solo)', 'https://www.aspi.org.au/strategist-posts/women-are-integral-to-closing-australias-defence-workforce-gap/'],
      ['Australia’s fuel security', 'Voices of the Future, Girls Run The World (co-authored)', 'https://static1.squarespace.com/static/649417f4c2f2ae170d6fff9c/t/69dd727c449d6a56e2e7e9c7/1776120444468/Voices+of+the+Future+Vol2.pdf']
    ],
    linkedin: 'https://www.linkedin.com/in/arpitha-u-62549a2ba/'
  };
  /* ------------------------------------------------------------------------------- */

  var me = document.currentScript;
  var ROOT = me ? new URL('../', me.src).href : '/';
  var SELF = (location.pathname.replace(/\/[^\/]*$/, '/').split('/').filter(Boolean).pop()) || '';
  var THIS = PROJECTS.filter(function (p) { return p[0] === SELF; })[0];
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function txt(el){ return (el.textContent || '').replace(/\s+/g, ' ').trim(); }

  function projectListHTML() {
    return PROJECTS.map(function (p) {
      var cur = p[0] === SELF ? ' aria-current="page"' : '';
      return '<li><a href="' + ROOT + p[0] + '/"' + cur + '><b>' + esc(p[1]) + '</b><span>' + esc(p[2]) + '</span></a></li>';
    }).join('');
  }

  /* Keep any older built-in "Case studies" list in sync too */
  function refreshOld() {
    var dlg = document.getElementById('pfDlg'); if (!dlg) return;
    dlg.querySelectorAll('[data-pfp="work"] ul').forEach(function (ul) {
      if (ul.getAttribute('data-pf-shared') !== '1') { ul.innerHTML = projectListHTML(); ul.setAttribute('data-pf-shared', '1'); }
    });
  }

  /* ---------- find this project's own sections / tabs ---------- */
  function ours(el){ return !!(el.closest && el.closest('.pfm-root,.pf-dlg,.dlg,#pfDlg,[data-pf]')); }
  function visible(el){ var cs = getComputedStyle(el); return cs.display !== 'none' && cs.visibility !== 'hidden'; }
  function findSections() {
    var best = null, bestItems = [];
    var cands = document.querySelectorAll('nav, [role="tablist"], .tabs, .tabbar, .topnav, .links, .nav, .tab-nav');
    var limit = Math.max(700, innerHeight * 1.25);
    cands.forEach(function (c) {
      if (ours(c)) return;
      if (c.getBoundingClientRect().top + window.scrollY > limit) return; /* only the page's own top navigation */
      var items = [].slice.call(c.querySelectorAll('a[href], button')).filter(function (el) {
        if (ours(el) || el.hasAttribute('data-pf') || !txt(el) || txt(el).length > 40) return false;
        if (el.tagName === 'A') { var h = el.getAttribute('href') || ''; if (/^(https?:|mailto:)/.test(h) && el.host !== location.host) return false; }
        return true;
      });
      var seen = {}; items = items.filter(function (el) { var t = txt(el).toLowerCase(); if (seen[t]) return false; seen[t] = 1; return true; });
      if (items.length >= 2 && items.length > bestItems.length) { best = c; bestItems = items; }
    });
    if (bestItems.length) return bestItems.map(function (el) {
      var active = el.classList.contains('active') || el.classList.contains('current') || el.getAttribute('aria-selected') === 'true' || el.getAttribute('aria-current') === 'page';
      return { label: txt(el).replace(/^(\d{1,2})\s*(?=[A-Za-z])/, '$1 · '), el: el, active: active };
    });
    /* no navigation: use the page's main headings */
    var hs = [].slice.call(document.querySelectorAll('main h2, .wrap h2, body > div h2, section h2, h2')).filter(function (h) { return !ours(h) && visible(h) && txt(h).length < 70; });
    var uniq = []; hs.forEach(function (h) { if (uniq.indexOf(h) < 0) uniq.push(h); });
    return uniq.slice(0, 10).map(function (h, i) { if (!h.id) h.id = 'pf-sec-' + i; return { label: txt(h).replace(/^(\d{1,2})\s*(?=[A-Za-z])/, '$1 · '), anchor: h }; });
  }

  /* ---------- the menu ---------- */
  function build() {
    var css = ''
      + '.pfm-root{--m-bg:#ffffff;--m-ink:#14202E;--m-ink2:#4a5868;--m-line:#e2e6ea;--m-soft:#f2f4f6;--m-acc:#1B6F78;font-family:"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}'
      + '@media (prefers-color-scheme:dark){.pfm-root{--m-bg:#16212D;--m-ink:#E6EDF4;--m-ink2:#B4C2D0;--m-line:#2E3F50;--m-soft:#1d2a38;--m-acc:#6CC3CB}}'
      + '.pfm-btn{position:fixed;top:calc(env(safe-area-inset-top,0px) + 12px);right:calc(env(safe-area-inset-right,0px) + 12px);z-index:9400;width:52px;height:52px;border-radius:50%;border:0;background:#14202E;color:#fff;display:grid;place-items:center;cursor:pointer;box-shadow:0 6px 22px rgba(0,0,0,.28),0 0 0 2px rgba(255,255,255,.85);transition:transform .2s,opacity .25s}'
      + '.pfm-btn:hover{transform:scale(1.06)}.pfm-btn:focus-visible{outline:3px solid #6CC3CB;outline-offset:3px}'
      + '.pfm-btn svg{width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round}'
      + '.pfm-btn.pfm-hide{opacity:0;pointer-events:none}'
      + '.pfm-scrim{position:fixed;inset:0;z-index:9600;background:rgba(10,18,28,.5);opacity:0;transition:opacity .25s}'
      + '.pfm-sheet{position:fixed;top:0;right:0;bottom:0;z-index:9700;width:min(440px,100vw);background:var(--m-bg);color:var(--m-ink);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .3s cubic-bezier(.2,.8,.2,1);box-shadow:-20px 0 60px rgba(0,0,0,.25);padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
      + '.pfm-open .pfm-scrim{opacity:1}.pfm-open .pfm-sheet{transform:none}'
      + '.pfm-root[hidden]{display:none}'
      + '.pfm-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 16px;border-bottom:1px solid var(--m-line)}'
      + '.pfm-home{display:inline-flex;align-items:center;gap:8px;text-decoration:none;color:#fff;background:#14202E;font-weight:600;font-size:15px;padding:11px 16px;border-radius:999px}'
      + '@media (prefers-color-scheme:dark){.pfm-home{background:#E6EDF4;color:#14202E}}'
      + '.pfm-home svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}'
      + '.pfm-x{appearance:none;width:44px;height:44px;border-radius:50%;border:1px solid var(--m-line);background:var(--m-bg);color:var(--m-ink);font-size:20px;line-height:1;cursor:pointer}'
      + '.pfm-home:focus-visible,.pfm-x:focus-visible,.pfm-body a:focus-visible,.pfm-body button:focus-visible{outline:3px solid var(--m-acc);outline-offset:2px}'
      + '.pfm-tabs{display:flex;gap:6px;padding:12px 16px 0;flex-wrap:wrap}'
      + '.pfm-tabs button{appearance:none;border:1px solid var(--m-line);background:var(--m-bg);color:var(--m-ink2);font:600 14px/1 inherit;font-family:inherit;padding:10px 14px;border-radius:999px;cursor:pointer}'
      + '.pfm-tabs button[aria-selected="true"]{background:var(--m-ink);color:var(--m-bg);border-color:var(--m-ink)}'
      + '.pfm-body{flex:1;overflow:auto;padding:16px 16px 28px;-webkit-overflow-scrolling:touch}'
      + '.pfm-panel[hidden]{display:none}'
      + '.pfm-kicker{font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--m-ink2);margin:4px 0 6px}'
      + '.pfm-title{font:700 24px/1.2 Georgia,"Times New Roman",serif;margin:0 0 14px}'
      + '.pfm-list{list-style:none;margin:0;padding:0;display:grid;gap:8px}'
      + '.pfm-list a,.pfm-list button{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;text-align:left;appearance:none;border:1px solid var(--m-line);background:var(--m-soft);color:var(--m-ink);text-decoration:none;font:500 17px/1.3 inherit;font-family:inherit;padding:14px 16px;border-radius:12px;cursor:pointer;min-height:52px}'
      + '.pfm-list a:hover,.pfm-list button:hover{border-color:var(--m-acc)}'
      + '.pfm-list .on{border-color:var(--m-acc);box-shadow:inset 3px 0 0 var(--m-acc)}'
      + '.pfm-list i{font-style:normal;color:var(--m-acc);font-size:18px}'
      + '.pfm-proj a{display:grid;gap:3px}.pfm-proj b{font-weight:600;font-size:17px}.pfm-proj span{font-size:14px;color:var(--m-ink2)}'
      + '.pfm-proj a[aria-current]{border-color:var(--m-acc)}.pfm-proj a[aria-current] b::after{content:" · you are here";font-weight:400;font-style:italic;font-size:13px;color:var(--m-acc)}'
      + '.pfm-about p{font-size:16px;line-height:1.6;color:var(--m-ink2);margin:0 0 14px}.pfm-about ul{margin:0 0 16px;padding-left:18px;color:var(--m-ink2);font-size:15px;line-height:1.5}.pfm-about li{margin-bottom:8px}.pfm-about ul a{color:var(--m-acc)}'
      + '.pfm-li{display:inline-flex;align-items:center;gap:10px;background:#0A66C2;color:#fff!important;text-decoration:none;font-weight:600;font-size:16px;padding:13px 18px;border-radius:10px}'
      + 'body.pfm-lock{overflow:hidden}'
      /* the older built-in buttons are replaced by this menu */
      + '[data-pf],.pf-bar,.pfs-tab{display:none!important}'
      + '@media print{.pfm-root,.pfm-btn{display:none!important}}'
      + '@media (prefers-reduced-motion:reduce){.pfm-sheet,.pfm-scrim,.pfm-btn{transition:none}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'pfm-btn pfm-root'; btn.setAttribute('aria-label', 'Open menu'); btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    document.body.appendChild(btn);

    var root = document.createElement('div'); root.className = 'pfm-root'; root.hidden = true;
    var pubs = ABOUT.pubs.map(function (p) { return '<li><a href="' + p[2] + '" target="_blank" rel="noopener">' + esc(p[0]) + '</a><br>' + esc(p[1]) + '</li>'; }).join('');
    root.innerHTML = '<div class="pfm-scrim" data-close></div>'
      + '<div class="pfm-sheet" role="dialog" aria-modal="true" aria-label="Menu">'
      + '<div class="pfm-head"><a class="pfm-home" href="' + ROOT + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>Portfolio home</a><button type="button" class="pfm-x" data-close aria-label="Close menu">✕</button></div>'
      + '<div class="pfm-tabs" role="tablist"><button type="button" role="tab" data-v="here" aria-selected="true">This project</button><button type="button" role="tab" data-v="all" aria-selected="false">All projects</button><button type="button" role="tab" data-v="about" aria-selected="false">About</button></div>'
      + '<div class="pfm-body">'
      + '<div class="pfm-panel" data-p="here"><div class="pfm-kicker">You are viewing</div><h2 class="pfm-title">' + esc(THIS ? THIS[1] : document.title) + '</h2><div class="pfm-kicker">Sections</div><ul class="pfm-list" id="pfmSecs"></ul></div>'
      + '<div class="pfm-panel" data-p="all" hidden><div class="pfm-kicker">Portfolio</div><h2 class="pfm-title">Projects</h2><ul class="pfm-list pfm-proj">' + projectListHTML() + '</ul></div>'
      + '<div class="pfm-panel pfm-about" data-p="about" hidden><div class="pfm-kicker">About</div><h2 class="pfm-title">' + esc(ABOUT.name) + '</h2><p>' + esc(ABOUT.bio) + '</p><div class="pfm-kicker">Published work</div><ul>' + pubs + '</ul><div class="pfm-kicker">Contact</div><p>The best way to reach me is on LinkedIn.</p><a class="pfm-li" href="' + ABOUT.linkedin + '" target="_blank" rel="noopener">Connect on LinkedIn</a></div>'
      + '</div></div>';
    document.body.appendChild(root);

    var secs = [];
    function renderSections() {
      secs = findSections();
      var ul = root.querySelector('#pfmSecs');
      ul.innerHTML = secs.length ? secs.map(function (s, i) { return '<li><button type="button" data-sec="' + i + '"' + (s.active ? ' class="on"' : '') + '><span>' + esc(s.label) + '</span><i aria-hidden="true">→</i></button></li>'; }).join('')
        : '<li><button type="button" data-sec="top"><span>Back to the top of this page</span><i aria-hidden="true">↑</i></button></li>';
    }
    function view(v) {
      root.querySelectorAll('[data-v]').forEach(function (b) { b.setAttribute('aria-selected', b.getAttribute('data-v') === v); });
      root.querySelectorAll('[data-p]').forEach(function (p) { p.hidden = p.getAttribute('data-p') !== v; });
    }
    var last = null;
    function open() { renderSections(); view('here'); last = document.activeElement; root.hidden = false; document.body.classList.add('pfm-lock'); btn.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add('pfm-open'); root.querySelector('.pfm-x').focus(); }); }); }
    function close(cb) { root.classList.remove('pfm-open'); document.body.classList.remove('pfm-lock'); btn.setAttribute('aria-expanded', 'false');
      setTimeout(function () { root.hidden = true; if (cb) cb(); else if (last && last.focus) last.focus(); }, 260); }
    btn.addEventListener('click', open);
    root.addEventListener('click', function (e) {
      if (e.target.closest('[data-close]')) { close(); return; }
      var t = e.target.closest('[data-v]'); if (t) { view(t.getAttribute('data-v')); return; }
      var s = e.target.closest('[data-sec]'); if (!s) return;
      var k = s.getAttribute('data-sec');
      close(function () {
        if (k === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
        var sec = secs[+k]; if (!sec) return;
        if (sec.anchor) { sec.anchor.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
        sec.el.click();
        var isLink = sec.el.tagName === 'A' && !/^#/.test(sec.el.getAttribute('href') || '');
        if (!isLink && sec.el.tagName !== 'A') { try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (_) { window.scrollTo(0, 0); } }
      });
    });
    root.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

    /* step aside while a project's full-screen intro is showing, so its own Skip button stays usable */
    function covered() {
      var w = innerWidth, h = innerHeight, found = false;
      document.querySelectorAll('body *').forEach(function (el) {
        if (found || el.closest('.pfm-root')) return;
        var cs = getComputedStyle(el);
        if (cs.position !== 'fixed' || cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity < .2 || cs.pointerEvents === 'none' || !(parseInt(cs.zIndex, 10) >= 1)) return;
        var r = el.getBoundingClientRect();
        if (r.width >= w * .9 && r.height >= h * .9) found = true;
      });
      return found;
    }
    function tick() { btn.classList.toggle('pfm-hide', !root.hidden ? false : covered()); }
    tick(); setInterval(tick, 700);
  }

  function start() {
    refreshOld(); build();
    document.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('[data-pfv]')) setTimeout(refreshOld, 0); }, true);
    setTimeout(refreshOld, 600);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

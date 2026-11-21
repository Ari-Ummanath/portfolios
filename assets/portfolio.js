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
    ['real-selectors',           'The Real Selectors',                 'Cricket governance · two live case studies'],
    ['below-the-waterline',      'Below the Waterline',                'Water security · 2026 UN Water Conference'],
    ['firebreak',                'Firebreak',                          'Biosecurity · AI-assisted DNA screening']
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
    if (!document.querySelector('link[data-pfm-fonts]')) {
      var lf = document.createElement('link'); lf.rel = 'stylesheet'; lf.setAttribute('data-pfm-fonts', '1');
      lf.href = 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Jost:wght@400;500&display=swap';
      document.head.appendChild(lf);
    }
    var PAPER = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .35 0 0 0 0 .28 0 0 0 0 .2 0 0 0 .07 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
    var css = ''
      + '.pfm-root{--m-paper:#F1EBE0;--m-ink:#221D19;--m-ink2:#5E5348;--m-line:rgba(34,29,25,.18);--m-red:#8C2B22;--m-serif:"EB Garamond",Garamond,Georgia,serif;--m-display:"Bodoni Moda","Didot","Bodoni 72",Georgia,serif;--m-sans:Jost,"Futura","Avenir Next",sans-serif;font-family:var(--m-serif)}'
      + '.pfm-btn{position:fixed;top:calc(env(safe-area-inset-top,0px) + 14px);right:calc(env(safe-area-inset-right,0px) + 14px);z-index:9400;width:56px;height:56px;border-radius:50%;border:0;cursor:pointer;color:#F3E6D8;'
      + 'background:radial-gradient(circle at 34% 30%,#B0453A 0%,#8C2B22 46%,#5E1A14 100%);box-shadow:0 1px 0 rgba(255,255,255,.25) inset,0 -2px 4px rgba(0,0,0,.35) inset,0 6px 16px rgba(60,20,10,.35);display:grid;place-items:center;transition:transform .25s,opacity .3s}'
      + '.pfm-btn::before{content:"";position:absolute;inset:6px;border-radius:50%;border:1px solid rgba(243,230,216,.45)}'
      + '.pfm-btn:hover{transform:rotate(-8deg) scale(1.05)}.pfm-btn:focus-visible{outline:2px solid #221D19;outline-offset:3px}'
      + '.pfm-btn span{font:italic 400 13px/1 "Bodoni Moda",Didot,Georgia,serif;letter-spacing:.02em}'
      + '.pfm-btn.pfm-hide{opacity:0;pointer-events:none}'
      + '.pfm-scrim{position:fixed;inset:0;z-index:9600;background:rgba(34,29,25,.42);opacity:0;transition:opacity .3s}'
      + '.pfm-sheet{position:fixed;top:0;right:0;bottom:0;z-index:9700;width:min(460px,100vw);background:' + PAPER + ',var(--m-paper);color:var(--m-ink);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .45s cubic-bezier(.2,.75,.15,1);box-shadow:-24px 0 60px rgba(34,29,25,.22);padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
      + '.pfm-open .pfm-scrim{opacity:1}.pfm-open .pfm-sheet{transform:none}'
      + '.pfm-root[hidden]{display:none}'
      + '.pfm-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:18px 22px;border-bottom:1px solid var(--m-line)}'
      + '.pfm-home{color:var(--m-ink);text-decoration:none;font:italic 400 19px/1.2 var(--m-serif);border-bottom:1px solid var(--m-ink);padding-bottom:2px}'
      + '.pfm-x{appearance:none;width:44px;height:44px;border:0;background:none;color:var(--m-ink);font:400 22px/1 var(--m-serif);cursor:pointer}'
      + '.pfm-home:focus-visible,.pfm-x:focus-visible,.pfm-body a:focus-visible,.pfm-body button:focus-visible,.pfm-tabs button:focus-visible{outline:2px solid var(--m-red);outline-offset:3px}'
      + '.pfm-tabs{display:flex;gap:22px;padding:18px 22px 0;flex-wrap:wrap}'
      + '.pfm-tabs button{appearance:none;border:0;border-bottom:1px solid transparent;background:none;color:var(--m-ink2);font:500 12px/1 var(--m-sans);letter-spacing:.16em;text-transform:uppercase;padding:8px 0;cursor:pointer}'
      + '.pfm-tabs button[aria-selected="true"]{color:var(--m-ink);border-bottom-color:var(--m-ink)}'
      + '.pfm-body{flex:1;overflow:auto;padding:22px 22px 36px;-webkit-overflow-scrolling:touch}'
      + '.pfm-panel[hidden]{display:none}'
      + '.pfm-kicker{font:500 11px/1.4 var(--m-sans);letter-spacing:.18em;text-transform:uppercase;color:var(--m-ink2);margin:6px 0 8px}'
      + '.pfm-title{font:400 30px/1.12 var(--m-display);margin:0 0 22px;letter-spacing:-.01em}'
      + '.pfm-list{list-style:none;margin:0 0 8px;padding:0;border-top:1px solid var(--m-line)}'
      + '.pfm-list li{border-bottom:1px solid var(--m-line)}'
      + '.pfm-list a,.pfm-list button{display:flex;align-items:center;justify-content:space-between;gap:14px;width:100%;text-align:left;appearance:none;border:0;background:none;color:var(--m-ink);text-decoration:none;font:400 19px/1.3 var(--m-serif);padding:15px 2px;cursor:pointer;min-height:54px;transition:padding .2s}'
      + '.pfm-list a:hover,.pfm-list button:hover{padding-left:10px}'
      + '.pfm-list .on{font-style:italic}.pfm-list .on::before{content:"\\2014\\00a0";color:var(--m-red)}'
      + '.pfm-list i{font-style:normal;color:var(--m-red);font-size:18px}'
      + '.pfm-proj a{display:grid;gap:2px}.pfm-proj b{font:400 20px/1.25 var(--m-display)}.pfm-proj span{font:italic 400 16px/1.35 var(--m-serif);color:var(--m-ink2)}'
      + '.pfm-proj a[aria-current] b::after{content:"  \\2014 you are here";font:italic 400 15px var(--m-serif);color:var(--m-red)}'
      + '.pfm-about p{font-size:18px;line-height:1.6;color:var(--m-ink2);margin:0 0 16px}.pfm-about ul{margin:0 0 20px;padding-left:18px;color:var(--m-ink2);font-size:17px;line-height:1.5}.pfm-about li{margin-bottom:10px}.pfm-about ul a{color:var(--m-ink)}'
      + '.pfm-li{display:inline-block;border:1px solid var(--m-ink);color:var(--m-ink)!important;text-decoration:none;font:500 12px/1 var(--m-sans);letter-spacing:.16em;text-transform:uppercase;padding:15px 20px}'
      + '.pfm-li:hover{background:var(--m-ink);color:var(--m-paper)!important}'
      + '@media (max-width:560px){.pfm-btn{width:48px;height:48px;top:calc(env(safe-area-inset-top,0px) + 10px);right:10px}.pfm-btn span{font-size:12px}}'
      + 'body.pfm-lock{overflow:hidden}'
      /* the older built-in buttons are replaced by this menu */
      + '[data-pf],.pf-bar,.pfs-tab{display:none!important}'
      + '@media print{.pfm-root,.pfm-btn{display:none!important}}'
      + '@media (prefers-reduced-motion:reduce){.pfm-sheet,.pfm-scrim,.pfm-btn{transition:none}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'pfm-btn pfm-root'; btn.setAttribute('aria-label', 'Open menu'); btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span aria-hidden="true">Index</span>';
    document.body.appendChild(btn);

    var root = document.createElement('div'); root.className = 'pfm-root'; root.hidden = true;
    var pubs = ABOUT.pubs.map(function (p) { return '<li><a href="' + p[2] + '" target="_blank" rel="noopener">' + esc(p[0]) + '</a><br>' + esc(p[1]) + '</li>'; }).join('');
    root.innerHTML = '<div class="pfm-scrim" data-close></div>'
      + '<div class="pfm-sheet" role="dialog" aria-modal="true" aria-label="Menu">'
      + '<div class="pfm-head"><a class="pfm-home" href="' + ROOT + '">&larr;&nbsp;Return to the portfolio</a><button type="button" class="pfm-x" data-close aria-label="Close menu">✕</button></div>'
      + '<div class="pfm-tabs" role="tablist"><button type="button" role="tab" data-v="here" aria-selected="true">This project</button><button type="button" role="tab" data-v="all" aria-selected="false">All projects</button><button type="button" role="tab" data-v="about" aria-selected="false">About</button></div>'
      + '<div class="pfm-body">'
      + '<div class="pfm-panel" data-p="here"><div class="pfm-kicker">You are viewing</div><h2 class="pfm-title">' + esc(THIS ? THIS[1] : document.title) + '</h2><div class="pfm-kicker">Sections</div><ul class="pfm-list" id="pfmSecs"></ul></div>'
      + '<div class="pfm-panel" data-p="all" hidden><div class="pfm-kicker">The portfolio</div><h2 class="pfm-title">Projects</h2><ul class="pfm-list pfm-proj">' + projectListHTML() + '</ul></div>'
      + '<div class="pfm-panel pfm-about" data-p="about" hidden><div class="pfm-kicker">About</div><h2 class="pfm-title">' + esc(ABOUT.name) + '</h2><p>' + esc(ABOUT.bio) + '</p><div class="pfm-kicker">Published work</div><ul>' + pubs + '</ul><div class="pfm-kicker">Contact</div><p>The best way to reach me is on LinkedIn.</p><a class="pfm-li" href="' + ABOUT.linkedin + '" target="_blank" rel="noopener">Connect on LinkedIn</a></div>'
      + '</div></div>';
    document.body.appendChild(root);

    var secs = [];
    function renderSections() {
      secs = findSections();
      var ul = root.querySelector('#pfmSecs');
      ul.innerHTML = secs.length ? secs.map(function (s, i) { return '<li><button type="button" data-sec="' + i + '"' + (s.active ? ' class="on"' : '') + '><span>' + esc(s.label) + '</span><i aria-hidden="true">&rarr;</i></button></li>'; }).join('')
        : '<li><button type="button" data-sec="top"><span>Back to the top of this page</span><i aria-hidden="true">&uarr;</i></button></li>';
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

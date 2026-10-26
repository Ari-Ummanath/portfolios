/* ==========================================================================
   Ari Ummanath · Portfolio panel (shared by every project)
   --------------------------------------------------------------------------
   THIS IS THE ONE FILE TO EDIT FOR:
     - your About text, published work and LinkedIn link   (see ABOUT below)
     - the list of case studies shown on every project      (see PROJECTS below)
   Change it here once and every project updates.
   ========================================================================== */
(function () {
  if (window.__pfShared) return; window.__pfShared = true;

  /* ---------- EDIT: list of case studies (folder name, title, one-line description) ---------- */
  var PROJECTS = [
    ['aukus',                    'The AUKUS Export-Control Navigator', 'Defence industry · export controls'],
    ['saf',                      'The SAF Mandate Gap',                'Aviation · sustainable fuel policy'],
    ['phoenix',                  'The Phoenix Signal',                 'Tax integrity · illegal phoenix activity'],
    ['national-interest-screen', 'The National Interest Screen',       'Foreign investment · economic security'],
    ['assurance-gap',            'The Assurance Gap',                  'Defence autonomy · assurance & test and evaluation'],
    ['tail-number',              'Tail Number Exposed',                'Business-jet flight-data privacy · aviation security'],
    ['touchstone',               'Touchstone Assay Office',            'AI supply-chain assurance · model provenance'],
    ['ranking',                  'Does the Ranking Hold?',             'Rail procurement security scorecard'],
    ['index-lag',                'The Index Lag Protocol',             'Passive funds · geopolitical shock response'],
    ['companion-briefs',         'Companion Briefs',                   'Geopolitical risk · Indo-Pacific & passive-index protocol'],
    ['grand-prix',               'Is the Grand Prix Worth It?',        'Economic & soft-power impact'],
    ['real-selectors',           'The Real Selectors',                 'Cricket governance · two live case studies'],
    ['cricket-canada',           'Cricket Canada',                     'Sport integrity · an intelligence-analyst read on a live ICC case']
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
  /* ------------------------------------------------------------------------------------------- */

  var me = document.currentScript;
  var ROOT = me ? new URL('../', me.src).href : '/';
  var SELF = (location.pathname.replace(/\/[^\/]*$/, '/').split('/').filter(Boolean).pop()) || '';
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }

  function listHTML() {
    return PROJECTS.map(function (p) {
      var cur = p[0] === SELF ? ' aria-current="page"' : '';
      return '<li><a href="' + ROOT + p[0] + '/"' + cur + '><b>' + esc(p[1]) + '</b><span>' + esc(p[2]) + '</span></a></li>';
    }).join('') + '<li><a href="' + ROOT + '"><b>All projects · portfolio home</b><span>Overview of every case study</span></a></li>';
  }

  /* 1. Pages that already have the panel: refresh their case-study list with every project */
  function refresh() {
    var dlg = document.getElementById('pfDlg');
    if (!dlg) return false;
    dlg.querySelectorAll('[data-pfp="work"] ul').forEach(function (ul) {
      if (ul.getAttribute('data-pf-shared') !== '1' || ul.children.length !== PROJECTS.length + 1) {
        ul.innerHTML = listHTML(); ul.setAttribute('data-pf-shared', '1');
      }
    });
    return true;
  }

  /* 2. Pages without the panel: add a small corner tab + the panel itself */
  function inject() {
    var css = '.pfs-tab{position:fixed;top:calc(env(safe-area-inset-top,0px) + 12px);right:12px;z-index:8500;display:flex;gap:2px;background:#14202E;border-radius:999px;padding:3px;box-shadow:0 6px 20px rgba(0,0,0,.25);font:600 13px/1 "Barlow Semi Condensed","Arial Narrow",Arial,sans-serif;letter-spacing:.03em}'
      + '.pfs-tab button{appearance:none;border:0;background:none;color:#E6EDF4;padding:8px 12px;border-radius:999px;cursor:pointer;font:inherit}'
      + '.pfs-tab button:hover{background:#26384c}.pfs-tab button:focus-visible{outline:2px solid #6CC3CB;outline-offset:2px}'
      + '.pf-dlg{--pf-bg:#FBFCFD;--pf-ink:#14202E;--pf-ink2:#44546A;--pf-line:#D5DDE5;--pf-acc:#1B6F78;position:fixed;inset:0;z-index:9000;display:grid;place-items:center;padding:16px;background:rgba(10,18,28,.55);font-family:Georgia,"Times New Roman",serif}'
      + '@media (prefers-color-scheme:dark){.pf-dlg{--pf-bg:#16212D;--pf-ink:#E6EDF4;--pf-ink2:#B4C2D0;--pf-line:#2E3F50;--pf-acc:#6CC3CB}}'
      + '.pf-dlg[hidden],.pf-dlg [hidden]{display:none!important}'
      + '.pf-card{background:var(--pf-bg);color:var(--pf-ink);width:min(560px,100%);max-height:100%;overflow:auto;border-radius:10px;border:1px solid var(--pf-line);box-shadow:0 20px 60px rgba(0,0,0,.3)}'
      + '.pf-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 18px;border-bottom:1px solid var(--pf-line)}'
      + '.pf-tabs{display:flex;gap:4px;flex-wrap:wrap}'
      + '.pf-tabs button,.pf-x{appearance:none;border:1px solid transparent;background:none;color:var(--pf-ink2);font:600 15px/1.2 "Barlow Semi Condensed","Arial Narrow",Arial,sans-serif;padding:7px 12px;border-radius:999px;cursor:pointer}'
      + '.pf-tabs button[aria-selected="true"]{background:var(--pf-ink);color:var(--pf-bg)}.pf-x{border-color:var(--pf-line);border-radius:6px;font-size:14px}'
      + '.pf-body{padding:18px;display:grid;gap:12px;font-size:16px;line-height:1.6}.pf-body h2{margin:0;font:700 26px/1.1 "Barlow Semi Condensed","Arial Narrow",Arial,sans-serif;color:var(--pf-ink)}'
      + '.pf-body p{margin:0;color:var(--pf-ink2)}.pf-body p a,.pf-pubs a{color:var(--pf-acc)}'
      + '.pf-label{font:600 12px/1 "Barlow Semi Condensed","Arial Narrow",Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--pf-ink2)}'
      + '.pf-pubs{margin:0;padding-left:18px;color:var(--pf-ink2);font-size:15px}'
      + '.pf-li{display:inline-flex;align-items:center;gap:10px;justify-self:start;background:#0A66C2;color:#fff;text-decoration:none;font:600 16px/1 "Barlow Semi Condensed","Arial Narrow",Arial,sans-serif;padding:11px 16px;border-radius:6px}'
      + '.pf-list{list-style:none;margin:0;padding:0;border-top:1px solid var(--pf-line)}.pf-list li{border-bottom:1px solid var(--pf-line)}'
      + '.pf-list a{display:grid;gap:2px;padding:11px 4px;text-decoration:none;color:var(--pf-ink)}.pf-list a b{font:600 17px/1.25 "Barlow Semi Condensed","Arial Narrow",Arial,sans-serif}'
      + '.pf-list a span{font-size:14px;color:var(--pf-ink2)}.pf-list a[aria-current] b::after{content:"  · you are here";font:italic 400 13px Georgia,serif;color:var(--pf-acc)}'
      + 'body.pf-open{overflow:hidden}@media print{.pfs-tab{display:none}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    var tab = document.createElement('div'); tab.className = 'pfs-tab'; tab.setAttribute('role', 'navigation'); tab.setAttribute('aria-label', 'Portfolio');
    tab.innerHTML = '<button type="button" data-pfs="work">Case studies</button><button type="button" data-pfs="about">About &amp; contact</button>';
    document.body.appendChild(tab);

    var pubs = ABOUT.pubs.map(function (p) { return '<li><a href="' + p[2] + '" target="_blank" rel="noopener">' + esc(p[0]) + '</a> · ' + esc(p[1]) + '</li>'; }).join('');
    var d = document.createElement('div');
    d.innerHTML = '<div class="pf-dlg" id="pfDlg" role="dialog" aria-modal="true" aria-label="Portfolio" hidden><div class="pf-card">'
      + '<div class="pf-head"><div class="pf-tabs" role="tablist"><button type="button" role="tab" data-pfv="about" aria-selected="true">About &amp; contact</button><button type="button" role="tab" data-pfv="work" aria-selected="false">Case studies</button></div><button type="button" class="pf-x" data-pfclose>Close ✕</button></div>'
      + '<div class="pf-body" data-pfp="about"><div class="pf-label">About</div><h2>' + esc(ABOUT.name) + '</h2><p>' + esc(ABOUT.bio) + '</p><div class="pf-label">Published work</div><ul class="pf-pubs">' + pubs + '</ul>'
      + '<div class="pf-label">Contact</div><p>The best way to reach me is on LinkedIn.</p><a class="pf-li" href="' + ABOUT.linkedin + '" target="_blank" rel="noopener">Connect on LinkedIn</a></div>'
      + '<div class="pf-body" data-pfp="work" hidden><div class="pf-label">Portfolio</div><h2>Case studies</h2><ul class="pf-list">' + listHTML() + '</ul></div>'
      + '</div></div>';
    var dlg = d.firstChild; document.body.appendChild(dlg);

    var last = null;
    function view(v) { dlg.querySelectorAll('[data-pfv]').forEach(function (b) { b.setAttribute('aria-selected', b.getAttribute('data-pfv') === v); }); dlg.querySelectorAll('[data-pfp]').forEach(function (p) { p.hidden = p.getAttribute('data-pfp') !== v; }); }
    function open(v) { last = document.activeElement; view(v); dlg.hidden = false; document.body.classList.add('pf-open'); dlg.querySelector('[aria-selected="true"]').focus(); }
    function close() { dlg.hidden = true; document.body.classList.remove('pf-open'); if (last && last.focus) last.focus(); }
    tab.addEventListener('click', function (e) { var b = e.target.closest('[data-pfs]'); if (b) open(b.getAttribute('data-pfs')); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target.closest('[data-pfclose]')) close(); var b = e.target.closest('[data-pfv]'); if (b) view(b.getAttribute('data-pfv')); });
    dlg.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  function start() {
    if (!refresh()) inject();
    /* some pages rebuild their panel later; keep the list current */
    document.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('[data-pf],[data-pfv]')) setTimeout(refresh, 0); }, true);
    setTimeout(refresh, 600);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

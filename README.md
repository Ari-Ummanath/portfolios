# Ari Ummanath · Policy Portfolio

Live site: **https://ari-ummanath.github.io/portfolios/**

| Folder | Project |
|---|---|
| `aukus/` | The AUKUS Export-Control Navigator |
| `saf/` | The SAF Mandate Gap |
| `phoenix/` | The Phoenix Signal |
| `national-interest-screen/` | The National Interest Screen |
| `assurance-gap/` | The Assurance Gap |
| `tail-number/` | Tail Number Exposed |
| `touchstone/` | Touchstone Assay Office |
| `ranking/` | Does the Ranking Hold? |
| `index-lag/` | The Index Lag Protocol |
| `companion-briefs/` | Companion Briefs |
| `grand-prix/` | Is the Grand Prix Worth It? |
| `real-selectors/` | The Real Selectors |

## How to update anything (no software needed)

1. Open this repository on github.com and click into the project's folder.
2. Click `index.html` (or the page you want), then the **pencil icon ✏️** (top right of the file).
3. Press **Ctrl+F** (Cmd+F on Mac) and type the exact number, date or sentence you want to change. It's easiest to search for text you can see on the live page.
4. Change only the words between the tags (the parts that aren't inside `< >`).
5. Click **Commit changes**. The live site updates in about a minute.

Works on a phone browser too.

### Where things live

- **Your About text, LinkedIn, published work, and the menu on every project (the round ☰ button, top right):** `assets/portfolio.js`. Edit it once and every project updates. The editable parts are marked `EDIT`. The menu picks up each project's own tabs automatically.
- **The portfolio home page (your name, the Policy projects circle, project cards, About):** `index.html` in the top folder. Each project is one `<li>…</li>` block; the numbers and the dots around the circle update themselves. Editable spots are marked `<!-- EDIT -->`.
- **Adding a new project:** put its folder in the repo, add a `<li>` card in `index.html`, add a line to `PROJECTS` in `assets/portfolio.js`, and add `<script src="../assets/portfolio.js"></script>` just before `</body>` in the project page.
- **"Last updated / Last reviewed" dates:** search the project page for `Last updated`, `Last reviewed`, `LAST REVIEWED` or `Updated`.
- **AUKUS source checks:** `aukus/source-watch.json` holds each source's status and last-checked date.

### Commonly updated figures

| Project | Search for… |
|---|---|
| Phoenix Signal | `3,400+`, `2,600+`, `$2.45bn` (ATO referral, audit and recovery figures) |
| SAF Mandate Gap | `LAST REVIEWED`, and the dated entries in the **Flight Log** tab |
| AUKUS Navigator | `700+` (Authorised Users), `70&ndash;80%`, and `aukus/source-watch.json` |
| Index Lag Protocol | `Updated` (the date line under the title) |
| Does the Ranking Hold? | the scorecard figures and bidder rows |
| National Interest Screen | `347` and `1498` (2026 FIRB thresholds, re-indexed every 1 January) |

If a page ever looks broken after an edit, open the file's **History** on GitHub and click the previous version to restore it.

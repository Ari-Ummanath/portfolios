/* Below the Waterline: shared data. LIVE is updated by the weekly refresh. */
const LIVE = {
  edition: 1,
  updated: "2026-11-17",
  feed: [
    {d:"2026-11-17", tag:"Diplomacy", t:"COP31 is under way in Antalya (9–20 November), with Australia presiding over negotiations. Its outcomes will shape the climate-water agenda delegates bring to Abu Dhabi.", s:["gt","dcceew"]},
    {d:"2026-11-18", tag:"Logistics", t:"Registration closes for UN system participants. Accredited stakeholder registration closed on 13 November.", s:["unpage"]},
    {d:"2026-11-02", tag:"Security", t:"US strikes on Iran's Qeshm Island, site of a desalination plant hit in March. The UAE says it will be better prepared for any resumption of hostilities.", s:["rferl","shehabi"]},
    {d:"2026-10", tag:"Process", t:"The General Assembly sets further modalities for plenary and dialogue timing (A/81/L.10).", s:["docs"]},
    {d:"2026-09-07", tag:"Finance", t:"Host country highlights First Abu Dhabi Bank's commitment to mobilise AED 100 billion in blue finance.", s:["ktinv"]},
    {d:"2026-12-08", tag:"Ahead", t:"Water.org co-founders Matt Damon and Gary White are due to announce new commitments on The Oasis main stage.", s:["waterorg"]}
  ],
  log: [
    {d:"2026-11-17", t:"Redesigned as a multi-page site with an interactive intro; a possible solution added for each of the six dialogues."},
    {d:"2026-11-17", t:"First published: five-line brief, three lenses, stakeholder views, watchlist and 44 sources."}
  ],
  scorecard: [
    {item:"UN water conventions", target:"100 parties by 2030 (59 + 42 today)", owner:"Member States", st:"target", s:["cpD"]},
    {item:"Public water spending", target:"Double to 0.5% of GDP in developing countries", owner:"Governments", st:"target", s:["cpF"]},
    {item:"Private mobilisation", target:"At least US$1 private per US$1 public", owner:"MDBs, investors", st:"target", s:["cpF"]},
    {item:"Workforce", target:"At least 1% of water investment to capacity development", owner:"Governments, donors", st:"target", s:["cpF"]},
    {item:"Water investment taxonomy", target:"Develop a global taxonomy", owner:"Finance sector, UN", st:"target", s:["cpF"]},
    {item:"Climate finance share", target:"Raise water's share above 3–5%", owner:"Climate funds", st:"target", s:["cpF"]},
    {item:"Blue finance", target:"AED 100 billion", owner:"First Abu Dhabi Bank", st:"pledge", s:["ktinv"]},
    {item:"Abu Dhabi Global Water Platform", target:"US$2 billion; 10 million people by 2030", owner:"Abu Dhabi Fund for Development", st:"pledge", s:["kt140"]},
    {item:"Water.org Group announcements", target:"New commitments and partnerships, 8 Dec", owner:"Water.org Group", st:"watch", s:["waterorg"]},
    {item:"Data-centre water disclosure", target:"No common standard yet; see the security lens", owner:"Governments, operators", st:"watch", s:["unuai","rystad"]}
  ]
};


/* ============ SOURCES (Chicago 17th, notes-bibliography) ============ */
const ACC = "accessed November 17, 2026";
const SRC = {
  unpage:{url:"https://sdgs.un.org/conferences/water2026",
    note:`United Nations Department of Economic and Social Affairs, “2026 UN Water Conference,” UN Sustainable Development, ${ACC},`,
    bib:`United Nations Department of Economic and Social Affairs. “2026 UN Water Conference.” UN Sustainable Development. Accessed November 17, 2026.`},
  dialogues:{url:"https://sdgs.un.org/conferences/water2026/interactive-dialogues",
    note:`United Nations Department of Economic and Social Affairs, “Interactive Dialogues: 2026 UN Water Conference,” UN Sustainable Development, ${ACC},`,
    bib:`United Nations Department of Economic and Social Affairs. “Interactive Dialogues: 2026 UN Water Conference.” UN Sustainable Development. Accessed November 17, 2026.`},
  docs:{url:"https://sdgs.un.org/conferences/water2026/documentation",
    note:`United Nations Department of Economic and Social Affairs, “Documents: 2026 UN Water Conference,” UN Sustainable Development, ${ACC},`,
    bib:`United Nations Department of Economic and Social Affairs. “Documents: 2026 UN Water Conference.” UN Sustainable Development. Accessed November 17, 2026.`},
  res78:{url:"https://docs.un.org/en/A/RES/78/327",
    note:`UN General Assembly, <i>Modalities of the 2026 United Nations Water Conference</i>, A/RES/78/327 (2024),`,
    bib:`UN General Assembly. <i>Modalities of the 2026 United Nations Water Conference</i>. A/RES/78/327. New York: United Nations, 2024.`},
  l62:{url:"https://docs.un.org/en/A/80/L.62",
    note:`UN General Assembly, draft decision on the dates of the 2026 United Nations Water Conference, A/80/L.62, adopted May 8, 2026,`,
    bib:`UN General Assembly. Draft decision on the dates of the 2026 United Nations Water Conference. A/80/L.62. New York: United Nations, 2026.`},
  cpA:{url:"https://sdgs.un.org/sites/default/files/2026-09/26-01369%20ATT%20Concept%20Paper%20UNWC_IDA.pdf",
    note:`United Nations, “Interactive Dialogue A: Water for People,” concept paper, A/CONF.240/2026/4 (advance unedited, 2026),`,
    bib:`United Nations. “Interactive Dialogue A: Water for People.” Concept paper. A/CONF.240/2026/4. Advance unedited version, 2026.`},
  cpD:{url:"https://sdgs.un.org/sites/default/files/2026-09/26-01379%20ATT%20Concept%20Paper%20UNWC_IDD.pdf",
    note:`United Nations, “Interactive Dialogue D: Water for Cooperation,” concept paper, A/CONF.240/2026/7 (advance unedited, 2026),`,
    bib:`United Nations. “Interactive Dialogue D: Water for Cooperation.” Concept paper. A/CONF.240/2026/7. Advance unedited version, 2026.`},
  cpF:{url:"https://sdgs.un.org/sites/default/files/2026-09/26-01384%20ATT%20Concept%20Paper%20UNWC_IDF.pdf",
    note:`United Nations, “Interactive Dialogue F: Investments for Water,” concept paper, A/CONF.240/2026/9 (advance unedited, 2026),`,
    bib:`United Nations. “Interactive Dialogue F: Investments for Water.” Concept paper. A/CONF.240/2026/9. Advance unedited version, 2026.`},
  cpB:{url:"https://sdgs.un.org/sites/default/files/2026-09/26-01371%20ATT%20Concept%20Paper%20UNWC_IDB.pdf",
    note:`United Nations, “Interactive Dialogue B: Water for Prosperity,” concept paper (advance unedited, 2026),`,
    bib:`United Nations. “Interactive Dialogue B: Water for Prosperity.” Concept paper. Advance unedited version, 2026.`},
  cpC:{url:"https://sdgs.un.org/sites/default/files/2026-09/26-01378%20ATT%20Concept%20Paper%20UNWC_IDC.pdf",
    note:`United Nations, “Interactive Dialogue C: Water for Planet,” concept paper (advance unedited, 2026),`,
    bib:`United Nations. “Interactive Dialogue C: Water for Planet.” Concept paper. Advance unedited version, 2026.`},
  cpE:{url:"https://sdgs.un.org/sites/default/files/2026-09/26-01383%20ATT%20Concept%20Paper%20UNWC_IDE.pdf",
    note:`United Nations, “Interactive Dialogue E: Water in Multilateral Processes,” concept paper (advance unedited, 2026),`,
    bib:`United Nations. “Interactive Dialogue E: Water in Multilateral Processes.” Concept paper. Advance unedited version, 2026.`},
  jmp:{url:"https://data.unicef.org/resources/jmp-report-2025/",
    note:`WHO and UNICEF, <i>Progress on Household Drinking Water, Sanitation and Hygiene 2000–2024: Special Focus on Inequalities</i> (New York: UNICEF and WHO, 2025),`,
    bib:`WHO and UNICEF. <i>Progress on Household Drinking Water, Sanitation and Hygiene 2000–2024: Special Focus on Inequalities</i>. New York: UNICEF and WHO, 2025.`},
  unicefpac:{url:"https://www.unicef.org/pacificislands/press-releases/fact-sheet-five-million-people-pacific-still-lack-access-basic-drinking-water",
    note:`UNICEF and WHO, “Fact Sheet: Five Million People in the Pacific Still Lack Access to Basic Drinking Water Services,” press release, August 30, 2025,`,
    bib:`UNICEF and WHO. “Fact Sheet: Five Million People in the Pacific Still Lack Access to Basic Drinking Water Services.” Press release, August 30, 2025.`},
  unubank:{url:"https://unu.edu/inweh/news/world-enters-era-of-global-water-bankruptcy",
    note:`United Nations University Institute for Water, Environment and Health, “World Enters ‘Era of Global Water Bankruptcy’: UN Scientists Formally Define New Post-Crisis Reality for Billions,” news release, January 20, 2026, summarising Kaveh Madani, <i>Global Water Bankruptcy: Living Beyond Our Hydrological Means in the Post-Crisis Era</i> (UNU-INWEH, 2026),`,
    bib:`United Nations University Institute for Water, Environment and Health. “World Enters ‘Era of Global Water Bankruptcy’: UN Scientists Formally Define New Post-Crisis Reality for Billions.” News release, January 20, 2026.`},
  unuai:{url:"https://unu.edu/inweh/news/environmental-cost-of-AIs-Enrgy-Use-Carbon-water-and-land-footprints",
    note:`United Nations University Institute for Water, Environment and Health, “Rising Emissions, Depleting Water and Vanishing Land—UN Scientists: AI Is Threatening Natural Resources for Billions,” news release, June 3, 2026,`,
    bib:`United Nations University Institute for Water, Environment and Health. “Rising Emissions, Depleting Water and Vanishing Land—UN Scientists: AI Is Threatening Natural Resources for Billions.” News release, June 3, 2026.`},
  techwire:{url:"https://techwireasia.com/2026/06/ai-data-centres-power-water-use-2030/",
    note:`“AI Data Centres Could Nearly Double Power and Water Use by 2030,” <i>TechWire Asia</i>, June 4, 2026,`,
    bib:`“AI Data Centres Could Nearly Double Power and Water Use by 2030.” <i>TechWire Asia</i>, June 4, 2026.`},
  rystad:{url:"https://www.downtoearth.org.in/science-technology/data-centre-water-consumption-could-triple-to-644-billion-litres-by-2030",
    note:`“Data Centre Water Consumption Could Triple to 644 Billion Litres by 2030,” <i>Down To Earth</i>, ${ACC}, reporting Rystad Energy estimates,`,
    bib:`“Data Centre Water Consumption Could Triple to 644 Billion Litres by 2030.” <i>Down To Earth</i>. Accessed November 17, 2026.`},
  google:{url:"https://doi.org/10.48550/arXiv.2508.15734",
    note:`Cooper Elsworth et al., “Measuring the Environmental Impact of Delivering AI at Google Scale,” preprint, arXiv, submitted August 21, 2025,`,
    bib:`Elsworth, Cooper, Keguo Huang, David Patterson, Ian Schneider, Robert Sedivy, Savannah Goodman, Ben Townsend, et al. “Measuring the Environmental Impact of Delivering AI at Google Scale.” Preprint, arXiv, submitted August 21, 2025.`},
  pifact:{url:"https://pacinst.org/wp-content/uploads/2025/11/Water-Conflict-Chronology_fact-sheet_2025_final.pdf",
    note:`Morgan Shimabuku et al., <i>Water Conflict Chronology 2025 Update</i>, fact sheet (Oakland, CA: Pacific Institute, November 2025),`,
    bib:`Shimabuku, Morgan, Peter Gleick, Jessica Dery, and Lena Wilson. <i>Water Conflict Chronology 2025 Update</i>. Fact sheet. Oakland, CA: Pacific Institute, November 2025.`},
  pirelease:{url:"https://pacinst.org/announcement/pacific-institute-analysis-finds-surge-in-reported-water-related-violence/",
    note:`Pacific Institute, “Pacific Institute Analysis Finds Surge in Reported Water-Related Violence,” announcement, November 11, 2025,`,
    bib:`Pacific Institute. “Pacific Institute Analysis Finds Surge in Reported Water-Related Violence.” Announcement, November 11, 2025.`},
  wateronline:{url:"https://www.wateronline.com/doc/was-a-record-year-for-violence-over-water-resources-across-the-globe-0001",
    note:`“2023 Was a Record Year for Violence over Water Resources across the Globe,” <i>Water Online</i>, August 22, 2024,`,
    bib:`“2023 Was a Record Year for Violence over Water Resources across the Globe.” <i>Water Online</i>, August 22, 2024.`},
  ap:{url:"https://apnews.com/article/iran-war-desalination-water-oil-middle-east-12b23f2fa26ed5c4a10f80c4077e61ce",
    note:`Annika Hammerschlag, “Oil Built the Persian Gulf. Desalinated Water Keeps It Alive. War Could Threaten Both,” Associated Press, March 8, 2026, updated March 11, 2026,`,
    bib:`Hammerschlag, Annika. “Oil Built the Persian Gulf. Desalinated Water Keeps It Alive. War Could Threaten Both.” Associated Press, March 8, 2026. Updated March 11, 2026.`},
  shehabi:{url:"https://arabcenterdc.org/resource/war-on-iran-the-dangers-of-attacking-water-desalination-plants-in-the-gulf/",
    note:`Manal Shehabi, “War on Iran: The Dangers of Attacking Water Desalination Plants in the Gulf,” Arab Center Washington DC, April 28, 2026,`,
    bib:`Shehabi, Manal. “War on Iran: The Dangers of Attacking Water Desalination Plants in the Gulf.” Arab Center Washington DC, April 28, 2026.`},
  national:{url:"https://www.thenationalnews.com/business/energy/2026/03/08/irans-strike-brings-gulf-water-security-into-focus",
    note:`Jennifer Gnana, “Iran's Strike on Bahrain Desalination Plant Brings Gulf Water Security into Focus,” <i>The National</i>, March 8, 2026,`,
    bib:`Gnana, Jennifer. “Iran's Strike on Bahrain Desalination Plant Brings Gulf Water Security into Focus.” <i>The National</i>, March 8, 2026.`},
  rferl:{url:"https://www.rferl.org/a/iran-live-blog-trump-middle-east/33803414/lbl0lbi474743.html",
    note:`Radio Free Europe/Radio Liberty, “Iran Live Blog,” entries of early November 2026, ${ACC},`,
    bib:`Radio Free Europe/Radio Liberty. “Iran Live Blog.” November 2026. Accessed November 17, 2026.`},
  cisa:{url:"https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a",
    note:`Cybersecurity and Infrastructure Security Agency, National Security Agency, and Federal Bureau of Investigation, “PRC State-Sponsored Actors Compromise and Maintain Persistent Access to U.S. Critical Infrastructure,” cybersecurity advisory AA24-038A, February 7, 2024,`,
    bib:`Cybersecurity and Infrastructure Security Agency, National Security Agency, and Federal Bureau of Investigation. “PRC State-Sponsored Actors Compromise and Maintain Persistent Access to U.S. Critical Infrastructure.” Cybersecurity advisory AA24-038A, February 7, 2024.`},
  acsc:{url:"https://www.cyber.gov.au/node/395",
    note:`Australian Signals Directorate's Australian Cyber Security Centre, “PRC State-Sponsored Actors Compromise and Maintain Persistent Access to U.S. Critical Infrastructure,” cyber.gov.au, February 2024,`,
    bib:`Australian Signals Directorate's Australian Cyber Security Centre. “PRC State-Sponsored Actors Compromise and Maintain Persistent Access to U.S. Critical Infrastructure.” cyber.gov.au, February 2024.`},
  secaff:{url:"https://securityaffairs.com/197891/ics-scada/cisa-warns-water-utilities-find-your-exposed-plcs-before-attackers-do.html",
    note:`Pierluigi Paganini, “CISA Warns Water Utilities: Find Your Exposed PLCs Before Attackers Do,” <i>Security Affairs</i>, August 27, 2026,`,
    bib:`Paganini, Pierluigi. “CISA Warns Water Utilities: Find Your Exposed PLCs Before Attackers Do.” <i>Security Affairs</i>, August 27, 2026.`},
  wri:{url:"https://www.wri.org/insights/un-water-conference-2023-needed-outcomes",
    note:`World Resources Institute, “UN Water Conference 2023: Not Enough Game-Changing Commitments,” WRI Insights, 2023,`,
    bib:`World Resources Institute. “UN Water Conference 2023: Not Enough Game-Changing Commitments.” WRI Insights, 2023.`},
  enb:{url:"https://enb.iisd.org/un-2023-water-conference/highlights-and-images-24-march-2023",
    note:`International Institute for Sustainable Development, “Highlights and Images for 24 March 2023,” <i>Earth Negotiations Bulletin</i>, March 24, 2023,`,
    bib:`International Institute for Sustainable Development. “Highlights and Images for 24 March 2023.” <i>Earth Negotiations Bulletin</i>, March 24, 2023.`},
  dcceew:{url:"https://unfccc-cop.dcceew.gov.au/cop31",
    note:`Australian Government, Department of Climate Change, Energy, the Environment and Water, “Australia Will Be President of Negotiations for COP31,” ${ACC},`,
    bib:`Australian Government, Department of Climate Change, Energy, the Environment and Water. “Australia Will Be President of Negotiations for COP31.” Accessed November 17, 2026.`},
  gt:{url:"https://www.gtlaw.com.au/insights/from-negotiation-to-implementation-what-to-expect-at-cop31-in-turkiye",
    note:`Gilbert + Tobin, “From Negotiation to Implementation: What to Expect at COP31 in Türkiye,” Insights, ${ACC},`,
    bib:`Gilbert + Tobin. “From Negotiation to Implementation: What to Expect at COP31 in Türkiye.” Insights. Accessed November 17, 2026.`},
  lowy:{url:"https://www.lowyinstitute.org/sites/default/files/2026-03/PILL-HAMMERSLEY-DAYANT-After-the-compromise-2.0.pdf",
    note:`Melanie Pill, Georgia Hammersley, and Alexandre Dayant, <i>After the Compromise: Australia's COP31 Blueprint for the Pacific</i>, policy brief (Sydney: Lowy Institute, March 2026),`,
    bib:`Pill, Melanie, Georgia Hammersley, and Alexandre Dayant. <i>After the Compromise: Australia's COP31 Blueprint for the Pacific</i>. Policy brief. Sydney: Lowy Institute, March 2026.`},
  insidewater:{url:"https://insidewater.com.au/global-water-security-australia-partnerships/",
    note:`“Global Water Security and Australia's Partnership Model,” <i>Inside Water</i>, ${ACC},`,
    bib:`“Global Water Security and Australia's Partnership Model.” <i>Inside Water</i>. Accessed November 17, 2026.`},
  pwwa:{url:"https://www.pwwa.ws/pacific-water-ministers-to-strengthen-regional-voice-ahead-of-un-water-meeting",
    note:`Pacific Water and Wastewater Association, “Pacific Water Ministers to Strengthen Regional Voice Ahead of UN Water Meeting,” July 15, 2026,`,
    bib:`Pacific Water and Wastewater Association. “Pacific Water Ministers to Strengthen Regional Voice Ahead of UN Water Meeting.” July 15, 2026.`},
  wmedia:{url:"https://w.media/nsw-data-centre-water-debate-turns-on-who-pays-for-peak-demand/",
    note:`“NSW Data Centre Water Debate Turns on Who Pays for Peak Demand,” <i>W.Media</i>, September 7, 2026,`,
    bib:`“NSW Data Centre Water Debate Turns on Who Pays for Peak Demand.” <i>W.Media</i>, September 7, 2026.`},
  reuters:{url:"https://bdnews24.com/world/asia-pacific/171c5c637cc4",
    note:`Reuters, “In Australia, a Data Centre Boom Is Built on Vague Water Plans,” republished by <i>bdnews24.com</i>, September 15, 2025, updated August 21, 2026,`,
    bib:`Reuters. “In Australia, a Data Centre Boom Is Built on Vague Water Plans.” Republished by <i>bdnews24.com</i>, September 15, 2025. Updated August 21, 2026.`},
  swm:{url:"https://smartwatermagazine.com/news/smart-water-magazine/australia-sets-rules-what-new-data-centre-policies-mean-water-sector",
    note:`“Australia Sets the Rules: What New Data Centre Policies Mean for the Water Sector,” <i>Smart Water Magazine</i>, ${ACC},`,
    bib:`“Australia Sets the Rules: What New Data Centre Policies Mean for the Water Sector.” <i>Smart Water Magazine</i>. Accessed November 17, 2026.`},
  canz:{url:"https://unny.mission.gov.au/unny/240906_Water_Modalities_Resolution_CANZ.html",
    note:`Permanent Mission of Australia to the United Nations, “Modalities for the 2026 United Nations Water Conference,” statement on behalf of Canada, Australia and New Zealand, September 6, 2024,`,
    bib:`Permanent Mission of Australia to the United Nations. “Modalities for the 2026 United Nations Water Conference.” Statement on behalf of Canada, Australia and New Zealand, September 6, 2024.`},
  kt140:{url:"https://www.khaleejtimes.com/140-billion-a-year-global-business-and-philanthropy-leaders-seek-to-close-the-water-investment-gap",
    note:`“$140 Billion a Year: Global Business and Philanthropy Leaders Seek to Close the Water Investment Gap,” <i>Khaleej Times</i>, ${ACC},`,
    bib:`“$140 Billion a Year: Global Business and Philanthropy Leaders Seek to Close the Water Investment Gap.” <i>Khaleej Times</i>. Accessed November 17, 2026.`},
  ktinv:{url:"https://www.khaleejtimes.com/business/tech/investors-called-to-help-close-67-trillion-dollars-global-water-funding-gap",
    note:`“UAE Calls on Investors to Help Close $6.7-Trillion Global Water Funding Gap,” <i>Khaleej Times</i>, September 2026,`,
    bib:`“UAE Calls on Investors to Help Close $6.7-Trillion Global Water Funding Gap.” <i>Khaleej Times</i>, September 2026.`},
  waterorg:{url:"https://water.org/united-nations-water-conference-2023/",
    note:`Water.org, “2026 United Nations Water Conference,” ${ACC},`,
    bib:`Water.org. “2026 United Nations Water Conference.” Accessed November 17, 2026.`},
  thread1028:{url:"",
    note:`2026 UN Water Conference in the UAE, “How Much Water Goes into an AI Prompt?,” <i>The Thread</i> (email newsletter), October 28, 2026.`,
    bib:`2026 UN Water Conference in the UAE. “How Much Water Goes into an AI Prompt?” <i>The Thread</i> (email newsletter), October 28, 2026.`},
  thread1113:{url:"",
    note:`2026 UN Water Conference in the UAE, “A Special Welcome from Matt Damon,” <i>The Thread</i> (email newsletter), November 13, 2026.`,
    bib:`2026 UN Water Conference in the UAE. “A Special Welcome from Matt Damon.” <i>The Thread</i> (email newsletter), November 13, 2026.`}
};


SRC.cpB = {url:"https://sdgs.un.org/sites/default/files/2026-09/26-01371%20ATT%20Concept%20Paper%20UNWC_IDB.pdf",
  note:`United Nations, “Interactive Dialogue B: Water for Prosperity,” concept paper, A/CONF.240/2026/5 (advance unedited, 2026),`,
  bib:`United Nations. “Interactive Dialogue B: Water for Prosperity.” Concept paper. A/CONF.240/2026/5. Advance unedited version, 2026.`};
SRC.cpC = {url:"https://sdgs.un.org/sites/default/files/2026-09/26-01378%20ATT%20Concept%20Paper%20UNWC_IDC.pdf",
  note:`United Nations, “Interactive Dialogue C: Water for Planet,” concept paper, A/CONF.240/2026/6 (advance unedited, 2026),`,
  bib:`United Nations. “Interactive Dialogue C: Water for Planet.” Concept paper. A/CONF.240/2026/6. Advance unedited version, 2026.`};
SRC.cpE = {url:"https://sdgs.un.org/sites/default/files/2026-09/26-01383%20ATT%20Concept%20Paper%20UNWC_IDE.pdf",
  note:`United Nations, “Interactive Dialogue E: Water in Multilateral Processes,” concept paper (advance unedited, 2026),`,
  bib:`United Nations. “Interactive Dialogue E: Water in Multilateral Processes.” Concept paper. Advance unedited version, 2026.`};

const STRATA_URL = "strata/index.html";

/* ============ DIALOGUES: one-line summary + a possible solution ============ */
const DAYS = [
  {date:"Tue 8 Dec", theme:"Water for Shared Prosperity", items:["D","B"]},
  {date:"Wed 9 Dec", theme:"Investments for Lives and Livelihoods", items:["F","A"]},
  {date:"Thu 10 Dec", theme:"Resilient Futures Together", items:["C","E"]}
];
const DLG = {
  A:{name:"Water for People", src:"cpA",
    summary:"2.1 billion people still lack safely managed drinking water and 3.4 billion safely managed sanitation; progress must run eight and six times faster to reach the 2030 targets.[cpA]",
    solution:[
      "<b>Fund the furthest-behind first.</b> Build national water and sanitation compacts around lifeline tariffs and targeted transfers, so the poorest households get a guaranteed minimum while others move toward cost recovery.[cpB]",
      "<b>Pay for results, not pipes.</b> Tie donor and budget money to verified working connections, with payments released only when services pass quality checks under the WHO/UNICEF Joint Monitoring Programme's definitions.[cpA]",
      "<b>Start with schools and clinics.</b> 742 million people had no water service at their health facility and 447 million children lacked basic drinking water at school in 2023; these sites reach the most people per dollar.[cpA]",
      "<b>Publish an equity scorecard every year</b> that tracks coverage for the poorest fifth, women and girls, and fragile settings, so gaps are visible to parliaments and voters."
    ]},
  B:{name:"Water for Prosperity", src:"cpB",
    summary:"Water is still treated as a free, limitless input, so it is underpriced, underinvested and used inefficiently, threatening growth and stability.[cpB]",
    solution:[
      "<b>Put water risk in the budget.</b> Finance ministries build water risk into GDP projections and fiscal plans, and central banks include it in financial supervision.[cpB]",
      "<b>Reform prices fairly.</b> Move tariffs toward full cost recovery with lifeline blocks for the poor, and redirect subsidies that reward over-use toward efficiency.[cpB]",
      "<b>Fix the leaks first.</b> Non-revenue water is about 126 billion m³ a year; performance-based contracts that pay operators for verified loss reduction turn leaks into revenue.[cpB]",
      "<b>Set rules for data centres.</b> Require metered water reporting, closed-loop or reclaimed-water cooling, and siting away from scarce basins, with independently verified water-positive commitments.[cpB]"
    ]},
  C:{name:"Water for Planet", src:"cpC",
    summary:"Freshwater ecosystems and the water cycle are being degraded by climate change, over-use and pollution, while about US$700 billion a year in harmful subsidies drives the damage.[cpC]",
    solution:[
      "<b>Give every basin a water budget.</b> Set science-based limits and environmental flows at basin and aquifer scale, and allocate within them transparently.[cpC]",
      "<b>Turn harmful subsidies into restoration.</b> Use the biodiversity framework's subsidy-reform targets to redirect part of the US$700 billion toward the Freshwater Challenge goal of restoring 300,000 km of rivers and 350 million hectares of wetlands by 2030.[cpC][cpB]",
      "<b>Close the early-warning gap.</b> Only 60% of countries had multi-hazard early-warning systems in 2024; put water data and warnings into national climate plans to meet the Early Warnings for All goal.[cpC]",
      "<b>Count nature as infrastructure.</b> Wetlands, floodplains and mangroves go into national accounts and investment plans next to dams and pipes."
    ]},
  D:{name:"Water for Cooperation", src:"cpD",
    summary:"153 countries share rivers, lakes and aquifers, but only 43 have arrangements covering 90% or more of them, and water is increasingly used as a target or tool of coercion.[cpD]",
    solution:[
      "<b>Reach 100 parties.</b> Pair every accession to the UN water conventions with funded legal and technical support, aiming at the “100 Parties” goal by 2030.[cpD]",
      "<b>Share data before sharing water.</b> Start with joint flood and drought warning, which costs little and saves lives: the Ratu River system between Nepal and India reportedly saved 169 lives in 2017.[cpD]",
      "<b>Govern the aquifers.</b> Only about 10 agreements cover specific transboundary aquifers; joint mapping and monitoring should come first.[cpD]",
      "<b>Protect water in war.</b> Reaffirm that drinking-water infrastructure is protected under international humanitarian law, and create a neutral incident register drawing on open data such as the Pacific Institute's chronology.[pirelease]"
    ]},
  E:{name:"Water in Multilateral Processes", src:"cpE",
    summary:"Water runs through every global agenda, but its governance is fragmented, and without a standing anchor the progress made under SDG 6 risks fading after 2030.[cpE]",
    solution:[
      "<b>Make water a standing UN process.</b> Hold regular General Assembly water conferences with negotiated outcomes, linking 2023, 2026 and 2028 into one follow-up cycle.[cpE]",
      "<b>Upgrade UN-Water.</b> Turn its secretariat into a resourced coordination office for the more than 30 UN entities with water roles.[cpE]",
      "<b>One scorecard for every pledge.</b> Only 22% of 2023 commitments analysed by WRI had numerical targets; require a number, an owner and a date, and report through UN-Water's integrated monitoring initiative.[wri][cpE]",
      "<b>Link the climate track.</b> Build on the nine water and sanitation indicators adopted under the UNFCCC at COP30 so climate plans and water targets report together.[cpE]"
    ]},
  F:{name:"Investments for Water", src:"cpF",
    summary:"Meeting SDG 6 needs more than US$1 trillion a year, yet over 90% of water finance is public and private capital is under 2% in low- and middle-income countries.[cpF]",
    solution:[
      "<b>Build bankable pipelines.</b> Country water financing platforms package projects so investors see a pipeline rather than one-offs.[cpB]",
      "<b>Mobilise one private dollar per public dollar</b> through guarantees and first-loss blended finance, as the concept paper proposes.[cpF]",
      "<b>Double the base.</b> Developing countries raise public water spending from about 0.24% to 0.5% of GDP, with at least 1% of investment set aside for workforce capacity.[cpF]",
      "<b>Write the rulebook.</b> A global water investment taxonomy and debt-for-water swaps give finance ministries and investors a common language.[cpF][cpB]"
    ]}
};

/* ============ STAKEHOLDERS ============ */
const STAKE = [
  {id:"gov", label:"Governments & diplomats", icon:"⚑",
    stake:[`At least 20 countries have no cooperative arrangements on their shared waters.[cpD]`,`Fewer than a third of countries are projected to have operational arrangements by 2030.[cpD]`],
    watch:[`New accessions to the UN water conventions toward the “100 Parties” goal.[cpD]`,`Language on protecting water infrastructure in conflict.`],
    value:[`Early-warning cooperation saves lives: 169 in Nepal in 2017 on one river.[cpD]`,`Water diplomacy offers neutral ground when other tracks stall.[unubank]`]},
  {id:"fin", label:"Investors & finance", icon:"◈",
    stake:[`World Bank infrastructure gap: US$6.7 trillion by 2030 and US$22.6 trillion by 2050.[cpF]`,`Only 3–5% of climate finance reaches water.[cpF]`],
    watch:[`A global water investment taxonomy.[cpF]`,`Blended-finance vehicles such as the Abu Dhabi Global Water Platform.[kt140]`],
    value:[`Every $1 invested in water, sanitation and hygiene returns about $3.90, by WHO's estimate in purchasing-power-adjusted dollars.[cpA]`,`Nature-based solutions investment doubled in a decade to US$49 billion in 2023.[cpF]`]},
  {id:"ops", label:"CEOs & operators", icon:"⚙",
    stake:[`Water-related business risks cost an estimated US$301 billion; addressing them costs under a fifth of that.[cpF]`,`Urban utilities lose 30–40% of water as non-revenue water on average.[cpF]`],
    watch:[`Disclosure rules for data-centre water use.[swm]`,`Desalination resilience after the 2026 Gulf strikes.[shehabi]`],
    value:[`Cutting non-revenue water can recover about US$21 million a year for a typical utility.[cpF]`,`Water security as a siting advantage for energy and AI investment.[wmedia]`]},
  {id:"hr", label:"Workforce", icon:"✦",
    stake:[`Fewer than 30% of countries have adequate water-sector workforce capacity.[cpF]`,`Only 72% of planned water budgets are actually spent.[cpF]`],
    watch:[`Commitments to put at least 1% of water investment into capacity development.[cpF]`,`Youth engagement: 370+ youth organisations backed the Water Youth Strategy.[cpD]`],
    value:[`Water-dependent sectors support 1.7 billion jobs.[cpF]`,`Skills are a bottleneck money alone cannot fix.`]},
  {id:"sec", label:"Security & defence", icon:"◆",
    stake:[`Desalination supplies 90–99% of drinking water in Bahrain, Kuwait and Qatar.[shehabi]`,`State actors have pre-positioned in water-sector networks.[cisa]`],
    watch:[`Whether outcome documents address attacks on water infrastructure.[cpD]`,`Cyber resilience funding for small utilities.[secaff]`],
    value:[`Water-conflict events rose to a record 420 in 2024; prevention is cheaper than response.[pifact]`,`Allied threat-sharing already covers water systems.[acsc]`]},
  {id:"pub", label:"The public", icon:"●",
    stake:[`Inadequate water, sanitation and hygiene causes at least 1.4 million deaths a year.[cpA]`,`In 7 of 10 households without water on premises, women and girls fetch it.[cpA]`],
    watch:[`Whether commitments carry numbers, dates and owners, unlike most in 2023.[wri]`,`Pacific commitments: 5 million people lack basic drinking water.[unicefpac]`],
    value:[`Safe water at home frees time for school and work.[cpA]`,`Transparent tracking lets the public hold pledges to account.`]}
];

SRC.cisc = {url:"https://www.cisc.gov.au/information-for-your-industry/water-and-sewerage/legislation-regulation-and-compliance/soci-act-2018",
  note:`Cyber and Infrastructure Security Centre, “SOCI Act 2018 for Water and Sewerage,” Australian Government, Department of Home Affairs, accessed November 17, 2026,`,
  bib:`Cyber and Infrastructure Security Centre. “SOCI Act 2018 for Water and Sewerage.” Australian Government, Department of Home Affairs. Accessed November 17, 2026.`};

/* ============ SOLUTIONS: recommendations by lens ============ */
const SOL_WHEN = {now:"Before 8 Dec", year:"Within 12 months", y2030:"By 2030"};
const SOL_LENS = {security:"Water as security", conflict:"Water and conflict", aus:"Australia & Indo-Pacific"};
const SOL = [
  {id:"s1", lens:"security", when:"now", who:["Gulf states","UN & multilateral"],
    title:"Treat desalination as a civilian lifeline",
    act:"Use the Abu Dhabi outcome to reaffirm that drinking-water infrastructure is protected under international humanitarian law, and pair it with practical resilience: back-up storage, interconnected supply and rapid repair plans for the plants cities depend on.",
    why:"Desalination supplies 90–99% of drinking water in Bahrain, Kuwait and Qatar, and plants were reported hit in 2026.[shehabi] AP reported that more than 90% of the Gulf's desalinated water comes from just 56 plants, and that the Geneva Conventions prohibit attacking such infrastructure.[ap]"},
  {id:"s2", lens:"security", when:"now", who:["Utilities & operators","Governments"],
    title:"Close the exposed-controller gap",
    act:"Every water utility checks its own internet-facing control systems and takes them offline or behind secure access, with funded help for small utilities that lack cyber staff.",
    why:"More than 100 internet-exposed systems in the US water sector were hit in July 2026, and CISA has published guidance on finding them.[secaff] Allied agencies assess state actors have pre-positioned in water networks.[cisa]"},
  {id:"s3", lens:"security", when:"year", who:["Australia"],
    title:"Hold Australia's water utilities to the cyber standard of the threat",
    act:"Use the Security of Critical Infrastructure Act's existing water and sewerage coverage to apply enhanced cyber obligations to the systems of highest national significance, and mirror allied water-sector advisories in Australian guidance.",
    why:"The Act already covers critical water assets, and systems of national significance can face enhanced cyber security obligations.[cisc] Australia's Cyber Security Centre assessed that Australian infrastructure could be vulnerable to the activity CISA described.[acsc]"},
  {id:"s4", lens:"security", when:"year", who:["Governments","Utilities & operators"],
    title:"Measure AI's water in one agreed unit",
    act:"Agree a disclosure standard that reports both the water a data centre consumes on site and the water footprint of the electricity it uses, metered and published annually.",
    why:"2030 estimates range from 644 billion to 9.3 trillion litres depending on what is counted.[rystad][unuai] The Prosperity concept paper calls for mandatory monitoring of data-centre water.[cpB]"},
  {id:"c1", lens:"conflict", when:"y2030", who:["UN & multilateral","Governments"],
    title:"Treat treaty accession as conflict prevention",
    act:"Back the “100 Parties” push for the UN water conventions with funded legal and technical help for each acceding country, prioritising basins where violence over water is rising.",
    why:"Only 43 of 153 countries sharing waters have arrangements covering 90% or more of them; the conventions have 59 and 42 parties.[cpD]"},
  {id:"c2", lens:"conflict", when:"year", who:["Governments"],
    title:"Start with shared early warning",
    act:"Neighbouring states that cannot yet agree on allocation agree first on sharing flood and drought data. It is cheap, apolitical and builds the trust later deals need.",
    why:"A flood early-warning system on the Ratu River between Nepal and India reportedly saved 169 lives in 2017.[cpD]"},
  {id:"c3", lens:"conflict", when:"year", who:["UN & multilateral","Researchers"],
    title:"Create a neutral register of attacks on water",
    act:"Build a UN-endorsed incident register on top of open data such as the Pacific Institute's chronology, with verification standards that let disputed claims be logged as disputed.",
    why:"Violence over water reached a record 420 reported events in 2024.[pirelease] Responsibility for the 2026 Gulf desalination strikes is still contested.[shehabi]"},
  {id:"c4", lens:"conflict", when:"y2030", who:["Governments","UN & multilateral"],
    title:"Govern the aquifers before they run dry",
    act:"Start joint mapping and monitoring of shared aquifers, the step that comes before any agreement on use.",
    why:"Only about 10 agreements cover specific transboundary aquifers worldwide.[cpD]"},
  {id:"a1", lens:"aus", when:"now", who:["Australia"],
    title:"Carry the Pacific from Antalya to Abu Dhabi",
    act:"As COP31's President of Negotiations, Australia brings the Pacific's climate priorities into the water conference, framing Pacific water security as climate adaptation rather than aid.",
    why:"Australia holds the President of Negotiations role for COP31.[dcceew] Five million people in the Pacific lack basic drinking water.[unicefpac]"},
  {id:"a2", lens:"aus", when:"y2030", who:["Australia","Pacific partners"],
    title:"Make a Pacific water commitment with numbers",
    act:"Announce a measurable Pacific water and sanitation commitment, delivered through existing partners such as the Australian Water Partnership and the Pacific Water and Wastewater Association, with a public annual scorecard.",
    why:"At current pace basic drinking-water coverage reaches only 64% by 2030 and basic sanitation 33%.[unicefpac] The Australian Water Partnership is DFAT-funded and already works with the Pacific's peak water body.[insidewater][pwwa]"},
  {id:"a3", lens:"aus", when:"year", who:["Australia","Utilities & operators"],
    title:"Plan data centres around water, not after it",
    act:"Require metered water reporting and non-drinking-water cooling for new data centres, and price their water to reflect the peak demand they create.",
    why:"Sydney Water projects data centres could take up to a quarter of the city's available water by 2035.[reuters] NSW's pricing regulator is examining how data centres should pay for peak demand.[wmedia] Federal expectations now include sustainable water use.[swm]"},
  {id:"a4", lens:"aus", when:"now", who:["Australia","UN & multilateral"],
    title:"Keep civil society in the room",
    act:"Press for funded, structured stakeholder participation in the conference's follow-up, consistent with Australia's earlier position.",
    why:"Australia, Canada and New Zealand said in 2024 that the UN had not upheld best practice on civil society participation.[canz] The Multilateral Processes paper proposes funding stakeholders from developing countries.[cpE]"}
];

/* ============ SITE HELPERS ============ */
const PAGES = [
  ["index.html","Home","Surface"],
  ["brief.html","Brief","01"],
  ["conference.html","Conference","02"],
  ["lenses.html","Three lenses","03"],
  ["stakeholders.html","Stakeholders","04"],
  ["watchlist.html","Watchlist","05"],
  ["solutions.html","Solutions","06"],
  ["live.html","Live","07"],
  ["sources.html","Sources","08"]
];
const REF_ORDER=[];
function refNum(k){ let i=REF_ORDER.indexOf(k); if(i<0){REF_ORDER.push(k); i=REF_ORDER.length-1;} return i+1; }
function sup(keys){ return (keys||[]).map(k=>`<sup class="fn" data-s="${k}"></sup>`).join(""); }
function withRefs(str){ return str.replace(/\[([A-Za-z0-9]+)\]/g,(m,k)=> SRC[k]? sup([k]) : m); }
function paintRefs(root){
  (root||document).querySelectorAll("sup.fn[data-s]").forEach(el=>{
    const k=el.dataset.s, s=SRC[k]; if(!s) return;
    const n=refNum(k), plain=s.note.replace(/<[^>]+>/g,"").replace(/"/g,"&quot;");
    el.innerHTML=`<a href="#n${n}" aria-label="Note ${n}" title="${plain}">${n}</a>`;
  });
}
function renderNotes(id){
  const el=document.getElementById(id); if(!el) return;
  el.innerHTML=REF_ORDER.map((k,i)=>{ const s=SRC[k]; return `<li id="n${i+1}">${s.note}${s.url?` <a href="${s.url}">${s.url}</a>.`:""}</li>`; }).join("");
}
function fmtDate(iso){ if(iso.length===7){ const [y,m]=iso.split("-"); return new Date(+y,+m-1,1).toLocaleDateString("en-AU",{month:"short",year:"numeric"}); } return new Date(iso+"T00:00:00").toLocaleDateString("en-AU",{day:"numeric",month:"short",year:"numeric"}); }
function renderChrome(active){
  const h=document.getElementById("site-header");
  if(h) h.innerHTML=`<div class="wrap bar-inner"><a class="brandmark" href="index.html#home"><span class="wl" aria-hidden="true"></span>Below the Waterline</a>
    <nav aria-label="Pages">${PAGES.slice(1).map(([u,l,n])=>`<a href="${u}"${u===active?' aria-current="page"':""}><span class="pn">${n}</span>${l}</a>`).join("")}<a class="ext" href="${STRATA_URL}"><span class="pn">09</span>Strata</a></nav></div>`;
  const i=PAGES.findIndex(p=>p[0]===active), prev=PAGES[i-1], next=PAGES[i+1];
  const f=document.getElementById("site-footer");
  if(f) f.innerHTML=`<div class="wrap pager">${prev?`<a class="pg prev" href="${prev[0]==="index.html"?"index.html#home":prev[0]}"><span>← Previous</span>${prev[1]}</a>`:"<span></span>"}${next?`<a class="pg next" href="${next[0]}"><span>Next →</span>${next[1]}</a>`:"<span></span>"}</div>
    <div class="wrap foot"><span>Below the Waterline · an independent live brief by Ari · updated ${fmtDate(LIVE.updated)}</span><span>Not affiliated with the UN or the conference co-hosts · Companion: <a href="${STRATA_URL}">Strata, 5,000 years of water security</a></span></div>`;
}
function finishPage(){ paintRefs(); renderNotes("notes"); }

/* animated waterline under each page head */
function drawWaves(){
  document.querySelectorAll("svg.wave").forEach(svg=>{
    const mk=(amp,len,y)=>{ let d=`M0 ${y}`; for(let x=0;x<=2000;x+=20){ d+=` L${x} ${(y+Math.sin(x/len*Math.PI*2)*amp).toFixed(1)}`; } return d; };
    svg.innerHTML=`<path class="w1" d="${mk(6,200,22)}"/><path class="w2" d="${mk(4,200,30)}"/>`;
  });
}
function pageHead(n,title,lede,eyebrow){
  return `<div class="page-head"><div class="wrap"><div class="depth"><b>${n}</b><span>${eyebrow}</span></div><h1>${title}</h1>${lede?`<p class="lede">${lede}</p>`:""}</div><svg class="wave" viewBox="0 0 1600 46" preserveAspectRatio="none" aria-hidden="true"></svg></div>`;
}

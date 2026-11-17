/* Strata: shared data, sources and helpers.
   Every figure in EVENTS, ERA and FUTURE carries source keys (src) that resolve to SOURCES below. */

const BTW_URL = "../index.html#home";
const ACC = "accessed November 17, 2026";

/* ============ SOURCES: Chicago Manual of Style, 17th ed., notes-bibliography ============ */
const SOURCES = {
  cullen:{url:"https://doi.org/10.1130/0091-7613(2000)28%3C379:CCATCO%3E2.0.CO;2",
    note:`H. M. Cullen et al., “Climate Change and the Collapse of the Akkadian Empire: Evidence from the Deep Sea,” <i>Geology</i> 28, no. 4 (2000): 379–82,`,
    bib:`Cullen, H. M., P. B. deMenocal, S. Hemming, G. Hemming, F. H. Brown, T. Guilderson, and F. Sirocko. “Climate Change and the Collapse of the Akkadian Empire: Evidence from the Deep Sea.” <i>Geology</i> 28, no. 4 (2000): 379–82.`},
  giosan:{url:"https://doi.org/10.1073/pnas.1112743109",
    note:`Liviu Giosan et al., “Fluvial Landscapes of the Harappan Civilization,” <i>Proceedings of the National Academy of Sciences</i> 109, no. 26 (2012): E1688–94,`,
    bib:`Giosan, Liviu, Peter D. Clift, Mark G. Macklin, Dorian Q. Fuller, Stefan Constantinescu, Julie A. Durcan, Thomas Stevens, et al. “Fluvial Landscapes of the Harappan Civilization.” <i>Proceedings of the National Academy of Sciences</i> 109, no. 26 (2012): E1688–94.`},
  whoi:{url:"https://www.sciencedaily.com/releases/2012/05/120528154943.htm",
    note:`Woods Hole Oceanographic Institution, “Climate Change Led to Collapse of Ancient Indus Civilization, Study Finds,” <i>ScienceDaily</i>, May 30, 2012,`,
    bib:`Woods Hole Oceanographic Institution. “Climate Change Led to Collapse of Ancient Indus Civilization, Study Finds.” <i>ScienceDaily</i>, May 30, 2012.`},
  kaniewski:{url:"https://doi.org/10.1371/journal.pone.0071004",
    note:`David Kaniewski et al., “Environmental Roots of the Late Bronze Age Crisis,” <i>PLoS ONE</i> 8, no. 8 (2013): e71004,`,
    bib:`Kaniewski, David, Elise Van Campo, Joël Guiot, Sabine Le Burel, Thierry Otto, and Cecile Baeteman. “Environmental Roots of the Late Bronze Age Crisis.” <i>PLoS ONE</i> 8, no. 8 (2013): e71004.`},
  evans:{url:"https://doi.org/10.1126/science.aas9871",
    note:`Nicholas P. Evans et al., “Quantification of Drought during the Collapse of the Classic Maya Civilization,” <i>Science</i> 361, no. 6401 (2018): 498–501,`,
    bib:`Evans, Nicholas P., Thomas K. Bauska, Fernando Gázquez-Sánchez, Mark Brenner, Jason H. Curtis, and David A. Hodell. “Quantification of Drought during the Collapse of the Classic Maya Civilization.” <i>Science</i> 361, no. 6401 (2018): 498–501.`},
  cam2018:{url:"https://www.cam.ac.uk/research/news/scientists-measure-severity-of-drought-during-the-maya-collapse",
    note:`University of Cambridge, “Scientists Measure Severity of Drought during the Maya Collapse,” news release, August 2, 2018,`,
    bib:`University of Cambridge. “Scientists Measure Severity of Drought during the Maya Collapse.” News release, August 2, 2018.`},
  bocinsky:{url:"https://doi.org/10.1038/ncomms6618",
    note:`R. Kyle Bocinsky and Timothy A. Kohler, “A 2,000-Year Reconstruction of the Rain-Fed Maize Agricultural Niche in the US Southwest,” <i>Nature Communications</i> 5 (2014): 5618,`,
    bib:`Bocinsky, R. Kyle, and Timothy A. Kohler. “A 2,000-Year Reconstruction of the Rain-Fed Maize Agricultural Niche in the US Southwest.” <i>Nature Communications</i> 5 (2014): 5618.`},
  wsu:{url:"https://www.eurekalert.org/news-releases/681955",
    note:`Washington State University, “Localized Climate Change Contributed to Ancient Southwest Depopulation,” news release, <i>EurekAlert!</i>, December 4, 2014,`,
    bib:`Washington State University. “Localized Climate Change Contributed to Ancient Southwest Depopulation.” News release. <i>EurekAlert!</i>, December 4, 2014.`},
  buckley:{url:"https://doi.org/10.1073/pnas.0910827107",
    note:`Brendan M. Buckley et al., “Climate as a Contributing Factor in the Demise of Angkor, Cambodia,” <i>Proceedings of the National Academy of Sciences</i> 107, no. 15 (2010): 6748–52,`,
    bib:`Buckley, Brendan M., Kevin J. Anchukaitis, Daniel Penny, Roland Fletcher, Edward R. Cook, Masaki Sano, Le Canh Nam, et al. “Climate as a Contributing Factor in the Demise of Angkor, Cambodia.” <i>Proceedings of the National Academy of Sciences</i> 107, no. 15 (2010): 6748–52.`},
  lamont:{url:"https://sciencedaily.com/releases/2010/03/100329203547.htm",
    note:`Lamont-Doherty Earth Observatory, “Did Climate Influence Angkor's Collapse?,” <i>ScienceDaily</i>, March 30, 2010,`,
    bib:`Lamont-Doherty Earth Observatory. “Did Climate Influence Angkor's Collapse?” <i>ScienceDaily</i>, March 30, 2010.`},
  phys2010:{url:"https://phys.org/news/2010-03-climate-angkor-collapse.pdf",
    note:`“Did Climate Influence Angkor's Collapse?,” <i>Phys.org</i>, March 29, 2010,`,
    bib:`“Did Climate Influence Angkor's Collapse?” <i>Phys.org</i>, March 29, 2010.`},
  giannini:{url:"https://doi.org/10.1126/science.1089357",
    note:`A. Giannini, R. Saravanan, and P. Chang, “Oceanic Forcing of Sahel Rainfall on Interannual to Interdecadal Time Scales,” <i>Science</i> 302, no. 5647 (2003): 1027–30,`,
    bib:`Giannini, A., R. Saravanan, and P. Chang. “Oceanic Forcing of Sahel Rainfall on Interannual to Interdecadal Time Scales.” <i>Science</i> 302, no. 5647 (2003): 1027–30.`},
  lu:{url:"https://doi.org/10.1029/2005GL023316",
    note:`Jian Lu and Thomas L. Delworth, “Oceanic Forcing of the Late 20th Century Sahel Drought,” <i>Geophysical Research Letters</i> 32 (2005): L22706,`,
    bib:`Lu, Jian, and Thomas L. Delworth. “Oceanic Forcing of the Late 20th Century Sahel Drought.” <i>Geophysical Research Letters</i> 32 (2005): L22706.`},
  pern:{url:"https://pern.ciesin.columbia.edu/sites/default/files/content/cyberseminar/Giannini_SahelCyberseminar.pdf",
    note:`Alessandra Giannini, “Sahel Drought and Global Climate Change,” Population-Environment Research Network Cyberseminar, September 2007,`,
    bib:`Giannini, Alessandra. “Sahel Drought and Global Climate Change.” Population-Environment Research Network Cyberseminar, September 2007.`},
  micklin1988:{url:"https://soviethistory.msu.edu/assets/pdf/micklin.pdf",
    note:`Philip P. Micklin, “Desiccation of the Aral Sea: A Water Management Disaster in the Soviet Union,” <i>Science</i> 241, no. 4870 (1988): 1170–76,`,
    bib:`Micklin, Philip P. “Desiccation of the Aral Sea: A Water Management Disaster in the Soviet Union.” <i>Science</i> 241, no. 4870 (1988): 1170–76.`},
  micklinSA:{url:"https://www.zin.ru/labs/brackish/pdfs/2008/Reclaming_the_Aral_Sea.pdf",
    note:`Philip Micklin and Nikolay V. Aladin, “Reclaiming the Aral Sea,” <i>Scientific American</i>, April 2008,`,
    bib:`Micklin, Philip, and Nikolay V. Aladin. “Reclaiming the Aral Sea.” <i>Scientific American</i>, April 2008.`},
  vandijk:{url:"https://doi.org/10.1002/wrcr.20123",
    note:`Albert I. J. M. van Dijk et al., “The Millennium Drought in Southeast Australia (2001–2009): Natural and Human Causes and Implications for Water Resources, Ecosystems, Economy, and Society,” <i>Water Resources Research</i> 49, no. 2 (2013): 1040–57,`,
    bib:`van Dijk, Albert I. J. M., Hylke E. Beck, Russell S. Crosbie, Richard A. M. de Jeu, Yi Y. Liu, Geoff M. Podger, Bertrand Timbal, and Neil R. Viney. “The Millennium Drought in Southeast Australia (2001–2009): Natural and Human Causes and Implications for Water Resources, Ecosystems, Economy, and Society.” <i>Water Resources Research</i> 49, no. 2 (2013): 1040–57.`},
  kelley:{url:"https://doi.org/10.1073/pnas.1421533112",
    note:`Colin P. Kelley et al., “Climate Change in the Fertile Crescent and Implications of the Recent Syrian Drought,” <i>Proceedings of the National Academy of Sciences</i> 112, no. 11 (2015): 3241–46,`,
    bib:`Kelley, Colin P., Shahrzad Mohtadi, Mark A. Cane, Richard Seager, and Yochanan Kushnir. “Climate Change in the Fertile Crescent and Implications of the Recent Syrian Drought.” <i>Proceedings of the National Academy of Sciences</i> 112, no. 11 (2015): 3241–46.`},
  selby:{url:"https://doi.org/10.1016/j.polgeo.2017.05.007",
    note:`Jan Selby et al., “Climate Change and the Syrian Civil War Revisited,” <i>Political Geography</i> 60 (2017): 232–44,`,
    bib:`Selby, Jan, Omar S. Dahi, Christiane Fröhlich, and Mike Hulme. “Climate Change and the Syrian Civil War Revisited.” <i>Political Geography</i> 60 (2017): 232–44.`},
  hendrix:{url:"https://courses.seas.harvard.edu/climate/eli/Courses/global-change-debates/Sources/Social-upheaval/more/Hendrix_CommentPH2017.pdf",
    note:`Cullen S. Hendrix, “A Comment on ‘Climate Change and the Syrian Civil War Revisited,’” <i>Political Geography</i> 60 (2017): 251–52,`,
    bib:`Hendrix, Cullen S. “A Comment on ‘Climate Change and the Syrian Civil War Revisited.’” <i>Political Geography</i> 60 (2017): 251–52.`},
  groundup:{url:"https://groundup.news/article/how-cape-town-more-halved-its-water-usage/",
    note:`“How Cape Town More Than Halved Its Water Usage,” <i>GroundUp</i>, March 2018,`,
    bib:`“How Cape Town More Than Halved Its Water Usage.” <i>GroundUp</i>, March 2018.`},
  uct:{url:"https://news.uct.ac.za/article/-2018-03-01-cape-town-did-come-together-to-save-water",
    note:`University of Cape Town, “Cape Town Did Come Together to Save Water,” UCT News, March 1, 2018,`,
    bib:`University of Cape Town. “Cape Town Did Come Together to Save Water.” UCT News, March 1, 2018.`},
  bruhl:{url:"https://doi.org/10.1016/j.wre.2021.100177",
    note:`Johanna Brühl and Martine Visser, “The Cape Town Drought: A Study of the Combined Effectiveness of Measures Implemented to Prevent ‘Day Zero,’” <i>Water Resources and Economics</i> 34 (2021): 100177,`,
    bib:`Brühl, Johanna, and Martine Visser. “The Cape Town Drought: A Study of the Combined Effectiveness of Measures Implemented to Prevent ‘Day Zero.’” <i>Water Resources and Economics</i> 34 (2021): 100177.`},
  kakhovka:{url:"https://ukraine.un.org/en/node/249742",
    note:`United Nations in Ukraine, “Kakhovka Dam Destruction Inflicted US$14 Billion Damage and Loss on Ukraine: Government of Ukraine–UN Report,” press release, October 17, 2023,`,
    bib:`United Nations in Ukraine. “Kakhovka Dam Destruction Inflicted US$14 Billion Damage and Loss on Ukraine: Government of Ukraine–UN Report.” Press release, October 17, 2023.`},
  ap2023:{url:"https://development.triblive.com/?p=3248077",
    note:`Associated Press, “Ukraine Rushes Drinking Water to Flooded Areas as Environmental Damage Mounts from Dam Break,” June 7, 2023, republished by <i>TribLIVE</i>,`,
    bib:`Associated Press. “Ukraine Rushes Drinking Water to Flooded Areas as Environmental Damage Mounts from Dam Break.” June 7, 2023. Republished by <i>TribLIVE</i>.`},
  shehabi:{url:"https://arabcenterdc.org/resource/war-on-iran-the-dangers-of-attacking-water-desalination-plants-in-the-gulf/",
    note:`Manal Shehabi, “War on Iran: The Dangers of Attacking Water Desalination Plants in the Gulf,” Arab Center Washington DC, April 28, 2026,`,
    bib:`Shehabi, Manal. “War on Iran: The Dangers of Attacking Water Desalination Plants in the Gulf.” Arab Center Washington DC, April 28, 2026.`},
  pifact:{url:"https://pacinst.org/wp-content/uploads/2025/11/Water-Conflict-Chronology_fact-sheet_2025_final.pdf",
    note:`Morgan Shimabuku et al., <i>Water Conflict Chronology 2025 Update</i>, fact sheet (Oakland, CA: Pacific Institute, November 2025),`,
    bib:`Shimabuku, Morgan, Peter Gleick, Jessica Dery, and Lena Wilson. <i>Water Conflict Chronology 2025 Update</i>. Fact sheet. Oakland, CA: Pacific Institute, November 2025.`},
  pirelease:{url:"https://pacinst.org/announcement/pacific-institute-analysis-finds-surge-in-reported-water-related-violence/",
    note:`Pacific Institute, “Pacific Institute Analysis Finds Surge in Reported Water-Related Violence,” announcement, November 11, 2025,`,
    bib:`Pacific Institute. “Pacific Institute Analysis Finds Surge in Reported Water-Related Violence.” Announcement, November 11, 2025.`},
  wef:{url:"https://www.weforum.org/stories/2023/08/countries-extremely-high-water-stress/",
    note:`Samantha Kuzma, “25 Countries Face Extremely High Water Stress, Study Finds,” World Economic Forum, August 2023, republishing World Resources Institute Aqueduct 4.0 findings,`,
    bib:`Kuzma, Samantha. “25 Countries Face Extremely High Water Stress, Study Finds.” World Economic Forum, August 2023.`},
  dte:{url:"https://www.downtoearth.org.in/water/quarter-of-global-population-faces-extremely-high-water-stress-each-year-91215",
    note:`Susan Chacko, “Quarter of Global Population Faces Extremely High Water Stress Each Year,” <i>Down To Earth</i>, August 2023,`,
    bib:`Chacko, Susan. “Quarter of Global Population Faces Extremely High Water Stress Each Year.” <i>Down To Earth</i>, August 2023.`},
  dawn:{url:"https://www.dawn.com/news/1770771",
    note:`“Pakistan Classified under ‘High’ Water Stress Category,” <i>Dawn</i>, August 18, 2023,`,
    bib:`“Pakistan Classified under ‘High’ Water Stress Category.” <i>Dawn</i>, August 18, 2023.`},
  ipccch4:{url:"https://www.ipcc.ch/report/ar6/wg2/chapter/chapter-4",
    note:`Martina Angela Caretta et al., “Water,” in <i>Climate Change 2022: Impacts, Adaptation and Vulnerability</i>, Contribution of Working Group II to the Sixth Assessment Report of the Intergovernmental Panel on Climate Change (Cambridge: Cambridge University Press, 2022), 551–712,`,
    bib:`Caretta, Martina Angela, Aditi Mukherji, et al. “Water.” In <i>Climate Change 2022: Impacts, Adaptation and Vulnerability</i>. Contribution of Working Group II to the Sixth Assessment Report of the Intergovernmental Panel on Climate Change, 551–712. Cambridge: Cambridge University Press, 2022.`},
  wsh:{url:"https://watersecurityhub.org/resources/key-lessons-latest-ipcc-report",
    note:`Water Security and Sustainable Development Hub, “Key Lessons from the Latest IPCC Report,” ${ACC},`,
    bib:`Water Security and Sustainable Development Hub. “Key Lessons from the Latest IPCC Report.” Accessed November 17, 2026.`},
  wwdr:{url:"https://www.developmentaid.org/news-stream/post/159206/imminent-risk-water-crisis",
    note:`UNESCO, “Imminent Risk of a Global Water Crisis,” press release on the <i>United Nations World Water Development Report 2023</i>, March 2023, republished by DevelopmentAid,`,
    bib:`UNESCO. “Imminent Risk of a Global Water Crisis.” Press release on the <i>United Nations World Water Development Report 2023</i>, March 2023. Republished by DevelopmentAid.`},
  gcew:{url:"https://www.al-monitor.com/originals/2024/10/water-crisis-threatening-world-food-production-report",
    note:`Agence France-Presse, “Water Crisis Threatening World Food Production: Report,” <i>Al-Monitor</i>, October 16, 2024, reporting Global Commission on the Economics of Water, <i>The Economics of Water: Valuing the Hydrological Cycle as a Global Common Good</i> (2024),`,
    bib:`Agence France-Presse. “Water Crisis Threatening World Food Production: Report.” <i>Al-Monitor</i>, October 16, 2024.`},
  jmp:{url:"https://data.unicef.org/resources/jmp-report-2025/",
    note:`WHO and UNICEF, <i>Progress on Household Drinking Water, Sanitation and Hygiene 2000–2024: Special Focus on Inequalities</i> (New York: UNICEF and WHO, 2025),`,
    bib:`WHO and UNICEF. <i>Progress on Household Drinking Water, Sanitation and Hygiene 2000–2024: Special Focus on Inequalities</i>. New York: UNICEF and WHO, 2025.`},
  cpA:{url:"https://sdgs.un.org/sites/default/files/2026-09/26-01369%20ATT%20Concept%20Paper%20UNWC_IDA.pdf",
    note:`United Nations, “Interactive Dialogue A: Water for People,” concept paper, A/CONF.240/2026/4 (advance unedited, 2026),`,
    bib:`United Nations. “Interactive Dialogue A: Water for People.” Concept paper. A/CONF.240/2026/4. Advance unedited version, 2026.`},
  cpF:{url:"https://sdgs.un.org/sites/default/files/2026-09/26-01384%20ATT%20Concept%20Paper%20UNWC_IDF.pdf",
    note:`United Nations, “Interactive Dialogue F: Investments for Water,” concept paper, A/CONF.240/2026/9 (advance unedited, 2026),`,
    bib:`United Nations. “Interactive Dialogue F: Investments for Water.” Concept paper. A/CONF.240/2026/9. Advance unedited version, 2026.`},
  unubank:{url:"https://unu.edu/inweh/news/world-enters-era-of-global-water-bankruptcy",
    note:`United Nations University Institute for Water, Environment and Health, “World Enters ‘Era of Global Water Bankruptcy,’” news release, January 20, 2026,`,
    bib:`United Nations University Institute for Water, Environment and Health. “World Enters ‘Era of Global Water Bankruptcy.’” News release, January 20, 2026.`},
  unuai:{url:"https://unu.edu/inweh/news/environmental-cost-of-AIs-Enrgy-Use-Carbon-water-and-land-footprints",
    note:`United Nations University Institute for Water, Environment and Health, “Rising Emissions, Depleting Water and Vanishing Land—UN Scientists: AI Is Threatening Natural Resources for Billions,” news release, June 3, 2026,`,
    bib:`United Nations University Institute for Water, Environment and Health. “Rising Emissions, Depleting Water and Vanishing Land—UN Scientists: AI Is Threatening Natural Resources for Billions.” News release, June 3, 2026.`}
};

/* ============ EVENT TYPES ============ */
const TYPES = {
  collapse:{label:"Collapse or abandonment", color:"#a8382b"},
  decline:{label:"Decline or migration", color:"#c27c12"},
  crisis:{label:"Severe water crisis", color:"#8a5a2b"},
  conflict:{label:"Conflict involving water", color:"#5a3e8e"},
  adapt:{label:"Adaptation that worked", color:"#1f7a5a"},
  proj:{label:"Published projection", color:"#256f96"}
};

/* ============ EVENTS: years are astronomical (negative = BCE) ============ */
const EVENTS = [
  {id:"akkad", name:"Akkadian Empire", place:"Northern Mesopotamia (Tell Leilan, Syria)", pts:[[41.51,36.96]], start:-2075, end:-1775, type:"collapse",
    evidence:"Marine sediment core, Gulf of Oman: wind-blown dust from Mesopotamia",
    metric:"~300 years", metricLabel:"of abrupt aridity, with onset dated to 4025 ± 125 calendar years before present",
    summary:"A sudden rise in Mesopotamian dust reaching the Gulf of Oman lines up with the abandonment of the empire's northern grain lands.",
    debate:"The collapse was long attributed to invaders and political disintegration. The core establishes timing, not mechanism.",
    src:["cullen"], page:"civilisations.html#akkad"},
  {id:"harappa", name:"Indus (Harappan) civilisation", place:"Indus and Ghaggar-Hakra plains (Harappa, Pakistan)", pts:[[72.86,30.63]], start:-1900, end:-1000, type:"decline",
    evidence:"River landforms and sediment dating across the Indus plains",
    metric:"~600 years", metricLabel:"of urbanism before settled area and city sizes shrank, from about 3,900 years ago",
    summary:"As the monsoon weakened, the monsoon-fed rivers that supported flood-based farming dried or became seasonal, and settlement shifted east.",
    debate:"Invasions, social instability and falling trade remain in the literature alongside the climate explanation.",
    src:["giosan","whoi"], page:"civilisations.html#harappa"},
  {id:"lba", name:"Late Bronze Age Eastern Mediterranean", place:"Cyprus and the Levant (Hala Sultan Tekke)", pts:[[33.61,34.88]], start:-1250, end:-1100, type:"collapse",
    evidence:"Pollen from a coastal lake core, with radiocarbon chronology",
    metric:"~3,200 years ago", metricLabel:"the Aegean, Egyptian, Syro-Palestinian and Hittite worlds fell into crisis",
    summary:"Pollen evidence from Cyprus points to abrupt, drought-driven famine, linked in time to the Sea Peoples' invasions.",
    debate:"Ancient texts blame the Sea Peoples. The study reads famine, invasion, war and economic collapse as one compound crisis.",
    src:["kaniewski"], page:"civilisations.html#lba"},
  {id:"maya", name:"Classic Maya", place:"Yucatán Peninsula (Lake Chichancanab, Mexico)", pts:[[-88.77,19.87]], start:800, end:1000, type:"collapse",
    evidence:"Isotopes of ancient lake water trapped in gypsum crystals",
    metric:"−41 to −54%", metricLabel:"annual rainfall, with intervals of up to −70% at peak drought",
    summary:"In the 9th century the southern lowland cities were abandoned and dynasties ended, as annual rainfall fell by roughly half.",
    debate:"Invasion, war, environmental degradation and collapsing trade are also proposed. The researchers call climate's role somewhat controversial.",
    src:["evans","cam2018"], page:"civilisations.html#maya"},
  {id:"pueblo", name:"Ancestral Pueblo, Mesa Verde", place:"Southwest Colorado, USA", pts:[[-108.49,37.18]], start:1250, end:1300, type:"decline",
    evidence:"Tree rings, used to reconstruct where rain-fed maize could grow",
    metric:"~40,000", metricLabel:"people left the Mesa Verde area as drought shrank the maize-growing niche",
    summary:"Farmers had long clustered in refuges reliably inside the maize niche. In the late 1200s people moved, and the Pajarito Plateau of the northern Rio Grande grew sharply.",
    debate:"The authors stress very local climate effects: what mattered was whether a few square kilometres still got enough rain.",
    src:["bocinsky","wsu"], page:"civilisations.html#pueblo"},
  {id:"angkor", name:"Khmer Empire, Angkor", place:"Siem Reap, Cambodia", pts:[[103.87,13.41]], start:1330, end:1430, type:"decline",
    evidence:"759-year tree-ring record from cypress trees in Vietnam's highlands",
    metric:"1402–1403", metricLabel:"the driest and third-driest years in 760 years, back to back",
    summary:"A mega-drought from the 1330s to 1360s was followed by a shorter, more severe one from the 1400s to 1420s, punctuated by intense monsoons that may have damaged the city's water network.",
    debate:"The lead author does not say climate caused the collapse; Angkor faced social, political and cultural problems too.",
    src:["buckley","lamont","phys2010"], page:"civilisations.html#angkor"},
  {id:"sahel", name:"Sahel drought", place:"Senegal to Ethiopia", pts:[[2.1,14.5]], start:1968, end:1990, type:"crisis",
    evidence:"Instrumental rainfall records and climate models forced by observed sea temperatures",
    metric:"−20 to −50%", metricLabel:"rainfall across the Sahel during the late 20th-century drying",
    summary:"A prolonged drought from the late 1960s that models link to warming of the tropical oceans, especially the Indian Ocean.",
    debate:"Early explanations blamed local land degradation. Ocean-forcing studies moved the explanation to global sea-surface temperatures.",
    src:["lu","giannini","pern"], page:"modern.html#sahel"},
  {id:"aral", name:"Aral Sea", place:"Kazakhstan and Uzbekistan", pts:[[59.6,45.0]], start:1960, end:2007, type:"crisis",
    evidence:"Hydrological surveys and satellite imagery",
    metric:"10%", metricLabel:"of its 1960 size by 2007, after irrigation diverted its rivers",
    summary:"Once the world's fourth-largest lake, by 1987 its level had fallen 12.9 m, its area 40% and its volume 66%, while salinity nearly tripled.",
    debate:"A dam completed in 2005 helped the northern Small Aral recover, with salinity falling and fisheries returning.",
    src:["micklin1988","micklinSA"], page:"modern.html#aral"},
  {id:"millennium", name:"Millennium Drought", place:"Southeast Australia", pts:[[145.5,-34.5]], start:2001, end:2009, type:"crisis",
    evidence:"Climate, water, economic and satellite data with biophysical modelling",
    metric:"~2/3", metricLabel:"of eastern Australia's rainfall deficit explained by prevailing El Niño conditions",
    summary:"The worst drought on record for southeast Australia. River management shielded some water users by shifting impacts onto irrigated farming and river ecosystems.",
    debate:"A climate-change contribution in the south remains plausible but unproven. The authors warn future droughts may not be managed better.",
    src:["vandijk"], page:"modern.html#millennium"},
  {id:"syria", name:"Syria: drought and civil war", place:"Northeast Syria", pts:[[40.5,36.4]], start:2007, end:2011, type:"conflict",
    evidence:"Climate observations and models; agricultural and migration data",
    metric:"Contested", metricLabel:"how far a severe pre-war drought contributed to unrest",
    summary:"Kelley et al. found a human climate-change signal in the drought and named it one contributing factor among many.",
    debate:"Selby et al. challenged the link to conflict. A commentary judged the drought's climate signal convincing but the conflict claim weakly substantiated.",
    src:["kelley","selby","hendrix"], page:"modern.html#syria"},
  {id:"capetown", name:"Cape Town, “Day Zero”", place:"Western Cape, South Africa", pts:[[18.42,-33.92]], start:2015, end:2018, type:"adapt",
    evidence:"Municipal consumption and dam-level data",
    metric:"1.2 bn → 511 m", metricLabel:"litres of city water used per day, February 2015 to March 2018",
    summary:"With Day Zero set for when dams fell to 13.5%, restrictions down to 50 litres per person per day, tariffs and lower water pressure helped the city avoid running dry.",
    debate:"Peer-reviewed analysis credits the combined measures, with the sharpest savings when Day Zero looked unavoidable.",
    src:["groundup","uct","bruhl"], page:"modern.html#capetown"},
  {id:"kakhovka", name:"Kakhovka dam destruction", place:"Kherson region, Ukraine", pts:[[33.37,46.78]], start:2023, end:2024, type:"conflict",
    evidence:"Government of Ukraine–UN post-disaster needs assessment",
    metric:"US$14 bn", metricLabel:"damage and loss; 620 km² flooded and 100,000 residents directly affected",
    summary:"The dam's destruction on 6 June 2023, during the war in Ukraine, flooded four oblasts and disrupted drinking water and irrigation upstream and downstream.",
    debate:"Russia and Ukraine blamed each other for the breach.",
    src:["kakhovka","ap2023"], page:"modern.html#kakhovka"},
  {id:"gulf", name:"Gulf desalination under fire", place:"Bahrain, Kuwait and Qeshm Island (Iran)", pts:[[50.55,26.07],[47.98,29.37],[55.9,26.75]], start:2026, end:2027, type:"conflict",
    evidence:"Government statements and policy analysis",
    metric:"90–99%", metricLabel:"of drinking water is desalinated in Bahrain, Kuwait and Qatar",
    summary:"During the 2026 Iran war, desalination plants in Bahrain, Kuwait and on Iran's Qeshm Island were reported hit. Damage was limited and responsibility disputed.",
    debate:"Each side denied attacking water facilities. See the live brief, Below the Waterline, for updates.",
    src:["shehabi"], page:"modern.html#gulf"},
  {id:"mena2050", name:"Middle East and North Africa, 2050", place:"Regional projection", pts:[[42,28]], start:2026, end:2050, type:"proj",
    evidence:"WRI Aqueduct 4.0 projections",
    metric:"100%", metricLabel:"of the region's population projected to live with extremely high water stress by 2050 (83% today)",
    summary:"WRI ranks it the world's most water-stressed region, with 14 countries facing extremely high water stress.",
    debate:"Projections depend on assumptions about demand, management and climate.",
    src:["wef","dte"], page:"future.html#horizon"},
  {id:"gdp2050", name:"Exposed GDP, 2050", place:"India, Mexico, Egypt and Türkiye", pts:[[78.9,22.5],[-102.5,23.6],[30.8,26.8],[35.2,39.0]], start:2026, end:2050, type:"proj",
    evidence:"WRI Aqueduct 4.0 projections",
    metric:"US$70 tn", metricLabel:"31% of global GDP projected to face high water stress by 2050; these four countries hold over half",
    summary:"Exposed GDP rises from US$15 trillion (24%) in 2010 to US$70 trillion (31%) by 2050.",
    debate:"Exposure is not loss: it measures output located in highly stressed places.",
    src:["wef"], page:"future.html#horizon"}
];

/* 25 countries with extremely high baseline water stress (Aqueduct 4.0, 2023), as listed by Down To Earth */
const STRESS25 = ["Bahrain","Cyprus","Kuwait","Lebanon","Oman","Qatar","United Arab Emirates","Saudi Arabia","Israel","Egypt","Libya","Yemen","Botswana","Iran","Jordan","Chile","San Marino","Belgium","Greece","Tunisia","Namibia","South Africa","Iraq","India","Syria"];
const SMALL_STATES = {"Bahrain":[50.55,26.07],"San Marino":[12.45,43.94]};

/* World signal shown beside the map, by era */
const ERA = [
  {from:-3000, to:1899, title:"Read from natural archives",
    items:[
      {k:"Evidence", v:"Lake gypsum, marine dust, pollen, river sediments and tree rings", src:["cullen","evans","buckley"]},
      {k:"Caution", v:"Proxies date drought within decades or centuries. Matching dates show coincidence; causes come from combining archaeology and texts.", src:[]}
    ]},
  {from:1900, to:1999, title:"Instrument records, and humans as a driver",
    items:[
      {k:"Sahel", v:"Rainfall fell 20–50% across the region from the late 1960s", src:["lu"]},
      {k:"Aral Sea", v:"Irrigation diversions shrank the world's fourth-largest lake", src:["micklin1988"]}
    ]},
  {from:2000, to:2026, title:"Today",
    items:[
      {k:"~4 bn", v:"roughly half of humanity faces severe water scarcity for at least part of the year", src:["ipccch4"]},
      {k:"25 countries", v:"home to a quarter of the world's people, face extremely high water stress every year", src:["wef"]},
      {k:"420", v:"violent water-conflict events reported in 2024, a record", src:["pifact"]},
      {k:"2.1 bn", v:"people lacked safely managed drinking water in 2024", src:["jmp"]}
    ]},
  {from:2027, to:2050, title:"Projected to 2050",
    items:[
      {k:"+1 bn", v:"more people with extremely high water stress, even in an optimistic warming scenario", src:["wef"]},
      {k:"+20–25%", v:"global water demand", src:["wef"]},
      {k:"1.7–2.4 bn", v:"city dwellers facing water scarcity, up from 930 million in 2016", src:["wwdr"]},
      {k:">50%", v:"of world food production at risk from the water crisis", src:["gcew"]}
    ]},
  {from:2051, to:2100, title:"Beyond 2050: depends on warming",
    items:[
      {k:"3 bn", v:"people projected to face physical water scarcity at 2°C of warming", src:["wsh"]},
      {k:"4 bn", v:"at 4°C", src:["wsh"]},
      {k:"4–5×", v:"direct flood damages at 4°C compared with 1.5°C", src:["wsh"]}
    ]}
];

/* ============ HELPERS ============ */
function fmtYear(y){ y=Math.round(y); if(y<0) return `${-y} BCE`; if(y===0) return "1 CE"; return `${y} CE`; }
function fmtYearShort(y){ y=Math.round(y); return y<0? `${-y} BCE` : (y===0? "1 CE" : `${y}`); }
function span(e){ return `${fmtYearShort(e.start)}–${fmtYearShort(e.end)}${e.end>0?"":""}`; }

/* Footnotes: numbered by first appearance on each page. */
const REF_ORDER = [];
function refNum(k){ let i=REF_ORDER.indexOf(k); if(i<0){REF_ORDER.push(k); i=REF_ORDER.length-1;} return i+1; }
function sup(keys){ return (keys||[]).map(k=>`<sup class="fn" data-s="${k}"></sup>`).join(""); }
function paintRefs(root){
  (root||document).querySelectorAll("sup.fn[data-s]").forEach(el=>{
    const k=el.dataset.s, s=SOURCES[k]; if(!s) return;
    const n=refNum(k), plain=s.note.replace(/<[^>]+>/g,"").replace(/"/g,"&quot;");
    el.innerHTML=`<a href="#n${n}" aria-label="Note ${n}" title="${plain}">${n}</a>`;
  });
}
function renderNotes(id){
  const el=document.getElementById(id); if(!el) return;
  el.innerHTML = REF_ORDER.map((k,i)=>{ const s=SOURCES[k]; return `<li id="n${i+1}">${s.note} <a href="${s.url}">${s.url}</a>.</li>`; }).join("");
}
function renderBibliography(id){
  const el=document.getElementById(id); if(!el) return;
  const key=s=>s.bib.replace(/<[^>]+>/g,"").replace(/^[“"‘]+/,"").toLowerCase();
  el.innerHTML = Object.values(SOURCES).sort((a,b)=>key(a).localeCompare(key(b))).map(s=>`<p>${s.bib} <a href="${s.url}">${s.url}</a>.</p>`).join("");
}

/* Shared header */
function renderHeader(active){
  const pages=[["index.html","Simulator"],["civilisations.html","Civilisations"],["modern.html","Modern era"],["future.html","Futures"],["methods.html","Method & sources"]];
  const h=document.getElementById("site-header");
  h.innerHTML=`<div class="wrap bar-inner"><a class="mark" href="index.html"><span class="mark-glyph" aria-hidden="true"></span>Strata</a>
    <nav aria-label="Pages">${pages.map(([u,l])=>`<a href="${u}"${u===active?' aria-current="page"':""}>${l}</a>`).join("")}<a class="ext" href="${BTW_URL}">← Below the Waterline</a></nav></div>`;
}
function renderFooter(){
  const f=document.getElementById("site-footer");
  f.innerHTML=`<div class="wrap foot-inner"><span>Strata · water security across 5,000 years · an independent evidence project by Ari, Australian National University</span>
  <span>Part of the live brief <a href="${BTW_URL}">Below the Waterline</a> · <a href="methods.html">Method &amp; sources</a></span></div>`;
}

/* Case renderer shared by civilisations.html and modern.html */
function miniTimeline(e, a, b, ticks){
  const W=360, x=y=>10+(W-20)*(y-a)/(b-a), c=TYPES[e.type].color;
  const t=ticks.map(y=>`<line x1="${x(y)}" x2="${x(y)}" y1="26" y2="31" stroke="#9aa4a3"/><text x="${x(y)}" y="43" text-anchor="middle">${y<0?(-y)+" BCE":y===0?"1 CE":y}</text>`).join("");
  return `<svg class="miniline" viewBox="0 0 ${W} 48" role="img" aria-label="${e.name}: ${span(e)}"><line x1="10" x2="${W-10}" y1="20" y2="20" stroke="#c9d1d0" stroke-width="6" stroke-linecap="round"/><rect x="${x(e.start)}" y="14" width="${Math.max(4,x(e.end)-x(e.start))}" height="12" rx="3" fill="${c}"/>${t}</svg>`;
}
function renderCase(e, extra, axis){
  const t=TYPES[e.type];
  return `<article class="case" id="${e.id}" aria-labelledby="h-${e.id}">
    <div class="case-side">
      <span class="chip${e.type==="proj"?" dashed":""}" style="color:${t.color}"><i style="background:${t.color}"></i><span style="color:var(--ink)">${t.label}</span></span>
      <div class="case-when">${span(e)} · ${e.place}</div>
      <div class="big" style="color:${t.color}">${e.metric}</div>
      <div class="big-label">${e.metricLabel}${sup(e.src.slice(0,1))}</div>
      ${miniTimeline(e, axis[0], axis[1], axis[2])}
      <div class="evidence"><span class="tag">Archive</span><span>${e.evidence}</span></div>
      <a class="mono" href="index.html#${e.start<0?"ym"+(-e.start):"y"+e.start}">See it on the map →</a>
    </div>
    <div class="stack measure">
      <h2 id="h-${e.id}">${e.name}</h2>
      ${extra.html}
      <p class="debate">${e.debate}${sup(extra.debateSrc||e.src)}</p>
    </div>
  </article>`;
}

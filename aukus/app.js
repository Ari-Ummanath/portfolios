/* =========================================================================
   AUKUS EXPORT-CONTROL NAVIGATOR — decision engine + data
   A transparent, deterministic TRIAGE / RESEARCH AID (not legal advice).
   Every rule is tied to a cited primary or secondary source in SOURCES.
   ========================================================================= */

/* -------------------------------------------------------------------------
   SOURCES — every legal/policy claim maps to a real, verifiable URL.
   Chicago 17th ed. citation strings are rendered in the Evidence Ledger.
   ------------------------------------------------------------------------- */
const SOURCES = {
  fr_interim: {
    id: "fr_interim",
    title: "ITAR AUKUS Exemption — Interim Final Rule (89 Fed. Reg. 67270)",
    authority: "US Federal Register / DDTC, US Dept. of State",
    type: "Primary — regulation",
    date: "2024-08-20",
    url: "https://www.federalregister.gov/documents/2024/08/20/2024-18043/international-traffic-in-arms-regulations-exemption-for-defense-trade-and-cooperation-among",
    chicago: "US Department of State, Directorate of Defense Trade Controls. \u201cInternational Traffic in Arms Regulations: Exemption for Defense Trade and Cooperation Among Australia, the United Kingdom, and the United States.\u201d Interim Final Rule, 89 Fed. Reg. 67270 (August 20, 2024).",
  },
  etl: {
    id: "etl",
    title: "Excluded Technology List (Supplement No. 2 to 22 CFR Part 126)",
    authority: "Legal Information Institute (Cornell) / eCFR",
    type: "Primary — regulation",
    date: "2024-09-01",
    url: "https://www.law.cornell.edu/cfr/text/22/appendix-Supplement_No_2_to_part_126",
    chicago: "\u201cSupplement No. 2 to Part 126\u2014Excluded Technology List,\u201d 22 CFR. Legal Information Institute, Cornell Law School. Accessed August 17, 2026.",
  },
  fr_final: {
    id: "fr_final",
    title: "ITAR AUKUS Exemption — Final Rule (90 Fed. Reg. 61053)",
    authority: "US Federal Register / DDTC, US Dept. of State",
    type: "Primary — regulation",
    date: "2025-12-30",
    url: "https://www.federalregister.gov/documents/2025/12/30/2025-23998/international-traffic-in-arms-regulations-exemption-for-defense-trade-and-cooperation-among",
    chicago: "US Department of State, Directorate of Defense Trade Controls. \u201cInternational Traffic in Arms Regulations: Exemption for Defense Trade and Cooperation Among Australia, the United Kingdom, and the United States.\u201d Final Rule, 90 Fed. Reg. 61053 (December 30, 2025). https://www.federalregister.gov/documents/2025/12/30/2025-23998/international-traffic-in-arms-regulations-exemption-for-defense-trade-and-cooperation-among.",
  },
  dla: {
    id: "dla",
    title: "Analysis of the AUKUS ITAR Final Rule (700+ users, 18% ETL-ineligible)",
    authority: "DLA Piper",
    type: "Secondary — legal analysis",
    date: "2026-01-07",
    url: "https://www.dlapiper.com/en-us/insights/publications/2026/01/department-of-state-publishes-final-rule-finalizing-aukus-defense-trade-itar-exemption",
    chicago: "DLA Piper. \u201cDepartment of State Publishes Final Rule Finalizing AUKUS Defense Trade ITAR Exemption.\u201d January 7, 2026. https://www.dlapiper.com/en-us/insights/publications/2026/01/department-of-state-publishes-final-rule-finalizing-aukus-defense-trade-itar-exemption.",
  },
  dec_changes: {
    id: "dec_changes",
    title: "Changes to Export Controls (Defence Trade Controls Amendment Act 2024)",
    authority: "Australian Government, Dept. of Defence",
    type: "Primary — government guidance",
    date: "2024-09-01",
    url: "https://www.defence.gov.au/business-industry/exporting/export-controls-framework/changes-export-controls",
    chicago: "Australian Government, Department of Defence. \u201cChanges to Export Controls.\u201d Accessed August 17, 2026. https://www.defence.gov.au/business-industry/exporting/export-controls-framework/changes-export-controls.",
  },
  dec_lfe: {
    id: "dec_lfe",
    title: "Licence-Free Environment — 5 Access Criteria",
    authority: "Australian Government, Dept. of Defence",
    type: "Primary — government guidance",
    date: "2024-09-01",
    url: "https://www.defence.gov.au/business-industry/exporting/applications-pre-notifications/licence-free-environment",
    chicago: "Australian Government, Department of Defence. \u201cLicence-Free Environment.\u201d Accessed August 17, 2026. https://www.defence.gov.au/business-industry/exporting/applications-pre-notifications/licence-free-environment.",
  },
  dec_act: {
    id: "dec_act",
    title: "Defence Trade Controls Amendment Act 2024",
    authority: "Australian Government, Dept. of Defence",
    type: "Primary — legislation",
    date: "2024-03-27",
    url: "https://www.defence.gov.au/about/reviews-inquiries/defence-trade-controls-amendment-act-2024-defence-trade-legislation-amendment-regulations-2024",
    chicago: "Australian Government, Department of Defence. \u201cDefence Trade Controls Amendment Act 2024 and Defence Trade Legislation Amendment Regulations 2024.\u201d Accessed August 17, 2026.",
  },
  dec_guidance: {
    id: "dec_guidance",
    title: "Defence Export Control Guidance and Examples (PDF)",
    authority: "Australian Government, Dept. of Defence",
    type: "Primary — government guidance",
    date: "2024-08-26",
    url: "https://www.defence.gov.au/sites/default/files/2024-08/DEC-Guidance-and-Examples.pdf",
    chicago: "Australian Government, Department of Defence. \u201cDefence Export Control Guidance and Examples.\u201d August 26, 2024. https://www.defence.gov.au/sites/default/files/2024-08/DEC-Guidance-and-Examples.pdf.",
  },
  marles: {
    id: "marles",
    title: "Generational Export Reforms to Boost AUKUS Trade (70%/80% figures)",
    authority: "Deputy PM & Minister for Defence (Richard Marles MP)",
    type: "Primary — government statement",
    date: "2024-08-16",
    url: "https://www.minister.defence.gov.au/media-releases/2024-08-16/generational-export-reforms-boost-aukus-trade-collaboration",
    chicago: "Marles, Richard, Deputy Prime Minister and Minister for Defence. \u201cGenerational Export Reforms to Boost AUKUS Trade and Collaboration.\u201d Media release, August 16, 2024. https://www.minister.defence.gov.au/media-releases/2024-08-16/generational-export-reforms-boost-aukus-trade-collaboration.",
  },
  bis: {
    id: "bis",
    title: "Export Control Changes for the AUKUS Partnership (BIS)",
    authority: "Bureau of Industry & Security, US Dept. of Commerce",
    type: "Primary — government guidance",
    date: "2024-10-23",
    url: "https://www.bis.gov/media/documents/aukus.pdf",
    chicago: "US Department of Commerce, Bureau of Industry and Security. \u201cExport Control Changes for the AUKUS Partnership.\u201d Accessed August 17, 2026. https://www.bis.gov/media/documents/aukus.pdf.",
  },
  bis_fr: {
    id: "bis_fr",
    title: "EAR AUKUS Revisions (89 Fed. Reg. 28594)",
    authority: "US Federal Register / BIS",
    type: "Primary — regulation",
    date: "2024-04-19",
    url: "https://www.federalregister.gov/documents/2024/04/19/2024-08446/export-control-revisions-for-australia-united-kingdom-united-states-aukus-enhanced-trilateral",
    chicago: "\u201cExport Control Revisions for Australia, United Kingdom, United States (AUKUS) Enhanced Trilateral Security Partnership.\u201d 89 Fed. Reg. 28594 (April 19, 2024). https://www.federalregister.gov/documents/2024/04/19/2024-08446/export-control-revisions-for-australia-united-kingdom-united-states-aukus-enhanced-trilateral.",
  },
  piper: {
    id: "piper",
    title: "AUKUS, ITAR, Export Control Reform and the Australian Defence Industry",
    authority: "Piper Alderman (O'Callaghan, Shueard, Coppola)",
    type: "Secondary — legal analysis",
    date: "2023-05-08",
    url: "https://piperalderman.com.au/insight/aukus-itar-export-control-reform-and-the-australian-defence-industry/",
    chicago: "O'Callaghan, Tim, Travis Shueard, and Laura Coppola. \u201cAUKUS, ITAR, Export Control Reform and the Australian Defence Industry.\u201d Piper Alderman, May 8, 2023. https://piperalderman.com.au/insight/aukus-itar-export-control-reform-and-the-australian-defence-industry/.",
  },
  ussc_barriers: {
    id: "ussc_barriers",
    title: "Breaking the Barriers: Reforming US Export Controls to Realise the Potential of AUKUS",
    authority: "USSC (Greenwalt & Corben)",
    type: "Secondary — policy analysis",
    date: "2023-08",
    url: "https://www.ussc.edu.au/breaking-the-barriers-reforming-us-export-controls-to-realise-the-potential-of-aukus",
    chicago: "Greenwalt, William, and Tom Corben. Breaking the Barriers: Reforming US Export Controls to Realise the Potential of AUKUS. Sydney: United States Studies Centre, August 2023. https://www.ussc.edu.au/breaking-the-barriers-reforming-us-export-controls-to-realise-the-potential-of-aukus.",
  },
  ussc_enablers: {
    id: "ussc_enablers",
    title: "AUKUS Enablers? Assessing Defence Trade Control Reforms (70-80% figure)",
    authority: "USSC (Corben & Greenwalt)",
    type: "Secondary — policy analysis",
    date: "2024",
    url: "https://www.ussc.edu.au/aukus-assessing-defence-trade-control-reforms-in-australia-and-the-united-states",
    chicago: "Corben, Tom, and William Greenwalt. AUKUS Enablers? Assessing Defence Trade Control Reforms in Australia and the United States. Sydney: United States Studies Centre, 2024. https://www.ussc.edu.au/aukus-assessing-defence-trade-control-reforms-in-australia-and-the-united-states.",
  },
  sidley: {
    id: "sidley",
    title: "US State Department Publishes Defense Trade Controls Exemption (AU/UK)",
    authority: "Sidley Austin LLP",
    type: "Secondary — legal analysis",
    date: "2024-09",
    url: "https://www.sidley.com/en/insights/newsupdates/2024/09/us-state-department-publishes-ddtc-rule",
    chicago: "Sidley Austin LLP. \u201cU.S. State Department Publishes Defense Trade Controls Exemption for Australia and the United Kingdom.\u201d September 2024. https://www.sidley.com/en/insights/newsupdates/2024/09/us-state-department-publishes-ddtc-rule.",
  },
  aspi_p2: {
    id: "aspi_p2",
    title: "AUKUS Pillar 2 Critical Pathways: A Road Map to Enabling International Collaboration",
    authority: "ASPI",
    type: "Secondary — policy analysis",
    date: "2024-05",
    url: "https://www.aspi.org.au/report/aukus-pillar-2-critical-pathways-road-map-enabling-international-collaboration/",
    chicago: "Australian Strategic Policy Institute. AUKUS Pillar 2 Critical Pathways: A Road Map to Enabling International Collaboration. Canberra: ASPI, May 2024. https://www.aspi.org.au/report/aukus-pillar-2-critical-pathways-road-map-enabling-international-collaboration/.",
  },
  aspi_strat: {
    id: "aspi_strat",
    title: "AUKUS Pillar Two Can Deliver Fast \u2014 After We Fix It",
    authority: "ASPI (The Strategist)",
    type: "Secondary — commentary",
    date: "2024",
    url: "https://www.aspistrategist.org.au/aukus-pillar-two-can-deliver-fast-after-we-fix-it/",
    chicago: "Australian Strategic Policy Institute. \u201cAUKUS Pillar Two Can Deliver Fast\u2014After We Fix It.\u201d The Strategist. https://www.aspistrategist.org.au/aukus-pillar-two-can-deliver-fast-after-we-fix-it/.",
  },
  lowy_p2: {
    id: "lowy_p2",
    title: "Beyond Submarines: Why AUKUS Pillar II Matters Now",
    authority: "Lowy Institute (The Interpreter)",
    type: "Secondary — commentary",
    date: "2024",
    url: "https://www.lowyinstitute.org/the-interpreter/beyond-submarines-why-aukus-pillar-ii-matters-now",
    chicago: "Lowy Institute. \u201cBeyond Submarines: Why AUKUS Pillar II Matters Now.\u201d The Interpreter. https://www.lowyinstitute.org/the-interpreter/beyond-submarines-why-aukus-pillar-ii-matters-now.",
  },
  reuters: {
    id: "reuters",
    title: "Australia, Britain, US Drop Defence Trade Barriers to Propel AUKUS",
    authority: "Reuters",
    type: "Secondary — news",
    date: "2024-08-15",
    url: "https://www.reuters.com/world/australia-britain-us-drop-defence-trade-barriers-propel-aukus-2024-08-15/",
    chicago: "Reuters. \u201cAustralia, Britain, US Drop Defence Trade Barriers to Propel AUKUS.\u201d August 15, 2024. https://www.reuters.com/world/australia-britain-us-drop-defence-trade-barriers-propel-aukus-2024-08-15/.",
  },
};

/* -------------------------------------------------------------------------
   EXCLUDED TECHNOLOGY LIST (ETL) — keyword patterns derived from
   Supplement No. 2 to 22 CFR Part 126 (SOURCES.etl).
   Tier A = items the ETL expressly excludes → likely licence required.
   Tier B = Pillar II / sensitive categories the USSC flags as ETL-central
            → case-by-case review (not a definitive exclusion).
   ------------------------------------------------------------------------- */
const ETL_PATTERNS = {
  tierA_definitive: [
    { kw: ["cluster munition", "cluster bomb"], note: "Cluster munitions and articles specially designed for them are on the ETL (USML Cat. III/IV/XII/XX).", cat: "Cluster munitions" },
    { kw: ["manpads", "shoulder-fired", "shoulder launched anti-aircraft"], note: "Launcher mechanisms for MANPADS are excluded (USML Cat. IV).", cat: "MANPADS" },
    { kw: ["f-22", "f22", "raptor aircraft", "f-22 raptor"], note: "The F-22 aircraft and articles specially designed for it (other than those also used in aircraft other than the F-22) are excluded (USML Cat. VIII).", cat: "F-22" },
    { kw: ["anti-tamper"], note: "Articles with anti-tamper features under a US DoD Program Protection Plan are excluded.", cat: "Anti-tamper" },
    { kw: ["nuclear weapon", "nuclear warhead", "nuclear device", "special nuclear material", "highly enriched uranium", "weapons-grade plutonium"], note: "Nuclear weapons and related articles (USML Cat. XVI) are excluded.", cat: "Nuclear weapons" },
    { kw: ["manufacturing know-how", "production know-how", "manufacturing license agreement", "manufacturing licence agreement"], note: "Manufacturing know-how directly related to sensitive USML articles is excluded (USML Cat. II/III/IV/X/XIX).", cat: "Manufacturing know-how" },
    { kw: ["biological weapon", "chemical weapon", "ricin", "nerve agent", "biological agent weaponized"], note: "CBRN weapons and related technical data/services (USML Cat. XIV) are excluded.", cat: "CBRN weapons" },
    { kw: ["classified countermeasure", "classified counter-countermeasure"], note: "Classified countermeasure equipment (USML Cat. XI) is excluded.", cat: "Classified countermeasures" },
  ],
  tierB_sensitive: [
    { kw: ["missile", "rocket motor", "solid propellant rocket", "cruise missile", "ballistic missile", "supersonic cruise missile", "hypersonic missile", "hypersonic boost-glide", "hypersonic glide vehicle"], note: "MTCR-annotated articles (USML Cat. I\u2013XV, XX) are on the ETL; hypersonics are a Pillar II sensitive category. Case-by-case review required.", cat: "Missiles / hypersonics (MTCR)" },
    { kw: ["unmanned aerial vehicle", " uav", "military drone", "armed drone", "unmanned combat aerial"], note: "UAVs in MTCR categories may be ETL-excluded; AI/autonomy is a Pillar II sensitive area.", cat: "UAVs / autonomy" },
    { kw: ["nuclear-powered submarine", "nuclear submarine", " ssn", "ssn-aukus", "submarine nuclear reactor", "submarine propulsion reactor", "nuclear propulsion"], note: "Submarine nuclear propulsion and undersea technologies are Pillar I/II sensitive; case-by-case review.", cat: "Submarine / undersea (nuclear)" },
    { kw: ["electronic warfare", " ew system", " jammers", "electronic attack system", "counter-electronic warfare"], note: "Electronic warfare is a Pillar II sensitive category; some EW articles may be ETL-excluded.", cat: "Electronic warfare" },
    { kw: ["offensive cyber", "cyber weapon", "exploit tool", "network intrusion", "cyber exploitation"], note: "Advanced cyber is a Pillar II sensitive category; case-by-case review.", cat: "Advanced cyber" },
    { kw: ["quantum sensing", "quantum radar", "quantum computing", "quantum navigation", "quantum magnetometer"], note: "Quantum technologies are a Pillar II sensitive category; case-by-case review.", cat: "Quantum technologies" },
    { kw: ["underwater drone", "autonomous underwater vehicle", " auv", "xluuv", "unmanned underwater", "undersea warfare", "torpedo"], note: "Undersea/autonomous underwater systems are a Pillar II sensitive category; some may be ETL-excluded.", cat: "Undersea / AUV" },
    { kw: ["advanced sensor", "infrared focal plane array", "thermal imaging military", "airborne early warning radar", "synthetic aperture radar military"], note: "Certain advanced sensors are controlled; case-by-case review.", cat: "Advanced sensors" },
    { kw: ["directed energy weapon", "laser weapon", "high power microwave weapon", "electromagnetic weapon"], note: "Directed-energy weapon systems (USML Cat. XVIII) may be ETL-excluded; case-by-case review.", cat: "Directed energy" },
    { kw: ["intelligence collection", "signals intelligence", " sigint", "geospatial intelligence", "geospatial intel", "surveillance system classified"], note: "Certain intelligence/surveillance articles are controlled; case-by-case review.", cat: "Intelligence & surveillance" },
    { kw: ["lethal autonomous", "autonomous targeting", "autonomous weapon system", "ai-enabled weapon", "loitering munition", "ai targeting"], note: "AI and autonomy is a Pillar II sensitive category; lethal autonomous weapons attract particular scrutiny. Case-by-case review.", cat: "AI / autonomy" },
    { kw: ["space-based infrared", "space-based isr", "early warning satellite", "overhead persistent infrared", " opir"], note: "Space-based ISR and missile-warning payloads are controlled; case-by-case review.", cat: "Space-based ISR" },
  ],
};

/* -------------------------------------------------------------------------
   Australian licence-free environment — 5 access criteria (SOURCES.dec_lfe)
   ------------------------------------------------------------------------- */
const AU_CRITERIA = [
  { key: "enduser", text: "End-user is an AU/UK/US citizen, permanent resident, corporation or government authority.", src: "dec_lfe" },
  { key: "location", text: "Supply is to, or services received at, a place in Australia, the UK or the US.", src: "dec_lfe" },
  { key: "notexcluded", text: "DSGL goods/technology are NOT on the Excluded Goods & Technologies List or Australian Military Sales Program.", src: "dec_lfe" },
  { key: "registered", text: "Exporter/supplier is registered as an AUKUS authorised user (via the MADE portal).", src: "dec_lfe" },
  { key: "notify", text: "Defence has been notified of the export/supply before the activity occurs (MADE portal).", src: "dec_lfe" },
];

/* -------------------------------------------------------------------------
   CORE ASSESSMENT ENGINE
   Inputs: structured answers + free-text description.
   Returns: pathway, confidence, flags, evidence checklist, escalation Qs, citations.
   ------------------------------------------------------------------------- */
function assess(input) {
  const flags = [];            // {level, gate, text, sources[]}
  const citations = new Set();
  const desc = (input.description || "").toLowerCase();
  const addFlag = (level, gate, text, srcs = []) => {
    flags.push({ level, gate, text, sources: srcs });
    srcs.forEach((s) => citations.add(s));
  };

  /* --- Pre-screen: empty --- */
  if (!input.description || input.description.trim().length < 3) {
    addFlag("info", "input", "Please describe the item, technology or service you intend to transfer.", []);
    return buildResult(input, "awaiting_input", flags, citations);
  }

  /* === GATE 1 — Geography & eligible parties (ITAR §126.7(b)) === */
  if (input.destination === "outside") {
    addFlag("red", "geography", "Transfers outside the physical territories of Australia, the UK or the US fall OUTSIDE the ITAR §126.7 exemption. A licence or other authorisation is generally required.", ["fr_interim", "sidley"]);
  } else {
    addFlag("green", "geography", "Destination is within AUKUS physical territories \u2014 a prerequisite for the ITAR §126.7 exemption is met.", ["fr_interim", "sidley"]);
  }

  /* Recipient eligibility */
  if (input.recipient === "foreign_national_in_aus" || input.recipient === "third_country") {
    addFlag("red", "recipient", "Recipient is a foreign national / third-country party. The AUKUS licence-free environment requires the end-user to be an AU/UK/US citizen, permanent resident, corporation or government authority; transfers to non-exempt foreign persons may trigger Australian offences under DTC Act ss. 10A/10B/10C.", ["dec_lfe", "dec_changes"]);
  } else if (input.recipient === "deployed_forces") {
    addFlag("amber", "recipient", "Transfer to AUKUS armed forces deployed OUTSIDE physical territories is addressed by the newer ITAR §126.7(c) (final rule, 30 Dec 2025), but only where strict conditions are met (embedded/contracted, on-site support, not ETL). Case-by-case review required.", ["fr_final", "dla"]);
  } else {
    addFlag("green", "recipient", "Recipient appears to be an eligible AUKUS party (AU/UK/US person or government).", ["dec_lfe", "sidley"]);
  }

  /* Authorised-user registration */
  if (input.authorisedUser === "no" || input.authorisedUser === "unsure") {
    addFlag("amber", "authorised_user", input.authorisedUser === "unsure" ? "Whether the parties are DDTC-enrolled / MADE-registered AUKUS Authorised Users is unconfirmed. This is a prerequisite for licence-free transfer \u2014 verify via the DDTC DECCS Authorised User List and the MADE portal before relying on the exemption." : "The parties are NOT registered AUKUS Authorised Users. Licence-free transfer is NOT available until DDTC enrollment / MADE registration is completed.", ["dec_lfe", "sidley", "fr_final"]);
  } else {
    addFlag("green", "authorised_user", "Parties are registered AUKUS Authorised Users \u2014 a prerequisite is met. (DDTC reports 700+ AU/UK Authorised Users as of the Dec 2025 final rule.)", ["dec_lfe", "dla"]);
  }

  /* §126.1 prohibited countries */
  if (input.thirdCountryTransfer === "yes") {
    addFlag("red", "prohibited_dest", "Re-transfer to a third country is involved. ITAR §126.7 cannot be used for transfers to ITAR §126.1 countries (e.g. arms embargoes). Re-export authorisation is generally required for onward transfer outside AUKUS.", ["fr_final", "sidley"]);
  }

  /* === GATE 2 — Regime / classification === */
  let regime = "unknown";
  if (input.itemType === "itar_article" || input.itemType === "itar_technical_data" || input.itemType === "itar_service") {
    regime = "ITAR";
    addFlag("amber", "regime", "Item is on the US Munitions List (ITAR-controlled). The AUKUS exemption (ITAR §126.7) may apply IF all conditions are met, but ETL items remain excluded.", ["fr_interim", "sidley"]);
  } else if (input.itemType === "dsgl_dual" || input.itemType === "dsgl_munitions") {
    regime = "DSGL";
    addFlag("amber", "regime", "Item appears on the Defence and Strategic Goods List (DSGL). The Australian licence-free environment may apply IF all 5 criteria are met, but Part 1 'Sensitive'/'Very Sensitive' items may still require a permit.", ["dec_lfe", "dec_changes"]);
  } else if (input.itemType === "commercial_dual") {
    regime = "EAR";
    addFlag("green", "regime", "Item appears to be commercial dual-use (EAR). BIS removed most licence requirements for Australia/UK under the AUKUS EAR revisions (effective 23 Oct 2024); roughly 80% of US\u2013Australia EAR trade is licence-free.", ["bis", "bis_fr", "marles"]);
  } else if (input.itemType === "unclear") {
    regime = "unclassified";
    addFlag("orange", "regime", "The export-control regime is unclear. Classification is a threshold question: determine whether the item is ITAR (USML), EAR/DSGL dual-use, or uncontrolled before relying on any exemption. A classification request / commodity jurisdiction determination may be needed.", ["piper", "sidley"]);
  }

  /* === GATE 3 — Excluded Technology List === */
  const etlHits = [];
  for (const p of ETL_PATTERNS.tierA_definitive) {
    if (p.kw.some((k) => desc.includes(k))) etlHits.push({ ...p, tier: "A" });
  }
  const tierBHits = [];
  for (const p of ETL_PATTERNS.tierB_sensitive) {
    if (p.kw.some((k) => desc.includes(k))) tierBHits.push({ ...p, tier: "B" });
  }

  if (etlHits.length) {
    for (const h of etlHits) {
      addFlag("red", "etl", `Likely ETL-excluded (${h.cat}): ${h.note} Such items are NOT eligible for the ITAR §126.7 exemption and remain subject to standard licensing.`, ["etl", "fr_interim", "sidley"]);
    }
  }
  if (tierBHits.length) {
    for (const h of tierBHits) {
      addFlag("orange", "etl", `Sensitive / ETL-central category (${h.cat}): ${h.note} The USSC warns the ETL captures technologies central to Pillar I and Pillar II, so items in this area require case-by-case review even if other criteria are met.`, ["etl", "ussc_enablers", "aspi_p2"]);
    }
  }
  if (!etlHits.length && !tierBHits.length && regime !== "unclear") {
    addFlag("green", "etl", "No ETL or Pillar II sensitive keywords detected in the description. This is a positive signal but NOT a determination \u2014 a formal classification is still required.", ["etl", "ussc_enablers"]);
  }

  /* === GATE 4 — Technical data / classified info === */
  if (input.technicalData === "yes") {
    addFlag("amber", "technical_data", "Technical data / manufacturing know-how is involved. Note that defence articles produced from US technical data or services exported under §126.7 remain subject to ITAR re-export/retransfer controls \u2014 the exemption does not 'wash' downstream ITAR controls.", ["fr_final", "piper"]);
  }
  if (input.classified === "yes") {
    addFlag("red", "classified", "Classified information is involved. Classified defence articles and directly related technical data are excluded from the exemption (USML Cat. XI/XIII/XV/XVIII). A security clearance and separate authorisation are required.", ["etl", "sidley"]);
  }

  /* === Determine pathway === */
  const hasRed = flags.some((f) => f.level === "red");
  const hasOrange = flags.some((f) => f.level === "orange");
  const hasAmber = flags.some((f) => f.level === "amber");
  let pathway, confidence;
  if (hasRed) {
    pathway = "likely_licence_required";
    confidence = "high";
  } else if (hasOrange) {
    pathway = "case_by_case_review";
    confidence = "medium";
  } else if (hasAmber) {
    pathway = "conditionally_eligible";
    confidence = "medium";
  } else {
    pathway = "likely_eligible";
    confidence = "medium";
  }

  return buildResult(input, pathway, flags, citations, { etlHits, tierBHits, regime });
}

function buildResult(input, pathway, flags, citations, extra = {}) {
  const labels = {
    awaiting_input: { tone: "info", title: "Awaiting input", summary: "Describe the item you intend to transfer to begin the triage." },
    likely_eligible: { tone: "green", title: "Likely eligible for licence-free transfer", summary: "Based on your inputs, the item appears to meet the AUKUS licence-free criteria. This is a preliminary pathway, not a determination \u2014 formal classification and registration are still required." },
    conditionally_eligible: { tone: "amber", title: "Conditionally eligible \u2014 conditions apply", summary: "The item may qualify for licence-free transfer, but one or more conditions (registration, pre-notification, ITAR certification, technical-data handling) must be satisfied first." },
    case_by_case_review: { tone: "orange", title: "Likely requires case-by-case review", summary: "The item touches a sensitive or ETL-central area, or its classification is unclear. Do not assume licence-free treatment \u2014 seek a formal classification and, where needed, professional export-control advice." },
    likely_licence_required: { tone: "red", title: "Likely excluded \u2014 licence or authorisation required", summary: "One or more factors indicate the item is excluded from the AUKUS exemption (e.g. it is on the ETL, involves classified material, or falls outside eligible parties/territories). Standard licensing applies." },
  };
  const meta = labels[pathway] || labels.awaiting_input;

  /* Evidence checklist + escalation questions */
  const checklist = buildChecklist(input, pathway, extra);
  const escalation = buildEscalation(input, pathway, extra);

  return {
    pathway,
    tone: meta.tone,
    title: meta.title,
    summary: meta.summary,
    confidence: pathway === "awaiting_input" ? "n/a" : (extra.confidence || "medium"),
    flags,
    citations: [...citations].map((id) => SOURCES[id]).filter(Boolean),
    checklist,
    escalation,
    etlHits: extra.etlHits || [],
    tierBHits: extra.tierBHits || [],
    regime: extra.regime,
  };
}

function buildChecklist(input, pathway, extra) {
  const items = [];
  items.push({ text: "Confirm the item's export-control classification (ITAR/USML, EAR/DSGL, or uncontrolled) \u2014 the threshold question.", src: "piper" });
  items.push({ text: "Verify all parties are registered AUKUS Authorised Users (DDTC DECCS list / MADE portal).", src: "dec_lfe" });
  items.push({ text: "Confirm destination is within AU/UK/US physical territories (or §126.7(c) conditions if deployed forces).", src: "fr_interim" });
  items.push({ text: "Check the item against the Excluded Technology List (Supplement No. 2 to 22 CFR Part 126).", src: "etl" });
  items.push({ text: "Prepare end-user details, technical specifications, and intended end-use statement.", src: "dec_guidance" });
  if (pathway === "conditionally_eligible" || pathway === "likely_eligible") {
    items.push({ text: "Complete pre-notification via the MADE portal before the transfer occurs.", src: "dec_lfe" });
    items.push({ text: "If ITAR-governed, obtain the required US certification and confirm ITAR compliance.", src: "dec_lfe" });
  }
  if (extra.regime === "EAR" || extra.regime === "commercial_dual") {
    items.push({ text: "Confirm the item meets BIS AUKUS licence-exception eligibility under the EAR revisions.", src: "bis" });
  }
  items.push({ text: "Record all assumptions, sources checked, and dates \u2014 keep a compliance audit trail.", src: "dec_guidance" });
  return items;
}

function buildEscalation(input, pathway, extra) {
  const qs = [];
  qs.push("Is the item formally classified on the USML (ITAR), the DSGL, or the CCL (EAR)? If unknown, a classification / commodity-jurisdiction request is the first step.");
  if (extra.etlHits && extra.etlHits.length) qs.push("Does the item match an ETL category? If so, a licence or other authorisation is required \u2014 engage export-control counsel.");
  if (extra.tierBHits && extra.tierBHits.length) qs.push("The item touches a Pillar II sensitive area flagged by the USSC as ETL-central. Has DDTC/Defence Export Controls confirmed it is not on the ETL?");
  if (pathway === "likely_licence_required") qs.push("Given the red flags, do not proceed without a written authorisation or legal opinion.");
  qs.push("Where does this tool's judgement end? At formal classification, ETL determination, and any written authorisation \u2014 those require a qualified export-control professional or the relevant government authority.");
  return qs;
}

/* -------------------------------------------------------------------------
   ILLUSTRATIVE CASE EXAMPLES (clearly marked illustrative, not real items)
   Each shows expected triage behaviour. These are realistic but fictional.
   ------------------------------------------------------------------------- */
const CASES = [
  { id: 1, title: "Commercial-grade aluminium fastener (COTS)", item: "Standard commercial aluminium aerospace fastener, off-the-shelf, exported to a Boeing Defence Australia facility in Brisbane.", expect: "Likely eligible", note: "No ETL keywords; commercial item \u2014 likely EAR/uncontrolled. Still requires classification + authorised-user check.",
    layman: "A basic metal bolt you could buy off a shelf \u2014 it just happens to end up in a defence aircraft. Nothing about it is secret or military-specific.", connection: "This is the easy end of the spectrum the licence-free reforms were built for: routine commercial parts that were getting needlessly tangled in ITAR paperwork before September 2024.", helpful: "The tool shows why a supplier can move fast here \u2014 no ETL hits, no sensitive keywords \u2014 while still reminding them classification isn't optional just because it feels obvious.", openUrl: "https://www.bis.gov/media/documents/aukus.pdf" },
  { id: 2, title: "Inertial navigation unit for a military aircraft", item: "ITAR USML Cat. XII inertial navigation unit, technical data, to an Australian Authorised User.", expect: "Conditionally eligible", note: "ITAR-controlled but not obviously ETL; needs US certification + pre-notification.",
    layman: "A guidance instrument that helps a military aircraft know where it is. It's on the US weapons list, but it isn't one of the specifically excluded technologies.", connection: "This is the core \"licence-free but not licence-blind\" scenario the exemption creates \u2014 ITAR-controlled, yet eligible in principle once registration and notification are done.", helpful: "The tool spells out exactly which boxes still need ticking (Authorised User status, MADE pre-notification, US certification) instead of leaving the supplier to guess.", openUrl: "https://www.federalregister.gov/documents/2024/08/20/2024-18043/international-traffic-in-arms-regulations-exemption-for-defense-trade-and-cooperation-among" },
  { id: 3, title: "Hypersonic glide vehicle components", item: "Components for a hypersonic boost-glide vehicle, technical data, to UK partner.", expect: "Case-by-case review", note: "Hypersonics = Pillar II sensitive / MTCR-adjacent; ETL-central. Review required.",
    layman: "Parts for an extremely fast missile-like vehicle that glides at many times the speed of sound. This is exactly the kind of cutting-edge tech AUKUS Pillar II is meant to share \u2014 carefully.", connection: "Hypersonics sit at the centre of the 'literacy gap' this project targets: genuinely Pillar II-relevant, genuinely sensitive, and easy for a non-specialist to misjudge either way.", helpful: "Rather than a flat yes/no, the tool flags it as case-by-case and tells the supplier which government contact should make the actual call.", openUrl: "https://www.ussc.edu.au/aukus-assessing-defence-trade-control-reforms-in-australia-and-the-united-states" },
  { id: 4, title: "Cluster munition dispenser", item: "Dispenser unit specially designed for cluster munitions.", expect: "Licence required", note: "Cluster munitions are expressly on the ETL \u2014 excluded from the exemption.",
    layman: "Hardware built specifically to release cluster munitions \u2014 weapons banned or heavily restricted in many countries because of the harm they cause civilians.", connection: "This is a deliberate ETL example: some categories were never meant to move licence-free, no matter how efficient the new system gets.", helpful: "The tool refuses to soften this one \u2014 a hard red flag, straight away \u2014 showing suppliers where the exemption simply doesn't apply.", openUrl: "https://www.law.cornell.edu/cfr/text/22/appendix-Supplement_No_2_to_part_126" },
  { id: 5, title: "Submarine nuclear-reactor technical data", item: "Technical data relating to submarine nuclear propulsion reactor.", expect: "Licence required / review", note: "Nuclear propulsion is Pillar I sensitive and highly controlled; case-by-case at minimum.",
    layman: "Design information for the reactor that powers a nuclear submarine \u2014 the single most tightly guarded technology in the entire AUKUS partnership.", connection: "Submarine propulsion is literally AUKUS Pillar I. It's the reason the whole partnership exists, and the reason some information will never be licence-free.", helpful: "The tool treats this as maximally sensitive by default, steering the user straight to specialist advice rather than letting them assume any shortcut applies.", openUrl: "https://www.lowyinstitute.org/the-interpreter/beyond-submarines-why-aukus-pillar-ii-matters-now" },
  { id: 6, title: "F-22 specially designed avionics component", item: "Component specially designed for the F-22 aircraft.", expect: "Licence required", note: "F-22 articles are expressly excluded on the ETL (USML Cat. VIII).",
    layman: "A part built only for America's F-22 Raptor fighter jet \u2014 one of the most protected aircraft platforms in US service.", connection: "The F-22 carve-out shows the ETL isn't just about technology categories \u2014 sometimes a single named platform is excluded outright.", helpful: "The tool catches the platform name itself, not just a technology type, showing how specific the exclusion logic can get.", openUrl: "https://www.law.cornell.edu/cfr/text/22/appendix-Supplement_No_2_to_part_126" },
  { id: 7, title: "Commercial dual-use software (machine-learning library)", item: "Commercial off-the-shelf ML software library, dual-use, to an Australian university.", expect: "Likely eligible", note: "Likely EAR/uncontrolled; check DSGL Part 2 sensitivity and end-use.",
    layman: "Ordinary, publicly available machine-learning software \u2014 the kind used in classrooms and industry every day \u2014 going to a university.", connection: "Universities and research institutions are exactly the \"literacy gap\" tier the brief describes: rarely equipped with export-control specialists, often assuming general-purpose software is automatically fine.", helpful: "The tool confirms the low-risk read while still nudging the user to check the end-use \u2014 research can sometimes tip dual-use software into a more sensitive category.", openUrl: "https://www.bis.gov/media/documents/aukus.pdf" },
  { id: 8, title: "MANPADS launcher mechanism", item: "Launcher mechanism for a man-portable air-defence system.", expect: "Licence required", note: "MANPADS launcher mechanisms are expressly on the ETL.",
    layman: "The firing mechanism for a shoulder-launched anti-aircraft missile \u2014 a weapon type governments worldwide track closely because of proliferation risk.", connection: "Another explicit, named ETL exclusion \u2014 reinforcing that the exemption was designed with real limits, not as a blanket loosening of controls.", helpful: "Shows the tool isn't just keyword-matching randomly \u2014 MANPADS is one of the ETL's clearest, most specific line items.", openUrl: "https://www.law.cornell.edu/cfr/text/22/appendix-Supplement_No_2_to_part_126" },
  { id: 9, title: "Electronic warfare jammer pod", item: "ITAR electronic-warfare jammer pod to an Australian Authorised User.", expect: "Case-by-case review", note: "EW is a Pillar II sensitive category; may be ETL-excluded.",
    layman: "Equipment that jams or disrupts enemy radar and communications \u2014 powerful, but not always on the explicit exclusion list.", connection: "Electronic warfare is one of the Pillar II sensitive categories the USSC specifically warns is easy to misjudge without specialist input.", helpful: "Rather than a false 'likely eligible', the tool routes this to case-by-case review \u2014 exactly the failure mode (under-restriction) the project brief warns against.", openUrl: "https://www.ussc.edu.au/breaking-the-barriers-reforming-us-export-controls-to-realise-the-potential-of-aukus" },
  { id: 10, title: "Transfer to a third-country national in Australia", item: "DSGL technology supplied to a non-exempt foreign national within Australia.", expect: "Licence / permit", note: "Triggers DTC Act s.10A; licence-free environment does not apply to non-exempt foreign persons.",
    layman: "The technology itself might be fine \u2014 the problem is who's receiving it. A foreign national who isn't an AU/UK/US citizen or resident doesn't qualify for the licence-free path, even on home soil.", connection: "This tests the 'recipient' criterion of Australia's five-point licence-free environment \u2014 a rule that's easy to overlook because it's about people, not products.", helpful: "The tool catches recipient-based exclusions that a supplier focused purely on 'what is the item' would likely miss entirely.", openUrl: "https://www.defence.gov.au/business-industry/exporting/applications-pre-notifications/licence-free-environment" },
  { id: 11, title: "Quantum magnetometer for undersea sensing", item: "Quantum magnetometer for undersea sensing, technical data, to UK partner.", expect: "Case-by-case review", note: "Quantum + undersea = Pillar II sensitive; ETL-central. Review required.",
    layman: "A next-generation sensor that uses quantum physics to detect things underwater \u2014 including, potentially, submarines.", connection: "Quantum technology and undersea sensing are both named Pillar II priority areas \u2014 genuinely important to AUKUS, and genuinely easy to get wrong.", helpful: "By flagging both the 'quantum' and 'undersea' signals together, the tool shows how compounding sensitive categories raise the bar for review.", openUrl: "https://www.aspi.org.au/report/aukus-pillar-2-critical-pathways-road-map-enabling-international-collaboration/" },
  { id: 12, title: "Routine ITAR hardware to deployed forces", item: "Defence article to AUKUS armed forces deployed outside AUKUS territories, on-site support.", expect: "Conditionally eligible", note: "May use new ITAR \u00a7126.7(c) if strict conditions met; not ETL, not SME, embedded/contracted.",
    layman: "Standard defence equipment going to AUKUS troops who happen to be deployed overseas \u2014 not on home soil, but still part of the alliance.", connection: "This is the newest piece of the puzzle: ITAR \u00a7126.7(c), added in the December 2025 final rule specifically to cover deployed-forces scenarios the original 2024 rule didn't fully address.", helpful: "The tool reflects the current rule (not the 2024 version) \u2014 exactly the kind of currency a static PDF or a supplier's memory can quietly fall behind on.", openUrl: "https://www.federalregister.gov/documents/2025/12/30/2025-23998/international-traffic-in-arms-regulations-exemption-for-defense-trade-and-cooperation-among" },
  { id: 13, title: "AI decision-support software (military)", item: "ITAR software providing autonomous targeting decision support, technical data, to an Australian Authorised User.", expect: "Case-by-case review", note: "AI/autonomy is a Pillar II sensitive category; lethal-autonomous capabilities attract particular scrutiny.",
    layman: "Software that helps decide what a weapon system should target \u2014 one of the most actively debated areas in defence policy right now, AI and autonomy.", connection: "AI/autonomy is called out as a Pillar II sensitive category precisely because the technology is moving faster than the rules can be rewritten.", helpful: "The tool never auto-clears AI/autonomy items, however routine they sound \u2014 by design, these always land in case-by-case review.", openUrl: "https://www.ussc.edu.au/aukus-assessing-defence-trade-control-reforms-in-australia-and-the-united-states" },
  { id: 14, title: "Space-based ISR payload", item: "Overhead persistent infrared (OPIR) satellite payload, technical data, to UK partner.", expect: "Case-by-case review", note: "Space-based ISR / missile-warning payloads are controlled; case-by-case review.",
    layman: "A satellite instrument that watches the Earth from orbit to give early warning of missile launches \u2014 space-based intelligence, surveillance and reconnaissance (ISR).", connection: "Space is one of the newer AUKUS collaboration areas, and this case shows the tool's pattern list keeping pace with categories added after the original build.", helpful: "It demonstrates the tool can be extended as the technology landscape shifts, rather than being frozen to whatever list existed on day one.", openUrl: "https://www.ussc.edu.au/aukus-assessing-defence-trade-control-reforms-in-australia-and-the-united-states" },
  { id: 15, title: "High-energy laser weapon system", item: "Directed-energy laser weapon system and directly related technical data.", expect: "Licence required / review", note: "Directed-energy weapons (USML Cat. XVIII) may be ETL-excluded; review required.",
    layman: "A weapon that uses a focused beam of light instead of a bullet or missile \u2014 directed-energy weapons are a fast-growing category in modern militaries.", connection: "This is the case used to verify the engine end-to-end: it should never be waved through as 'likely eligible' just because it's futuristic-sounding.", helpful: "It's the clearest proof the decision trail works as intended \u2014 a sensitive weapon category returns a licence-required / review result, not an optimistic guess.", openUrl: "https://www.law.cornell.edu/cfr/text/22/appendix-Supplement_No_2_to_part_126" },
  { id: 16, title: "Commercial additively-manufactured turbine blade", item: "COTS additively-manufactured civil aerospace turbine blade, dual-use, to an Australian university.", expect: "Conditionally eligible", note: "Additive manufacturing of turbine blades can be sensitive; EAR/DSGL classification and end-use must be checked before any licence-free conclusion.",
    layman: "A jet-engine turbine blade made with a 3D printer instead of traditional casting. The printing process itself can be more sensitive than the finished part looks.", connection: "This case was deliberately softened from an earlier 'likely eligible' read \u2014 additive manufacturing know-how for turbine components can brush up against ETL manufacturing categories, so a flat green light would have been misleading.", helpful: "It shows the tool erring toward caution rather than optimism when a technique (not just the item) could carry risk \u2014 exactly the under-restriction failure mode the brief is built to avoid.", openUrl: "https://www.defence.gov.au/business-industry/exporting/applications-pre-notifications/licence-free-environment" },
  { id: 17, title: "Geospatial intelligence dataset to a foreign national", item: "DSGL technology supplied to a non-exempt foreign national within Australia.", expect: "Licence / permit", note: "Triggers DTC Act s.10A; licence-free environment does not apply to non-exempt foreign persons.",
    layman: "Mapping and imagery intelligence data, being handed to someone who isn't an AU/UK/US citizen or permanent resident \u2014 even though they're physically in Australia.", connection: "A second recipient-based example, paired with Case 10, to make sure the 'who' question gets as much attention in the tool as the 'what' question.", helpful: "Reinforces that Australia's Defence Trade Controls Amendment Act 2024 created real criminal offences (ss. 10A\u201310C) for exactly this scenario \u2014 not just a paperwork issue.", openUrl: "https://www.defence.gov.au/business-industry/exporting/export-controls-framework/changes-export-controls" },
  { id: 18, title: "Significant Military Equipment (SME) re-transfer abroad", item: "Re-export of Significant Military Equipment outside AUKUS territories, not under \u00a7126.7(c) conditions.", expect: "Licence required", note: "SME manufacturing abroad and \u00a7123.15 congressional-notification thresholds are excluded from \u00a7126.7(c); licence required.",
    layman: "Sending seriously significant defence equipment on to a further country \u2014 outside the AU/UK/US footprint \u2014 after it's already arrived under the exemption.", connection: "This tests the 'no re-export loophole' principle: the licence-free exemption is scoped to AUKUS territories, and doesn't automatically extend once the item moves again.", helpful: "It shows the tool tracking a transfer's full journey, not just its first hop \u2014 a small SME supplier could otherwise assume one licence-free step covers the whole chain.", openUrl: "https://www.federalregister.gov/documents/2025/12/30/2025-23998/international-traffic-in-arms-regulations-exemption-for-defense-trade-and-cooperation-among" },
];

/* -------------------------------------------------------------------------
   UI WIRING
   ------------------------------------------------------------------------- */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

function runAssessment() {
  const input = {
    description: $("#desc").value,
    itemType: $("#itemType").value,
    destination: $("#destination").value,
    recipient: $("#recipient").value,
    authorisedUser: $("#authorisedUser").value,
    thirdCountryTransfer: $("#thirdCountry").value,
    technicalData: $("#technicalData").value,
    classified: $("#classified").value,
  };
  const result = assess(input);
  renderResult(result);
}

function toneClass(t) {
  return { green: "tone-green", amber: "tone-amber", orange: "tone-orange", red: "tone-red", info: "tone-info" }[t] || "tone-info";
}

function renderResult(r) {
  const box = $("#resultBox");
  const tone = toneClass(r.tone);
  let html = `<div class="result-card ${tone}">
    <div class="result-tone">${r.tone === "info" ? "AWAITING INPUT" : r.tone.toUpperCase()}</div>
    <h3>${r.title}</h3>
    <p class="summary">${r.summary}</p>
    <div class="confidence">Confidence: ${r.confidence} &middot; <em>This is a research aid, not legal advice.</em></div>
  </div>`;

  if (r.flags.length) {
    html += `<h4 class="block-h">Decision trail \u2014 which rules fired and why</h4><ul class="flags">`;
    const order = ["red", "orange", "amber", "green", "info"];
    [...r.flags].sort((a, b) => order.indexOf(a.level) - order.indexOf(b.level)).forEach((f) => {
      html += `<li class="${toneClass(f.level)}">
        <span class="gate">${f.gate.replace(/_/g, " ")}</span>
        <span>${f.text}</span>
        ${f.sources.length ? `<span class="srcs">${f.sources.map((s) => `<a href="${SOURCES[s].url}" target="_blank" rel="noopener">${SOURCES[s].id}</a>`).join(" ")}</span>` : ""}
      </li>`;
    });
    html += `</ul>`;
  }

  if (r.checklist.length) {
    html += `<h4 class="block-h">Evidence & documentation to prepare</h4><ul class="checklist">`;
    r.checklist.forEach((c) => {
      html += `<li><span class="chk">\u2610</span> ${c.text} <a href="${SOURCES[c.src].url}" target="_blank" rel="noopener" class="src-tag">${SOURCES[c.src].id}</a></li>`;
    });
    html += `</ul>`;
  }

  if (r.escalation.length) {
    html += `<h4 class="block-h">Where the tool's judgement ends \u2014 questions to escalate</h4><ol class="escalation">`;
    r.escalation.forEach((q) => { html += `<li>${q}</li>`; });
    html += `</ol>`;
  }

  if (r.citations.length) {
    html += `<h4 class="block-h">Sources for this assessment</h4><ul class="citelist">`;
    r.citations.forEach((s) => {
      html += `<li><a href="${s.url}" target="_blank" rel="noopener">${s.title}</a> <span class="src-type">${s.type}</span></li>`;
    });
    html += `</ul>`;
  }

  box.innerHTML = html;
  box.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSources() {
  const tbody = $("#sourceTable tbody");
  if (!tbody) return;
  let rows = "";
  Object.values(SOURCES).forEach((s) => {
    rows += `<tr><td>${s.title}</td><td>${s.authority}</td><td>${s.type}</td><td>${s.date}</td><td><a href="${s.url}" target="_blank" rel="noopener">open \u2197</a></td></tr>`;
  });
  tbody.innerHTML = rows;
}

function caseTone(c) {
  return c.expect.startsWith("Likely eligible") ? "green" : c.expect.startsWith("Conditionally") ? "amber" : c.expect.startsWith("Case") ? "orange" : "red";
}

function renderCases() {
  const box = $("#caseBank");
  if (!box) return;
  let html = "";
  CASES.forEach((c) => {
    const tone = caseTone(c);
    html += `<div class="case ${toneClass(tone)}" data-case-id="${c.id}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="Open details for Case ${c.id}: ${c.title}">
      <div class="case-num">CASE ${String(c.id).padStart(2, "0")}</div>
      <div class="case-title">${c.title}</div>
      <div class="case-item">${c.item}</div>
      <div class="case-expect">${c.expect}</div>
      <div class="case-note">${c.note}</div>
      <div class="case-open-hint">Click for details &rarr;</div>
    </div>`;
  });
  box.innerHTML = html;
  box.querySelectorAll(".case").forEach((el) => {
    const open = () => openCaseModal(Number(el.dataset.caseId));
    el.addEventListener("click", open);
    el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
}

/* -------------------------------------------------------------------------
   CASE STUDY MODAL \u2014 layman definition, project connection, why it helps,
   and an "open in new tab" link to the most relevant primary source.
   ------------------------------------------------------------------------- */
function ensureCaseModal() {
  let overlay = $("#caseModalOverlay");
  if (overlay) return overlay;
  overlay = document.createElement("div");
  overlay.id = "caseModalOverlay";
  overlay.className = "caseModal-overlay";
  overlay.innerHTML = `<div class="caseModal" role="dialog" aria-modal="true" aria-labelledby="caseModalTitle">
    <button class="caseModal-close" aria-label="Close">&times;</button>
    <div id="caseModalBody"></div>
  </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeCaseModal(); });
  overlay.querySelector(".caseModal-close").addEventListener("click", closeCaseModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCaseModal(); });
  return overlay;
}

function openCaseModal(id) {
  const c = CASES.find((x) => x.id === id);
  if (!c) return;
  const overlay = ensureCaseModal();
  const tone = caseTone(c);
  const body = overlay.querySelector("#caseModalBody");
  body.innerHTML = `
    <div class="caseModal-num">CASE ${String(c.id).padStart(2, "0")}</div>
    <h3 id="caseModalTitle">${c.title}</h3>
    <div class="caseModal-expect ${toneClass(tone)}" style="border:1px solid;">${c.expect}</div>
    <div class="caseModal-block">
      <h4>In plain English</h4>
      <p>${c.layman || c.item}</p>
    </div>
    <div class="caseModal-block">
      <h4>How this connects to the Navigator</h4>
      <p>${c.connection || ""}</p>
    </div>
    <div class="caseModal-block">
      <h4>Why it's useful to see</h4>
      <p>${c.helpful || ""}</p>
    </div>
    <div class="caseModal-block">
      <h4>Technical description</h4>
      <p>${c.item}</p>
    </div>
    <div class="caseModal-actions">
      ${c.openUrl ? `<a class="btn btn-primary" href="${c.openUrl}" target="_blank" rel="noopener">Open source in new tab &#8599;</a>` : ""}
      <button class="btn btn-ghost" id="caseModalCloseBtn">Close</button>
    </div>
  `;
  body.querySelector("#caseModalCloseBtn").addEventListener("click", closeCaseModal);
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCaseModal() {
  const overlay = $("#caseModalOverlay");
  if (!overlay) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

// Live source watch — fetches source-watch.json (regenerated by monitor.py on a schedule)
// and renders real last-checked timestamps + change alerts into the Source Watch panel.
async function loadSourceWatch() {
  const host = document.querySelector("#sourceWatchLive");
  if (!host) return;
  try {
    const res = await fetch("source-watch.json", { cache: "no-store" });
    if (!res.ok) throw new Error("not found");
    const data = await res.json();
    const fmt = (iso) => { try { return new Date(iso).toLocaleString("en-AU", { timeZone: "Australia/Sydney", dateStyle: "medium", timeStyle: "short" }); } catch (e) { return iso; } };
    const dot = (st) => ({ current: "good", changed: "warn", review: "warn", error: "bad" }[st] || "bad");
    let html = `<div class="sw-head"><span class="sw-dot good"></span> Live source check &middot; last verified <strong>${fmt(data.last_checked)}</strong></div>`;
    if (data.changes_detected && data.changes_detected.length) {
      html += `<div class="sw-alert">Change detected on ${data.changes_detected.length} source(s) since last check &mdash; review the live page(s) before relying on this guidance.</div>`;
      data.changes_detected.forEach((c) => { html += `<div class="sw-change"><a href="${c.url}" target="_blank" rel="noopener">${c.label}</a></div>`; });
    }
    html += `<ul class="sw-list">`;
    (data.sources || []).forEach((src) => {
      html += `<li><span class="sw-dot ${dot(src.status)}"></span><span class="sw-label">${src.label}</span><span class="sw-note">${src.note}</span><a href="${src.url}" target="_blank" rel="noopener" class="sw-open">open ↗</a></li>`;
    });
    html += `</ul>`;
    host.innerHTML = html;
  } catch (e) {
    host.innerHTML = `<div class="sw-head"><span class="sw-dot bad"></span> Live check unavailable &mdash; see the source table below for direct links.</div>`;
  }
}

// Highlights the current page in the top nav (each page is a separate .html
// file now, so this replaces the old single-page anchor scroll-spy).
function markActiveNav() {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const file = path === "" ? "index.html" : path;
  document.querySelectorAll(".topnav a, .footer-links a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === file || (file === "index.html" && (href === "" || href === "./" || href === "index.html"))) {
      a.classList.add("active");
    }
  });
}

function initScrollReveal() {
  const els = document.querySelectorAll(".section, .hero-inner, .case, .about-card, .verify-card, .mission-card, .stake-card, .home-cta-card, .source-watch .watch-item");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("revealed"); io.unobserve(en.target); } });
  }, { threshold: 0.08 });
  els.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
}

document.addEventListener("DOMContentLoaded", () => {
  markActiveNav();
  loadSourceWatch();
  renderSources();
  renderCases();
  initScrollReveal();

  const runBtn = $("#runBtn");
  const resetBtn = $("#resetBtn");
  if (runBtn) runBtn.addEventListener("click", runAssessment);
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      $$("select, textarea").forEach((el) => (el.value = el.tagName === "TEXTAREA" ? "" : el.options[0].value));
      $("#resultBox").innerHTML = "";
    });
  }
  // live re-run on input change for responsiveness
  if ($("#desc")) {
    $$("select, #desc").forEach((el) => el.addEventListener("input", () => { if ($("#desc").value.trim().length >= 3) runAssessment(); }));
  }
});

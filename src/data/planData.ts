import type { PlanGoal, ChapterData } from '../types';

export const PLAN_OVERVIEW = {
  title: "Plan2050 Regional Transportation Plan",
  subtitle: "Tri-Cities Area Metropolitan Planning Organization (TCAMPO)",
  leadParagraph: "Each Metropolitan Planning Organization (MPO) must prepare and adopt a long-range transportation plan (Plan2050) in accordance with federal regulations. The plan aims at creating a coordinated, multimodal transportation system that addresses the needs and objectives of the MPO, state, and transit providers. It must consider transit, highways, bicycle and pedestrian facilities, accessibility, and freight; accommodate current and future travel demand; and support economic development, transportation, land use, and sustainability goals over a minimum 20-year planning horizon while remaining fiscally constrained.",
  keyStats: [
    { label: "Regional Population", value: "167,920", subtext: "2020 Decennial Census (+24.4% since 1990)" },
    { label: "Planning Area", value: "324 sq mi", subtext: "518 people / sq mi density" },
    { label: "Member Jurisdictions", value: "6", subtext: "3 Cities & 3 County Portions" },
    { label: "Horizon Year", value: "2050", subtext: "25-Year Constrained Investment Horizon" },
  ],
  jurisdictions: [
    { name: "City of Colonial Heights", type: "Independent City", population: "18,170", area: "7.8 sq mi" },
    { name: "City of Hopewell", type: "Independent City", population: "23,033", area: "10.8 sq mi" },
    { name: "City of Petersburg", type: "Independent City", population: "33,458", area: "23.2 sq mi" },
    { name: "Chesterfield County (Part)", type: "County Portion", population: "52,410", area: "112.5 sq mi" },
    { name: "Dinwiddie County (Part)", type: "County Portion", population: "14,820", area: "74.1 sq mi" },
    { name: "Prince George County (Part)", type: "County Portion", population: "26,029", area: "95.6 sq mi" },
  ]
};

export const PLAN_GOALS: PlanGoal[] = [
  {
    id: 'safety',
    number: 1,
    title: "Safety",
    description: "Improve the safety of the transportation system for all people",
    iconName: "ShieldAlert",
    badgeBg: "linear-gradient(135deg, #ef4444, #b91c1c)",
    accentColor: "#ef4444",
    details: "Enhance safety and comfort of bicycle and pedestrian facilities. Work to eliminate all serious injuries and fatalities resulting from crashes across the Tri-Cities region through Complete Streets design, intersection retrofits, and Vision Zero policies.",
    metrics: [
      { label: "Target Reduction", target: "Vision Zero (0 Fatalities)", benchmark: "Average 227 Killed/Seriously Injured/Year (2016-2025)" },
      { label: "Vulnerable Users", target: "Zero Ped/Bike Deaths", benchmark: "Currently 8% (17/yr) of serious injuries/fatalities" },
      { label: "VTrans Safety Needs", target: "100% High-Risk Corridors Addressed", benchmark: "US-1, US-301, VA-36, Temple Ave priorities" }
    ]
  },
  {
    id: 'environment',
    number: 2,
    title: "Environment / Land Use",
    description: "Reduce the negative impact the transportation system has on the natural and built environment",
    iconName: "Leaf",
    badgeBg: "linear-gradient(135deg, #10b981, #047857)",
    accentColor: "#10b981",
    details: "Address roadways prone to flooding and consider climate impacts in prioritization. Reduce transportation-related pollutants. Increase trips taken by shared and active modes. Support transit-oriented, walkable communities with particular emphasis on underserved and vulnerable populations.",
    metrics: [
      { label: "Active & Transit Mode Share", target: "+50% Share Growth", benchmark: "Drive alone currently accounts for ~82% of commutes" },
      { label: "Resilience Retrofits", target: "100% Repetitive Flood Corridors", benchmark: "Appomattox & James River flood mitigation" },
      { label: "Environmental Justice Focus", target: "Equitable Zero-Emission Rollout", benchmark: "79 Identified Areas of Concern protected" }
    ]
  },
  {
    id: 'equity',
    number: 3,
    title: "Equity / Accessibility",
    description: "Improve equitable access through greater availability of mode choices that are affordable and efficient",
    iconName: "Bike",
    badgeBg: "linear-gradient(135deg, #06b6d4, #0e7490)",
    accentColor: "#06b6d4",
    details: "Reduce trip lengths for all people with a focus on underserved and vulnerable populations. Increase access to jobs and community services via transit, walking, and biking across the 79 census block group Areas of Concern.",
    metrics: [
      { label: "Zero-Vehicle Household Transit Access", target: "100% Within 1/4 Mile Transit", benchmark: "Petersburg has 14.8% zero-vehicle households; Hopewell 11.7%" },
      { label: "Fare-Free Sustainability", target: "Sustain Zero-Fare Operations", benchmark: "PAT fixed-route fare-free since May 2020 (+16% ridership)" },
      { label: "Job Access Travel Time", target: "< 45 min transit job access", benchmark: "Connecting urban core to regional job centers" }
    ]
  },
  {
    id: 'economic',
    number: 4,
    title: "Economic Development",
    description: "Improve connectivity and mobility for strong economic vitality",
    iconName: "TrendingUp",
    badgeBg: "linear-gradient(135deg, #f59e0b, #b45309)",
    accentColor: "#f59e0b",
    details: "Reduce peak period travel times and freight bottlenecks. Increase transportation investments focusing on economic vitality. Improve reliability and accessibility of travel to and within regional activity centers and tourist destinations.",
    metrics: [
      { label: "Freight Logistics Throughput", target: "+35% Freight Efficiency", benchmark: "43.1M tons freight moved annually (73.9% by truck)" },
      { label: "Peak Bottleneck Relief", target: "Eliminate LOS F Chokepoints", benchmark: "I-95/I-85/I-295 Tri-Anchor interchange upgrades" },
      { label: "Job Hub Connectivity", target: "< 1.05 Travel Time Index", benchmark: "Direct ties to Richmond MSA & Meadowville Logistics" }
    ]
  },
  {
    id: 'mobility',
    number: 5,
    title: "Mobility",
    description: "Increase travel efficiency and mode choices by maintaining the transportation system in a state of good repair",
    iconName: "Wrench",
    badgeBg: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    accentColor: "#8b5cf6",
    details: "Increase complete streets percentage across highway network to maximize capacity. Increase system efficiency through operational, TDM, and technology-based solutions (TSMO). Improve system reliability across all modes and sustain pavement, bridge, and transit assets in a State of Good Repair (SGR).",
    metrics: [
      { label: "Interstate Pavement SGR", target: "> 82% Sufficient (CCI ≥ 60)", benchmark: "Current: 90.9% Interstate sufficient; 57.7% good" },
      { label: "Bridge Condition Target", target: "< 3.6% Deck Area Poor", benchmark: "Current: 6.7% Poor (I-95 over Norfolk Southern & E Washington St)" },
      { label: "Transit Fleet Renewal", target: "< 15% Buses beyond ULB", benchmark: "Current: 64% buses at/beyond Useful Life Benchmark (avg 14 yrs)" }
    ]
  }
];

export const CHAPTERS_DATA: ChapterData[] = [
  // ── Chapter 1: Introduction ──────────────────────────────────────────────────────────
  {
    id: 'introduction',
    chapterNumber: 1,
    title: "Introduction",
    fullTitle: "Chapter 1: Introduction & Regional Planning Framework",
    subtitle: "Regional Context, MPO Organization, Federal Requirements, and Strategic Performance Goals",
    pdfFilename: "PLAN2050_Chapter1_Introduction.pdf",
    sections: [
      {
        id: "regional-context",
        title: "Regional Context",
        text: [
          "Located along the I-95, I-85, and I-295 corridors about 25 miles south of Richmond, the Tri-Cities region is situated at the confluence of the James and Appomattox Rivers. The Tri-Cities Area Metropolitan Planning Organization (TCAMPO) is the federally designated planning body responsible for transportation planning in south-central Virginia's Tri-Cities region. Contained within the Crater Planning District Commission (PDC), TCAMPO is composed of six member jurisdictions, including the independent cities of Colonial Heights, Hopewell, and Petersburg and portions of the adjoining Chesterfield, Dinwiddie, and Prince George Counties. The Tri-Cities region is part of the Greater Richmond Region, which is defined by the Office of Management and Budget (OMB) as the Richmond, Virginia Metropolitan Statistical Area (MSA).",
          "Figure 1 depicts the TCAMPO planning area in the context of the Richmond MSA. According to the 2020 decennial census, the population of TCAMPO was 167,920. With a land area of approximately 324 square miles, the MPO has a population density of approximately 518 people per square mile. Among all MPOs in Virginia, TCAMPO is ranked fifth in terms of population, sixth in land area, and tenth in population density. Although the population of the Tri-Cities region grew by 24.4% between the last two decennial censuses, it lags behind the state (39.5%) and the nation (33.3%)."
        ],
        callout: {
          type: "highlight",
          title: "Regional Geographic Setting",
          content: "TCAMPO sits at the convergence of three major interstates (I-95, I-85, I-295) and two navigable rivers, linking Greater Richmond to Southside Virginia and Hampton Roads deepwater ports."
        },
        figure: {
          src: "/assets/figures/fig01_mpo_boundaries.jpg",
          title: "Figure 1: Greater Richmond Region and Metropolitan Planning Organization Boundaries",
          caption: "TCAMPO planning area (blue) within the broader Richmond Metropolitan Statistical Area (purple outline), showing neighboring RRTPO (yellow) and member jurisdictions.",
          source: "U.S. Census Bureau, Esri, TomTom, Garmin, USGS"
        }
      },
      {
        id: "unincorporated-communities",
        title: "Unincorporated Communities & Regional Anchors",
        text: [
          "Unincorporated communities located within the Tri-Cities region include portions of Chester, Enon, Ettrick, Fort Gregg-Adams (Fort Lee), Matoaca, and Prince George. These communities, which are defined as Census Designated Places (CDP) by the United States Census Bureau, are integral to the TCAMPO planning area.",
          "Ettrick is home to Virginia State University (VSU), the region's largest university or college. Fort Lee (Fort Gregg-Adams) is a large United States Army post and is one of the region's largest employers. The Chester, Enon, Matoaca, and Prince George CDPs are additional clusters that contain large residential and commercial activity centers. Each of these communities have significant amounts of the region's employment and housing and are major sources of trip generation.",
          "To carry out transportation planning activities for the region, TCAMPO coordinates with its six member jurisdictions, the Virginia Department of Transportation (VDOT), the Department of Rail and Public Transportation (DRPT), Crater PDC, Petersburg Area Transit (PAT), and other planning partners to guide investment in the region's transportation network."
        ]
      },
      {
        id: "tcampo-structure",
        title: "TCAMPO Organization and Structure",
        text: [
          "TCAMPO consists of a Policy Committee and a Technical Advisory Committee (TAC), each playing a distinct role in the regional planning process. The Policy Committee serves as the primary decision-making body and is responsible for adopting all federally required planning products. Voting members include elected representatives from each of the member jurisdictions, appointed representatives from the Office of the Virginia Secretary of Transportation, the Crater Planning District Commission (CPDC), and Petersburg Area Transit (PAT). Representatives from the Federal Transit Administration (FTA), the Federal Highway Administration (FHWA), and DRPT participate as nonvoting members.",
          "The TAC is composed of staff representatives from the member jurisdictions, Secretary of Transportation, PAT, and Crater PDC. It provides technical support and serves in an advisory capacity to the Policy Committee. Representatives from Fort Lee, RideFinders, and the National Park Service at Petersburg National Battlefield participate as advisory, nonvoting members given their importance to transportation in the Tri-Cities region.",
          "Regional and state transportation and air quality planning agencies have executed Memoranda of Agreement pursuant to 23 CFR 450.310, defining the roles and responsibilities of each participating agency. During the long-range planning process, TCAMPO and Richmond Regional Transportation Planning Organization (RRTPO) develop an accompanying Conformity Report to comply with metropolitan transportation and air quality planning requirements."
        ]
      },
      {
        id: "purpose-of-plan",
        title: "Purpose of the Plan",
        text: [
          "Plan2050 is TCAMPO's Long Range Transportation Plan (LRTP). Also known as a Metropolitan Transportation Plan (MTP), Plan2050 is a federally required document that establishes the vision, goals, and multimodal investment priorities for the Tri-Cities region's transportation system. As TCAMPO's core long-range planning document, Plan2050 creates a strategic framework for decision-making across the region, guiding investments that improve mobility, safety, equity, and economic development over the next 20 years.",
          "Plan2050 provides the basis from which shorter-range programming documents, such as the Metropolitan Transportation Improvement Program (MTIP), will be developed. Consistent with federal requirements, projects must be in the MPO's current approved LRTP to be eligible for federal transportation funding. Federal regulations also require that the LRTP address a planning horizon of at least 20 years and is fiscally constrained. This means that Plan2050 includes only projects and programs for which a reasonable funding source can be identified. Plan2050 ensures that investments in its transportation network are coordinated, strategic, and aligned with the goals of the communities it serves."
        ],
        figure: {
          src: "/assets/report-card-clean.jpg",
          title: "Official LRTP Publication Document",
          caption: "The Tri-Cities Area MPO PLAN2050 Long-Range Multimodal Transportation Plan, owned and maintained by TCAMPO.",
          source: "TCAMPO / Crater Planning District Commission"
        }
      },
      {
        id: "role-of-tcampo",
        title: "Role of TCAMPO",
        text: [
          "TCAMPO is responsible for carrying out the federally mandated continuing, comprehensive, and cooperative (3C) planning process on behalf of the region's member jurisdictions. In this role, TCAMPO coordinates regional transportation planning, prioritizes investments, and ensures that federal transportation funds are directed toward projects that reflect the needs and priorities of the Tri-Cities region. In addition to the LRTP, TCAMPO develops and maintains the following federally required planning products:\n\n• Unified Planning Work Program (UPWP) – updated annually\n• Metropolitan Transportation Plan (MTP) – updated every four years\n• Metropolitan Transportation Improvement Program (MTIP) – updated every four years\n• Congestion Management Process (CMP) – maintained on an ongoing basis",
          "TCAMPO also maintains a Public Participation Plan and Title VI Compliance Plan in accordance with federal public involvement and civil rights requirements (23 CFR 450.316; 49 U.S.C. 5332). Together, these planning products establish the region's transportation priorities, which in turn guide TCAMPO's role in selecting and recommending projects for federal funding, including the Surface Transportation Block Grant (STBG), Congestion Mitigation and Air Quality (CMAQ), and Transportation Alternatives Program (TAP). Beyond federal allocations, TCAMPO also evaluates and recommends projects through Virginia's SMART SCALE prioritization process and provides technical assistance to its member jurisdictions in developing competitive applications."
        ]
      },
      {
        id: "federal-regulations",
        title: "Federal Regional Transportation Planning Requirements",
        text: [
          "Federal law requires that transportation plans in urbanized areas with a population of 50,000 or more be developed through the 3C planning process (23 U.S.C. 134; 49 U.S.C. 5303). MPOs must develop and maintain a Long-Range Transportation Plan and a Transportation Improvement Program, each updated every four years. MPOs serving urbanized areas with a population of 200,000 or more, designated as Transportation Management Areas (TMAs), are also required to maintain a Congestion Management Process (23 CFR 450.322).",
          "Federal planning requirements also emphasize performance-driven, outcome based planning, first introduced under MAP-21 in 2012 and continued under the FAST Act and the Infrastructure Investment and Jobs Act (IIJA). This framework requires MPOs and states to establish measurable targets tied to national performance goals covering safety, infrastructure condition, system reliability, and freight movement (23 U.S.C. 150; 23 CFR 490), ensuring federal investments advance national transportation priorities."
        ]
      },
      {
        id: "planning-factors",
        title: "National Transportation Planning Factors",
        text: [
          "Since the Intermodal Surface Transportation Efficiency Act of 1991 (ISTEA), Congress has identified key planning areas for MPOs and states to consider when developing multimodal transportation plans. MAP-21 established ten planning factors under 23 CFR 450.306 that remain in effect through the FAST Act and IIJA:",
          "1. Support the economic vitality of the metropolitan area, especially by enabling global competitiveness, productivity, and efficiency\n2. Increase the safety of the transportation system for motorized and non-motorized users\n3. Increase the security of the transportation system for motorized and non-motorized users\n4. Increase the accessibility and mobility of people and freight\n5. Protect and enhance the environment, promote energy conservation, improve quality of life, and promote consistency between transportation improvements and planned growth\n6. Enhance the integration and connectivity of the transportation system across and between modes for people and freight\n7. Promote efficient system management and operation\n8. Emphasize the preservation of the existing transportation system\n9. Improve the resiliency and reliability of the transportation system and reduce stormwater impacts\n10. Enhance travel and tourism"
        ]
      },
      {
        id: "performance-measures",
        title: "Federal Performance Measures",
        text: [
          "Under MAP-21 and continued through the IIJA, MPOs and states must set targets tied to seven national goal areas:",
          "• Safety — reducing fatalities and serious injuries\n• Infrastructure condition — pavement and bridge condition ratings\n• System reliability — travel time consistency on highways and freight corridors\n• Freight movement — truck travel time reliability\n• CMAQ — traffic congestion and on-road mobile source emissions\n• Transit asset management — state of good repair for transit systems\n• Transit safety — fatalities, injuries, and safety events on transit",
          "These are governed primarily under 23 CFR 490 and require states and MPOs to establish measurable targets and report progress regularly to FHWA and FTA."
        ]
      },
      {
        id: "goals-objectives",
        title: "Plan2050 Goals, Objectives, Performance Measures",
        text: [
          "The goals and objectives for Plan2050 build on the framework established for the region's previously adopted LRTP, Plan2045, and were affirmed through the MPO's Multimodal Mobility Plan in 2025. Rather than beginning from scratch, TCAMPO used the multimodal planning process as an opportunity to validate that the existing goals remained relevant to the region's evolving conditions, community priorities, and federal performance requirements.",
          "Guided by the previous public survey developed for Plan2045 and subsequent planning efforts, TCAMPO adopted five core goals: Safety, Environment/Land Use, Equity/Accessibility, Economic Development, and Mobility.",
          "Each goal in Plan2050 is supported by objectives that define what the region is working toward, including reducing highway congestion, improving system reliability, expanding equitable access to transit, and reducing fatalities and serious injuries. As shown in Figure 2, Plan2050 performance measures such as Travel Time Index (TTI), Peak Hours of Excessive Delay (PHED), and percent of person-miles traveled on the Interstate/non-Interstate provide a quantitative basis for evaluating plan outcomes in alignment with federal requirements under 23 CFR 490."
        ],
        figure: {
          src: "/assets/plan2050-report-cover-2x.png",
          title: "Figure 1.2: Official Plan2050 Performance Goals and Report Cover",
          caption: "Adopted TCAMPO Plan2050 document graphic affirming the five core performance goals and objectives.",
          source: "Tri-Cities Area MPO"
        }
      },
      {
        id: "planning-process",
        title: "Planning Process",
        text: [
          "The development of Plan2050 followed a process designed to meet federal requirements while remaining grounded on the region's priorities. The process followed multiple phases including data collection and existing conditions assessment, community and stakeholder engagement, scenario development and evaluation, project prioritization, and fiscal constraint analysis.",
          "Data Collection and Conditions Assessment:\nTCAMPO began the planning process by establishing a comprehensive understanding of national and regional trends and forecasts (Chapter 2). This was followed by an assessment of existing conditions across the region, including roadway performance, bridge and pavement conditions, transit coverage and ridership, bicycle/pedestrian infrastructure, and freight corridors (Chapter 3). Travel demand modeling using current and projected socioeconomic data served as the baseline.",
          "Community and Stakeholder Engagement:\nPublic and stakeholder engagement was conducted in accordance with TCAMPO's Public Participation Plan and Title VI requirements, designed to reach traditionally underserved or underrepresented populations through meetings, surveys, and local coordination.",
          "Project Identification & Prioritization:\nTransportation needs and candidate projects were evaluated using factors related to safety, mobility, congestion, accessibility, equity, environment, and economic development to determine ranking in the financially constrained plan.",
          "Fiscal Constraint:\nRevenues were projected based on historical allocations and formula apportionments from VDOT, DRPT, and CVTA, organized into funding tiers to present a realistic, implementable program rather than an unconstrained wish list.",
          "Interagency and Regional Coordination:\nTCAMPO coordinated closely with VDOT, DRPT, PAT, RRTPO, Fort Gregg-Adams, RideFinders, and Petersburg National Battlefield to address cross-boundary travel needs and fulfill 23 CFR 450.310 consultation procedures."
        ]
      }
    ]
  },

  // ── Chapter 2: Trends & Forecasts ────────────────────────────────────────────────────
  {
    id: 'trends',
    chapterNumber: 2,
    title: "Trends & Forecasts",
    fullTitle: "Chapter 2: National and Regional Trends and Forecasts",
    subtitle: "Demographic Growth, Employment Density, Commuter Flows, Equity Analysis, and 2045 Projections",
    pdfFilename: "PLAN2050_Chapter2_Trends_Forecasts.pdf",
    sections: [
      {
        id: "trends-intro",
        title: "Introduction",
        text: [
          "This section examines the region's existing population, employment, and activity density; evaluates socioeconomic growth trends and forecasts within TCAMPO, the Commonwealth of Virginia, and the United States of America; and maps demographic patterns within the Tri-Cities. Because Chesterfield, Dinwiddie, and Prince George Counties lie only partially within the TCAMPO planning area, the trends and forecasts presented in this section only apply to the portions of those counties within the planning area.",
          "Understanding where the region's existing residents and jobs are concentrated and where they are growing is critical for identifying current and emerging transportation needs. Additionally, an analysis of the region's underserved and vulnerable populations provides insight into transportation access considerations, helping to ensure access to multimodal transportation options throughout the region."
        ]
      },
      {
        id: "density-maps",
        title: "Population, Employment, and Activity Density",
        text: [
          "The following maps illustrate existing population, employment, and activity density by block group in the Tri-Cities region and beyond. Current population estimates are drawn from the American Community Survey (ACS) 2024 5-Year Estimates. Employment estimates are drawn from the U.S. Census Bureau's LEHD Origin-Destination Employment Statistics, version 8 (LODES8) Workplace Area Characteristics (WAC) dataset.",
          "Figure 3 illustrates existing population density (residents per square mile). Population density is highest in the region's core: Petersburg, Colonial Heights, and Hopewell, with additional concentrations in Chesterfield, Dinwiddie, and Prince George along the I-95 and I-85 corridors and near VSU and Fort Lee. Low-density areas in the core are primarily industrial, commercial, or part of the Petersburg National Battlefield.",
          "Figure 4 illustrates existing employment density (jobs per square mile). Employment is concentrated along I-95 and I-85 through Dinwiddie, Colonial Heights, and Petersburg, with additional dense clusters just north in Chester and Meadowville. Other high-density employment nodes include downtown Petersburg and Hopewell, VSU in Ettrick, Southpark Mall, and major arterials such as Temple Ave (VA-144), South Crater Road (US-301), Oaklawn Blvd (VA-36), and East Hundred Road (VA-10). Note that military personnel at Fort Lee are not captured in the federal LEHD dataset.",
          "Figure 5 combines both measures to show activity density (residents plus jobs per square mile), highlighting where population and employment overlap most intensely."
        ],
        figures: [
          {
            src: "/assets/figures/fig03_pop_density.jpg",
            title: "Figure 3: TCAMPO Population Density by Block Group",
            caption: "Residents per square mile across TCAMPO census block groups. Density peaks at >5,000 residents/sq mi in Petersburg, Colonial Heights, and Hopewell.",
            source: "2023 ACS 5-Year Estimates"
          },
          {
            src: "/assets/figures/fig04_emp_density.jpg",
            title: "Figure 4: TCAMPO Employment Density by Block Group",
            caption: "Jobs per square mile across TCAMPO census block groups, highlighting commercial and industrial employment clusters along I-95 and I-85.",
            source: "2023 LEHD LODES8 WAC"
          },
          {
            src: "/assets/figures/fig05_activity_density.jpg",
            title: "Figure 5: TCAMPO Activity Density by Block Group",
            caption: "Bivariate activity density combining population and employment concentrations per square mile across the Tri-Cities region.",
            source: "2023 ACS 5-Year, 2023 LEHD"
          }
        ],
        hasInteractiveFigure: "density_maps"
      },
      {
        id: "population-trends",
        title: "Population and Household Trends (1990-2020)",
        text: [
          "Historical population and household trends from 1990 to 2020 were analyzed using decennial census block-level data obtained from the Integrated Public Use Microdata Series (IPUMS) National Historical Geographic Information System (NHGIS). Population and employment growth supports economic development but also directly affects travel demand, leading to increased congestion, emissions, and crash risk due to higher traffic volumes.",
          "As shown in Figure 6, the population of the Tri-Cities region grew steadily between 1990 and 2020, increasing by approximately 24.4% from 134,954 to 167,920. Over the same period, population growth in Virginia (39.5%) and the United States (33.3%) outpaced that of the region.",
          "Figure 7 illustrates that population growth has been uneven across the six jurisdictions. The largest growth occurred in suburban and rural counties: the TCAMPO portion of Chesterfield grew 69.3%, Dinwiddie grew 58.3%, and Prince George grew 56.0%. Colonial Heights experienced steady growth resulting in a 13.1% overall increase. In contrast, Petersburg experienced a 12.8% decline between 1990 and 2020 (rebounding slightly with +3% since 2010), while Hopewell remained stable with a 0.3% decline."
        ],
        hasInteractiveFigure: "demographics_chart"
      },
      {
        id: "household-trends",
        title: "Household Growth and Average Size",
        text: [
          "Figure 8 shows that the number of households in the region grew by 28.4% between 1990 and 2020, increasing from 48,586 to 62,362. Households grew at a slower rate than Virginia (44.9%) and the nation (37.9%). Chesterfield County experienced the highest growth (74.0%), followed by Dinwiddie (61.1%) and Prince George (46.9%). Colonial Heights grew 20.0%, Hopewell 4.2%, and Petersburg 4.4%.",
          "Average household size across TCAMPO declined by 3.1% from 2.8 to 2.7 people per household between 1990 and 2020, mirroring statewide (-3.7%) and national (-3.4%) trends toward smaller households. Within the region, household size decreased in all jurisdictions except Prince George (increased 3.4 to 3.6). Petersburg experienced the largest decline, falling 16.5% from 2.6 to 2.2 people per household.",
          "As households become smaller and more numerous, the region needs more housing units and generates more trips for the same number of residents, explaining why even jurisdictions with declining populations, like Petersburg and Hopewell, generate new travel demand."
        ]
      },
      {
        id: "employment-trends",
        title: "Historical Employment Trends (1990-2020)",
        text: [
          "Because the earliest available year for LEHD data is 2002, QCEW county-level annual averages from the Bureau of Labor Statistics (BLS) were proportionally allocated to Tri-Cities boundaries using area-weighted interpolation based on block-level employment in the 2023 LODES8 WAC dataset.",
          "Figure 10 shows that employment in the Tri-Cities region increased by 47.3% from 37,198 in 1990 to 54,780 in 2020. In contrast with population and households, regional employment is growing at a faster rate than the state (32.3%) and the country (28.1%), driven mainly by growth in Chesterfield, Dinwiddie, and Prince George. Slower employment growth between 2000 and 2010 reflected the impacts of the Great Recession."
        ]
      },
      {
        id: "shift-share",
        title: "Shift-Share Employment Growth by Supersector (2019-2023)",
        text: [
          "Employment growth in the Tri-Cities region was evaluated across all BLS supersectors using shift-share analysis. Shift-share decomposes regional employment change into three components: National Growth Component (NGC), Industrial Mix Component (IMC), and Local Share Component (LSC).",
          "Trade, Transportation & Utilities was the region's largest source of net employment growth between 2019 and 2023, adding 950 jobs (NGC: +585, IMC: +158, LSC: +208). This strong positive local growth in both Trade, Transportation & Utilities and Manufacturing (+440 jobs) reflects the region's strategic position along I-95 and I-85 as a goods movement and freight logistics hub.",
          "Professional & Business Services (+593 jobs), Public Administration (+100 jobs), and Financial Activities (+157 jobs) also demonstrated strong local competitive advantages. Education & Health Services added 237 net jobs, while Information (-35 jobs) and Other Services (-54 jobs) experienced minor contractions."
        ],
        figure: {
          src: "/assets/figures/fig12_shift_share.png",
          title: "Figure 12: TCAMPO Shift-Share by Supersector vs. National, 2019-2023",
          caption: "Shift-share analysis decomposing regional job growth into National Growth (blue), Industry Mix (orange), Regional Shift (green), and Net Change (black diamonds).",
          source: "Bureau of Labor Statistics QCEW, TCAMPO analysis"
        },
        hasInteractiveFigure: "shift_share_chart"
      },
      {
        id: "transportation-disadvantaged",
        title: "Transportation Disadvantaged Demographic Analysis",
        text: [
          "This section summarizes the demographic analysis incorporated into TCAMPO's project prioritization process for Plan2050, identifying Areas of Concern defined as census block groups with relatively high concentrations of residents who may have limited access to viable transportation options.",
          "The analysis evaluates six indicators from the 2024 ACS 5-Year Estimates: race/ethnicity, poverty, language barriers, disability, age 65+, and zero-vehicle households. Each indicator is assigned an ordinal score from 1 (lowest concern) to 3 (highest concern) based on tertile thresholds shown in Table 1.",
          "The six scores are summed into a composite index (range 6 to 18). Of the 291 block groups analyzed, 109 fall in the lowest tier (6-10), 103 in the middle tier (11-13), and 79 in the highest tier (14-18). These 79 highest-tier block groups are designated as Areas of Concern, concentrated in Chesterfield County (27), Petersburg (22), Richmond (12), and Hopewell (9). Projects improving access for Areas of Concern receive prioritized scoring under Plan2050 Access to Jobs and Non-Work Destinations measures."
        ],
        figure: {
          src: "/assets/figures/fig13_transportation_disadvantaged.jpg",
          title: "Figure 13: Transportation Disadvantaged Composite Index by Block Group",
          caption: "Census block groups classified into Low, Moderate, and High Vulnerability (Areas of Concern) across TCAMPO and adjacent jurisdictions.",
          source: "U.S. Census Bureau 2024 ACS 5-Year Estimates, TCAMPO analysis"
        },
        hasInteractiveFigure: "ej_composite_map",
        tableData: {
          title: "Table 1: Indicator Score Thresholds",
          headers: ["Indicator", "Score 1 (Lowest)", "Score 2 (Moderate)", "Score 3 (Highest Concern)"],
          rows: [
            ["Minority Population", "≤ 36.5%", "36.6% – 64.2%", "≥ 64.6%"],
            ["Below Poverty Level", "≤ 3.8%", "3.8% – 11.8%", "≥ 11.8%"],
            ["Language Barriers (Limited English)", "0%", "0.5% – 1.1%", "≥ 1.2%"],
            ["Zero-Vehicle Households", "0%", "0.4% – 5.5%", "≥ 5.6%"],
            ["Disability Rate", "≤ 12.2%", "12.4% – 15.7%", "≥ 15.9%"],
            ["Age 65 and Older", "≤ 12.4%", "12.5% – 20.3%", "≥ 20.4%"]
          ],
          source: "U.S. Census Bureau 2024 ACS 5-Year Estimates"
        }
      },
      {
        id: "forecasts-2017-2045",
        title: "Population, Households, and Employment Forecasts (2017-2045)",
        text: [
          "The Richmond/Tri-Cities travel demand model (RTC model), developed by VDOT, is used by TCAMPO and RRTPO to forecast future travel for corridor studies and the LRTP. The model is built on socioeconomic forecasts prepared at the Traffic Analysis Zone (TAZ) level for a base year of 2017 and a horizon year of 2045.",
          "As shown in Table 2, the TCAMPO region is projected to grow by 10.9% in population (+20,012), 17.9% in households (+11,602), and 13.1% in employment (+9,747) between 2017 and 2045. This growth is heavily concentrated in the three counties: Chesterfield and Prince George account for 95% of net population gains, 86% of new households, and 11,215 new jobs.",
          "Chesterfield employment is projected to grow 64.6%, raising jobs per household from 0.70 to 0.85. Dinwiddie grows steadily (+17.5% pop, +18.2% jobs). In contrast, population and employment are projected to decrease slightly in Colonial Heights (-3.4% pop) and Petersburg (-13.0% pop, -22.2% jobs), while Hopewell grows modestly (+3.2% pop, +2.9% jobs)."
        ],
        figure: {
          src: "/assets/figures/fig14_employment_change_taz.jpg",
          title: "Figure 14: Employment Change per Acre by Traffic Analysis Zone (TAZ), 2017-2045",
          caption: "Projected job density growth rates by TAZ, highlighting major expansion corridors in Chesterfield, Prince George, and Dinwiddie.",
          source: "VDOT RTC Travel Demand Model 2017-2045"
        },
        tableData: {
          title: "Table 2: TCAMPO Population, Households, and Employment Forecasts, 2017-2045",
          headers: ["Jurisdiction", "2017 Base", "Share (2017)", "2045 Horizon", "Share (2045)", "Growth Rate (%)"],
          rows: [
            ["Chesterfield County (Pop)", "43,683", "23.8%", "57,764", "28.3%", "+32.2%"],
            ["City of Colonial Heights (Pop)", "17,380", "9.5%", "16,794", "8.2%", "-3.4%"],
            ["Dinwiddie County (Pop)", "29,560", "16.1%", "34,725", "17.0%", "+17.5%"],
            ["City of Hopewell (Pop)", "22,941", "12.5%", "23,676", "11.6%", "+3.2%"],
            ["City of Petersburg (Pop)", "32,918", "17.9%", "28,646", "14.1%", "-13.0%"],
            ["Prince George County (Pop)", "37,364", "20.3%", "42,253", "20.7%", "+13.1%"],
            ["TCAMPO Total Population", "183,846", "100.0%", "203,858", "100.0%", "+10.9%"],
            ["Chesterfield County (HH)", "14,909", "23.0%", "20,094", "26.3%", "+34.8%"],
            ["City of Colonial Heights (HH)", "6,782", "10.5%", "6,590", "8.6%", "-2.8%"],
            ["Dinwiddie County (HH)", "10,165", "15.7%", "12,473", "16.3%", "+22.7%"],
            ["City of Hopewell (HH)", "8,910", "13.8%", "9,846", "12.9%", "+10.5%"],
            ["City of Petersburg (HH)", "11,918", "18.4%", "10,437", "13.7%", "-12.4%"],
            ["Prince George County (HH)", "12,067", "18.6%", "16,913", "22.2%", "+40.2%"],
            ["TCAMPO Total Households", "64,751", "100.0%", "76,353", "100.0%", "+17.9%"],
            ["Chesterfield County (Emp)", "10,384", "13.9%", "17,089", "20.3%", "+64.6%"],
            ["City of Colonial Heights (Emp)", "9,344", "12.5%", "9,009", "10.7%", "-3.6%"],
            ["Dinwiddie County (Emp)", "8,647", "11.6%", "10,224", "12.1%", "+18.2%"],
            ["City of Hopewell (Emp)", "7,137", "9.6%", "7,345", "8.7%", "+2.9%"],
            ["City of Petersburg (Emp)", "13,130", "17.6%", "10,212", "12.1%", "-22.2%"],
            ["Prince George County (Emp)", "25,845", "34.7%", "30,355", "36.0%", "+17.5%"],
            ["TCAMPO Total Employment", "74,487", "100.0%", "84,234", "100.0%", "+13.1%"]
          ],
          source: "VDOT Richmond/Tri-Cities Travel Demand Model (RTC), 2017-2045"
        }
      },
      {
        id: "land-use-development",
        title: "Land Use and Development Transitions (2014-2024)",
        text: [
          "Land use in the Tri-Cities region is characterized by a wide range of land cover classifications, varying from high intensity developed areas to undeveloped land such as forests, cultivated areas, and wetlands. Data from the National Land Cover Database (NLCD) between 2014 and 2024 illustrates that the region's built-up areas are concentrated in the urban cores of Petersburg, Colonial Heights, and Hopewell and along major transportation corridors.",
          "Figure 16 shows that the region's urban core has more than 60% of total land developed, while Dinwiddie, Prince George, and Chesterfield each have less than 30% developed. Across the MPO as a whole, approximately 28% of land is developed. Areas in Petersburg that transitioned to developed land are concentrated along Wells Road and the US-301/I-95 corridor near Bon Secours Medical Center and Wagner Road (Exit 48)."
        ],
        figure: {
          src: "/assets/figures/fig15_land_cover_transitions.jpg",
          title: "Figure 15: Existing Land Cover and Transitions from Undeveloped to Developed Areas, 2014-2024",
          caption: "NLCD satellite land cover map showing urbanized development (red/brown), agricultural/forest tracts (green/yellow), and recent development transitions (purple).",
          source: "U.S. Geological Survey (USGS) Annual NLCD Collection"
        }
      },
      {
        id: "travel-patterns",
        title: "Travel Patterns and Household Vehicle Availability",
        text: [
          "Household vehicle availability is one of the primary determinants of travel behavior and mode choice. Table 3 shows vehicle availability across TCAMPO jurisdictions. Petersburg has the highest share of zero-vehicle households (14.8%) and the highest combined zero-and-one-vehicle share (63.2%). Hopewell also shows an above-average zero-vehicle share (11.7%).",
          "At the other end, Dinwiddie has the highest share of three-or-more vehicle households (46.3%), reflecting its rural, auto-dependent character. Across TCAMPO, 8.2% of households have no vehicle (compared to 6.1% statewide).",
          "Figure 17 shows that approximately 82% of all commuters drive alone to work (>85% for travel times 15-60 min). Walking is most prevalent for short commutes (<10 min, ~24%), carpooling represents 7-11%, and transit accounts for ~10% of workers with commutes of 60 minutes or more."
        ],
        tableData: {
          title: "Table 3: Share of Household Vehicle Availability by Jurisdiction",
          headers: ["Jurisdiction", "Total Households", "0-Vehicle (%)", "1 Vehicle (%)", "2 Vehicles (%)", "3+ Vehicles (%)"],
          rows: [
            ["Chesterfield County (Part)", "16,017", "4.2%", "22.2%", "40.9%", "32.6%"],
            ["City of Colonial Heights", "7,530", "6.8%", "33.7%", "36.0%", "23.5%"],
            ["Dinwiddie County (Part)", "4,409", "5.9%", "19.8%", "28.4%", "46.3%"],
            ["City of Hopewell", "9,255", "11.7%", "35.7%", "26.1%", "26.5%"],
            ["City of Petersburg", "15,138", "14.8%", "48.4%", "25.8%", "10.9%"],
            ["Prince George County (Part)", "10,204", "3.5%", "23.0%", "34.1%", "39.5%"],
            ["TCAMPO Region Total", "62,553", "8.2%", "31.9%", "32.5%", "27.5%"],
            ["Commonwealth of Virginia", "3,365,732", "6.1%", "31.1%", "37.3%", "25.5%"]
          ],
          source: "U.S. Census Bureau 2024 ACS 5-Year Estimates"
        }
      },
      {
        id: "commuter-flows",
        title: "County-to-County Commuter Flows",
        text: [
          "Using LODES8 Origin-Destination data for 2015 and 2023, regional commute patterns were evaluated. The heaviest flows run north toward the Richmond region. The largest single flow is from the TCAMPO portion of Chesterfield to the rest of Chesterfield County (~5,500 workers). Inbound workers come from Chesterfield, Richmond, Henrico, and non-MPO portions of Dinwiddie and Prince George.",
          "About 31% of employed TCAMPO residents worked within the region in 2023 (11% in their home jurisdiction and 20% elsewhere in TCAMPO). Petersburg retains the largest share (38% within TCAMPO, 14% internally). In Chesterfield, 4 in 5 residents work outside TCAMPO, reflecting deep integration with Greater Richmond.",
          "Between 2015 and 2023, outbound commuting grew 17%, inbound rose 10%, while internal intra-MPO commuting declined 9%. Among flows within TCAMPO, Petersburg is the central hub, appearing in four of the top five two-way connections (Table 4)."
        ],
        figures: [
          {
            src: "/assets/figures/fig18_commute_flows_2023.jpg",
            title: "Figure 18: Commute Flows To, From, and Within the Tri-Cities Area MPO, 2023",
            caption: "Commute flows exceeding 100 workers for trips under 50 miles, illustrating strong northern corridors toward Richmond and Henrico.",
            source: "U.S. Census Bureau, LODES8 2023"
          },
          {
            src: "/assets/figures/fig20_commute_flows_2015.jpg",
            title: "Figure 20: Commute Flows To, From, and Within the Tri-Cities Area MPO, 2015",
            caption: "Baseline 2015 commute flows across the Tri-Cities metropolitan network.",
            source: "U.S. Census Bureau, LODES8 2015"
          }
        ],
        hasInteractiveFigure: "commuter_flow",
        tableData: {
          title: "Table 4: Commute Flows within the Tri-Cities Area MPO, 2023",
          headers: ["Home \ Work", "Chesterfield", "Colonial Heights", "Dinwiddie", "Hopewell", "Petersburg", "Prince George"],
          rows: [
            ["Chesterfield County (Part)", "1,049", "687", "407", "455", "774", "610"],
            ["City of Colonial Heights", "360", "1,190", "207", "210", "429", "387"],
            ["Dinwiddie County (Part)", "256", "253", "534", "173", "470", "314"],
            ["City of Hopewell", "462", "375", "239", "1,244", "572", "722"],
            ["City of Petersburg", "895", "629", "650", "362", "2,144", "1,030"],
            ["Prince George County (Part)", "301", "461", "198", "768", "679", "1,518"]
          ],
          source: "U.S. Census Bureau, LODES8 2023 (diagonal cells show live & work in same jurisdiction)"
        }
      }
    ]
  },

  // ── Chapter 3: System Today ──────────────────────────────────────────────────────────
  {
    id: 'today',
    chapterNumber: 3,
    title: "System Today",
    fullTitle: "Chapter 3: Our Transportation System Today",
    subtitle: "Roadway Network, State of Good Repair, Transit Operations, Active Transportation, Freight, and Performance Monitoring",
    pdfFilename: "PLAN2050_Chapter3_System_Today.pdf",
    sections: [
      {
        id: "roadway-network",
        title: "Roadways & Functional Classification",
        text: [
          "The Tri-Cities transportation system consists of a multimodal network of roadways, public transit, bicycle and pedestrian facilities, park-and-ride programs, passenger rail, and freight rail. Roadways are grouped by federal functional classification according to their primary purpose between travel mobility and destination access.",
          "Interstates and principal arterials emphasize long-distance mobility with higher travel speeds and limited access points. Minor arterials, collectors, and local streets prioritize access to neighborhoods, schools, commercial districts, and employment centers.",
          "Table 5 shows the region's lane miles based on the FHWA Highway Performance Monitoring System (HPMS) 2024. The region contains approximately 2,470 lane miles across all functional classifications, over 80% of which are in urban areas (2,058.8 urban lane miles vs 411.6 rural).",
          "The region's interstates and principal arterials are part of the National Highway System (NHS). The Tri-Cities contains approximately 421 lane miles of NHS roadways (Figure 22), supporting regional, statewide, and interstate commerce."
        ],
        figures: [
          {
            src: "/assets/figures/fig21_functional_classification.jpg",
            title: "Figure 21: TCAMPO State Functional Classification",
            caption: "Roadway functional classification hierarchy: Interstates (blue), Other Freeways (brown), Principal Arterials (red), Minor Arterials (green), and Collectors (purple/yellow).",
            source: "VDOT, FHWA HPMS 2024"
          },
          {
            src: "/assets/figures/fig22_national_highway_system.jpg",
            title: "Figure 22: National Highway System in TCAMPO",
            caption: "National Highway System network including I-95, I-85, I-295, MAP-21 arterials, and STRAHNET defense mobility connectors.",
            source: "Federal Highway Administration (FHWA), HPMS 2024"
          }
        ],
        tableData: {
          title: "Table 5: TCAMPO Lane Miles by Federal Functional Classification and Area Type",
          headers: ["Functional Classification", "Urban Lane Miles", "Rural Lane Miles", "Total Lane Miles"],
          rows: [
            ["Interstate (1)", "202.53", "0.31", "202.84"],
            ["Principal Arterial – Other Freeways (2)", "0.00", "0.00", "0.00"],
            ["Principal Arterial – Other (3)", "197.87", "13.16", "211.03"],
            ["Minor Arterial (4)", "251.11", "43.62", "294.73"],
            ["Major Collector (5)", "225.52", "88.55", "314.07"],
            ["Minor Collector (6)", "68.87", "23.71", "92.57"],
            ["Local (7)", "1,112.94", "242.29", "1,355.23"],
            ["Total Regional Roadway System", "2,058.83", "411.64", "2,470.48"]
          ],
          source: "FHWA Highway Performance Monitoring System (HPMS) 2024"
        }
      },
      {
        id: "infrastructure-condition",
        title: "Infrastructure Condition & State of Good Repair (SGR)",
        text: [
          "Infrastructure condition is a federal performance area regularly tracked by TCAMPO. Maintaining assets in a state of good repair is an explicit objective under Plan2050's Mobility goal.",
          "Federal Pavement Measures (MAP-21): Interstates and NHS roadways are rated on roughness (IRI), cracking, rutting, and faulting. In TCAMPO, 57.7% of Interstate lane miles are in good condition and <0.1% are in poor condition (well within the federal 5% maximum ceiling). On the non-Interstate NHS, VDOT maintains 24.0% in good condition (0.4% poor), and localities maintain 3.5% in good condition (1.8% poor).",
          "State Pavement Measures (CCI): VDOT uses the Critical Condition Index (CCI ≥ 60 is sufficient). The region meets or exceeds CTB targets on Interstates (90.9% sufficient vs 82% target), low-volume Primary (87.4% vs 75%), and high-volume Secondary (91.2% vs 82%). High-volume Primary roads trail target (74.9% vs 82%), and low-volume Secondary roads achieve 57.3% vs 60%.",
          "Bridge Condition: As of July 2026, 6.7% of regional deck area is in poor condition, above the 3.6% target. The recent increase is driven by two major structures newly classified as poor: Federal Structure ID 21145 (I-95 over Norfolk Southern) and ID 21188 (E Washington St over I-95).",
          "Transit Asset Condition: Petersburg Area Transit maintains 50 vehicles. 64% of buses (9 vehicles, average age 14.0 yrs) have exceeded their Useful Life Benchmark (ULB), against a DRPT target of 15%. Non-revenue autos stand at 70% > ULB (target 35%). Cutaways (6% > ULB) and trucks (33% > ULB) meet target thresholds."
        ],
        figure: {
          src: "/assets/figures/fig28_sgr_pavement_segments.jpg",
          title: "Figure 28: Eligible SGR Pavement Segments, FY27-FY32",
          caption: "Pavement segments eligible for State of Good Repair funding in the Tri-Cities planning area: Very Poor (CCI < 50, yellow) and Poor (CCI 50-59, red).",
          source: "VDOT Pavement Management System (PMS) 2025"
        },
        tables: [
          {
            title: "Table 6: 2024 NHS Pavement Condition (FHWA Performance Measure)",
            headers: ["Jurisdiction / Entity", "Ownership", "Designation", "Lane Miles", "% Good Condition", "% Poor Condition"],
            rows: [
              ["Virginia Statewide", "VDOT", "NHS Interstate", "5,434", "61.6%", "0.1%"],
              ["Virginia Statewide", "VDOT", "NHS Non-Interstate", "10,276", "42.5%", "0.1%"],
              ["Virginia Statewide", "Localities", "NHS Non-Interstate", "3,095", "15.0%", "1.8%"],
              ["TCAMPO Region", "VDOT", "NHS Interstate", "203", "57.7%", "< 0.1%"],
              ["TCAMPO Region", "VDOT", "NHS Non-Interstate", "102", "24.0%", "0.4%"],
              ["TCAMPO Region", "Localities", "NHS Non-Interstate", "117", "3.5%", "1.8%"]
            ],
            source: "Federal Highway Administration (FHWA), 2024"
          },
          {
            title: "Table 7: Pavement Condition by Statewide Performance Targets (CCI ≥ 60)",
            headers: ["VDOT Highway System", "CTB Statewide Target", "TCAMPO Performance", "Richmond District", "Virginia Statewide"],
            rows: [
              ["Interstate", "82.0%", "90.9%", "88.7%", "91.3%"],
              ["Primary (High AADT ≥ 3,500)", "82.0%", "74.9%", "80.1%", "82.3%"],
              ["Primary (Low AADT < 3,500)", "75.0%", "87.4%", "77.6%", "76.3%"],
              ["Secondary (High AADT ≥ 3,500)", "82.0%", "91.2%", "84.8%", "82.7%"],
              ["Secondary (Low AADT < 3,500)", "60.0%", "57.3%", "60.9%", "60.9%"]
            ],
            source: "VDOT Pavement Condition Dashboard, 2025"
          },
          {
            title: "Table 9: Transit Asset Condition (Petersburg Area Transit)",
            headers: ["Asset Category", "Asset Metric", "DRPT FFY 2026 Target", "PAT Current Condition", "Compliance Status"],
            rows: [
              ["Revenue Vehicles", "% Large Buses at or beyond ULB (14 yrs)", "15.0%", "64.0% (9 buses)", "Exceeds Target (Deficient)"],
              ["Revenue Vehicles", "% Cutaways at or beyond ULB (10 yrs)", "10.0%", "6.0% (2 cutaways)", "Meets Target"],
              ["Service Equipment", "% Automobiles at or beyond ULB (8 yrs)", "35.0%", "70.0% (7 autos)", "Exceeds Target (Deficient)"],
              ["Service Equipment", "% Trucks at or beyond ULB (14 yrs)", "35.0%", "33.0% (2 trucks)", "Meets Target"],
              ["Facilities", "% Rated below 3.0 TERM Score", "5% Pass / 10% Maint", "0.0% (All ≥ 3.04)", "Meets Target"]
            ],
            source: "DRPT Tier II Transit Asset Management (TAM) Plan, 2026"
          }
        ]
      },
      {
        id: "vmt-congestion",
        title: "VMT Trends, Traffic Volume & Roadway Congestion",
        text: [
          "Vehicle Miles Traveled (VMT) measures total distance driven. The Tri-Cities region recorded higher daily VMT per capita than Virginia and the United States every year from 2015 to 2024. In 2024, regional DVMT per capita stood at 28.1 miles (Virginia: 27.5, US: 26.5). Among peer Virginia MPOs, Tri-Cities ranks below Fredericksburg (30.2) and Richmond (29.3), but above Charlottesville (27.1) and Central Virginia (26.3).",
          "Congestion occurs when demand exceeds capacity, evaluated using morning/afternoon peak hour volume-to-capacity (V/C) ratios and Level of Service (LOS A through F).",
          "Figure 32 illustrates the AM peak hour V/C ratio and LOS. Failing conditions (LOS E and F) are observed along segments of I-95, I-85, US-1, US-301, and key urban arterials connecting Petersburg, Colonial Heights, and southern Chesterfield County."
        ],
        figures: [
          {
            src: "/assets/figures/fig31_average_daily_traffic.jpg",
            title: "Figure 31: Average Daily Traffic (2025)",
            caption: "Annual Average Daily Traffic (AADT) volume tiers on the regional network, highlighting >50,000 vehicles/day along I-95 and I-295.",
            source: "VDOT Traffic Monitoring Program (TMPD) 2025"
          },
          {
            src: "/assets/figures/fig32_peak_hour_vc_ratio.jpg",
            title: "Figure 32: 2017 Peak Hour Volume-to-Capacity (V/C) Ratio",
            caption: "AM Peak Hour volume-to-capacity ratio and Level of Service (LOS A-F) from the RTC Travel Demand Model.",
            source: "VDOT RTC Model 2017 Base Year"
          }
        ],
        tableData: {
          title: "Table 10: Highway Capacity Manual Level of Service (LOS) Categories",
          headers: ["Level of Service", "Operating Conditions Description", "Associated Volume-to-Capacity (V/C)"],
          rows: [
            ["LOS A", "Free flow; users virtually unaffected by others in traffic stream", "0.00 – 0.60"],
            ["LOS B", "Stable flow; presence of other users becomes noticeable", "0.61 – 0.70"],
            ["LOS C", "Stable flow; operations significantly affected by interactions with others", "0.71 – 0.80"],
            ["LOS D", "High-density stable flow; speed and maneuverability severely restricted", "0.81 – 0.90"],
            ["LOS E", "Operating at or near capacity limit; low uniform speeds; maneuverability extremely difficult", "0.91 – 1.00"],
            ["LOS F", "Forced or breakdown flow; demand exceeds capacity; extensive queues form", "> 1.00 (Failing)"]
          ],
          source: "Highway Capacity Manual (HCM)"
        }
      },
      {
        id: "safety-trends",
        title: "Safety Performance & Crash Trends (2016-2025)",
        text: [
          "Improving safety for all transportation users is Plan2050's first goal. In a 2025 regional survey, two-thirds of respondents cited road safety and pedestrian infrastructure as their top priorities.",
          "Based on Virginia DMV Traffic Records Electronic Data System (TREDS) data between 2016 and 2025, an average of 227 people were killed or seriously injured (KSI) in motor vehicle crashes each year in TCAMPO.",
          "While annual fatalities have hovered between 15 (2019) and 30 (2021), serious injuries have surged nearly 80%, increasing from 124 in 2016 to 222 in 2025. Pedestrians and bicyclists represent an average of 17 KSI annually (~8% of total severe casualties). High crash densities are concentrated along US-1, US-301, VA-36, Temple Avenue, and urban interstate access interchanges."
        ]
      },
      {
        id: "public-transit",
        title: "Public Transit: Petersburg Area Transit (PAT)",
        text: [
          "Petersburg Area Transit (PAT) operates fixed-route bus and demand-response paratransit service Monday through Saturday from 5:45 AM to 10:15 PM, serving a population of 72,650 across Petersburg, Colonial Heights, and Hopewell. The network comprises 9 daytime routes (60-min headways), 5 evening combination routes, and express service connecting Petersburg to Richmond.",
          "Regional connections are also provided by GRTC Route 95X (Richmond-Petersburg Express) and Blackstone Area Bus System's (BABS) Dinwiddie Express.",
          "PAT has operated fare-free since May 2020. Ridership rebounded from 325,821 trips in 2021 to 464,461 in 2024 (+16% above pre-pandemic 2019 levels). Even as Vehicle Revenue Hours dropped 27%, productivity increased from 7.9 to 12.5 trips per hour.",
          "Operating costs rose from $67.90 to $111.27 per hour due to labor and fuel inflation. In 2024, PAT's $4.3M operating budget was funded by federal (46%), local (25%), state (25%), and other (4%) sources. A new replacement maintenance facility is budgeted at $15-$20 million to modernize operations."
        ],
        figure: {
          src: "/assets/figures/fig34_fixed_route_transit_network.jpg",
          title: "Figure 34: Tri-Cities Fixed-Route Transit Network",
          caption: "Transit network map showing Petersburg Area Transit routes (orange), GRTC Route 95X (purple), and BABS Dinwiddie Express (teal).",
          source: "Petersburg Area Transit, GRTC, DRPT 2025"
        },
        tables: [
          {
            title: "Table 11: PAT Fixed-Route Service Summary",
            headers: ["Route Name", "Weekday Headway", "Weekday Trips", "Weekday Span", "Saturday Headway", "Saturday Trips", "Saturday Span"],
            rows: [
              ["Route 1 – Walnut Hill", "60 min", "12 trips", "6:15 am – 6:10 pm", "60 min", "12 trips", "6:15 am – 6:10 pm"],
              ["Route 2 – Southpark Mall", "60 min", "12 trips", "6:15 am – 6:10 pm", "60 min", "12 trips", "6:15 am – 6:10 pm"],
              ["Route 3 – Richmond Express", "120 min", "6 trips", "6:15 am – 6:00 pm", "60 min", "12 trips", "6:15 am – 6:10 pm"],
              ["Route 4 – Blandford", "60 min", "12 trips", "6:15 am – 6:10 pm", "60 min", "12 trips", "6:15 am – 6:10 pm"],
              ["Route 5 – 460 County Drive", "60 min", "12 trips", "6:15 am – 6:10 pm", "60 min", "12 trips", "6:15 am – 6:10 pm"],
              ["Route 6 – South Crater Rd", "60 min", "12 trips", "6:15 am – 6:10 pm", "60 min", "12 trips", "6:15 am – 6:10 pm"],
              ["Route 10 – Halifax Street", "60 min", "12 trips", "6:15 am – 6:10 pm", "60 min", "12 trips", "6:15 am – 6:10 pm"],
              ["Route 11 – Washington Street", "60 min", "12 trips", "6:15 am – 6:10 pm", "60 min", "12 trips", "6:15 am – 6:10 pm"],
              ["Route 12 – Ettrick-Mall Plaza", "60 min", "12 trips", "6:15 am – 6:10 pm", "60 min", "12 trips", "6:15 am – 6:10 pm"],
              ["Route 14 – Hopewell", "60 min", "12 trips", "5:45 am – 5:40 pm", "60 min", "12 trips", "5:45 am – 5:40 pm"],
              ["Evening Routes 21–25", "60 min", "3 trips each", "7:15 pm – 10:15 pm", "60 min", "3 trips each", "7:15 pm – 10:15 pm"]
            ],
            source: "Petersburg Area Transit General Transit Feed Specification (GTFS)"
          },
          {
            title: "Table 12: PAT Fixed-Route Operating Performance (2019-2024)",
            headers: ["Performance Metric", "2019", "2020", "2021", "2022", "2023", "2024", "6-Year Trend"],
            rows: [
              ["Operating Expense per Trip", "$8.59", "$9.70", "$11.38", "$9.90", "$9.07", "$8.88", "+3.4%"],
              ["Operating Expense per Rev. Mile", "$6.47", "$5.80", "$7.22", "$7.67", "$8.53", "$8.46", "+30.8%"],
              ["Operating Expense per Rev. Hour", "$67.90", "$60.82", "$86.91", "$91.69", "$108.71", "$111.27", "+63.9%"],
              ["Passenger Trips per Rev. Mile", "0.8", "0.6", "0.6", "0.8", "0.9", "1.0", "+25.0%"],
              ["Passenger Trips per Rev. Hour", "7.9", "6.3", "7.6", "9.3", "12.0", "12.5", "+58.2%"],
              ["Farebox Recovery Ratio", "9.8%", "7.2%", "0.0%", "0.0%", "0.0%", "0.0%", "Fare-Free"]
            ],
            source: "National Transit Database (NTD) Annual Reports 2019-2024"
          }
        ]
      },
      {
        id: "active-transportation",
        title: "Bicycles, Pedestrians, and Signature Trails",
        text: [
          "The Tri-Cities region currently has a fragmented bicycle network, with Hopewell possessing the highest density of on-road bike lanes, largely connected to the Appomattox River Trail (ART). In Petersburg, cycling infrastructure relies primarily on shared lane markings (sharrows).",
          "Two signature regional trails represent the foundation for active multimodal mobility: the Fall Line Trail (FLT), a 43-mile paved multi-use trail stretching from Ashland to Petersburg, and the Appomattox River Trail (ART), a 25-mile greenway connecting Lake Chesdin in Dinwiddie to City Point in Hopewell.",
          "Sidewalk infrastructure is heavily concentrated in the urban cores of Petersburg, Colonial Heights, and Hopewell, but data remains incomplete on locally maintained city streets. Expanding shared-use paths into Dinwiddie and Prince George will connect rural residents to jobs and transit."
        ],
        figures: [
          {
            src: "/assets/figures/fig40_bicycle_facilities.jpg",
            title: "Figure 40: Tri-Cities Area MPO Bicycle Facilities",
            caption: "Existing bicycle network: Designated Bike Lanes (blue), Shared Use Paths (green), and Shared Lane Sharrows (red).",
            source: "VDOT Statewide Bicycle Facility Inventory 2025"
          },
          {
            src: "/assets/figures/fig41_existing_planned_trails.jpg",
            title: "Figure 41: Existing and Planned Signature Trails",
            caption: "Fall Line Trail (in design/construction, green) and Appomattox River Trail (completed, funded, and priority sections) regional network.",
            source: "Friends of the Lower Appomattox River (FOLAR), VDOT"
          }
        ]
      },
      {
        id: "tdm-interregional",
        title: "TDM, Park-and-Ride, and Interregional Rail",
        text: [
          "Transportation Demand Management (TDM) strategies reduce solo driving through transit incentives, carpooling, telework, and park-and-ride facilities.",
          "TCAMPO contains one major park-and-ride facility: the 215-space Union Street Park & Ride at the Petersburg Transit Center, completed in 2022. Commuters also utilize lots in Stony Creek (50 spaces) and Cogbill & Hopkins in Chesterfield (118 spaces).",
          "Interregional passenger rail is anchored by the Petersburg Amtrak Station (PTB) in Ettrick, served by the Northeast Regional (NER), Carolinian, Palmetto, and Silver Meteor. Total station ridership surged from 29,892 in 2015 to 60,480 in 2025 (more than doubling). Petersburg's share of statewide rail ridership expanded to 2.5%."
        ],
        figure: {
          src: "/assets/figures/fig43_park_and_ride_lots.jpg",
          title: "Figure 43: Existing Park-and-Ride Lots in the Tri-Cities Region",
          caption: "Strategic park-and-ride commuter lots: Union Street (Petersburg Transit Center), Cogbill & Hopkins, Stony Creek, and Bottoms Bridge.",
          source: "VDOT Park-and-Ride Interactive Inventory"
        }
      },
      {
        id: "freight-movement",
        title: "Freight Transportation & Goods Movement",
        text: [
          "TCAMPO occupies a prime strategic freight nexus where I-95 and I-85 converge, linking to I-295, US-460, US-58, Class I railroads (CSX and Norfolk Southern), and major petroleum pipelines.",
          "According to BTS Freight Analysis Framework (FAF5.6.1) data, approximately 43.1 million tons of freight moved through Crater PDC in 2022 (24.8M inbound, 14.5M outbound, 3.8M internal).",
          "Trucks carry 73.9% of all regional freight tonnage (30.9M tons). Petroleum pipelines carry 15.2% (7.1M tons), rail carries 6.4% (3.0M tons), and multiple modes carry 4.5%. Chemicals, wood, and metals are the leading commodity (14.5M tons), followed by energy products (12.2M tons) and gravel/mining aggregates (7.1M tons).",
          "Chesterfield accounts for over half of regional tonnage (23.5M tons), with Colonial Heights (4.4M) and Dinwiddie (4.0M) ranking next. The Greater Richmond area is the primary external trading partner (35% of external freight)."
        ],
        figure: {
          src: "/assets/figures/fig45_crater_multimodal_freight.jpg",
          title: "Figure 45: Crater PDC Draft National Multimodal Freight Network",
          caption: "Draft NMFN freight corridors: Highways (green), Rail Lines (black), Waterways (blue), and Air Cargo facilities.",
          source: "U.S. Department of Transportation, Crater PDC"
        },
        tables: [
          {
            title: "Table 14: Crater Region Freight Tonnage by Locality and Mode, 2022 (thousand tons)",
            headers: ["Locality", "Truck & Air", "Rail", "Water", "Multiple Modes", "Pipeline", "Total Tonnage"],
            rows: [
              ["Chesterfield County (Total)", "18,909.3", "962.7", "11.1", "1,073.6", "2,590.6", "23,547.3"],
              ["City of Colonial Heights", "2,342.0", "306.9", "10.8", "137.0", "1,612.8", "4,409.5"],
              ["Dinwiddie County", "1,899.4", "318.9", "10.8", "102.1", "1,687.6", "4,018.8"],
              ["City of Emporia", "2,104.3", "149.6", "—", "88.6", "1,182.6", "3,525.1"],
              ["Greensville County", "2,416.6", "402.1", "—", "129.1", "—", "2,947.7"],
              ["City of Hopewell", "1,350.5", "617.1", "—", "52.3", "—", "2,019.9"],
              ["City of Petersburg", "1,284.5", "—", "—", "63.9", "—", "1,348.4"],
              ["Prince George County", "933.8", "111.1", "—", "161.5", "26.4", "1,232.8"],
              ["Surry County", "915.7", "118.2", "—", "154.0", "—", "1,187.9"],
              ["Sussex County", "844.7", "—", "—", "128.3", "—", "973.0"],
              ["Crater PDC Total (Net of Internal)", "30,918.8", "2,962.8", "32.7", "2,087.9", "7,072.9", "43,075.1"],
              ["Regional Mode Share (%)", "73.9%", "6.4%", "0.1%", "4.5%", "15.2%", "100.0%"]
            ],
            source: "Bureau of Transportation Statistics, FAF5.6.1 Experimental County-Level Estimates"
          },
          {
            title: "Table 15: Regional Freight Tonnage by Commodity Group, 2022 (thousand tons)",
            headers: ["Commodity Group (SCTG)", "Outbound Tonnage", "Inbound Tonnage", "Internal Tonnage", "Total Tonnage", "Share (%)"],
            rows: [
              ["Chemicals, Wood & Metals (SCTG 20-33)", "5,608.6", "7,055.2", "1,803.4", "14,467.2", "33.6%"],
              ["Coal & Energy Products (SCTG 15-19)", "2,488.0", "9,384.3", "361.7", "12,234.6", "28.4%"],
              ["Gravel & Mining Products (SCTG 10-14)", "3,029.8", "2,939.7", "1,146.7", "7,116.1", "16.5%"],
              ["Agricultural Products (SCTG 01-09)", "1,964.7", "2,587.2", "128.4", "4,680.2", "10.9%"],
              ["Manufactured & Mixed Freight (SCTG 34-99)", "1,421.6", "2,842.2", "313.1", "4,576.9", "10.6%"],
              ["Crater PDC Total Freight", "14,513.3", "24,808.6", "3,753.2", "43,075.1", "100.0%"]
            ],
            source: "BTS Freight Analysis Framework (FAF5.6.1)"
          }
        ]
      }
    ]
  },

  // ── Chapter 4: System Tomorrow ───────────────────────────────────────────────────────
  {
    id: 'tomorrow',
    chapterNumber: 4,
    title: "System Tomorrow",
    fullTitle: "Chapter 4: Our Transportation System Tomorrow: 2050",
    subtitle: "2050 Multimodal Corridor Vision, Emerging Technologies, TSMO, and Planned Project Pipeline",
    pdfFilename: "PLAN2050_Chapter4_System_Tomorrow.pdf",
    sections: [
      {
        id: "critical-issues-drivers",
        title: "Critical Issues & Regional Drivers of Change",
        text: [
          "By 2050, the Tri-Cities region will face transformative shifts in population distribution, freight volume, and technology. As established in the demographic forecasts, regional travel demand will grow significantly in northern Chesterfield and eastern Prince George, while the urban cores require targeted modernization and transit preservation.",
          "Key drivers of change include:",
          "1. Freight & Logistics Growth: Tri-Cities is emerging as a premier mid-Atlantic distribution hub, requiring dedicated truck climbing lanes on I-85/I-95 and intermodal rail terminal expansions.\n2. Demographic Aging & Equity: Increasing proportions of seniors (20%+) and zero-vehicle households demand frequent, accessible on-demand microtransit and universal Complete Streets retrofits.\n3. Climate Resiliency: Sea level rise and intensified storm events in the Appomattox and James River basins require elevated bridge approaches, permeable pavements, and green infrastructure.",
          "4. Technology Integration: Automated, connected vehicles, smart traffic signal coordination (TSMO), and electrification corridors along I-95 and US-460."
        ]
      },
      {
        id: "future-roadways",
        title: "Future Roadway Network & Signature Arterial Improvements",
        text: [
          "The 2050 Roadway Plan prioritizes system preservation, safety redesigns, and operational capacity over outward highway expansion. Candidate projects focus on eliminating failing Level of Service (LOS F) bottlenecks along key corridors:",
          "• I-95/I-85 Tri-Anchor Modernization: Reconstructing aging structures (including Bridges 21145 and 21188), widening bottleneck pinch points, and integrating active traffic management (variable speed limits and queue warning systems).\n• US Route 1 / US 301 Revitalization: Transforming auto-dominated corridors into multimodal boulevards with raised medians, protected bike lanes, pedestrian hybrid beacons, and transit bulb-outs.\n• Route 36 (Oaklawn Blvd) & Temple Ave (VA-144): Corridor access management, signal synchronization, and commercial node turn-lane improvements to support Fort Gregg-Adams and regional logistics hubs."
        ]
      },
      {
        id: "future-transit",
        title: "Public Transit: High-Frequency Regional Network & TSP Vision",
        text: [
          "Building on PAT's Transit Strategic Plan (TSP) through 2030 and extending toward the 2050 horizon, the transit vision transitions from coverage-oriented, 60-minute routes to a high-frequency grid connecting urban centers to regional employment nodes:",
          "• High-Frequency Core Network: Implementing 15- to 30-minute headways on primary corridors connecting downtown Petersburg, Colonial Heights (Southpark Mall), Hopewell, and VSU.\n• Inter-City Express Commuter Bus: Expanding express service along I-95 between Petersburg Transit Center and downtown Richmond, integrating park-and-ride connections.\n• Zero-Emission Fleet Transformation: Replacing aging buses past ULB with battery-electric and low-emission buses, supported by a state-of-the-art $15-$20 million maintenance facility at Fairgrounds Road.\n• Regional Microtransit Zones: Deploying on-demand microtransit in low-density suburban and rural areas of Dinwiddie and Prince George to provide first-mile/last-mile connections to fixed routes."
        ]
      },
      {
        id: "future-active-transport",
        title: "Active Transportation: Fall Line Trail & Connected Greenways",
        text: [
          "The 2050 Active Transportation Plan aims to build a fully connected, low-stress network where walking and bicycling are practical choices for everyday trips, not just recreation:",
          "• Fall Line Trail Completion: Completing the southern terminus of the 43-mile Fall Line Trail through Chesterfield, Colonial Heights, and Petersburg, providing a world-class off-street multi-use spine.\n• Appomattox River Trail (ART) Buildout: Closing missing gaps along the 25-mile trail corridor from Lake Chesdin through Petersburg and Colonial Heights to City Point in Hopewell.\n• Urban Core Protected Bike Grid: Replacing high-stress sharrows in downtown Petersburg with protected bike lanes and expanding neighborhood greenways connecting VSU to transit hubs.\n• Complete Streets Policy: Mandating that all state- and locally-funded road reconstruction projects include ADA-compliant sidewalks, crosswalks, and pedestrian refuge islands."
        ]
      },
      {
        id: "tsmo-smart-corridors",
        title: "Transportation System Management and Operations (TSMO)",
        text: [
          "TSMO strategies optimize existing infrastructure capacity using technology and real-time operational data at a fraction of the cost of physical road widening:",
          "• Regional Adaptive Traffic Signal Control: Deploying synchronized smart signal systems along Route 1, Route 36, and Route 144 to dynamically adjust green times based on real-time traffic volumes.\n• Dynamic Message & Traveler Information Signs: Installing additional automated variable message signs along I-95 and I-295 to alert freight and commuter traffic to incidents and weather hazards.\n• Incident Management & Towing Coordination: Enhancing cooperation between VDOT Safety Service Patrols, local police, and emergency responders to rapidly clear lane-blocking crashes and prevent secondary collisions."
        ]
      }
    ]
  },

  // ── Chapter 5: Funding ───────────────────────────────────────────────────────────────
  {
    id: 'funding',
    chapterNumber: 5,
    title: "Funding",
    fullTitle: "Chapter 5: Funding the Plan: Financial Capacity Analysis",
    subtitle: "Committed SYIP Projects, Fiscal Constraint Analysis, and 2027-2050 Revenue Projections",
    pdfFilename: "PLAN2050_Chapter5_Funding.pdf",
    sections: [
      {
        id: "financial-capacity",
        title: "Constrained Funding Scenario & Legal Requirements",
        text: [
          "TCAMPO's Constrained Long Range Plan (CLRP) identifies all regional transportation investments projected through 2050 in compliance with 23 CFR Part 450.324(11) and 40 CFR 93.108. Metropolitan transportation plans must be fiscally constrained, meaning that projects included can realistically be built and maintained using revenues reasonably expected to be available over the 25-year horizon.",
          "The CLRP is organized into distinct time bands: Current VDOT/DRPT SYIP (FY 2027-2032), Short-Range (FY 2033-2038), Mid-Range (FY 2039-2044), and Long-Range (FY 2045-2050). Total projected revenues across all funding sources from 2027 through 2050 exceed $1.92 Billion."
        ],
        figure: {
          src: "/assets/figures/fig47_committed_syip_projects.jpg",
          title: "Figure 47: Committed Projects in VDOT FY 2027 Six-Year Improvement Program",
          caption: "Mappable committed active transportation (green) and highway/bridge projects (red) programmed in the Six-Year Improvement Program across TCAMPO.",
          source: "VDOT FY 2027-2032 Six-Year Improvement Program"
        }
      },
      {
        id: "committed-projects",
        title: "Committed Projects in VDOT and DRPT SYIP",
        text: [
          "Committed projects are fully funded in the current Six-Year Improvement Program (SYIP). The VDOT FY 2027 SYIP includes 99 projects across the Tri-Cities region, 48 of which have programmed allocations totaling $171.8 million between FY 2027 and FY 2032.",
          "Key highway and active transportation investments include I-95 deck and superstructure rehabilitations, Fall Line Trail and Appomattox River Trail segments, intersection roundabouts, high-visibility signal upgrades, and corridor modernizations on US-1 and US-301.",
          "The DRPT FY 2027-2032 SYIP programs over $5.6 million in transit investments for the region in FY27 alone (Table 17), with PAT operating and capital assistance accounting for 96.4% of regional transit spending. Significant transit projects include large bus replacements ($3.91M), operating assistance ($1.16M), technology integration ($346K), and specialized transit for Chesterfield CSB and Crater District AAA."
        ],
        tableData: {
          title: "Table 17: Committed Transit Projects in DRPT FY 2027 Six-Year Improvement Program",
          headers: ["Recipient Agency", "Project Name & Description", "Funding Program", "Total Cost", "State Funds", "Federal Funds", "Local Match"],
          rows: [
            ["Chesterfield Community Services Board", "Replacement – Light-duty BOC Vehicle (1)", "FTA 5310 – Capital", "$125,780.00", "$12,578.00", "$100,624.00", "$12,578.00"],
            ["City of Petersburg (PAT)", "Transit Infrastructure (ADA Door Upgrades)", "MERIT Capital Assistance – MIN", "$51,000.00", "$34,680.00", "—", "$16,320.00"],
            ["City of Petersburg (PAT)", "Vehicle Support Equipment (Technology Integration)", "MERIT Capital Assistance – MIN", "$346,343.80", "$235,513.78", "—", "$110,830.02"],
            ["City of Petersburg (PAT)", "Replacement – Heavy-duty Large Bus (7)", "MERIT Capital Assistance – SGR", "$3,914,407.84", "$2,661,797.33", "—", "$1,252,610.51"],
            ["City of Petersburg (PAT)", "FY27 State Operating Assistance", "MERIT Operating – Urban", "$1,159,160.44", "$1,159,160.44", "—", "—"],
            ["Crater District Area Agency on Aging", "Operating Assistance for Specialized Mobility", "FTA 5310 – Operating", "$80,000.00", "$32,000.00", "$40,000.00", "$8,000.00"],
            ["Crater Planning District Commission", "FY27 Metropolitan Planning Program", "FTA 5303 Program", "$171,735.52", "$17,173.55", "$137,388.00", "$17,173.97"],
            ["Total Committed Transit Investments", "All FY27 Programmed Transit Projects", "State & Federal SYIP", "$5,676,692.08", "$4,152,903.10", "$278,012.00", "$1,417,512.50"]
          ],
          source: "Virginia Department of Rail and Public Transportation (DRPT) FY 2027-2032 SYIP"
        }
      },
      {
        id: "projected-revenues",
        title: "Projected Revenues Through 2050",
        text: [
          "Revenue forecasting forms the foundation of the financially constrained plan. VDOT and DRPT provide official forecasts for state and federal programs through 2050, complemented by regional Central Virginia Transportation Authority (CVTA) allocations and local revenue streams.",
          "• Maintenance & SGR: VDOT projects $747.54 million for state maintenance and $163.57 million for locality maintenance. An additional $227.68 million is projected through State of Good Repair (SGR) for bridge and pavement restoration, plus $98.54 million through the Special Structures Program (including the Benjamin Harrison Bridge).\n• Construction Programs: Directly allocated federal formula funds include STBG ($108.87M), CMAQ ($41.61M), Carbon Reduction ($10.38M), and TAP ($10.58M). Statewide competitive funds include SMART SCALE ($466.22M across High Priority and District Grants) and Highway Safety ($82.53M).\n• Regional CVTA: Chesterfield County's Tri-Cities portion of CVTA revenue will provide $167.87 million through 2050.\n• Public Transit: DRPT projects $44.14 million in operating aid, $19.87 million in capital assistance, $42.62 million in TRIP incentive grants, and $60.14 million in federal formula transit funds (Sections 5307, 5339, 5310, 5303)."
        ],
        tableData: {
          title: "Table 19: Comprehensive Projected Transportation Revenues Through 2050 ($ Millions)",
          headers: ["Funding Source / Program", "Current SYIP (FY27-FY32)", "Short-Range (FY33-FY38)", "Mid-Range (FY39-FY44)", "Long-Range (FY45-FY50)", "24-Year Total"],
          rows: [
            ["VDOT Maintenance (State Facilities)", "$157.70", "$170.92", "$195.41", "$223.50", "$747.53"],
            ["VDOT Maintenance (Locality-Owned)", "$34.34", "$37.35", "$42.81", "$49.07", "$163.57"],
            ["State of Good Repair (SGR Bridges/Pavement)", "$12.81", "$54.46", "$69.89", "$90.52", "$227.68"],
            ["Special Structures Program (Benjamin Harrison Bridge)", "$10.69", "$13.17", "$0.00", "$74.68", "$98.54"],
            ["SMART SCALE – High Priority Projects (HPP)", "$101.03", "$36.30", "$46.60", "$60.35", "$244.28"],
            ["SMART SCALE – District Grant Program (DGP)", "$33.90", "$49.41", "$61.45", "$77.18", "$221.94"],
            ["Surface Transportation Block Grant (STBG/RSTP + Match)", "$22.57", "$25.42", "$28.63", "$32.24", "$108.86"],
            ["Congestion Mitigation & Air Quality (CMAQ + Match)", "$8.63", "$9.71", "$10.94", "$12.32", "$41.60"],
            ["VA Safety Funds (Highway Safety Improvement Program)", "$10.90", "$18.15", "$23.30", "$30.17", "$82.52"],
            ["Carbon Reduction Program (CRP)", "$2.15", "$2.42", "$2.73", "$3.08", "$10.38"],
            ["Transportation Alternatives Program (TAP)", "$2.20", "$2.48", "$2.78", "$3.12", "$10.58"],
            ["Federal Planning & Administrative (Section 5303/SPR)", "$11.07", "$12.63", "$14.44", "$16.52", "$54.66"],
            ["Right-of-Way Fees & Interstate Corridor Funds", "$3.12", "$3.21", "$3.25", "$3.31", "$12.89"],
            ["DRPT Transit Operating Assistance to PAT", "$8.87", "$10.76", "$11.17", "$13.34", "$44.14"],
            ["DRPT Transit Capital Assistance to PAT", "$4.17", "$4.79", "$4.97", "$5.94", "$19.87"],
            ["DRPT Transit Ridership Incentive Program (TRIP)", "$8.39", "$10.44", "$10.84", "$12.95", "$42.62"],
            ["Federal Transit Formula Funds (Sec 5307, 5339, 5310)", "$10.47", "$12.43", "$14.85", "$17.73", "$55.48"],
            ["Central Virginia Transportation Authority (CVTA TCAMPO)", "—", "$46.30", "$55.20", "$66.40", "$167.90"],
            ["Total Projected Revenues ($ Millions)", "$443.04", "$521.50", "$600.60", "$794.00", "$2,359.14"]
          ],
          source: "VDOT, DRPT, CVTA, and TCAMPO Financial Capacity Analysis (2027-2050)"
        }
      }
    ]
  },

  // ── Appendices ───────────────────────────────────────────────────────────────────────
  {
    id: 'appendices',
    title: "Appendices",
    fullTitle: "Technical Appendices & Documentation",
    subtitle: "Modeling Methodology, Public Participation, Environmental Justice, and Title VI Compliance",
    pdfFilename: "PLAN2050_Technical_Appendices.pdf",
    sections: [
      {
        id: "appendix-a",
        title: "Appendix A: Travel Demand Modeling Methodology",
        text: [
          "Details the regional Cube Voyager travel demand modeling framework (RTC Model) developed by VDOT in coordination with TCAMPO and RRTPO. The model applies a four-step modeling architecture: trip generation, trip distribution, mode choice, and traffic assignment calibrated against VDOT continuous count stations and 2017 base-year data.",
          "Socioeconomic inputs at the Traffic Analysis Zone (TAZ) level incorporate population, household size, vehicle ownership, and employment projections through 2045."
        ]
      },
      {
        id: "appendix-b",
        title: "Appendix B: Public Participation Summary & Outreach",
        text: [
          "Summarizes community engagement conducted under TCAMPO's Public Participation Plan. Documenting community survey responses, open house hearings, Title VI workshops in Petersburg and Hopewell, and Policy Committee proceedings.",
          "Key public takeaways emphasized roadway safety, complete pedestrian crossings, bike trail continuity (Fall Line Trail and ART), and reliable fare-free public transit service."
        ]
      },
      {
        id: "appendix-c",
        title: "Appendix C: Title VI Environmental Justice & Areas of Concern",
        text: [
          "Comprehensive documentation of the 79 census block groups identified as Areas of Concern under the Transportation Disadvantaged Demographic Analysis. Outlining demographic thresholds, spatial buffer methodologies (10 mi, 7.5 mi, 5 mi), and project scoring criteria ensuring equitable investments across south-central Virginia."
        ]
      }
    ]
  }
];

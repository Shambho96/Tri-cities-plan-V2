import type { PlanGoal, ChapterData } from '../types';

export const PLAN_OVERVIEW = {
  title: "PLAN2050 Overview",
  leadParagraph: "Each Metropolitan Planning Organization (MPO) must prepare and adopt a long-range transportation plan (PLAN2050) in accordance with federal regulations. The plan aim at creating a coordinated, multimodal transportation system that addresses the needs and objectives of the MPO, state, and transit providers. It must consider transit, highways, bicycle and pedestrian facilities, accessibility, and freight; accommodate current and future travel demand; and support economic development, transportation, land use, and sustainability goals over a minimum 20-year planning horizon while remaining fiscally constrained.",
  keyStats: [
    { label: "Regional Population", value: "167,920", subtext: "2020 Decennial Census" },
    { label: "Planning Area", value: "324 sq mi", subtext: "Tri-Cities Virginia Region" },
    { label: "Member Jurisdictions", value: "6", subtext: "3 Cities & 3 County Portions" },
    { label: "Horizon Year", value: "2050", subtext: "25+ Year Long-Range Vision" },
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
    title: "Safety First",
    description: "Improve the safety of the transportation system for all people",
    iconName: "ShieldAlert",
    badgeBg: "linear-gradient(135deg, var(--primary), var(--accent-foreground))",
    accentColor: "var(--primary)",
    details: "Zero fatalities and serious injuries across all modes by 2050. Proactively retrofitting high-risk intersections along Route 1, Route 301, and I-95 interchanges with modern roundabout designs, pedestrian refuges, and adaptive signal timing.",
    metrics: [
      { label: "Fatality Reduction Target", target: "-50% by 2035", benchmark: "Toward Vision Zero" },
      { label: "High-Crash Intersections Mitigated", target: "100%", benchmark: "Top 25 priority spots" },
      { label: "Pedestrian Crossing Safety Index", target: "+85%", benchmark: "Grade-separated trails & RRFBs" }
    ]
  },
  {
    id: 'environment',
    number: 2,
    title: "Environment & Climate",
    description: "Reduce the negative impact the transportation system has on the natural and built environment",
    iconName: "Leaf",
    badgeBg: "linear-gradient(135deg, var(--accent-foreground), var(--primary))",
    accentColor: "var(--accent-foreground)",
    details: "Protecting the James and Appomattox River watersheds while accelerating zero-emission transit adoption. Establishing regional electric vehicle charging infrastructure corridors and expanding tree canopies along major transit arterials.",
    metrics: [
      { label: "Greenhouse Gas Emission Cut", target: "-40% by 2040", benchmark: "Per capita regional travel" },
      { label: "Fleet Electrification", target: "100% Zero-Emission", benchmark: "Petersburg Area Transit by 2038" },
      { label: "Stormwater Runoff Mitigation", target: "95% Green Bio-swales", benchmark: "New & widened roadway projects" }
    ]
  },
  {
    id: 'equity',
    number: 3,
    title: "Equitable Access",
    description: "Improve equitable access through greater availability of mode choices that are affordable and efficient",
    iconName: "Bike",
    badgeBg: "linear-gradient(135deg, var(--primary), color-mix(in oklch, var(--primary) 70%, black))",
    accentColor: "var(--primary)",
    details: "Bridging the transit gap for Environmental Justice (EJ) communities, zero-vehicle households, elderly residents, and individuals with disabilities. Expanding frequent micro-transit, regional bus rapid lines, and protected bike/pedestrian paths.",
    metrics: [
      { label: "EJ Communities within 10m Transit Walk", target: "92%", benchmark: "Current: 64%" },
      { label: "Active Transportation Miles", target: "+120 miles", benchmark: "Fall Line Trail & Appomattox River Trail" },
      { label: "Affordable Fares / Microtransit Coverage", target: "24/7 On-Demand", benchmark: "Full coverage in high-need zones" }
    ]
  },
  {
    id: 'connectivity',
    number: 4,
    title: "Connectivity & Economy",
    description: "Improve connectivity and mobility for strong economic vitality",
    iconName: "TrendingUp",
    badgeBg: "linear-gradient(135deg, color-mix(in oklch, var(--primary) 80%, white), var(--primary))",
    accentColor: "var(--primary)",
    details: "Connecting regional employment centers, logistics hubs along the I-85/I-95 gateway, Fort Gregg-Adams, and the Port of Virginia inland logistics networks. Reducing freight bottlenecks and cutting inter-city travel delays.",
    metrics: [
      { label: "Truck Travel Time Reliability (TTTR)", target: "< 1.25", benchmark: "Interstate corridor reliability" },
      { label: "Job Hub Transit Accessibility", target: "+65%", benchmark: "Direct transit within 30 min" },
      { label: "Economic Output Supported", target: "$4.8 Billion", benchmark: "Regional commerce enablement" }
    ]
  },
  {
    id: 'repair',
    number: 5,
    title: "State of Good Repair",
    description: "Increase travel efficiency and mode choices by maintaining the transportation system in a state of good repair",
    iconName: "Wrench",
    badgeBg: "linear-gradient(135deg, var(--accent-foreground), color-mix(in oklch, var(--accent-foreground) 75%, black))",
    accentColor: "var(--accent-foreground)",
    details: "Preserving existing infrastructure assets with predictive lifecycle management. Ensuring 100% of National Highway System (NHS) bridges and pavements remain in Good or Fair condition before funding new road expansions.",
    metrics: [
      { label: "NHS Bridges in Good Condition", target: "> 95%", benchmark: "Zero poor structural condition" },
      { label: "Interstate Pavement Quality Index", target: "> 88%", benchmark: "Smooth ride index" },
      { label: "Transit Asset Management (TAM) Rating", target: "State of Good Repair", benchmark: "100% fleet adherence" }
    ]
  }
];

export const CHAPTERS_DATA: ChapterData[] = [
  {
    id: 'introduction',
    chapterNumber: 1,
    title: "Introduction",
    fullTitle: "Chapter 1: Introduction",
    subtitle: "Regional Planning Framework, Organization, and Federal Compliance",
    pdfFilename: "Tri-Cities_PLAN2050_Chapter_1_Introduction.pdf",
    sections: [
      {
        id: "regional-context",
        title: "Regional Context",
        text: [
          "Located along the I-95, I-85, and I-295 corridors about 25 miles south of Richmond, the Tri-Cities region is situated at the confluence of the James and Appomattox Rivers. The Tri-Cities Area Metropolitan Planning Organization (TCAMPO) is the federally designated planning body responsible for transportation planning in south-central Virginia's Tri-Cities region. Contained within the Crater Planning District Commission (PDC), TCAMPO is composed of six member jurisdictions, including the independent cities of Colonial Heights, Hopewell, and Petersburg and portions of the adjoining Chesterfield, Dinwiddie, and Prince George Counties. The Tri-Cities region is part of the Greater Richmond Region, which is defined by the Office of Management and Budget (OMB) as the Richmond, Virginia Metropolitan Statistical Area (MSA).",
          "Figure 1 depicts the TCAMPO planning area in the context of the Richmond MSA. According to the 2020 decennial census, the population of TCAMPO was 167,920. With a land area of approximately 324 square miles, the MPO has a population density of approximately 518 people per square mile. Among all MPOs in Virginia, TCAMPO is ranked fifth in terms of population, sixth in land area, and tenth in population density. Although the population of the Tri-Cities region grew by 24.4 percent between the last two decennial censuses, it lags behind the state (39.5 percent) and the nation (33.3 percent).",
          "Unincorporated communities located within the Tri-Cities region include portions of Chester, Enon, Ettrick, Fort Gregg-Adams (Fort Lee), Matoaca, and Prince George. These communities, which are defined as Census Designated Places (CDP) by the United States Census Bureau, are integral to the TCAMPO planning area. Ettrick is home to Virginia State University (VSU), the region’s largest university or college. Fort Lee is a large United States Army post and is one of the region’s largest employers. The Chester, Enon, Matoaca, and Prince George CDPs are additional clusters that contain large residential and commercial activity centers. Each of these communities have significant amounts of the region’s employment and housing and are major sources of trip generation. To carry out transportation planning activities for the region, TCAMPO coordinates with its six member jurisdictions, the Virginia Department of Transportation (VDOT), the Department of Rail and Public Transportation (DRPT), Crater PDC, Petersburg Area Transit (PAT), and other planning partners to guide investment in the region's transportation network."
        ],
        callout: {
          type: "highlight",
          title: "Greater Richmond Region & MPO Boundaries",
          content: "Figure 1: Greater Richmond Region and Metropolitan Planning Organization Boundaries"
        },
        hasInteractiveFigure: "figure1_map"
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
          "Plan2050 is TCAMPO's Long Range Transportation Plan (LRTP). Also known as a Metropolitan Transportation Plan (MTP), Plan2050 is a federally required document that establishes the vision, goals, and multimodal investment priorities for the Tri-Cities region’s transportation system. As TCAMPO's core long-range planning document, Plan2050 creates a strategic framework for decision-making across the region, guiding investments that improve mobility, safety, equity, and economic development over the next 20 years.",
          "Plan2050 provides the basis from which shorter-range programming documents, such as the Metropolitan Transportation Improvement Program (MTIP), will be developed. Consistent with federal requirements, projects must be in the MPO’s current approved LRTP to be eligible for federal transportation funding. Federal regulations also require that the LRTP address a planning horizon of at least 20 years and is fiscally constrained. This means that Plan2050 includes only projects and programs for which a reasonable funding source can be identified. Plan2050 ensures that investments in its transportation network are coordinated, strategic, and aligned with the goals of the communities it serves."
        ]
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
          "Since the Intermodal Surface Transportation Efficiency Act of 1991 (ISTEA), Congress has identified key planning areas for MPOs and states to consider when developing multimodal transportation plans. MAP-21 established ten planning factors under 23 CFR 450.306 that remain in effect through the FAST Act and IIJA:\n\n1. Support the economic vitality of the metropolitan area, especially by enabling global competitiveness, productivity, and efficiency\n2. Increase the safety of the transportation system for motorized and non-motorized users\n3. Increase the security of the transportation system for motorized and non-motorized users\n4. Increase the accessibility and mobility of people and freight\n5. Protect and enhance the environment, promote energy conservation, improve quality of life, and promote consistency between transportation improvements and planned growth and economic development\n6. Enhance the integration and connectivity of the transportation system across and between modes for people and freight\n7. Promote efficient system management and operation\n8. Emphasize the preservation of the existing transportation system\n9. Improve the resiliency and reliability of the transportation system and reduce or mitigate stormwater impacts of surface transportation\n10. Enhance travel and tourism"
        ]
      },
      {
        id: "performance-measures",
        title: "Federal Performance Measures",
        text: [
          "Under MAP-21 and continued through the IIJA, MPOs and states must set targets tied to seven national goal areas:\n\n• Safety — reducing fatalities and serious injuries\n• Infrastructure condition — pavement and bridge condition ratings\n• System reliability — travel time consistency on highways and freight corridors\n• Freight movement — truck travel time reliability\n• CMAQ — traffic congestion and on-road mobile source emissions\n• Transit asset management — state of good repair for transit systems\n• Transit safety — fatalities, injuries, and safety events on transit\n\nThese are governed primarily under 23 CFR 490 and require states and MPOs to establish measurable targets and report progress regularly to FHWA and FTA."
        ]
      },
      {
        id: "goals-objectives",
        title: "Plan2050 Goals, Objectives, Performance Measures",
        text: [
          "The goals and objectives for Plan2050 build on the framework established for the region’s previously adopted LRTP, Plan2045, and were affirmed through the MPO’s Multimodal Mobility Plan in 2025. Rather than beginning from scratch, TCAMPO used the multimodal planning process as an opportunity to validate that the existing goals remained relevant to the region's evolving conditions, community priorities, and federal performance requirements. Guided by the previous public survey developed for the region’s previous LRTP (Plan2045) and subsequent planning efforts, TCAMPO adopted the following goals and objectives:\n\n1. Safety\nImprove the safety of the transportation system for all people.\n• Enhance safety and comfort of bicycle and pedestrian facilities\n• Work to eliminate all serious injuries and fatalities resulting from crashes\n\n2. Environment / Land Use\nReduce the negative impact the transportation system has on the natural and built environment.\n• Address roadways prone to flooding and consider climate impacts in transportation planning prioritization and funding decisions.\n• Reduce transportation related pollutants.\n• Increase number and share of trips taken by shared and active transportation modes.\n• Assist and support localities as they perform land use planning regarding transportation investments that encourage walkable and transit-oriented communities.\n• Minimize impacts of transportation system on natural resources and communities with a particular emphasis on Environmental Justice (EJ) populations.\n\n3. Equity / Accessibility\nImprove equitable access through greater availability of mode choices that are affordable and efficient.\n• Reduce trip lengths for all people with a focus on Environmental Justice (EJ) populations.\n• Increase access to jobs and community services via transit, walking, and biking for all people with a focus on EJ populations.\n\n4. Economic Development\nImprove connectivity and mobility for strong economic vitality.\n• Reduce peak period travel times.\n• Increase transportation investment which focuses on economic vitality.\n• Improve reliability and accessibility of travel to and within the regional activity centers.\n• Reduce freight bottlenecks.\n• Increase multimodal access to tourist destinations.\n\n5. Mobility\nIncrease travel efficiency and mode choices by maintaining the transportation system in a state of good repair.\n• Increase the percent of complete streets across the highway network to maximize use of available capacity.\n• Increase system efficiency through operational, transportation demand management (TDM), and technology-based solutions.\n• Improve system reliability across all modes.",
          "Each goal in Plan2050 is supported by objectives that define what the region is working toward, including reducing highway congestion, improving system reliability, expanding equitable access to transit, and reducing fatalities and serious injuries. As shown in the Congestion Management Plan, Plan2050 performance measures such as Travel Time Index (TTI), Peak Hours of Excessive Delay (PHED), and percent of person-miles traveled on Interstate and non-Interstate roadways provide a quantitative basis for evaluating plan outcomes in alignment with federal requirements under 23 CFR 490."
        ]
      },
      {
        id: "planning-process",
        title: "Planning Process",
        text: [
          "The development of Plan2050 followed a process designed to meet federal requirements while remaining grounded on the region’s priorities. The process followed multiple phases including data collection and existing conditions assessment, community and stakeholder engagement, scenario development and evaluation, project prioritization, and fiscal constraint analysis.",
          "Data Collection and Conditions Assessment:\nTCAMPO began the planning process by establishing a comprehensive understanding of national and regional trends and forecasts (see Chapter 2: National and Regional Trends and Forecasts). This was followed by an assessment of existing transportation conditions across the region, including an inventory of roadway network performance, bridge and pavement conditions, transit service coverage and ridership patterns, bicycle and pedestrian infrastructure, interregional travel, and freight movement corridors (see Chapter 3: Our Transportation System Today). Travel demand modeling, drawing on current and projected demographic and land use data from member jurisdictions and the Crater Planning District Commission, was used to forecast future conditions under a no-build scenario. This baseline served as the foundation against which future investment scenarios were evaluated.",
          "Community and Stakeholder Engagement:\nPublic and stakeholder engagement was conducted during the planning process in accordance with TCAMPO's Public Participation Plan and Title VI requirements. Outreach efforts were designed to reach a broad cross-section of the region's residents, including populations that are traditionally underserved or underrepresented in transportation planning processes. Engagement activities included public meetings, online surveys, and coordination with local jurisdiction staff. Input gathered through these efforts informed the development of plan goals, the identification of transportation needs, and the evaluation of investment priorities.",
          "Scenario Development and Evaluation:\nContent under development (TBD)",
          "Project Identification and Prioritization:\nTransportation needs and candidate projects were identified through a combination of local jurisdiction input, travel demand modeling outputs, and asset management data. Projects were evaluated using factors related to safety, mobility and congestion, accessibility and equity, environment, and economic development. This evaluation informed how projects were ranked and advanced for potential inclusion in the financially constrained plan.",
          "Fiscal Constraint:\nFederal regulations require that the LRTP be fiscally constrained, meaning the total cost of projects and programs included in the Plan must not exceed the funding reasonably expected to be available over the planning horizon. TCAMPO developed revenue projections based on historical federal, state, and regional funding allocations, anticipated formula program apportionments, and guidance from VDOT, DRPT, and the Central Virginia Transportation Authority (CVTA) on projected funding levels. Projects were organized into funding tiers reflecting the degree of certainty associated with available revenues, ensuring that the Plan presents a realistic and implementable program of investments rather than an unconstrained wish list.",
          "Interagency and Regional Coordination:\nThroughout the planning process, TCAMPO coordinated with VDOT, DRPT, PAT, and RRTPO. This coordination ensured consistency with statewide transportation plans and investment programs, addressed cross-boundary travel needs, and fulfilled the consultation procedures established under the Memoranda of Agreement executed pursuant to 23 CFR 450.310. Fort Gregg-Adams, RideFinders, and the National Park Service at Petersburg National Battlefield also contributed perspectives relevant to their roles in the regional transportation system."
        ]
      },
      {
        id: "relationship-plans",
        title: "Relationship to Other Plans, Reports, and Studies",
        text: [
          "Content under development (TBD). Details on alignments with regional, state, and local plans will be incorporated here."
        ]
      },
      {
        id: "stakeholder-involvement",
        title: "What We Heard: Stakeholder Involvement and Public Outreach",
        text: [
          "Content under development (TBD). Summary of public engagement feedback, stakeholder surveys, and open houses will appear here."
        ]
      }
    ]
  },
  {
    id: 'trends',
    chapterNumber: 2,
    title: "Trends and Forecasts",
    fullTitle: "Chapter 2: Trends and Forecasts",
    subtitle: "Demographic Growth, Socioeconomic Analysis, and Multimodal Travel Demand",
    pdfFilename: "Tri-Cities_PLAN2050_Chapter_2_Trends_and_Forecasts.pdf",
    sections: [
      {
        id: "trends-intro",
        title: "Introduction",
        text: [
          "This section examines the region’s population, employment, and activity density; evaluates socioeconomic growth trends and forecasts within TCAMPO, the Commonwealth of Virginia (Commonwealth), and the United States of America; and maps demographic patterns within the Tri-Cities. Understanding where the region’s existing residents and jobs are concentrated and where they are growing is critical for identifying the region’s current and emerging transportation needs.",
          "Additionally, Environmental Justice (EJ) analysis of the region’s demographic patterns provides insight into equity considerations, helping to identify areas that may face transportation disadvantages due to race, income, limited English proficiency, household vehicle availability, disability, or age, helping to ensure equitable access to multimodal transportation options throughout the region.",
          "Because Chesterfield, Dinwiddie, and Prince George extend beyond the TCAMPO boundary, block group, tract, and county-level data from various sources were adjusted using area-weighted interpolation to reflect only the portion of these jurisdictions within TCAMPO. Geographic units located entirely within the boundary, such as census blocks and Traffic Analysis Zones (TAZ), were included without adjustment."
        ],
        callout: {
          type: "stat",
          title: "Regional Horizon 2050",
          content: "Regional population is projected to expand from 167,920 in 2020 to over 229,568 by 2050, accompanied by a 22.9% increase in regional employment."
        }
      },
      {
        id: "pop-density",
        title: "Population, Employment, and Activity Density",
        text: [
          "The following maps illustrate existing population, employment, and activity density by block group in the Tri-Cities region and beyond. Population estimates are drawn from the American Community Survey (ACS) 2023 5-Year Estimates. Employment estimates are drawn from the 2023 Longitudinal Employer-Household Dynamics (LEHD) Origin-Destination Employment Statistics (LODES) Workplace Area Characteristics (WAC) dataset."
        ],
        hasInteractiveFigure: "density_maps"
      },
      {
        id: "pop-household-trends",
        title: "Population, Household, and Employment Trends",
        text: [
          "Historical population and household trends from 1990 to 2020 were analyzed using decennial census block-level data obtained from the Integrated Public Use Microdata Series (IPUMS) National Historical Geographic Information System (NHGIS). Employment trends for the Tri-Cities region were estimated using county-level annual averages from the Bureau of Labor Statistics (BLS) Quarterly Census of Employment and Wages (QCEW) during the same period.",
          "Population and employment growth supports economic development. It also directly affects travel demand, leading to increased congestion, emissions, and greater crash frequency due to higher traffic volumes. These factors indicate that as a region grows, there is a clear need for higher investment in a robust multimodal transportation system, including pedestrian and bicycle safety improvements, increased transit accessibility, and reductions in highway congestion, as well greater destination access for all modes of transportation.",
          "Population Growth (1990–2020):\nThe population of the Tri-Cities region grew steadily between 1990 and 2020, increasing by 24.4 percent from 134,954 to 167,920. Over the same period, population growth in Virginia (39.5 percent) and the United States (33.3 percent) outpaced the region. The largest regional population growth has occurred in counties dominated by suburban and rural areas:\n\n• Chesterfield (TCAMPO portion): grew by 69.3% between 1990 and 2020.\n• Dinwiddie (TCAMPO portion): grew by 58.3%, though growth slowed after 2010.\n• Prince George (TCAMPO portion): grew by ~56%, with its largest surge occurring between 2010 and 2020.\n• Colonial Heights: experienced steady growth in each decade resulting in a 13.1% overall increase.\n• Petersburg: experienced a 12.8% decline between 1990 and 2020, with a modest 3% recovery since 2010.\n• Hopewell: remained stable with a 0.3% decline between 1990 and 2020, recovering slightly over the last two decades.",
          "Household Growth and Size:\nThe number of households in the region grew by 28.4 percent between 1990 and 2020, increasing from 48,586 to 62,362. Chesterfield experienced the highest household growth (74.2%), followed by Dinwiddie (61.1%) and Prince George (46.9%). Colonial Heights grew by 20.0%, Hopewell by 4.2%, and Petersburg by 4.4%. Across all jurisdictions, average household size declined by 3.1% from 2.8 to 2.7 people per household, tracking broader trends toward smaller households across the Commonwealth (-3.7%) and nation (-3.4%).",
          "Employment Growth:\nEmployment in the Tri-Cities region increased by approximately 47.3 percent, expanding from 37,198 in 1990 to 54,780 in 2020. In contrast with population and households, regional employment is growing at a faster rate than both the Commonwealth of Virginia (32.3%) and the nation (28.1%)."
        ]
      },
      {
        id: "shift-share-employment",
        title: "Shift-Share Employment Growth by BLS Supersector",
        text: [
          "In this section, employment growth in the Tri-Cities region is evaluated across all BLS supersectors using shift-share analysis. Supersectors are high-level industry groupings used by BLS for the QCEW program, aggregating employment across related two-digit NAICS sectors to provide a wider view of economic activity in an area. These industries can be further grouped into the Goods-Producing and Service-Providing domains.",
          "Net employment in the Tri-Cities region increased across most major industry supersectors between 2019 and 2023, although the magnitude and causes of growth varied by sector. Shift-share analysis decomposes regional employment change into three components:",
          "The analysis revealed that Trade, Transportation & Utilities was the region's largest source of net employment growth between 2019 and 2023, adding 950 jobs (NGC: +585, IMC: +158, LSC: +208). The strong positive local growth in both Trade, Transportation & Utilities and Manufacturing aligns with the region's location along the I-95 and I-85 corridors and its growing role as a goods movement and freight logistics hub."
        ],
        hasInteractiveFigure: "shift_share_chart"
      },
      {
        id: "demographic-profiles",
        title: "Demographic Profiles",
        text: [
          "This section summarizes the Environmental Justice (EJ) analysis which is incorporated into TCAMPO’s prioritization process for projects considered for inclusion in Plan2050. The analysis designates EJ Areas of Concern, defined as census block groups having relatively higher concentrations of residents or households that may have limited access to viable transportation choices. Identifying areas where these populations are concentrated helps ensure that transportation investments are planned and prioritized in a way that promotes equitable access across the region.",
          "For this analysis, six EJ indicators are derived from 2023 ACS 5-Year Estimates: minority and low-income populations, persons with limited English proficiency, persons with disabilities, elderly persons, and households without access to a vehicle. Each indicator is reclassified into an ordinal vulnerability score (1–3) using tertile breaks. The scores are summed to produce a composite vulnerability index (ranging from 6 to 18), then classified into a final three-level Environmental Justice Composite Index."
        ],
        hasInteractiveFigure: "ej_composite_map"
      },
      {
        id: "socioeconomic-forecasts",
        title: "Socioeconomic Forecasts",
        text: [
          "The MPO developed 2017-2050 socioeconomic forecasts (population, housing, autos, school enrollment, and employment) by TAZ to support the Richmond/Tri-Cities (RTC) Travel Demand Model, which TCAMPO and RRTPO use for long-range planning and corridor studies. Across the six jurisdictions, total population is projected to grow by about 20.0% from 191,300 to 229,600; households by about 30.9% from 64,400 to 84,300; and total employment by about 22.9% from about 62,400 to 76,800 by 2050.",
          "Employment Change per Acre by TAZ, 2017-2050\nFigure 14. Employment Change per Acre by Traffic Analysis Zone (TAZ), 2017–2050"
        ],
        hasInteractiveFigure: "demographics_chart",
        tableData: {
          title: "Table 1. 2017–2050 Socioeconomic Forecasts",
          headers: ["Jurisdiction", "Population 2017", "Population 2050", "Households 2017", "Households 2050", "Employment 2017", "Employment 2050"],
          rows: [
            ["Chesterfield", "43,683", "61,806", "14,909", "21,403", "10,384", "16,645"],
            ["Dinwiddie", "28,504", "30,477", "9,980", "10,500", "8,647", "10,438"],
            ["Prince George", "45,881", "60,888", "12,543", "23,640", "13,790", "19,422"],
            ["Colonial Heights", "17,395", "19,646", "6,782", "7,682", "9,344", "9,344"],
            ["Hopewell", "22,941", "23,471", "8,910", "9,325", "7,137", "7,366"],
            ["Petersburg", "32,918", "33,280", "11,280", "11,727", "13,130", "13,540"],
            ["TCAMPO Total", "191,322", "229,568", "64,404", "84,277", "62,432", "76,755"]
          ]
        }
      },
      {
        id: "land-use-development",
        title: "Land Use and Development",
        text: [
          "Land use in the Tri-Cities region is characterized by a wide range of land cover classes, varying from densely developed urban cores in Petersburg, Colonial Heights, and Hopewell to rural and agricultural landscapes across Chesterfield, Dinwiddie, and Prince George Counties.",
          "The urban core jurisdictions—Colonial Heights, Hopewell, and Petersburg—each have more than 60 percent of total land developed, while Dinwiddie, Prince George, and Chesterfield each have less than 30 percent developed. Across the Tri-Cities MPO as a whole, about 28 percent of land is developed, presenting a region defined by a densely developed core surrounded by lower-density, largely undeveloped areas.",
          "Existing Land Cover and Transitions, 2014-2024\nFigure 15. Existing Land Cover and Transitions from Undeveloped to Developed Areas, 2014–2024 (Source: USGS NLCD)",
          "Petersburg’s comparatively high rate of land conversion reflects both its population growth during the last decade and its relatively small size and limited remaining undeveloped land. Transitioned lands are concentrated along Wells Road in south Petersburg, and along the US-301/I-95 corridor near the Bon Secours Medical Center and the Wagner Road interchange (Exit 48)."
        ]
      },
      {
        id: "travel-patterns",
        title: "Travel Patterns",
        text: [
          "Population and employment changes shape both development and travel patterns throughout the region. Understanding these existing patterns provides a basis for developing future transportation needs. Examining trip flows, household vehicle availability, mode share, and forecasted travel demand helps inform decision makers about the investments that are needed to support economic vitality, improve mobility, and enhance quality of life for residents and visitors alike.",
          "Trips by Mode — Content under development (TBD)",
          "Household Vehicle Availability:\nHousehold vehicle availability is one of the biggest determinants of travel behavior and mode choice, shaping whether a trip is made by car, transit, walking, or not at all. Vehicle availability varies considerably across the region, generally tracking differences in population density and household income. Petersburg has the highest share of zero-vehicle households (14.84%) and the highest combined zero-and-one-vehicle share (63.27%). Hopewell also shows an above-average zero-vehicle share (11.66%). At the other end, Dinwiddie has the highest share of three-plus-vehicle households (46.34%).",
          "Commute Mode Share by Travel Time:\nThe majority of workers 16 years and over who did not work from home drove alone to work across all commute durations, accounting for 82% of all commuters and more than 85% of commuters in travel times between 15 minutes to one hour. Walking was most prevalent among the shortest commutes, comprising nearly 24 percent of workers with travel times under 10 minutes. Carpooling accounted for 7 to 11 percent across all time intervals. Transit use was minimal overall but reached about 10 percent of workers with travel times of 60 minutes or more.",
          "Changes in Traffic Congestion (2020–2025) — Content under development (TBD)"
        ],
        tableData: {
          title: "Table 2. Household Vehicle Availability by Jurisdiction",
          source: "Source: 2024 ACS 5-Year",
          headers: ["Jurisdiction", "Households", "No Vehicle", "1 Vehicle", "2 Vehicles", "3+ Vehicles"],
          rows: [
            ["Chesterfield", "16,017", "4.22%", "22.22%", "40.93%", "32.63%"],
            ["Dinwiddie", "4,409", "5.90%", "19.37%", "28.42%", "46.34%"],
            ["Prince George", "10,204", "3.47%", "22.95%", "34.08%", "39.50%"],
            ["Colonial Heights", "7,530", "6.79%", "33.73%", "35.96%", "23.52%"],
            ["Hopewell", "9,255", "11.66%", "35.73%", "26.12%", "26.49%"],
            ["Petersburg", "15,138", "14.84%", "48.43%", "25.84%", "10.89%"],
            ["TCAMPO Region", "62,553", "8.20%", "31.87%", "32.49%", "27.45%"],
            ["Virginia Statewide", "3,365,732", "6.10%", "31.13%", "37.25%", "25.52%"]
          ]
        }
      },
      {
        id: "commuter-flows",
        title: "County to County Commuter Flows",
        text: [
          "The Tri-Cities region is part of an interconnected metropolitan area that extends beyond its borders. Examining commuting patterns both within the region and beyond provides insight into the interconnectedness of the region's economy and the role of the transportation network in supporting those connections.",
          "Table 3 summarizes county-to-county commuter flow data derived from 2025 StreetLight Origin-Destination traffic volumes (Average Daily Traffic) and Home-Based Work (HBW) trip purpose data. The share of Internal-Internal (I-I) trips that begin and end within TCAMPO varies considerably by jurisdiction, ranging from a high of 71.7 percent in Prince George to a low of 37.6 percent in Chesterfield.",
          "Prince George, Colonial Heights, Petersburg, and Hopewell have the greatest share of internal trips, with all but Hopewell retaining more than two-thirds of commute trips within the MPO. Prince George also has the highest proportion of trips that begin and end within the same jurisdiction (45.4 percent), reflecting the influence of Fort Gregg-Adams as a major local employer and trip generator.",
          "In contrast, nearly two-thirds of commute trips associated with the TCAMPO portion of Chesterfield travel outside the MPO, primarily toward the Richmond region (Richmond Regional TPO, Henrico, and City of Richmond). Among internal TCAMPO flows, the strongest connections are centered on Prince George and Petersburg: Prince George exchanges 2,203 trips with Petersburg and 2,086 trips with Hopewell."
        ],
        hasInteractiveFigure: "commuter_flow",
        tableData: {
          title: "Table 3. Commute Flows within Tri-Cities Area MPO",
          source: "Source: StreetLight, 2025",
          headers: ["Origin \\ Destination", "Chesterfield", "Colonial Heights", "Dinwiddie", "Hopewell", "Petersburg", "Prince George"],
          rows: [
            ["Chesterfield", "1,562", "654", "312", "319", "618", "733"],
            ["Colonial Heights", "606", "1,850", "263", "271", "506", "684"],
            ["Dinwiddie", "283", "265", "427", "91", "535", "326"],
            ["Hopewell", "312", "321", "101", "2,036", "319", "1,052"],
            ["Petersburg", "628", "507", "586", "301", "2,155", "1,106"],
            ["Prince George", "625", "671", "250", "1,034", "1,097", "6,340"]
          ]
        }
      }
    ]
  },
  {
    id: 'today',
    chapterNumber: 3,
    title: "System Today",
    fullTitle: "Chapter 3: Our Transportation System Today",
    subtitle: "Inventory of Roadways, Transit Networks, Freight Corridors, and Active Mobility",
    pdfFilename: "Tri-Cities_PLAN2050_Chapter_3_System_Today.pdf",
    sections: [
      {
        id: "system-status",
        title: "Status Update",
        text: [
          "The Tri-Cities MPO PLAN2050 Chapter 3: Our Transportation System Today content is currently being finalized. Please check back soon."
        ]
      }
    ]
  },
  {
    id: 'tomorrow',
    chapterNumber: 4,
    title: "System Tomorrow",
    fullTitle: "Chapter 4: System Tomorrow - Multimodal Vision",
    subtitle: "Future Transit Expansion, Smart Arterials, Bridge Replacements & Resilience",
    pdfFilename: "Tri-Cities_PLAN2050_Chapter_4_System_Tomorrow.pdf",
    sections: [
      {
        id: "vision-multimodal",
        title: "Future Multimodal Network Vision",
        text: [
          "Chapter 4 presents the forward-looking vision for 2050: a connected, multimodal transportation network that seamlessly integrates high-speed highway corridors, microtransit on-demand fleets, express commuter bus routes connecting to Richmond, and over 150 miles of contiguous regional greenways.",
          "Key signature projects include the completion of the Fall Line Trail through Colonial Heights and Chesterfield, upgrades to the I-95/I-85 junction, and modernization of the Appomattox River bridge structures."
        ]
      },
      {
        id: "smart-mobility",
        title: "Smart Corridors & Connected Infrastructure",
        text: [
          "Deploying intelligent transportation systems (ITS), adaptive traffic signals, dynamic variable speed limits during peak freight hours, and synchronized connected vehicle vehicle-to-infrastructure (V2I) sensors along Route 1 and Route 36."
        ]
      }
    ]
  },
  {
    id: 'funding',
    chapterNumber: 5,
    title: "Funding",
    fullTitle: "Chapter 5: Funding & Fiscal Constraint",
    subtitle: "Financial Plan, Revenue Projections, SMART SCALE Allocations, and Cost Realism",
    pdfFilename: "Tri-Cities_PLAN2050_Chapter_5_Funding.pdf",
    sections: [
      {
        id: "fiscal-constraint",
        title: "Fiscal Constraint Requirements",
        text: [
          "Federal regulations mandate that all projects included in PLAN2050 must have reasonable anticipated revenue sources identified. The financial plan establishes a balanced program projecting $1.24 Billion in federal, state, and regional funds over the 2026-2050 horizon.",
          "Funding streams incorporate Virginia SMART SCALE awards, Surface Transportation Block Grant (STBG), Congestion Mitigation and Air Quality (CMAQ), Central Virginia Transportation Authority (CVTA) allocations, and local matching revenues."
        ],
        hasInteractiveFigure: "funding_breakdown"
      }
    ]
  },
  {
    id: 'appendices',
    title: "Appendices",
    fullTitle: "Appendices & Reference Documentation",
    subtitle: "Technical Methodologies, Public Comment Records, Modeling Reports & Acronyms",
    pdfFilename: "Tri-Cities_PLAN2050_Appendices.pdf",
    sections: [
      {
        id: "app-methods",
        title: "Appendix A: Travel Demand Modeling Methodology",
        text: [
          "Details the regional Cube Voyager travel demand modeling framework, trip distribution parameters, external-to-external freight trip modeling, and calibration metrics validated against VDOT continuous traffic count stations."
        ]
      },
      {
        id: "app-public-comments",
        title: "Appendix B: Public Participation Summary & Comments",
        text: [
          "Full log of community survey feedback, open house transcripts, Title VI environmental justice workshop findings, and responses from the MPO Policy Committee."
        ]
      },
      {
        id: "app-acronyms",
        title: "Appendix C: Transportation Glossary & Acronyms",
        text: [
          "A comprehensive index of acronyms used throughout the PLAN2050 document including TCAMPO, VDOT, DRPT, FHWA, FTA, EJ, VMT, NHS, and PBPP."
        ]
      }
    ]
  }
];

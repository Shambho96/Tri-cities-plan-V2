export type TabId = 
  | 'report' 
  | 'introduction' 
  | 'trends' 
  | 'today' 
  | 'tomorrow' 
  | 'funding' 
  | 'appendices';

export interface PlanGoal {
  id: string;
  number: number;
  title: string;
  description: string;
  iconName: string;
  badgeBg: string;
  accentColor: string;
  metrics: {
    label: string;
    target: string;
    benchmark: string;
  }[];
  details: string;
}

export interface DocumentFigure {
  id?: string;
  src: string;
  title: string;
  caption?: string;
  source?: string;
}

export interface DocumentTable {
  title: string;
  headers: string[];
  rows: (string | number)[][];
  source?: string;
}

export interface SectionContent {
  id: string;
  title: string;
  subtitle?: string;
  text: string[];
  callout?: {
    type: 'info' | 'stat' | 'highlight';
    title: string;
    content: string;
  };
  figure?: DocumentFigure;
  figures?: DocumentFigure[];
  hasInteractiveFigure?: 
    | 'figure1_map' 
    | 'demographics_chart' 
    | 'commuter_flow' 
    | 'funding_breakdown'
    | 'density_maps'
    | 'shift_share_chart'
    | 'ej_composite_map';
  tableData?: DocumentTable;
  tables?: DocumentTable[];
}

export interface ChapterData {
  id: TabId;
  chapterNumber?: number;
  title: string;
  fullTitle: string;
  subtitle: string;
  pdfFilename: string;
  sections: SectionContent[];
}

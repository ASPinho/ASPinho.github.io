export interface TableData {
    id?: string;
    headers: string[];
    rows: string[][];
    columnClasses?: string[];
}

export interface TableProps {
    data: TableData;
}

export interface Tab {
    id: number;
    label: string;
}

export interface Tabs {
    tabs: Tab[];
    activeTab: number;
    setActiveTab: (id: number) => void;
}

export interface InteractionCardSubsection {
    subtitle : string,
    description: string
}

export interface InteractionCardProp {
    title: string;
    subsections: InteractionCardSubsection[];
}


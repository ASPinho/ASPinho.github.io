export interface TableData {
    id?: string;
    headers: string[];
    rows: string[][];
    columnClasses?: string[];
}

export interface TableProps {
    data: TableData;
}
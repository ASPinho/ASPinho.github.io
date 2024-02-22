export interface TableData {
    headers: string[];
    rows: string[][];
}

export interface TableProps {
    data: TableData;
    id?: string;
}
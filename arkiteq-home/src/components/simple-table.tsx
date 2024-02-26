import React from "react";
import {TableProps} from "../scripts/interfaces";

const Table = (tableProps : TableProps) => {

    let data = tableProps.data

    return (
        <table id = {data.id}>
            <thead>
            <tr>
                {data.headers.map((header, index) => (
                    <th key={index} className={data.columnClasses?.[index]}>
                        {header}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className={data.columnClasses?.[cellIndex]}>
                            {cell}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
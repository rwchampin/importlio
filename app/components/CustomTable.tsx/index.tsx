"use client";
import React, { useState } from 'react';

const CustomTable = ({ data, columns, onRowSelect }:any) => {
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [sortConfig, setSortConfig] = useState<any>({ key: null, direction: null });

  // Function to handle sorting when column header is clicked
  const handleSort = (key:any) => {
    let direction = 'ascending';

    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    setSortConfig({ key, direction });
  };

  // Function to sort the data based on the current sortConfig
  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key) {
      const keyA = a[sortConfig.key];
      const keyB = b[sortConfig.key];

      if (sortConfig.direction === 'ascending') {
        return keyA.localeCompare(keyB);
      } else {
        return keyB.localeCompare(keyA);
      }
    }

    return 0;
  });

  // Function to toggle selection of a row
  const toggleRowSelection = (id:number) => {
    const isSelected = selectedRows.includes(id);
    if (isSelected) {
      setSelectedRows(selectedRows.filter((rowId:number) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div>
      <table
        className='bg-gray-300 rounded-xl shadow-xl w-full h-auto min-h-[500px] p-3'
      >
        <thead>
          <tr
            className='bg-gray-200 text-gray-600 text-left text-sm uppercase font-bold tracking-wider rounded-xl'
          >
            {columns.map((col:any, i:any) => (
              <th key={i} onClick={() => handleSort(i)}
                className='px-6 py-3'
              >
                {col}
                {sortConfig.key === col.key && (
                  <span>
                    {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row:any) => (
            <tr
              key={row.id}
              onClick={() => {
                toggleRowSelection(row.id);
                onRowSelect(row.id);
              }}
              className={selectedRows.includes(row.id) ? 'selected' : ''}
            >
              {columns.map((col:any) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;

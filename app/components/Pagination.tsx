"use client";
import React, { useState, useEffect } from 'react';

const Pagination = ({ next, previous, onPageChange, totalPages, currentPage }:any) => {
  const [pageNumbers, setPageNumbers] = useState<any>([]);

  useEffect(() => {
    generatePageNumbers();
  }, [totalPages, currentPage]);

  const generatePageNumbers = () => {
    const pages:any = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    setPageNumbers(pages);
  };

  const handlePageChange = (newPage:any) => {
    onPageChange(newPage);
  };

  return (
    <div>
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={!previous}>
        Previous
      </button>
      {pageNumbers.length > 1 && (
        <div className="page-numbers">
          {pageNumbers.map((page:any) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? 'active' : ''}
            >
              {page}
            </button>
          ))}
        </div>
      )}
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={!next}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

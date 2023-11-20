"use client";
import React, { useState, useEffect } from 'react';

const Pagination = ({ json }:any) => {
  const { count, next, previous } = json;

  const amountPerPage = 5;  // Adjust based on your actual amount per page
  const [totalPages, setTotalPages] = useState(Math.ceil(count / amountPerPage));
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    setTotalPages(Math.ceil(count / amountPerPage));
    generatePageNumbers();
  }, [count, currentPage]);

  const generatePageNumbers = () => {
    let pages = [];
    let startPage, endPage;

    if (totalPages <= 5) {
      // less than 5 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 5 total pages so calculate start and end pages
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    // setPageNumbers(pages);
  };

  const handlePageChange = (newPage : any) => {
    setCurrentPage(newPage);
    // Add your logic here to fetch new data based on the new page
  };

  return (
    <div>
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      {pageNumbers.length > 1 && (
        <div className="page-numbers">
          {pageNumbers.map((page) => (
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
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

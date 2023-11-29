"use client";
import React, { useState, useEffect } from 'react';
import { Pagination as PP } from '@nextui-org/react';
import Spinner from './Spinner';
const Pagination = ({ json, handleChange }:any) => {
  const { count, next, previous, results } = json;

  const amountPerPage = 5;  // Adjust based on your actual amount per page

  const [totalPages, setTotalPages] = useState<any>(Math.ceil(count / amountPerPage));
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [pageNumbers, setPageNumbers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
    setPageNumbers(pages);
  };


  
 
   

  return (
    
    <PP 
      loop
      showControls
      total={totalPages}
      initialPage={currentPage}
      classNames={{
        wrapper: 'w-full bg-red-500 mx-auto',
      }}
      onChange={(newPage) => {
        handleChange(newPage);
      }}
    />
 
  );
};

export default Pagination;

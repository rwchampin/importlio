import React from "react";
import { Pagination as PP } from "@nextui-org/react";

const getPaginatedPosts = async (page) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/?page=${page}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await res.json();

    if(data.results) {
        return data.results;
    }

    return data;
}

export default function Pagination({ data }) {
    const [currentPage, setCurrentPage] = React.useState(1);

  const total_pages = Math.ceil(data.count / data.results.length); // Assuming 10 items per page

  return (
  
      <PP
        total={total_pages}
        initialPage={currentPage}
        onChange={getPaginatedPosts}
      />

  );
}

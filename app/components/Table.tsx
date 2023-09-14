"use client";
import Link from "next/link";
import {BsFillPencilFill as EditIcon} from 'react-icons/bs'
import { RiDeleteBin6Line as DeleteIcon } from "react-icons/ri";
import { BiErrorCircle as ErrorIcon } from "react-icons/bi";

import { deletePost } from "@/lib/api";
interface Props {
  headers: {
    title: string;
    description: string;
  };
  columns: {
    header: string;
    field: string;
    sticky?: boolean;
    className?: string;
  }[];
  data: {
    [key: string]: string;
  }[];
}
function classNames(...classes:any) {
  return classes.filter(Boolean).join(" ");
}
export default function Table({ data }: any) {

  const generateColumns = (data: any) => {
    return Object.keys(data[0]).map((key) => {
      return {
        header: key,
        field: key,
        sticky: false
      };
    });
  };

  const handleDelete = async (slug:string) => {
    const res = await deletePost(slug);

    if(res) {
      document.getElementById(slug)?.remove();
    }
  };

  const trStyle = `px-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900 max-w-[150px] overflow-hidden overflow-ellipsis`

  if(!data || !data.length) {
    return (
      <button
      type="button"
      className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
       <ErrorIcon className="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />
      <span className="mt-2 block text-sm font-medium text-gray-100">Create a new database</span>
    </button>
    )
  }
  return (

 
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="shadow-sm ring-1 ring-black ring-opacity-5">
              <table
                className="min-w-full border-separate"
                style={{ borderSpacing: 0 }}
              >
                <thead className="bg-gray-50">
                  <tr className={trStyle}>
                    <th>
                      {/* input for the pot row */}

                      <input type="checkbox" />
                    </th>
                    {generateColumns(data).map((column, columnIndex) => (
                      <th
                        key={columnIndex}
                        scope="col"
                        className={trStyle}
                      >
                        {column.field}
                      </th>
                     
                    ))}
                     <th
                        className={trStyle}
                      >
                        Edit/Delete
                      </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data.map((post:any, rowIndex:any) => (
                    <tr 
                    id={post.id}
                    key={rowIndex}
                    >
                      <td className={trStyle}>
                        <input type="checkbox" value={post.slug} />
                      </td>
                       <td className={trStyle}>
                        {post.id}
                      </td>
                      <td className={trStyle}>
                        {post.title}
                      </td>
                      <td className={trStyle}>
                        {post.updated}
                      </td>
                      <td className=" line-clamp-1 max-w-[300px] overflow-hidden">
                        {post.excerpt}
                      </td>
                      <td className={trStyle}>
                        {post.title}
                      </td>
                      <td className={trStyle}>
                        {post.slug}
                      </td>
                      <td className={`${trStyle} flex`}>
                        <Link href={`/dashboard/posts/${post.slug}`}>
                          <EditIcon className="text-xs text-gray-500 hover:text-gray-900 cursor-pointer" />
                        </Link>

                        <button onClick={() => handleDelete(post.id)}>
                          <DeleteIcon className="text-xs text-gray-500 hover:text-gray-900 cursor-pointer" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
}

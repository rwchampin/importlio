
import Link from "next/link";
// import Image from "next/image";
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
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Table({ headers, columns, data }: Props) {

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            {headers.title}
          </h1>
          <p className="mt-2 text-sm text-gray-700">{headers.description}</p>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="shadow-sm ring-1 ring-black ring-opacity-5">
              <table
                className="min-w-full border-separate"
                style={{ borderSpacing: 0 }}
              >
                <thead className="bg-gray-50">
                  <tr>
                    {columns.map((column, columnIndex) => (
                      <th
                        key={columnIndex}
                        scope="col"
                        className={classNames(
                          column.sticky ? "sticky top-0 z-10" : "",
                          "flex-1 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-4 px-3 text-left text-xs font-semibold text-gray-900",
                          column.className
                        )}
                      >
                        {column.header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data.map((post, rowIndex) => (
                    <tr key={rowIndex}>
                       <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {post.id}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {post.status}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {post.updated}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {post.post_type}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {post.title}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {post.slug}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

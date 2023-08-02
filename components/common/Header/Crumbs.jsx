import { BsHouse } from 'react-icons/bs';
import { TiChevronRight } from 'react-icons/ti';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Crumbs = () => {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter((path) => path !== '');
  const breadcrumbs = [{ label: <BsHouse />, link: '/' }];

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex  items-center space-x-4 rounded bg-gray3 px-4 py-1 text-xxs font-medium drop-shadow-xl">
        {pathArray.map((path, index) => {
          const breadcrumbLink = `/${pathArray.slice(0, index + 1).join('/')}`;
          const breadcrumbLabel = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
          breadcrumbs.push({ label: breadcrumbLabel, link: breadcrumbLink });

          return (
            <React.Fragment key={breadcrumbLink}>
              <li className="flex items-center">

                  <Link href="/" className="text-secondary-500 hover:text-secondary-600 text-[10px]">Home</Link>

              </li>
              <li className="flex items-center space-x-2">
                <TiChevronRight className="h-3 w-3 text-gray11" />

                  <Link href={breadcrumbLink} className="text-gray-600 hover:text-secondary-600 text-[10px]">{breadcrumbLabel}</Link>

              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Crumbs;

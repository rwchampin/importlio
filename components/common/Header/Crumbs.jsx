"use client";
import { BsHouse } from 'react-icons/bs';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

  const Crumbs=() => {
    const pathname=usePathname();
    const pathArray=pathname.split('/').filter((path) => path!=='');
    const breadcrumbs=[ {label: <BsHouse />, link: '/'} ];

    return (
      <nav>
        <ul>
          {pathArray.map((path, index) => {
            const breadcrumbLink=`/${pathArray.slice(0, index+1).join('/')}`;
            const breadcrumbLabel=path.charAt(0).toUpperCase()+path.slice(1).replace(/-/g, ' ');
            breadcrumbs.push({label: breadcrumbLabel, link: breadcrumbLink});

            return (
              <li key={breadcrumbLink}>
                <a href={breadcrumbLink}>{breadcrumbLabel}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };

  export default Crumbs;



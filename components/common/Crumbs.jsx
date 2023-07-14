import Link from 'next/link';

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav className="text-sm">
      <ol className="list-none p-0 inline-flex">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {crumb.path ? (
              <Link href={crumb.path}>
                <a className="text-blue-500 hover:text-blue-700">{crumb.label}</a>
              </Link>
            ) : (
              <span>{crumb.label}</span>
            )}
            {index < crumbs.length - 1 && (
              <svg
                className="h-5 w-auto text-gray-400 mx-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

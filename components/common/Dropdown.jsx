export default function Dropdown({ children, dropdown }) {

    return (
        <div className="hs-dropdown relative inline-flex">
            <button id="hs-dropdown-with-title" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
            {children}
            </button>
 
  <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-with-title">
    {dropdown.map((item, index) => {
        return (
        <div key={index} className="py-2 first:pt-0 last:pb-0">
           {item.items.map((subitem, index) => {
                return (
                    <>

                    {item.title && 
                        <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-gray-500">
                            {item.title}
                        </span>
                        }
                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href={item.link}>
                           {item.icon}
                            {item.title}
                        </a>
                    </>
                )
            })}
        </div>
        )
    })}
     
  </div>
</div>
    )
}
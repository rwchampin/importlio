export default function DropdownItem({item}:any) {

    return (
        <div className='flex gap-5 items-center rounded-lg hover:bg-gray-300  p-5 hover:cursor-pointer'>
        <a
          key={item.href}
          href={item.href}
          className="-m-3 flex items-start  transition duration-150 ease-in-out "
        >
          <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900">{item.pretty}</p>
            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
          </div>
        </a>
        <item.cta />
        </div>
    )
}
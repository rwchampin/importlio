
import { Tab } from '@headlessui/react'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TextArea({

    className,
    label,
    labelId,
    name,
    value,
    onChange,
    required,
    placeholder,
    type 
}) {
  return (



                  <textarea
                    rows={5}
                    name={name}
                    id={name}
                    onChange={onChange}
                    required={required}
                    value={value}
                    // className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    placeholder={placeholder}
                    aria-describedby={labelId}
                  />


     
  )
}

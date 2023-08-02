import {Fragment, useEffect, useState} from 'react';
import {Listbox, Transition} from '@headlessui/react';
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid';

const people=[
	{name: 'Wade Cooper'},
	{name: 'Arlene Mccoy'},
	{name: 'Devon Webb'},
	{name: 'Tom Cook'},
	{name: 'Tanya Fox'},
	{name: 'Hellen Schmidt'},
];

export default function PostTypeSelect({ onChange, value ,required, placeholder, label, labelId, type, name}) {
	const [ options, setOptions ]=useState([]);
	const [ selected, setSelected ]=useState(null);

	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/post-types/list/`)
			.then((res) => res.json())
			.then((data) => {
				if(data&&data.length>0) {
					setOptions(data);
					setSelected(data[ 0 ]);
				} else {
					// Set the default selected option if no data is fetched
					setSelected({name: '-------------'});
				}
			});
	}, []);

	return (
		<select 
			id={labelId}
			value={value}
			onChange={onChange}
			required={required}
			placeholder={placeholder}
			type={type}
			aria-labelledby={labelId}
			aria-required={required}
			name={name}
			label={label}
			className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
		>
			{options.map((option, idx) => (
				<option key={idx} value={option.id}>{option.name}</option>
			))}
		</select>
	);
}

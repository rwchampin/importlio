"use client"
import {Fragment, lazy, Suspense, useEffect, useState} from 'react';
import {Combobox as CC, Transition} from '@headlessui/react';
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid';
import {BiCheckCircle} from 'react-icons/bi';
import {useBlog} from '@/store';
export default function Combobox({onChange, value, required, placeholder, labelId, label, type, name}) {
	const {categories, tags }=useBlog();

	const [ options, setOptions ]=useState([  ]);
	const [ selectedOptions, setSelectedOptions ]=useState([]);
	const [ selected, setSelected ]=useState(options[ 0 ]);
	const [ query, setQuery ]=useState('');

	useEffect(() => {
		if(categories && tags) {
			const o = [{value: '-------------'}]
			[labelId].map((item) => {
				o.push({
					value: item.name,
					name: item.name
				})
			})
			setOptions(o);
		}
	}, [categories,labelId, tags]);
	 

	const handleChange=(selectedItems) => {
		setSelectedOptions(selectedItems); // Updated: Set selectedOptions directly as an array
		const selectedValues=selectedItems.map((item) => item.value);
		onChange(selectedValues);
	};

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<CC value={selectedOptions} onChange={handleChange}>
				<div className="relative mt-1">
					<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
						<CC.Input
							className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
							displayValue={(selected) => (selected? selected.value:'')}
							onChange={(e) => setQuery(e.target.value)}
							placeholder={placeholder}
							type={type}
						/>
						<CC.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
							<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
						</CC.Button>
					</div>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery('')}
					>
						<CC.Options
							style={{zIndex: 99999}}
							className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg   py-1 text-base shadow-xl z-[99999px]  sm:text-sm bg-light-gray-2"
						>
							{options.map((option, i) => (
								<CC.Option
									key={option.value}
									className={({active}) =>
										`relative cursor-default select-none py-2 pl-10 pr-4 ${active? 'bg-light-gray-6 text-white':'text-black'
										} ${i!==options.length-1? 'border-b-2':''}`
									}
									value={option}
								>
									{({selected, active}) => (
										<>
											<span
												className={`block truncate ${selected? 'font-medium':'font-normal'}`}
											>
												{option.name}
											</span>
											{selected? (
												<span
													className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? 'text-white':'text-teal-600'
														}`}
												>
													<BiCheckCircle className="h-5 w-5" aria-hidden="true" />
												</span>
											):null}
										</>
									)}
								</CC.Option>
							))}
						</CC.Options>
					</Transition>
				</div>
			</CC>
		</Suspense>
	);
}
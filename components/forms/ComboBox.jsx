"use client";
import React, { useEffect, useState, useRef } from 'react';
import { getTags, getCategories, getPostTypes } from '@/lib/functions';
import { BsCheckCircle } from 'react-icons/bs';
import gsap from 'gsap';
import Badge from '@/components/common/Badge';



const Option = ({ value, selected, onClick }) => {
	return (
		<div className={`flex p-5 items-center w-full hover:bg-gray-5 text-black border-b border-gray-6 ${selected ? 'border-l-4 border-l-green-8' : ''}`} onClick={onClick}>
			<BsCheckCircle className={`${selected ? 'text-green-500 mr-2' : 'text-transparent mr-2'} `} />
			<span>{value}</span>
		</div>
	);
};

const getData = async () => {
	const tags =  getTags();
	const categories =  getCategories();
	const postTypes =  getPostTypes();

	return await Promise.all([tags, categories, postTypes]);
}

export default function ComboBox({data, label, type, onChange, value, name, labelId, required, placeholder }) {

	const [options, setOptions] = useState(data);
	const [selected, setSelected] = useState([]);
	const [active, setActive] = useState(false);
	const dropdown = useRef(null);
	const comboBoxRef = useRef(null);

 

	useEffect(() => {
		const handleClose = (e) => {
			if (active && comboBoxRef.current && !comboBoxRef.current.contains(e.target)) {
			  setActive(false);
			}
		  };

		window.addEventListener('click', handleClose)

		return () => {
			window.removeEventListener('click', handleClose);
		}
	}, [active]);
	useEffect(() => {
		onChange({ target: { name, value: selected.map(option => option.id) }});
	}, [selected]);

 

	useEffect(() => {
		const drop = dropdown.current;
		if (active) {
			gsap.to(drop, { duration: 0.1, height: 'auto' });
		} else {
			gsap.to(drop, { duration: 0.1, height: 0 });
		}
	}, [active, dropdown]);

	const selectItem = (option) => {
		if (!selected.includes(option)) {
			setSelected([...selected, option]);
		} else {
			setSelected(selected.filter(item => item !== option));
		}
	};


	return (
		<div ref={comboBoxRef} className="mt-1">
			<div className="relative h-input">
				<div onClick={() => setActive(active => !active)} className="h-input border border-gray-300 rounded-md shadow-sm hover:bg-gray-6 z-10">
					<div className="flex gap-3 overflow-x-scroll p-3 items-center justify-start">
						{selected.map((option, idx) => (
							<Badge type="info" key={idx}>{option.name}</Badge>
						))}
						<input
							type="text"
							value={selected.map(option => option.name).join(', ')}
							onChange={() => { 
								onChange({ target: { name, value: selected.map(option => option.id).join(',') } });
							}}
							className="hidden w-full h-full bg-transparent border-none outline-none"
							placeholder={placeholder}
						/>
					</div>
				</div>
				<div onMouseLeave={() => setActive(false)} ref={dropdown} className="shadow-2xl bg-white max-h-[500px] w-full absolute top-[100%] left-0 flex flex-col overflow-hidden items-center z-[999] rounded-b-lg">
					{options.map((option, idx) => (
						<Option key={idx} value={option.name} selected={selected.includes(option)} onClick={() => selectItem(option)} />
					))}
				</div>
			</div>
		</div>
	);
}

import {HiOutlineMail as EmailIcon} from 'react-icons/hi'
import {IoLockClosedOutline as PasswordIcon} from 'react-icons/io5'
import {AiOutlineSearch as SearchIcon} from 'react-icons/ai'
import {IoIosArrowDown as ArrowDownIcon} from 'react-icons/io'
import {IoIosArrowUp as ArrowUpIcon} from 'react-icons/io'

export default function InputIcon({
	icon,
	type,
	name,
	label,
	placeholder,
	onChange,
	value,
	required,
	...props
}) {
	const Http=() => <div>HTTP://</div>;
	const getIcon=() => {
		switch(icon) {
			case 'email':
				return <EmailIcon className='absolute top-1/2 left-3 transform -translate-y-1/2 text-offgray' />;
			case 'password':
				return <PasswordIcon className='absolute top-1/2 left-3 transform -translate-y-1/2 text-offgray' />;
			case 'search':
				return <SearchIcon className='absolute top-1/2 left-3 transform -translate-y-1/2 text-offgray' />;
			case 'url':
				return <Http className='absolute top-1/2 left-3 transform -translate-y-1/2 text-offgray' />;
			default:
				return null;
		}
	}

	const input=(
		<div className='relative overflow-hidden rounded-lg hover:text-offwhite max-w-lg rounded-lg h-input hover:cursor-pointer hover:shadow-lg'>
			<span>{getIcon()}</span>
			<input
				onChange={onChange}
				value={value}
				required={required}
				{...props}
				type={type}
				name={name}
				placeholder={placeholder}
				className={`pl-10 w-full h-input bg-transparent text-offgray text-sm h-full font-bold font-apercu-bold`}
			/>
		</div>
	)

	if(label) {
		return (
			<label className='relative'>
				<span>{label}</span>

			</label>
		)
	} else {
		return input
	}

}
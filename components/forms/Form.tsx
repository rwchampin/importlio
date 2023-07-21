import { ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/forms';
import dynamic from 'next/dynamic';

const DynamicSpinner:any = dynamic(() => import('@/components/common/Spinner'));
const Primary:any = dynamic(() => import('@/components/common/buttons/Primary'));
interface Config {
	labelText: string;
	labelId: string;
	type: string;
	value: string;
	placeholder?: string;
	link?: {
		linkText: string;
		linkUrl: string;
	};
	required?: boolean;
}	

interface Props {
	config: Config[];
	isLoading: boolean;
	btnText: string;
	postFormText?: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}


export default function Form({
	config,
	isLoading,
	btnText,
	onChange,
	onSubmit,
	postFormText,

}: Props) {

	const getPlaceholder = (type:string) => {
		switch(type) {
			case 'email':
				return 'john@gmail.com';
				break;
			case 'password':
				return '********';
				break;
			default:
				return '';
				break;
		}
	}
	


	return (
		<form autoComplete='on' autoCorrect='on' method="POST" className={`flex flex-col space-y-6`} onSubmit={onSubmit}>
			{/* <input name="sub-input-info" value="" /> */}
			{config.map(input => (

				
				<Input
					key={input.labelId}
					labelId={input.labelId}
					type={input.type}
					onChange={onChange}
					value={input.value}
					link={input.link}
					required={input.required}
					placeholder={getPlaceholder(input.type)}
				>
					{input.labelText}
				</Input>
			))}



				<button
				 type="submit" 
				 disabled={isLoading}
				 >
					{isLoading ? <DynamicSpinner /> : btnText}
				</button>


				<div className="text-xs mt-2">{postFormText}</div>

		</form>
	);
}
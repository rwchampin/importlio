import { ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/forms';
import { Primary,Spinner } from '@/app/components';

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

	const getInputType = (type:string) => {
		switch(type) {
			case 'email':
				return 'email';
				break;
			case 'password':
				return 'password';
				break;
			case 'new-password':
				return 'new-password';
				break;
			case 'text':
				return 'text';
				break;
			case 'tel':
				return 'tel';
				break;
			case 'number':
				return 'number';
				break;
			case 'url':
				return 'url';
				break;
			case 'search':
				return 'search';
				break;
			case 'date':
				return 'date';
				break;
			case 'time':
				return 'time';
				break;
			case 'datetime-local':
				return 'datetime-local';
				break;

			default:
				return '';
				break;
		}

	}

	const getFormFieldAttrsByType = (type:string) => {
		let attrs = {};
		switch(type) {
			case 'email':
				attrs = {
					autoComplete: 'on',
					autoCorrect: 'on',
					autoCapitalize: 'on',
					spellCheck: 'true',
				};
				break;
			case 'password':
				attrs = {
					autoComplete: 'current-password',
					autoCorrect: 'off',
					autoCapitalize: 'off',
					spellCheck: 'false',
				};
				break;
			case 'new-password':
				attrs = {
					autoComplete: 'new-password',
					autoCorrect: 'off',
					autoCapitalize: 'off',
					spellCheck: 'false',
				};
				break;
			case 'text':
				attrs = {
					autoComplete: 'on',
					autoCorrect: 'on',
					autoCapitalize: 'on',
					spellCheck: 'true',
				};
				break;
			case 'tel':
				attrs = {
					autoComplete: 'on',
					autoCorrect: 'off',
					autoCapitalize: 'off',
					spellCheck: 'false',
				};
				break;
			case 'number':
				attrs = {
					autoComplete: 'on',
					autoCorrect: 'off',
					autoCapitalize: 'off',
					spellCheck: 'false',
				};
				break;
			case 'url':
				attrs = {
					autoComplete: 'url',
					autoCorrect: 'off',
					autoCapitalize: 'off',
					spellCheck: 'false',
				};
				break;
			case 'search':
				attrs = {
					autoComplete: 'on',
					autoCorrect: 'off',
					autoCapitalize: 'off',
					spellCheck: 'false',
				};
				break;
			case 'date':
				attrs = {
					autoComplete: 'on',
					autoCorrect: 'off',
					autoCapitalize: 'off',
					spellCheck: 'false',
				};
				break;
			case 'time':
				attrs = {
					autoComplete: 'on',
					autoCorrect: 'off',
					autoCapitalize: 'off',
					spellCheck: 'false',
				};
				break;
			case 'datetime-local':
				attrs = {
					autoComplete: 'on',
					autoCorrect: 'off',
					autoCapitalize: 'off',
					spellCheck: 'false',
				};
				break;

			default:
				attrs = {};
				break;
		}

		return attrs;

	}

	const getPlaceholder = (type:string) => {
		switch(type) {
			case 'email':
				return 'johnsmith@gmail.com';
				break;
			case 'password':
				return 'Password';
				break;
			case 'new-password':
				return 'New Password';
				break;
			case 'text':
				return 'Text';
				break;
			case 'tel':
				return 'Phone Number';
				break;

			default:
				return '';
				break;
		}

	}

 






	return (
    <form
      autoComplete="on"
      autoCorrect="on"
      method="POST"
      className={`flex flex-col space-y-6`}
      onSubmit={onSubmit}
    >
      {/* <input name="sub-input-info" value="" /> */}
      {config.map((input) => {

		return (
        <Input
          key={input.labelId}
          labelId={input.labelId}
          type={input.type}
          onChange={onChange}
          value={input.value}
          link={input.link}
          required={input.required}
          placeholder={getPlaceholder(input.type)}
          // {...getFormFieldAttrsByType(input.type)}
        >
          {input.labelText}
        </Input>
		)
		})}

      <Primary className="w-full max-w-full" variant="solid" type="submit">
        {isLoading ? <Spinner /> : btnText}
      </Primary>

      <div className="text-xs mt-2">{postFormText}</div>
    </form>
  );
}
import { ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/forms';
import { Primary,Spinner } from '@/app/components';

interface Config {
	labelText: string;
	labelId: string;
	type: string;
	value: string;
	data?: any;
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
		  data={input.data}
          link={input.link}
          required={input.required}
		  placeholder={input.placeholder}
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
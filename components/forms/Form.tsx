
import  Input  from '@/components/forms/input/Input';

import {Button} from '@nextui-org/react'

import {
	FormProps,
} from '@/lib/constants';
 
 

export default function Form({
	config,
	isLoading,
	btnText,
	onChange,
	onSubmit,
	postFormText,

}: FormProps) {

 
	return (
    <form
      autoComplete="on"
      autoCorrect="on"
      method="POST"
      className={`flex flex-col space-y-6`}
      onSubmit={onSubmit}
    >
      {/* <input name="sub-input-info" value="" /> */}
      {config.map((input:any, i:number) => {

		return (
        <Input key={i} {...input} />
		)
		})}

      <Button
        type="submit"
        className='bg-button text-offwhite w-full h-input rounded-lg flex items-center justify-center'
		>
      {btnText || "Submit"}
      </Button>

      <div className="text-xs mt-2">{postFormText}</div>
    </form>
  );
}
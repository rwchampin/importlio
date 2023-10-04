
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
  preFormText,
	postFormText,
  errors
}: FormProps) {

 
	return (

    <form
      autoComplete="on"
      autoCorrect="on"
      method="POST"
      className={`flex flex-col space-y-6`}
      onSubmit={onSubmit}
    >
        {preFormText}
      {/* <input name="sub-input-info" value="" /> */}
      {config.map((input:any, i:number) => {
        const err = errors && errors[input.name]
		return (
        <Input 
          {...input}
          onChange={onChange}
          errors={err}
          
        key={i}
          />
		)
		})}

      <Button
        isLoading={isLoading}
        type="submit"
        size="lg"
        className='bg-button text-offwhite w-full h-input rounded-lg flex items-center justify-center'
		>
      {btnText || "Submit"}
      </Button>

      <div className="text-xs mt-2">{postFormText}</div>
    </form>
  );
}

import  Input  from '@/components/forms/input/Input';
import ReactGA from "react-ga4";
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
  errors,
  formType
}: FormProps) {

  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    ReactGA.event({ 
      category: 'Form',
      action: 'Form Submission',
      label: formType
    });
    onSubmit(e);
  };
	return (

    <form
      autoComplete="on"
      autoCorrect="on"
      method="POST"
      className={`flex flex-col space-y-6`}
      onSubmit={handleSubmit}
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
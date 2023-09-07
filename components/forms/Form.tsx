
import  Input  from '@/components/forms/input/Input';
import Button from '@/app/components/buttons/Button';
import Spinner from '@/app/components/Spinner';
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
      {config.map((input:any) => {

		return (
        <Input
		  key={input.name}
		  name={input.name}
		  label={input.label}
          type={input.type}
          onChange={onChange}
          value={input.value}
		  data={input.data}
          link={input.link}
          required={input.required}
		  placeholder={input.placeholder}
		/>
		)
		})}

      <Button
	  	fullWidth={true}
	    type="submit"
		>
        {isLoading ? <Spinner /> : btnText}
      </Button>

      <div className="text-xs mt-2">{postFormText}</div>
    </form>
  );
}
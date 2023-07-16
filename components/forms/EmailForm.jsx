'use client';
import { useState } from 'react';
import { Form } from '@/components/forms';
import { toast } from 'react-toastify';

export default function EmailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

	const config = [
		{
			
			labelText: 'Email address',
			labelId: 'email',
			type: 'email',
			value: email,
			required: true,
		
		},
		 
	];

  const onSubmit = async (e) => {
    e.preventDefault();
	  setIsLoading(true);
	  const submission=JSON.stringify({email});
	  debugger
    const res = await fetch(`https://api.importlio.com/api/registrants/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
		},
	  credentials: 'include',
      body: submission,
    });
	  const data=await res.json();
	  setIsLoading(false);
	  
	  if(res.status===201) {
		  toast.success('Email submitted successfully');

		  setEmail('');
	  } else {
		  toast.error('Something went wrong');
	  }


    
    
  };

	const onChange=(e) => {
		setEmail(e.target.value);
	};

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Pre-register'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}

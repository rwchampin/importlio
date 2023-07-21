"use client";
import { useState,useEffect,useRef } from 'react';

export default function EmailInput({ field, form,placeholder }) {
    const inputRef = useRef(null);
    const [focus, setFocus] = useState(false);
    useEffect(() => {
        const input = inputRef.current;
        input.addEventListener('focus', () => setFocus(true));
        input.addEventListener('blur', () => setFocus(false));
        input.addEventListener('onChange', (e) => {
            onChange(e.target.value);
        });
        return () => {
            input.removeEventListener('focus', () => setFocus(true));
            input.removeEventListener('blur', () => setFocus(false));
        }
    }, []);

    return (

        <div className='email-input'>
        <label for="email" className="block text-sm text-gray-500 dark:text-gray-300">Email Address</label>
    
        <div className="relative flex items-center mt-2">
            <span className="absolute top-0 left-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            </span>
    
            <input ref={inputRef} type="email" placeholder="john@example.com" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
    </div>

    )
}
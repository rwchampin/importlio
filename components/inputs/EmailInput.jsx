"use client";
import { useState,useEffect,useRef } from 'react';

export default function EmailInput({ field, form, ...props }) {
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

            <div className={`relative flex items-center mt-2`}>
                <span className="absolute z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-3 input-icon">
                        <path className={`${focus ? 'focus' : ''}`} strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </span>

                <input 
                ref={inputRef} 
                type="email"
                 placeholder={placeholder || 'john@example.com'} 
                 className={`block w-full py-2.5 text-black bg-input rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 focus:placeholder:text-white placeholder:text-black`} 
                 />
            </div>

    )
}
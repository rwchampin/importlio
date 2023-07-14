
"use client"
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Primary } from 'components/common/buttons';
import { Spacer } from 'components/utils';
const EmailForm = (props) => {
  const [success, setSuccess] = useState(false);
  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

  return (

      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setSuccess(true);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div className="input-container">
              <span className="absolute z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-3 input-icon">
                  {/* <path className={`${errors.email && touched.email ? 'focus' : ''}`} strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /> */}
                </svg>
              </span>
              <Field
                type="email"
                name="email"
                placeholder="john@gmail.com"
                className={`
                  input-field
                  text-black
                  focus:placeholder:text-white
                  ${isSubmitting ? 'disabled' : ''}
                  ${errors.email && touched.email ? 'error' : ''}
                  ${success ? 'success' : ''}
                `}
                validate={validateEmail}
              />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <Spacer size={1} />
            <Primary type="submit" success={success}>
              Submit
            </Primary>
          </Form>
        )}
      </Formik>

  );
};

export default EmailForm;

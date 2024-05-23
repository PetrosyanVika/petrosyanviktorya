import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { object, string } from 'yup';

const initialValues = {
  email: '',
  password: '',
  username: '',
};

const validationSchema = object({
  email: string().email().required(),
  password: string()
    .min(8)
    .max(20)
    .matches(/^[A-Z]/, 'Password must start with an uppercase letter')
    .required(),
  username: string()
    .required()
});

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form data', values);
        }}
      >
        <Form className='App__form'>
          <div>
            <label htmlFor="username">Username</label>
            <Field type='text' id='username' name='username' />
            <ErrorMessage component='p' name='username' />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type='email' id='email' name='email'  />
            <ErrorMessage component='p' name='email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type={showPassword ? 'text' : 'password'} id='password' name='password'  />
            <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`} onClick={togglePasswordVisibility}></i>
            <ErrorMessage component='p' name='password' />
          </div>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
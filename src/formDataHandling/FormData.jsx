import React from 'react';
import { useFormik, Formik, Form, Field } from 'formik';
import { signupValidation } from './SignUpValidation';

const initialValues = {
    name: '',
    email: '',
    password: '',
    cpassword: '',
}

function FormData() {



return (
    <div className='form'>
        <Formik
        initialValues={initialValues}
        validationSchema={signupValidation}
        
        >

            {({errors}) => (
                <Form>
                    <h3>Form Data handling and validation using Formik and Yup Library</h3>
                    <br />
                <label htmlFor='name'>Name</label>
                <br />
                <Field type="text" name="name"></Field>
                <br />
                {errors.name && <small>{errors.name}</small>}
                <br />
                <label htmlFor='email'>Email</label>
                <br />
                <Field type="email" name="name"></Field>
                <br />
                {errors.email && <small>{errors.email}</small>}
                <br />
                <label htmlFor='password'>Password</label>
                <br />
                <Field type="password" name="password"></Field>
                <br />
                {errors.password && <small>{errors.password}</small>}
                <br />
                <label htmlFor='cpassword'>Confrim Password</label>
                <br />
                <Field type="cpassword" name="cpassword"></Field>
                <br />
                {errors.cpassword && <small>{errors.cpassword}</small>}
                <br />
                <button type='submit'>Submit</button>
               </Form>
            )}
        
        </Formik>
       
    </div>
);
}

export default FormData;
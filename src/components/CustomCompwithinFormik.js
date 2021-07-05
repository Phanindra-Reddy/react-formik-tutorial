import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
    name:'',
    email:'',
    channel:'',
    address:'',
}

const onSubmit = values => {
    console.log('Form Data: ', values);
}

const validationSchema = Yup.object({
    name:Yup.string().required('Required!'),
    email:Yup.string()
        .email('Invalid Email Format!')
        .required('Required!'),
    channel:Yup.string().required('Required!'),
    address:Yup.string().required('Required!'),
})

const CustomCompwithinFormik = () => {

    return (
        <>
        <p>using render props pattern</p>
        <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {onSubmit}
        >
            
            <Form>

                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field 
                       type="text" 
                       id="name" 
                       name="name" 
                    />
                    <ErrorMessage 
                        name="name" 
                        component={TextError}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field 
                       type="email" 
                       id="email" 
                       name="email" 
                    />
                    <ErrorMessage 
                        name="email" 
                    >
                        {errorMsg => <div className="error">{errorMsg}</div>}
                    </ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field 
                       type="text" 
                       id="channel" 
                       name="channel"  
                    />
                    <ErrorMessage name="channel">
                        {errorMsg => <div className="error">{errorMsg}</div>}
                    </ErrorMessage>
                </div>

                <div className="form-control">

                    <label htmlFor="address">Address</label>
                    <Field name="address">
                        {props => {
                            console.log(props);

                            const {field, form, meta} = props
                            return (
                                <div>
                                    <input type="text" id="address" {...field} />
                                    {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
                                </div>
                            )
                        }}
                    </Field>
                    
                </div>

                 <button type="submit">Submit</button>

            </Form>

        </Formik>
        </>
    )
}

export default CustomCompwithinFormik;

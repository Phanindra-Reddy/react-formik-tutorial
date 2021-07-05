import React from 'react';

import { Formik, Form, Field, ErrorMessage, FieldArray, FastField,  } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
    name:'',
    email:'',
    channel:'',
    comments:'',
    address:'',
    social:{
        facebook:'',
        twitter:'',
    },
    phoneNumbers:['',''],
    phNumbers:[''],

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
    comments:Yup.string().required('Required!'),
    address:Yup.string().required('Required!'),
   
})

const YoutubeForm = () => {

    return (
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
                   <ErrorMessage name="email" component={TextError} />
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field 
                       type="text" 
                       id="channel" 
                       name="channel"  
                    />
                    <ErrorMessage name="channel" component={TextError}/>
                </div>

                <div className="form-control">
                    <label htmlFor="comments">Comments</label>
                    <Field 
                       as="textarea" 
                       id="comments" 
                       name="comments"  
                    />
                    <ErrorMessage name="comments" component={TextError}/>
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

                {/* Nested Objects */}

                <div className="form-control">
                    <label htmlFor="facebook">Facebook Profile</label>
                    <Field 
                       type="text" 
                       id="facebook" 
                       name="social.facebook" 
                    />
                    <ErrorMessage 
                        name="facebook" 
                        component={TextError}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="twitter">Twitter Profile</label>
                    <Field 
                       type="text" 
                       id="twitter" 
                       name="social.twitter" 
                    />
                    <ErrorMessage 
                        name="twitter" 
                        component={TextError}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="primaryPh">Priamry Phone Number</label>
                    <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
                </div>

                <div className="form-control">
                    <label htmlFor="secondaryPh">Secondary Phone Number</label>
                    <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
                </div>

                <div className="form-control">
                    <label>List of Phone Number</label>
                    <FieldArray name="phNumbers" >
                        {
                            (fieldArrayProps) => {
                                console.log(fieldArrayProps);

                                const {form, push, remove} = fieldArrayProps;
                                const {values} = form
                                const {phNumbers} = values
                                return <div>
                                    {
                                        phNumbers.map((phNumber, index) => (
                                            <div key={index}>
                                                <Field name={`phNumbers[${index}]`} />
                                                { index > 0 && <button type="button" onClick={() => remove(index)}> - </button>}
                                                <button type="button" onClick={() => push('')}> + </button>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        }
                    </FieldArray>
                </div>

                 <button type="submit">Submit</button>

            </Form>

        </Formik>
    )
}

export default YoutubeForm;

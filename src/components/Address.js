import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {addressSchema} from './schemas'

export const Address = ({submit, setData, data}) => {

  return (
    <Formik
      initialValues={data}
      validationSchema={addressSchema}
      onSubmit={(values) => {
        submit(2);
        setData({...values, ...data})
      }}
    >
      <Form>
        <label htmlFor="area">Area</label> <br />
        <Field name="area" type="text" /> <br />
        <ErrorMessage name="area" /> <br />
        <label htmlFor="city">City</label> <br />
        <Field name="city" type="text" /> <br />
        <ErrorMessage name="city" /> <br />
        <label htmlFor="country">Country</label> <br />
        <Field name="country" type="text" /> <br />
        <ErrorMessage name="country" />  <br /><br />
        <span>
        <button onClick={()=> {submit((e)=> e-1)}}>Back</button>
        <button type="submit">Next</button>
        </span>       
      </Form>
    </Formik>
  );
};
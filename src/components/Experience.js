import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {experienceSchema} from './schemas'

export const Experience = ({submit, setData, data}) => {
    console.log(data)

  return (
    <Formik
      initialValues={data}
      validationSchema={experienceSchema}
      onSubmit={(values) => {
        submit(3)
        setData({...values, ...data})
      }}
    >
      <Form>
        <label htmlFor="designation">Designation</label> <br />
        <Field name="designation" type="text" /> <br />
        <ErrorMessage name="designation" /> <br />
        <label htmlFor="company">Company</label> <br />
        <Field name="company" type="text" /> <br />
        <ErrorMessage name="company" /> <br />
        <label htmlFor="duration">Duration</label> <br />
        <Field name="duration" type="text" /> <br />
        <ErrorMessage name="duration" />  <br /><br />
        <span>
        <button onClick={()=> {submit((e)=> e-1)}}>Back</button>
        <button type="submit">Next</button>
        </span>
        </Form>
    </Formik>
  );
};
import React from 'react';


export const Submission = ({ submit, data }) => {

    console.log(data)

    return (
        <div>
            <h2>Personal Information</h2> 
            <p> Name : {`${data.firstName} ${data.lastName}`} </p>
            <p> Email : {data.email}</p>
            <br />
            
            <h2> Address information</h2>
            <p> Address : {`${data.area}, ${data.city}, ${data.country}`}</p>
            <br />
            
            <h2> Job Experience </h2>
            <p> Previous Company : {data.company} </p>
            <p> Designation : {data.designation} </p>
            <p> Duration : {data.duration} </p>
            <br />
            <br />

            <button onClick={()=> {submit((e)=> e-1)}}>Back</button>
            <button type="submit" onClick={() => { submit(0) }}> Finish </button>
        </div>
    );
};
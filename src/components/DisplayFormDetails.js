import React from "react";

const DisplayFormDetails = ({ firstname, lastname, email, des, stack, library, language, date }) => {
  

  return (
    <div className="form-divs">
      <div className="form-details">

        <span>
          <strong>Fist Name: </strong>
          <p>{firstname}</p>
        </span>
        <span>
          <strong>LastName: </strong>
          <p>{lastname}</p>
        </span>
        <span>
          <strong>Email: </strong>
          <p>{email}</p>
        </span>
        <span>
          <strong>Description: </strong>
          <p>{des}</p>
        </span>
        <span>
          <strong>Course stack: </strong>
          <p>{stack}</p>
        </span>
        <span>
          <strong>Library or Framework: </strong>
          <p>{library}</p>
        </span>
        <span>
          <strong>Language: </strong>
          {language.map((i) => {
            return <p key={i}>{i}</p>;
          })}
        </span>
        <span>
          <strong>Date: </strong>
          <p>{date.toDateString()}</p>
        </span>
      </div>
    </div>
  );
};

export default DisplayFormDetails;

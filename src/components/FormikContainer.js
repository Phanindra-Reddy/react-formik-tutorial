import React, { useState } from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import DisplayFormDetails from "./DisplayFormDetails";

const Formikcontainer = () => {
  const [data, setData] = useState([]);

  const dropdownOptions = [
    { key: "Select an Option", value: "" },
    { key: "Front-End", value: "Front-End" },
    { key: "Back-End", value: "Back-End" },
    { key: "Devops and AWS", value: "Devops and AWS" },
  ];

  const radioBtnOptions = [
    { key: "react", value: "react" },
    { key: "angular", value: "angular" },
    { key: "vue", value: "vue" },
  ];

  const checkboxBtnOptions = [
    { key: "javascript", value: "javascript" },
    { key: "python", value: "python" },
    { key: "java", value: "java" },
    { key: "php", value: "php" },
    { key: "c++", value: "c++" },
    { key: "swift", value: "swift" },
  ];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    selectOption: "",
    radioOptions: "",
    checkboxOptions: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(10, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid Email Format!").required("Required!"),
    description: Yup.string().required("Required!"),
    selectOption: Yup.string().required("Required!"),
    radioOptions: Yup.string().required("Required!"),
    checkboxOptions: Yup.array().required("Required!"),
    birthDate: Yup.date().required("Required!").nullable(),
  });

  const onSubmit = (values, submitProps) => {
    //console.log("Formik Values: ", values);
    setData([values, ...data]);
    submitProps.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>

            <FormikControl
              control="input"
              type="text"
              label="Firstname"
              name="firstName"
              placeholder="Enter Your Firstname"
            />

            <FormikControl
              control="input"
              type="text"
              label="Lastname"
              name="lastName"
              placeholder="Enter Your Lastname"
            />

            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
              placeholder="Enter Your Email"
            />

            <FormikControl
              control="textarea"
              label="Description"
              name="description"
              placeholder="Enter Your Description"
            />

            <FormikControl
              control="select"
              label="Select a topic"
              name="selectOption"
              options={dropdownOptions}
            />

            <FormikControl
              control="radio"
              label="Pick a option"
              name="radioOptions"
              options={radioBtnOptions}
            />

            <FormikControl
              control="checkbox"
              label="Select options"
              name="checkboxOptions"
              options={checkboxBtnOptions}
            />

            <FormikControl
              control="date"
              label="Select Date"
              name="birthDate"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <React.Fragment>
        {data.map((i) => {
          return (
            <DisplayFormDetails
              key={i.email}
              firstname={i.firstName}
              lastname={i.lastName}
              email={i.email}
              des={i.description}
              stack={i.selectOption}
              library={i.radioOptions}
              language={i.checkboxOptions}
              date={i.birthDate}
            />
          );
        })}
      </React.Fragment>
    </>
  );
};

export default Formikcontainer;

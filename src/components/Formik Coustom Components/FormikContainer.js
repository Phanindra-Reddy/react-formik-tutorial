import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const Formikcontainer = () => {
  const dropdownOptions = [
    { key: "Select an Option", value: "" },
    { key: "Option 1", value: "Option 1" },
    { key: "Option 2", value: "Option 2" },
    { key: "Option 3", value: "Option 3" },
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
    email: "",
    description: "",
    selectOption: "",
    radioOptions: "",
    checkboxOptions: [],
    birthDate:null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required!"),
    description: Yup.string().required("Required!"),
    selectOption: Yup.string().required("Required!"),
    radioOptions: Yup.string().required("Required!"),
    checkboxOptions: Yup.array().required("Required!"),
    birthDate:Yup.date().required("Required!").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Formik Values: ", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
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
  );
};

export default Formikcontainer;

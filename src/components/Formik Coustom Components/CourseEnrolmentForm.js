import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function CourseEnrolmentForm() {
  const dropdownOptions = [
    { key: "Select an Option", value: "" },
    { key: "Front-End", value: "Front-End" },
    { key: "Back-End", value: "Back-End" },
    { key: "DevOps and AWS", value: "DevOps and AWS" },
  ];

  const checkboxBtnOptions = [
    { key: "javascript", value: "javascript" },
    { key: "python", value: "python" },
    { key: "java", value: "java" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format!").required("Required!"),
    bio: Yup.string().required("Required!"),
    course: Yup.string().required("Required!"),
    skills: Yup.array().required("Required!"),
    courseDate: Yup.date().required("Required!").nullable(),
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
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />

            <FormikControl
              control="textarea"
              label="Description"
              name="bio"
              placeholder="Enter Your Description"
            />

            <FormikControl
              control="select"
              label="Select a Course"
              name="course"
              options={dropdownOptions}
            />

            <FormikControl
              control="checkbox"
              label="Select Skills"
              name="skills"
              options={checkboxBtnOptions}
            />

            <FormikControl
              control="date"
              label="Select Date"
              name="courseDate"
            />

            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>

          </Form>
        );
      }}
    </Formik>
  );
}

export default CourseEnrolmentForm;

import React from "react";
import "./App.css";

import { theme, ThemeProvider } from "@chakra-ui/react";

//import YoutubeForm from './components/YoutubeForm';
//import CustomCompwithinFormik from './components/CustomCompwithinFormik';
//import FormContainer from './components/Formik Coustom Components/FormikContainer';
import LoginForm from './components/Formik Coustom Components/LoginForm';
//import RegistrationForm from "./components/Formik Coustom Components/RegistrationForm";
//import CourseEnrolmentForm from "./components/Formik Coustom Components/CourseEnrolmentForm";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <YoutubeForm/> */}

        {/* <CustomCompwithinFormik/> */}

        {/* <FormContainer /> */}

        <LoginForm />

        {/* <RegistrationForm/> */}

        {/* <CourseEnrolmentForm /> */}



      </div>
    </ThemeProvider>
  );
}

export default App;

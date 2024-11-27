import React from "react";
import { RegisterIcon, ShackwiseLogo } from "../../../config/Images";
import { Link, useNavigate, useParams } from "react-router-dom";
import TextInput from "../../../components/Shared/TextInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { userType } = useParams();

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    phoneNumber: Yup.string()
      .length(11, "Phone Number must be 11 digits")
      .nullable(),
    email: Yup.string()
      .email("Valid email is required")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Handle form submission
  const handleSubmit = (values: any) => {
    // Form is valid, proceed to next step (e.g., navigate or submit data)
    console.log(values); // Log values for debugging
    return;
    navigate("/login");
  };

  return (
    <div className="col-lg-12 text-center">
      <div className="login">
        <div className="login-header text-left p-4">
          <img
            src={ShackwiseLogo}
            style={{ width: "20%" }}
            className="logo-left"
            alt="Shackwise Logo"
          />
        </div>
        <div className="login-form col-lg-6 col-sm-12 mt-2">
          <div className="login-logo">
            <img src={RegisterIcon} className="logo" alt="Register Icon" />
          </div>
          <Formik
            initialValues={{
              fullName: "",
              phoneNumber: "",
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              handleChange,
              setFieldValue,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isSubmitting,
              touched,
            }) => (
              <Form>
                <Field name="fullName">
                  {({ field, value, error }) => (
                    <TextInput
                      value={value}
                      setValue={(e) => setFieldValue("fullName", e)}
                      title="Full Name"
                      placeHolder="Username"
                      {...field}
                      error={errors.fullName}
                      name="fullName"
                    />
                  )}
                </Field>

                <Field name="phoneNumber">
                  {({ field, value }) => (
                    <TextInput
                      value={value}
                      setValue={(e) => setFieldValue("phoneNumber", e)}
                      title="Phone Number (Optional)"
                      placeHolder="Phone Number"
                      {...field}
                      isNumericField={true}
                      maxLength={11}
                      error={errors.phoneNumber}
                    />
                  )}
                </Field>

                <Field name="email">
                  {({ field, value }) => (
                    <TextInput
                      title="Email address"
                      value={value}
                      setValue={(e) => setFieldValue("email", e)}
                      placeHolder="Email"
                      inputMode="email"
                      {...field}
                      error={errors.email}
                    />
                  )}
                </Field>

                <Field name="password">
                  {({ field, value }) => (
                    <TextInput
                      value={value}
                      setValue={(e) => setFieldValue("password", e)}
                      title="Create Password"
                      placeHolder="Password"
                      {...field}
                      isPasswordField={true}
                      error={errors.password}
                    />
                  )}
                </Field>

                <br />
                <input
                  type="submit"
                  value="Sign Up"
                  className="login-button mb-3"
                  onClick={() => handleSubmit()}
                  // disabled={isSubmitting} // Disable button while submitting
                />
                <br />
              </Form>
            )}
          </Formik>
          <Link to="/login" className="login-button-text">
            Login
          </Link>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Register;

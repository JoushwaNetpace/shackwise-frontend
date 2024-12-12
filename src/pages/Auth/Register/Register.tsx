import React, { useState } from "react";
import {
  RegisterIcon,
  ShackwiseLogo,
  SuccessIcon,
} from "../../../config/Images";
import { Link, useParams } from "react-router-dom";
import TextInput from "../../../components/Shared/TextInput";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../../store/slices/auth/authActions";
import toast from "react-hot-toast";
import { registerValidationSchema } from "../../../constants/formValidationSchemas";
import { AppDispatch } from "../../../store/store";

const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userType } = useParams();
  const [successPayload, setSuccessPayload] = useState<{
    success: boolean;
    data?: object;
    message: string;
  }>();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  // Handle form submission
  const handleSubmit = async (values: any) => {
    try {
      const { payload }: any = await dispatch(register(values));
      toast.success(payload.message);
      setSuccessPayload(payload);
    } catch (error: any | unknown) {
      toast.error(error.message);
    }
  };

  return (
    <div className="col-lg-12 text-center">
      <div className="login">
        <div className={`login-header p-4 ${!successPayload && "text-left"}`}>
          <img
            src={ShackwiseLogo}
            style={{ width: "20%" }}
            className="logo-left"
            alt="Shackwise Logo"
          />
        </div>
        <div className="login-form col-lg-6 col-sm-12 mt-2">
          {!successPayload ? (
            <>
              <div className="login-logo">
                <img src={RegisterIcon} className="logo" alt="Register Icon" />
              </div>
              <Formik
                initialValues={{
                  name: "",
                  phoneNo: "",
                  role: userType,
                  email: "",
                  password: "",
                  username: "",
                  confirmPassword: "",
                }}
                validationSchema={registerValidationSchema}
                onSubmit={handleSubmit}
              >
                {({ setFieldValue, isSubmitting, errors }) => (
                  <Form>
                    <Field name="username">
                      {({ field, value }) => (
                        <TextInput
                          value={value}
                          setValue={(e) => setFieldValue("username", e)}
                          title="Username"
                          placeHolder="Username"
                          {...field}
                          error={errors.username}
                        />
                      )}
                    </Field>
                    <Field name="name">
                      {({ field, value }) => (
                        <TextInput
                          value={value}
                          setValue={(e) => setFieldValue("name", e)}
                          title="Full Name"
                          placeHolder="Full name"
                          {...field}
                          error={errors.name}
                        />
                      )}
                    </Field>
                    <Field name="phoneNo">
                      {({ field, value }) => (
                        <TextInput
                          value={value}
                          setValue={(e) => setFieldValue("phoneNo", e)}
                          title="Phone Number (Optional)"
                          placeHolder="Phone Number"
                          {...field}
                          isNumericField={true}
                          maxLength={11}
                          error={errors.phoneNo}
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
                          isPasswordVisible={isPasswordVisible}
                          setIsPasswordVisible={setIsPasswordVisible}
                        />
                      )}
                    </Field>
                    <Field name="confirmPassword">
                      {({ field, value }) => (
                        <TextInput
                          value={value}
                          setValue={(e) => setFieldValue("confirmPassword", e)}
                          title="Confirm Password"
                          placeHolder="Confirm Password"
                          {...field}
                          isPasswordField={true}
                          error={errors.confirmPassword}
                          isPasswordVisible={isPasswordVisible}
                          setIsPasswordVisible={setIsPasswordVisible}
                        />
                      )}
                    </Field>
                    <div className="input-group-append">
                      <div
                        className="cursor-pointer"
                        style={{ cursor: "pointer" }}
                      >
                        <input
                          type="checkbox"
                          id="show-password"
                          onChange={togglePasswordVisibility}
                          checked={isPasswordVisible}
                          style={{
                            width: "0.8rem",
                            height: "0.8rem",
                            marginRight: "0.5rem",
                          }}
                        />
                        <label style={{ fontSize: "0.875rem" }}>
                          Show Password
                        </label>
                      </div>
                    </div>
                    <br />
                    <input
                      type="submit"
                      value="Sign Up"
                      className="login-button mb-3"
                      disabled={isSubmitting} // Disable button while submitting
                    />
                    <br />
                  </Form>
                )}
              </Formik>
              <Link to="/login" className="login-button-text">
                Login
              </Link>
            </>
          ) : (
            <>
              <div className="login-logo">
                <img src={SuccessIcon} className="logo" alt="Register Icon" />
              </div>
              <h3 className="text-success fs-5 text-center">
                {
                  "User has been registered successfully. Please check your email"
                }
              </h3>
            </>
          )}
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import { LoginIcon, ShackwiseLogo } from "../../../config/Images";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../../store/slices/auth/authActions"; // Replace with your actual login action
import toast from "react-hot-toast";
import { loginValidationSchema } from "../../../constants/formValidationSchemas"; // Define a schema for login validation
import TextInput from "../../../components/Shared/TextInput"; // Reuse the TextInput component
import { AppDispatch } from "../../../store/store";
import { storeTokenInCookie } from "../../../utils/CookieUtils";
import { fetchUser } from "../../../store/slices/user/userActions";

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSubmit = async (values: any) => {
    try {
      const response: any = await dispatch(login(values)).unwrap();
      // return;
      if (response.success) {
        toast.success(response.message);
        await storeTokenInCookie(response.data.token);

        await dispatch(fetchUser()).unwrap();
      }
    } catch (error: any) {
      console.log("error login screen??", error.message || error);
      toast.error(error.message || "An error occurred during login");
    }
  };

  return (
    <div className="container">
      <div className="row m-0">
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
                <img src={LoginIcon} className="logo" alt="Login Icon" />
              </div>
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                }}
                validationSchema={loginValidationSchema}
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
                          name="username"
                        />
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, value }) => (
                        <TextInput
                          value={value}
                          setValue={(e) => setFieldValue("password", e)}
                          title="Password"
                          placeHolder="Password"
                          {...field}
                          isPasswordField={true}
                          error={errors.password}
                          name="password"
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
                      value="Login"
                      className="login-button mb-3"
                      disabled={isSubmitting}
                    />
                    <br />
                  </Form>
                )}
              </Formik>
              <Link to="/register" className="login-button-text">
                Register
              </Link>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import { ShackwiseLogo, SuccessAnimationIcon } from "../../../config/Images";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { verifyEmailAction } from "../../../store/slices/auth/authActions";
import LottieAnimation from "../../../components/Shared/LottieAnimation";

const VerifyEmail: React.FC = () => {
  const { token } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [verificationStatus, setVerificationStatus] = useState<boolean | null>(
    false
  );
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        if (token) {
          const response: any = await dispatch(verifyEmailAction({ token }));
          if (response?.payload?.message) {
            setVerificationStatus(response.payload.success);
            setMessage(response.payload.message);
          } else {
            setVerificationStatus(false);
            setMessage("Verification failed. Please try again.");
          }
        }
      } catch (error) {
        setVerificationStatus(false);
        setMessage("An error occurred. Please try again.");
      }
    };

    verifyEmail();
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row m-0">
        <div className="col-lg-12 text-center">
          <div className="login">
            <div className="login-header  p-4">
              <img
                src={ShackwiseLogo}
                style={{ width: "20%" }}
                className="logo-left"
                alt="Shackwise Logo"
              />
            </div>
            <div className="login-form text-center  col-lg-10 col-sm-12 mt-2">
              {verificationStatus ? (
                <>
                  <div className="d-flex justify-content-center align-center  p-4">
                    <LottieAnimation
                      animationData={SuccessAnimationIcon}
                      width={250}
                      height={250}
                    />
                  </div>
                  <h3 className="text-success text-center fs-4">{message}</h3>
                  <Link to="/login" className="login-button-text">
                    Go to Login
                  </Link>
                </>
              ) : (
                <h3 className="text-danger fs-5">{message}</h3>
              )}
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

export default VerifyEmail;

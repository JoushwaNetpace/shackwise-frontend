// src/components/ModalList.tsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShowHowItWorks,
  selectShowInviteConnect,
  selectShowShareCompare,
} from "../../store/slices/modal/modalSelectors";
import { CloseModalIcon } from "../../config/Images";
import { ToggleSelector } from "../Shared/ToggleSelector";
import {
  changeHowItWorksModalAction,
  changeInviteConnectModalAction,
  changeShareCompareModalAction,
} from "../../store/slices/modal/modalActions";
import { AppDispatch } from "../../store/store";
import { RateModeEnum } from "../../store/types/stateTypes";
import {
  setAcceptInvite,
  setRatingModeAction,
} from "../../store/slices/user/userActions";
import { selectAcceptInvite } from "../../store/slices/user/userSelectors";

export const ModalList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const showShareCompare = useSelector(selectShowShareCompare);
  const showHowItWorks = useSelector(selectShowHowItWorks);
  const showInviteConnect = useSelector(selectShowInviteConnect);
  const acceptInvite = useSelector(selectAcceptInvite);

  const [selectedMode, setSelectedMode] = useState<RateModeEnum>("SHARE");

  const handleSetUserRatingMode = async () => {
    dispatch(setRatingModeAction(selectedMode));
    dispatch(setAcceptInvite(!acceptInvite));

    dispatch(changeShareCompareModalAction(false));
  };
  return (
    <>
      {showShareCompare && (
        <div className="overlay">
          <div
            className="modal-wrap col-lg-4 col-sm-10"
            style={{ height: "auto", borderRadius: "10px" }}
          >
            <button
              aria-label="Close"
              className="close-modal"
              onClick={() => dispatch(changeShareCompareModalAction(false))}
            >
              <img src={CloseModalIcon} alt="Close Modal" />
            </button>
            <div className="model-inner-window" style={{ height: "auto" }}>
              <div className="modal-header justify-content-center">
                <h3>Share / Compare</h3>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <ToggleSelector
                      selectedMode={selectedMode}
                      setSelectedMode={setSelectedMode}
                    />
                    <br />
                    <div>
                      <p>
                        <b className="m-0">Share mode</b> lets you and your
                        partner work together by entering information into the
                        same form, creating a seamless and unified experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <div className="text-center mt-4">
                <input
                  type="button"
                  value="Submit"
                  className="login-button"
                  onClick={handleSetUserRatingMode}
                />
                <br />
                <a
                  href="#"
                  className="login-button-text mt-3"
                  onClick={() => dispatch(changeShareCompareModalAction(false))}
                >
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {showInviteConnect && (
        <div className="overlay">
          <div
            className="modal-wrap col-lg-4 col-sm-10"
            style={{ height: "auto", borderRadius: "10px" }}
          >
            <button
              aria-label="Close"
              className="close-modal"
              onClick={() => dispatch(changeInviteConnectModalAction(false))}
            >
              <img src={CloseModalIcon} alt="Close Modal" />
            </button>
            <div className="model-inner-window" style={{ height: "auto" }}>
              <div className="modal-header justify-content-center">
                <h3>Connect with Partner / Agent</h3>
              </div>

              <div className="login mt-0">
                <div className="login-form mt-0">
                  <h3>
                    Full Name <span>*</span>
                  </h3>
                  <input type="text" placeholder="Username" />
                  <br />

                  <h3>
                    Email address <span>*</span>
                  </h3>
                  <input type="text" placeholder="Email" />
                  <br />
                  <div className="d-flex justify-content-between align-items-center forgot-wrap">
                    <h3>Select</h3>
                  </div>
                  <select name="" id="" className="customSelect">
                    <option value="">Select item</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                  </select>

                  <br />
                  <div className="text-center mt-5">
                    <input
                      type="button"
                      value="Submit"
                      className="login-button"
                      onClick={() =>
                        dispatch(changeInviteConnectModalAction(false))
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showHowItWorks && (
        <div className="overlay">
          <div className="modal-wrap">
            <button
              aria-label="Close"
              className="close-modal"
              onClick={() => dispatch(changeHowItWorksModalAction(false))} // Close the modal
            >
              <img src={CloseModalIcon} alt="" />
            </button>
            <div className="model-inner-window">
              <div className="modal-header">
                <h3>Why use ShackWise?</h3>
              </div>
              <p>
                ShackWise is here to make your home-buying journey smoother and
                more efficient. When you're juggling multiple options—whether
                browsing online or visiting homes in person—it’s easy to feel
                overwhelmed by all the different features, amenities, and
                factors each home has to offer. That’s where ShackWise comes in.
                By helping you weigh your personal priorities and rate the
                characteristics of each home, ShackWise creates a personalized
                score for every option. This makes it much simpler to see which
                homes stand out as the best fit for you. If you're buying with a
                partner, ShackWise also lets you see how your preferences align
                or differ. And whether you’re buying solo or with someone else,
                your agent will be able to view your preferences too, allowing
                them to help you secure your dream home faster and more
                effectively.
              </p>
              <b>Using Notes</b>
              <p>
                In addition to providing your ratings, we highly recommend
                taking advantage of the notes feature for each characteristic.
                These notes are incredibly helpful for your agent to fully
                understand your needs and the reasons behind your ratings. If
                you’re buying with a partner, adding notes becomes even more
                important. It allows you both to see where your priorities align
                and where they may differ, offering a clearer picture of each
                other's preferences. This way, you can openly discuss any
                differences and work through them together, ensuring you’re both
                on the same page throughout the process. For example, two
                partners might both assign the same importance to the kitchen,
                suggesting they are aligned. But by adding notes, you may find
                that one partner prioritizes upgraded appliances, while the
                other values space for a family-sized dining table. These
                details help clarify your true preferences and make it easier to
                find a home that meets both of your needs.
              </p>
              <b>How was the final score calculated?</b>
              <p>
                When you set priority levels for each feature, you're
                establishing the maximum score a home can achieve. Once you rate
                the characteristics of each house, those ratings are combined
                with the importance you’ve assigned to each one. The final score
                for each home is then calculated as a percentage of that maximum
                possible score. This helps you easily see how well each home
                aligns with your priorities.
              </p>
              <b>Share vs. Compare Mode</b>
              <p>
                Share mode lets you and your partner work together by entering
                information into the same form, creating a seamless and unified
                experience. This way, both of your inputs are captured in one
                place, making the decision-making process smoother and more
                collaborative. Compare mode allows each of you to enter your
                information separately and then compare your priorities and
                ratings side by side. It makes it easy to quickly see where you
                and your partner are on the same page and where your preferences
                differ, helping you focus on what matters most to both of you.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

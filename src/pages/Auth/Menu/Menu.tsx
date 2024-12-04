import React, { useEffect, useRef, useState } from "react";
import { CloseModalIcon, ShackwiseLogo } from "../../../config/Images";
import { Link } from "react-router-dom";
import Modal from "../../../components/common/Modal";

const Menu: React.FC = () => {
  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHowSWorksModalOpen, setisHowSWorksModalOpen] = useState(false);
  // Function to toggle the modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const howItWorksModalRef = useRef(null);

  // const { handleEvent } = useClickOutside(
  //   howItWorksModalRef,
  //   (isOutside, event) => {
  //     if (!isOutside) {
  //       setisHowSWorksModalOpen(false); // Close dropdown when click outside
  //     }
  //   }
  // );
  // const { handleEvent: handleEventInvite } = useClickOutside(
  //   InviteModalRef,
  //   (isOutside, event) => {
  //     if (!isOutside) {
  //       setIsModalOpen(false); // Close dropdown when click outside
  //     }
  //   }
  // );

  useEffect(() => {
    const handleEvent = (event: MouseEvent) => {
      if (
        howItWorksModalRef.current &&
        !howItWorksModalRef.current.contains(event.target as Node)
      ) {
        setisHowSWorksModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleEvent);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleEvent);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="row m-0 ">
          <div className="col-lg-12 text-center ">
            <div className="login ">
              <div className="login-form col-lg-6 col-sm-12 mt-2 d-flex justify-content-center align-items-center flex-column">
                <div className="login-logo mt-5">
                  <img
                    src={ShackwiseLogo}
                    className="logo"
                    alt="Shackwise Logo"
                  />
                </div>

                <div className="menu-btns-wrap col-lg-8">
                  <Link to="/menu/set-priorities" className="btn-round">
                    Set My Priorities
                  </Link>
                  <Link
                    to="#"
                    className="btn-round"
                    onClick={() => setisHowSWorksModalOpen(true)}
                  >
                    See How ShackWise Works
                  </Link>
                  <Link to="/home/search-property" className="btn-round ">
                    Rate a Home
                  </Link>
                  <Link to="/home/leaderboard" className="btn-round ">
                    View the Leaderboard
                  </Link>
                  {/* Button to open the modal */}
                  <Link to="#" className="btn-round" onClick={toggleModal}>
                    Invite Partner / Agent
                  </Link>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional rendering of the invite connect overlay modal */}
      {/* {isModalOpen && (
        <div className="overlay" ref={InviteModalRef}>
          <div
            className="modal-wrap col-lg-4 col-sm-10"
            style={{ height: "auto", borderRadius: "10px" }}
          >
            <button
              aria-label="Close"
              className="close-modal"
              onClick={toggleModal} // Close the modal
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
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}

      <Modal
        headerText={"Connect with Partner / Agent"}
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
      >
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
              <input type="button" value="Submit" className="login-button" />
            </div>
          </div>
        </div>
      </Modal>

      {/* Conditional rendering of the how shackwise work overlay modal */}

      {isHowSWorksModalOpen && (
        <div className="overlay" ref={howItWorksModalRef}>
          <div className="modal-wrap">
            <button
              aria-label="Close"
              className="close-modal"
              onClick={() => setisHowSWorksModalOpen(false)} // Close the modal
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

export default Menu;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PriorityOption from "../../../components/Shared/PriorityOption";
import { priortiesList } from "../../../data/data";
import { AppDispatch } from "../../../store/store";
import { useDispatch } from "react-redux";
import {
  createUserPriority,
  updateUserPriority,
} from "../../../store/slices/priority/priorityActions";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/slices/user/userSelectors";
import { selectUserPriority } from "../../../store/slices/priority/prioritySelectors";
import { PriorityPayload } from "../../../store/types/stateTypes";

const SetPriorities: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const userData: any = useSelector(selectUser);
  const userPriorityData: any = useSelector(selectUserPriority);
  const [priorities, setPriorities] = useState<any>({
    userId: userData._id,
    affordability: { rating: 0, note: "" },
    listPMarketV: { rating: 0, note: "" },
    location: { rating: 0, note: "" },
    kitchenSize: { rating: 0, note: "" },
    kitchenDesign: { rating: 0, note: "" },
    masterBedroom: { rating: 0, note: "" },
    masterBathroom: { rating: 0, note: "" },
    secondaryBedroom: { rating: 0, note: "" },
    secondaryBathroom: { rating: 0, note: "" },
    livingEntertainment: { rating: 0, note: "" },
    basement: { rating: 0, note: "" },
    outdoorYardSpace: { rating: 0, note: "" },
    parkingGarage: { rating: 0, note: "" },
    overallCondition: { rating: 0, note: "" },
  });

  const handleChange = (name: string, field: "rating" | "note", value: any) => {
    setPriorities((prev: any) => ({
      ...prev,
      [name]: { ...prev[name], [field]: value },
    }));
  };
  const handleSubmit = async () => {
    let response: any;
    try {
      if (!userPriorityData) {
        response = await dispatch(createUserPriority(priorities)).unwrap();
      } else {
        const updatedPriorities: PriorityPayload = {
          priorityId: userPriorityData?._id,
          ...priorities,
        };
        response = await dispatch(
          updateUserPriority(updatedPriorities)
        ).unwrap();
      }
      if (response.success) {
        toast.success(response.message);

        navigate("/home");
      }
    } catch (error: any) {
      console.log("error set priorities screen??", error);
      toast.error(error.message || "An error occurred during priorities");
    }
  };

  useEffect(() => {
    if (userPriorityData) {
      setPriorities((prev: any) => ({
        ...prev,
        ...userPriorityData,
      }));
    }

    // Cleanup (if needed)
    return () => {
      // Any cleanup logic goes here
      console.log("Cleanup executed for SetPriorities component.");
    };
  }, [userPriorityData]);
  return (
    <div className="container">
      <div className="row m-0">
        <div className="col-lg-12">
          <div className="login proirties-wrap">
            <br />
            <div className="login-header mt-4">
              <h1>Set My Home Priorities</h1>
              <h3>How important is each characteristic to you?</h3>
            </div>
            <div className="login-form col-lg-10 col-sm-12 mt-2 d-flex flex-column">
              {priortiesList.map((pLItem: any) => {
                return (
                  <PriorityOption
                    key={pLItem.name}
                    label={pLItem.label}
                    placeHolder={pLItem.placeHolder}
                    mode="priority"
                    name={pLItem.name}
                    onRatingChange={(value: number) =>
                      handleChange(pLItem.name, "rating", value)
                    }
                    value={userPriorityData[`${pLItem.name}`]?.rating}
                    onNoteChange={(value: string) =>
                      handleChange(pLItem.name, "note", value)
                    }
                  />
                );
              })}

              <div className="text-center col-lg-4 m-auto mt-5">
                <input
                  type="button"
                  value="Submit"
                  className="login-button"
                  onClick={() => {
                    handleSubmit();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPriorities;

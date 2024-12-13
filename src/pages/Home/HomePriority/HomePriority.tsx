import React, { useEffect, useState } from "react";
import { priortiesList } from "../../../data/data";
import PriorityOption from "../../../components/Shared/PriorityOption";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/slices/user/userSelectors";
import { selectUserPriority } from "../../../store/slices/priority/prioritySelectors";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import toast from "react-hot-toast";
import { updateUserPriority } from "../../../store/slices/priority/priorityActions";
import { PriorityPayload } from "../../../store/types/stateTypes";

export const HomePriority: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userData: any = useSelector(selectUser);
  const userPriorityData: any = useSelector(selectUserPriority);
  const [priorities, setPriorities] = useState<PriorityPayload>({
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

  useEffect(() => {
    if (userPriorityData) {
      setPriorities((prev: any) => ({
        ...prev,
        ...userPriorityData,
      }));
    }

    // Cleanup (if needed)
    return () => {
      console.log("Cleanup executed for HomePriority component.");
    };
  }, [userPriorityData]);

  const handleChange = (name: string, field: "rating" | "note", value: any) => {
    setPriorities((prev: any) => ({
      ...prev,
      [name]: { ...prev[name], [field]: value },
    }));
  };

  const handleSubmit = async () => {
    let response: any;
    try {
      const updatedPriorities: PriorityPayload = {
        priorityId: userPriorityData?._id,
        ...priorities,
      };
      response = await dispatch(updateUserPriority(updatedPriorities)).unwrap();

      if (response.success) {
        toast.success(response.message);
        // navigate("/home");
      }
    } catch (error: any) {
      console.error("Error during priority submission:", error);
      toast.error(
        error.message || "An error occurred while saving priorities."
      );
    }
  };

  return (
    <div className="container">
      <div className="row m-0">
        <div className="col-lg-8 col-sm-12 m-auto mt-5">
          <div className="mt-4 mb-5">
            <h1 className="text-center">Set My Home Priorities</h1>
            <h3 className="text-center">
              How important is each characteristic to you?
            </h3>
            {priortiesList.map((pLItem: any, index: number) => {
              return (
                <PriorityOption
                  key={index}
                  label={pLItem.label}
                  placeHolder={pLItem.placeHolder}
                  mode="priority"
                  name={pLItem.name}
                  value={userPriorityData[`${pLItem.name}`]?.rating}
                  onRatingChange={(value: number) =>
                    handleChange(pLItem.name, "rating", value)
                  }
                  onNoteChange={(value: string) =>
                    handleChange(pLItem.name, "note", value)
                  }
                />
              );
            })}
          </div>
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
  );
};

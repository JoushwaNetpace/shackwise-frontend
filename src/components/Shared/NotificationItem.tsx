import React, { useState } from "react";
import { UserPic } from "../../config/Images";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import {
  selectAcceptInvite,
  selectRatingMode,
} from "../../store/slices/user/userSelectors";
import {
  setAcceptInvite,
  setRatingModeAction,
} from "../../store/slices/user/userActions";
import { INotificationDocument } from "../../types/types";

const NotificationItem: React.FC<INotificationDocument> = ({
  body,
  connectId,
  notificationType,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const acceptInvite = useSelector(selectAcceptInvite);
  const ratingMode = useSelector(selectRatingMode);

  const [showDropdown, setShowDropdown] = useState(false);

  // Check if the notification type requires action buttons
  const isActionableType = [
    "CONNECTION_REQUEST",
    "COMPARE_REQUEST",
    "SHARE_REQUEST",
  ].includes(notificationType);

  // Determine the avatar to display
  const avatarSrc =
    isActionableType && connectId?.senderId?.avatar
      ? connectId.senderId.avatar
      : UserPic;

  // Toggle dropdown visibility
  const handleAccept = () => {
    dispatch(setRatingModeAction("SHARE"));
    dispatch(setAcceptInvite(!acceptInvite));
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <li className="notification-box">
      <div className="row-info">
        <div className="text-left">
          <div className="userpic-wrap">
            <img
              src={avatarSrc}
              alt="User Avatar"
              className="w-100 rounded-circle"
            />
          </div>
        </div>

        <div className="flex-1">
          <strong className="text-info">
            {body ||
              `Rony sent you a ${
                ratingMode === "SHARE" ? "Share" : "Compare"
              } request`}
          </strong>
        </div>

        {isActionableType && (
          <div>
            <a
              href="#"
              className="accept-text hover:text-underline"
              onClick={handleAccept}
            >
              {isActionableType && connectId.status == "PENDING"
                ? " Accept"
                : ""}
            </a>
          </div>
        )}
      </div>
    </li>
  );
};

export default NotificationItem;

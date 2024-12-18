import { getToken } from "firebase/messaging";
import { messaging } from "../config/firebaseConfig";

export const requestPermission = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY,
    });
    if (token) {
      console.log("Token generated:", token);

      return token;
      // Send this token to your server to store it for later use
    } else {
      console.log("No registration token available.");
    }
  } catch (err) {
    console.error("Error getting token:", err);
  }
};

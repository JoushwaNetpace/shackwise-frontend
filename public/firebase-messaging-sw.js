importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Use environment variables injected via Webpack
const firebaseConfig = {
  apiKey: "AIzaSyCZLpbM7r6aHaSsp0eQBmF9dKs9aCqVVF0",
  authDomain: "shackwise-staging.firebaseapp.com",
  projectId: "shackwise-staging",
  storageBucket: "shackwise-staging.firebasestorage.app",
  messagingSenderId: "600411675883",
  appId: "1:600411675883:web:a09cd2a8d1a5a29db8b2ae",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging(app);

// messaging.onBackgroundMessage((payload) => {
//   console.log("Received background message ", payload);

//   const notification = payload?.data;

//   const notificationOptions = {
//     body: notification?.body,
//     icon: "./vite.svg",
//     data: {
//       url: "http://localhost:5173/home",
//     },
//   };

//   self.registration.showNotification(notification?.title, notificationOptions);

//   self.addEventListener("notificationclick", function (event) {
//     const url = event?.notification?.data?.url;
//     event.waitUntil(
//       clients
//         .matchAll({ type: "window", includeUncontrolled: true })
//         .then(function (windowClients) {
//           if (clients.openWindow) {
//             return clients.openWindow(url);
//           }
//         })
//     );
//   });
// });

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import WeightliftingCourse from "./routes/weightliftingCourse";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP8XT5sohu8q5H3yhiiLXsQkBAEDx11bw",
  authDomain: "acceleration-learn.firebaseapp.com",
  projectId: "acceleration-learn",
  storageBucket: "acceleration-learn.appspot.com",
  messagingSenderId: "207523250401",
  appId: "1:207523250401:web:1ec7035a6a29c44102b7a0",
  measurementId: "G-HB63G5FYL2"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/weightlifting-course",
    element: <WeightliftingCourse />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
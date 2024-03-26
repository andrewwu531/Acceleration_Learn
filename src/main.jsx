import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/Root"; 
import ErrorPage from "./error-page";
import WeightliftingCourse from "./routes/WeightliftingCourse";
import EnglishCourse from "./routes/EnglishCourse";
import Footer from "./routes/FooterContents";

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
  {
    path: "/english-course",
    element: <EnglishCourse />,
  },
  {
    path: "/footer-contents",
    element: <Footer />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
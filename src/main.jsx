import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Login from "./routes/Login";
import WeightliftingCourse from "./routes/weightliftingCourse";
import EnglishCourse from "./routes/EnglishCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/weightlifting-course",
    element: <WeightliftingCourse />,
  },
  {
    path: "/english-course",
    element: <EnglishCourse />,
  },
  // {
  //   path: "/footer-contents",
  //   element: <Footer />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

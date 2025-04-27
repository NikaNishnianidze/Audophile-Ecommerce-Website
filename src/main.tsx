import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/Home";
import EcommerceProvider from "./context/EcommerceProvider";
import Headphones from "./components/Headphones";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/headphones",
        element: <Headphones />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EcommerceProvider>
      <RouterProvider router={router} />
    </EcommerceProvider>
  </StrictMode>
);

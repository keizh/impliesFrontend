import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import Store from "./App/store.js";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import AuthPage from "./Pages/AuthPage.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signup" />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/auth",
    element: (
      <ProtectedRoute>
        <AuthPage />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

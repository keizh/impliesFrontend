/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateNameEmail,
  updateTaskCompleted,
} from "../Features/UserSlice/UserSlice";

function ProtectedRoute({ children }) {
  let token = localStorage.getItem("ImpliesSolution");
  const navigate = useNavigate();
  let { taskCompleted } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (taskCompleted === "JWT_ISSUE") {
      localStorage.removeItem("ImpliesSolution");
      dispatch(updateTaskCompleted(""));
      navigate("/login", {
        replace: true,
      });
    }
  }, [taskCompleted]);

  const checkingFN = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/JWT`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const resData = await res.json();

    if (!res.ok) {
      setChecking(false);
      setChecked(false);
    } else {
      setChecking(false);
      setChecked(true);
      dispatch(updateNameEmail(resData.decoded));
    }
    console.log(`Protected route`, resData);
  };

  if (!token) {
    return <Navigate to="/login" replace />;
  } else {
    checkingFN();
    if (checking == true) {
      return (
        <div className="h-screen w-screen">
          <p>Loading ...</p>
        </div>
      );
    } else if (checking == false && checked == false) {
      return <Navigate to="/login" replace />;
    } else if (checking == false && checked == true) {
      return <>{children}</>;
    }
  }
}

export default ProtectedRoute;

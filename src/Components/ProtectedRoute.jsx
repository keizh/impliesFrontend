/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  let token = localStorage.getItem("ImpliesSolution");
  const [checking, setChecking] = useState(true);
  const [checked, setChecked] = useState(false);

  const checkingFN = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/JWT`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    if (!res.ok) {
      setChecking(false);
      setChecked(false);
    } else {
      setChecking(false);
      setChecked(true);
    }
    const resData = await res.json();
    console.log(`Protected route`, resData);
  };

  if (!token) {
    return <Navigate to="/login" />;
  } else {
    checkingFN();
    if (checking == true) {
      return (
        <div className="h-screen w-screen">
          <p>Loading ...</p>
        </div>
      );
    } else if (checking == false && checked == false) {
      return <Navigate to="/login" />;
    } else if (checking == false && checked == true) {
      return <>{children}</>;
    }
  }
}

export default ProtectedRoute;

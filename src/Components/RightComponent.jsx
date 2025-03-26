import React from "react";
import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainSection from "./MainSection";

function RightComponent() {
  const { name, email } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("ImpliesSolution");
    navigate("/login", {
      replace: true,
    });
  };
  return (
    <div className="h-full w-[85vw]  flex flex-col">
      <div className="bg-white h-[13vh] border-b border-black flex justify-end items-center">
        <aside className="mr-[20px]">
          <div class="flex items-center gap-4">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="avatar"
              class="inline-block relative object-cover object-center !rounded-full w-12 h-12"
            />
            <div>
              <h6 class="text-slate-800 font-semibold">{name}</h6>
              <p class="text-slate-600 text-sm">{email}</p>
            </div>
            <button
              onClick={logoutHandler}
              className="bg-[#aaa] p-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </button>
          </div>
        </aside>
      </div>
      <div className="h-[87vh] bg-[#bbb]  p-2">
        <MainSection />
      </div>
    </div>
  );
}

export default RightComponent;

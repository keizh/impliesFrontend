import { Typography, Button } from "@material-tailwind/react";
import React from "react";

function LeftComponent({ open, toggle }) {
  return (
    <div className="h-screen bg-blue-700 w-[15vw] flex flex-col">
      <div className="bg-white h-[13vh] border-r border-black">
        <Typography variant="h2" className=" text-center">
          ES
        </Typography>
        <Typography className="text-center">
          Looms efficiency software
        </Typography>
      </div>
      <div className="grow"></div>
    </div>
  );
}

export default LeftComponent;

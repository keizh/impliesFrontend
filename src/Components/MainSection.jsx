import { Typography, Input, Button } from "@material-tailwind/react";
import React from "react";
import AddCompany from "../Components/AddCompany";
import TABLE from "../Components/TABLE";

function MainSection() {
  return (
    <div className="w-full h-full bg-white rounded-md">
      <header className="flex justify-between px-4 py-2">
        <div className="flex gap-2 items-center">
          <Typography variant="h4">Company</Typography>
          <Input label="search here" />
        </div>
        <div>
          <AddCompany />
        </div>
      </header>
      <main>
        <TABLE />
      </main>
    </div>
  );
}

export default MainSection;

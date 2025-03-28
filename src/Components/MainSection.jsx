import { Typography, Input, Button } from "@material-tailwind/react";
import { useState } from "react";
import AddCompany from "../Components/AddCompany";
import TABLE from "../Components/TABLE";
import useDebounce from "../customHooks/useDebounce";

function MainSection() {
  const [searchName, setSearchName] = useState("");
  const d = useDebounce(searchName, () => {}, 500);

  return (
    <div className="w-full h-full bg-white rounded-md">
      <header className="flex justify-between px-4 py-2">
        <div className="flex gap-2 items-center">
          <Typography variant="h4">Company</Typography>
          <Input
            onChange={(e) => setSearchName(e.target.value)}
            value={searchName}
            label="search here"
          />
        </div>
        <div>
          <AddCompany />
        </div>
      </header>
      <main>
        <TABLE searchName={d} />
      </main>
    </div>
  );
}

export default MainSection;

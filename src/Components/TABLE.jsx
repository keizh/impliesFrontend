import { Typography } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import TableRow from "../Components/TableRow";

const TABLE_HEAD = [
  "",
  "Code",
  "Name",
  "Link",
  "Machines",
  "Frequency",
  "Contact Number",
  "Remark",
  "Action",
];

function TABLE() {
  const { Campanies } = useSelector((state) => state.campany);
  return (
    <main className=" h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Campanies.map((ele) => (
            <TableRow key={ele._id} ele={ele} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default TABLE;

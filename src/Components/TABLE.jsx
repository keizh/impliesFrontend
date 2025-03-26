import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TableRow from "../Components/TableRow";

function TABLE({ searchName }) {
  const [selected, setSelected] = useState(false);
  const TABLE_HEAD = [
    <input
      checked={selected}
      onClick={() => setSelected((prev) => !prev)}
      type="checkbox"
    />,
    "Code",
    "Name",
    "Link",
    "Machines",
    "Frequency",
    "Contact Number",
    "Remark",
    "Action",
  ];
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
          {searchName.trim() === ""
            ? Campanies.map((ele) => (
                <TableRow selected={selected} key={ele._id} ele={ele} />
              ))
            : Campanies.filter((ele) =>
                ele.Name.toLowerCase().includes(searchName.toLowerCase())
              ).map((ele) => (
                <TableRow selected={selected} key={ele._id} ele={ele} />
              ))}
        </tbody>
      </table>
    </main>
  );
}

export default TABLE;

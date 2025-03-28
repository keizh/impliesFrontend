import React from "react";
import { Typography } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { deleteCampany } from "../Features/CampanySlice/CampanySlice";
import EditButton from "../Components/EditButton";
function TableRow({ ele, selected }) {
  const [selfSelected, setselfSelected] = React.useState(false);
  const dispatch = useDispatch();
  const onDeleteHandler = () => {
    dispatch(deleteCampany({ campanyId: ele._id }));
  };

  return (
    <tr className="even:bg-blue-gray-50/50">
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          <input
            onClick={() => setselfSelected((prev) => !prev)}
            checked={selected || selfSelected}
            type="checkbox"
          />
        </Typography>
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {ele.Code}
        </Typography>
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {ele.Name}
        </Typography>
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {ele.Link}
        </Typography>
      </td>
      <td className="p-4">
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          {ele.Machines}
        </Typography>
      </td>
      <td className="p-4">
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          {ele.Frequency}
        </Typography>
      </td>
      <td className="p-4">
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          {ele.Contact_Number}
        </Typography>
      </td>
      <td className="p-4">
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          {ele.Remark}
        </Typography>
      </td>
      <td className="p-4 flex gap-2">
        <EditButton ele={ele} />
        <button onClick={onDeleteHandler} className="bg-[#bbb] p-1 rounded-md">
          ❌
        </button>
      </td>
    </tr>
  );
}

export default TableRow;

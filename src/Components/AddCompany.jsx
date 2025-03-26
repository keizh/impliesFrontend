import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { PostCampany } from "../Features/CampanySlice/CampanySlice";

export default function AddCompany() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [disabled, setDisabled] = useState(false);

  let initData = {
    Code: 0,
    Name: "",
    Link: "",
    Machines: 0,
    Frequency: "Low",
    Contact_Number: "",
    Remark: "",
  };

  const [data, setData] = useState(initData);
  const onSelectHandler = (value) => {
    setData((data) => ({ ...data, Frequency: value }));
  };

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    if (
      data.Code > 0 &&
      data.Name !== "" &&
      data.Link !== "" &&
      data.Machines > 0 &&
      data.Frequency != "" &&
      data.Contact_Number != "" &&
      data.Remark != ""
    ) {
      setDisabled(false);
    } else {
      if (disabled == false) {
        setDisabled(true);
      }
    }
  }, [data]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(PostCampany(data));
    setData(initData);
    handleOpen();
  };

  return (
    <>
      <Button onClick={handleOpen} color="blue" variant="gradient">
        Add Company
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Add Company</DialogHeader>
        <DialogBody>
          <form className="grid grid-cols-2 gap-3" onSubmit={onSubmitHandler}>
            <Input
              name="Code"
              label="Code"
              placeholder="Enter Code"
              type="number"
              onChange={onChangeHandler}
              value={data.Code}
            />
            <Input
              name="Name"
              label="Name"
              placeholder="Enter Name"
              type="text"
              onChange={onChangeHandler}
              value={data.Name}
            />
            <Input
              name="Machines"
              label="Machines"
              placeholder="Enter Machines"
              type="number"
              onChange={onChangeHandler}
              value={data.Machines}
            />
            <Input disabled={true} label="Area" placeholder="Enter Area" />
            <Input
              name="Link"
              label="Link"
              placeholder="Add Link"
              onChange={onChangeHandler}
              value={data.Link}
            />
            <Select label="Frequency" onChange={onSelectHandler}>
              <Option value="Low">Low</Option>
              <Option value="Medium">Medium</Option>
              <Option value="High">High</Option>
            </Select>
            <Input
              name="Contact_Number"
              label="Contact Number"
              type="number"
              placeholder="Enter Contact Number"
              onChange={onChangeHandler}
              value={data.Contact_Number}
            />
            <Input
              name="Remark"
              label="Enter remark here"
              placeholder="Enter Remark Here"
              onChange={onChangeHandler}
              value={data.Remark}
            />
            <Button
              type="submit"
              variant="gradient"
              color={disabled ? "red" : "green"}
              disabled={disabled}
              className="col-span-2"
            >
              <span>ADD</span>
            </Button>
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

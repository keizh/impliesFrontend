import { useLayoutEffect, useState } from "react";
import LeftComponent from "../Components/LeftComponent";
import RightComponent from "../Components/RightComponent";
import { useDispatch } from "react-redux";
import { fetchCampanies } from "../Features/CampanySlice/CampanySlice";

function AuthPage() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen((prev) => !prev);
  useLayoutEffect(() => {
    dispatch(fetchCampanies());
  });

  return (
    <div className="flex">
      <LeftComponent open={open} toggle={toggle} />
      <RightComponent open={open} />
    </div>
  );
}

export default AuthPage;

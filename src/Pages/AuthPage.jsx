import { useLayoutEffect } from "react";
import LeftComponent from "../Components/LeftComponent";
import RightComponent from "../Components/RightComponent";
import { useDispatch } from "react-redux";
import { fetchCampanies } from "../Features/CampanySlice/CampanySlice";

function AuthPage() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchCampanies());
  });

  return (
    <div className="flex">
      <LeftComponent />
      <RightComponent />
    </div>
  );
}

export default AuthPage;

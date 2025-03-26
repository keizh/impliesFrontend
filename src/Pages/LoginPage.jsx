import { useState, useEffect } from "react";
import ImpliesSolutionBanner from "../Components/ImpliesSolutionBanner";
import { Typography, Input, Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { login, updateTaskCompleted } from "../Features/UserSlice/UserSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { taskCompleted } = useSelector((state) => state.user);

  const initialData = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialData);
  const [disabledState, setDisabledState] = useState(true);

  const handler = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value.trim() }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(login(data));
    setData(initialData);
    console.log(data);
  };

  useEffect(() => {
    if (data.email != "" && data.password != "") {
      setDisabledState(false);
    } else {
      if (disabledState == false) {
        setDisabledState(true);
      }
    }
  }, [data]);

  useEffect(() => {
    if (taskCompleted === "successfull login") {
      navigate("/auth", {
        replace: true,
      });
      dispatch(updateTaskCompleted(""));
    }
  }, [taskCompleted]);

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex justify-center items-center">
        <div>
          <Typography variant="h1">Login</Typography>
          <Typography variant="leading">Login to our website</Typography>
          <form
            onSubmit={onSubmitHandler}
            className="mt-[40px] flex flex-col gap-4 w-[350px]"
          >
            <Input
              required
              type="email"
              name="email"
              label="Email"
              onChange={handler}
              value={data.email}
            />
            <Input
              required
              name="password"
              label="Password"
              value={data.password}
              onChange={handler}
            />
            <Button
              type="submit"
              disabled={disabledState}
              color={disabledState ? "black" : "green"}
              fullWidth
            >
              Login
            </Button>
          </form>
          <Typography variant="leading" className="text-end mt-[20px]">
            Dont have an Account ?{" "}
            <NavLink to="/signup" className="text-green-200">
              Signup
            </NavLink>
          </Typography>
          {taskCompleted === "wrong password" && (
            <Typography
              variant="small"
              className="text-red-700 text-center mt-[20px]"
            >
              {taskCompleted}
            </Typography>
          )}
          {taskCompleted === "email not registered" && (
            <Typography
              variant="small"
              className="text-red-700 text-center mt-[20px]"
            >
              {taskCompleted}
            </Typography>
          )}
        </div>
      </div>
      <ImpliesSolutionBanner />
    </div>
  );
}

export default LoginPage;

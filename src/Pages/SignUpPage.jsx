import { useState, useEffect } from "react";
import ImpliesSolutionBanner from "../Components/ImpliesSolutionBanner";
import { Typography, Input, Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { signup, updateTaskCompleted } from "../Features/UserSlice/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialData = {
    name: "",
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
    dispatch(signup(data));
    setData(initialData);
  };

  const { taskCompleted } = useSelector((state) => state.user);

  useEffect(() => {
    if (taskCompleted === "new user created") {
      navigate("/login", {
        replace: true,
      });
      dispatch(updateTaskCompleted(""));
    }
  }, [taskCompleted]);

  useEffect(() => {
    if (data.email != "" && data.name != "" && data.password != "") {
      setDisabledState(false);
    } else {
      if (disabledState == false) {
        setDisabledState(true);
      }
    }
  }, [data]);

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex justify-center items-center">
        <div>
          <Typography variant="h1">Signup</Typography>
          <Typography variant="leading">Sigup to our website</Typography>
          <form
            onSubmit={onSubmitHandler}
            className="mt-[40px] flex flex-col gap-4 w-[350px]"
          >
            <Input
              value={data.name}
              required
              name="name"
              label="Name"
              onChange={handler}
            />
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
              onChange={handler}
              value={data.password}
            />
            <Button
              type="submit"
              disabled={disabledState}
              color={disabledState ? "black" : "green"}
              fullWidth
            >
              Signup
            </Button>
          </form>
          <Typography variant="leading" className="text-end mt-[20px]">
            Have an Account ?{" "}
            <NavLink to="/login" className="text-green-200">
              Login
            </NavLink>
          </Typography>
          {taskCompleted === "email id already registered" && (
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

export default SignUpPage;

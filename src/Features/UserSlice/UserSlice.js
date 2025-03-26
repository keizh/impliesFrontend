/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signup = createAsyncThunk(
  "POST/signup",
  async (data, { dispatch, rejectWithValue }) => {
    dispatch(updateError(null));
    dispatch(updateTaskCompleted(""));
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/signup`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const resData = await res.json();
      if (!res.ok) {
        throw new Error(resData.message);
      }
      return resData;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const login = createAsyncThunk(
  "POST/login",
  async (data, { dispatch, rejectWithValue }) => {
    dispatch(updateError(null));
    dispatch(updateTaskCompleted(""));
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const resData = await res.json();

      if (!res.ok) {
        throw new Error(resData.message);
      }

      localStorage.setItem("ImpliesSolution", resData.JWT);

      return resData;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    name: "",
    email: "",
    status: "idle",
    error: null,
    taskCompleted: "",
  },
  reducers: {
    updateError: (state, action) => {
      state.error = action.payload;
    },
    updateTaskCompleted: (state, action) => {
      state.taskCompleted = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "success";
        state.taskCompleted = action.payload.message;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
        state.taskCompleted = action.payload.message;
      });

    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "success";
        state.taskCompleted = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
        state.taskCompleted = action.payload.message;
      });
  },
});
export const { updateError, updateTaskCompleted } = UserSlice.actions;
export default UserSlice;

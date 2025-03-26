/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateTaskCompleted } from "../UserSlice/UserSlice";

export const fetchCampanies = createAsyncThunk(
  "fetch/Campanies",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/campany`, {
        method: "GET",
        headers: {
          Authorization: `${localStorage.getItem(`ImpliesSolution`)}`,
        },
      });
      const resData = await res.json();
      if (!res.ok) {
        if (resData.message === "JWT_ISSUE") {
          dispatch(updateTaskCompleted("JWT_ISSUE"));
        }
        throw new Error(resData.message);
      }
      return resData;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const PostCampany = createAsyncThunk(
  "POST/Campany",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/campany`, {
        method: "POST",
        headers: {
          Authorization: `${localStorage.getItem(`ImpliesSolution`)}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (!res.ok) {
        if (resData.message === "JWT_ISSUE") {
          dispatch(updateTaskCompleted("JWT_ISSUE"));
        }
        throw new Error(resData.message);
      }
      return resData;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const CampanySlice = createSlice({
  name: "CampanySlice",
  initialState: {
    Campanies: [],
    status: "idle",
    error: null,
    taskCompleted: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampanies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCampanies.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.Campanies = action.payload.data;
        state.taskCompleted = action.payload.message;
      })
      .addCase(fetchCampanies.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload.message;
        state.taskCompleted = action.payload.message;
      });

    builder
      .addCase(PostCampany.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(PostCampany.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.Campanies.push(action.payload.data);
        state.taskCompleted = action.payload.message;
      })
      .addCase(PostCampany.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload.message;
        state.taskCompleted = action.payload.message;
      });
  },
});

export default CampanySlice;

import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Features/UserSlice/UserSlice";
import CampanySlice from "../Features/CampanySlice/CampanySlice";

const Store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    campany: CampanySlice.reducer,
  },
});

export default Store;

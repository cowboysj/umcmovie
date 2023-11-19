import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: null,
};

const Slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
});

export const { wetWeather } = Slice.actions;
export default Slice.reducer;

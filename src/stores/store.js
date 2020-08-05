import { configureStore, createSlice } from "@reduxjs/toolkit";

const movie = createSlice({
  name: "movie",
  initialState: {
    movies: {}
  },
  reducers: {}
});

export default configureStore({ reducer: movie.reducer });

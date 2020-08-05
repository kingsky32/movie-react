import { configureStore, createSlice } from "@reduxjs/toolkit";

const movie = createSlice({
  name: "movie",
  initialState: {
    movies: []
  },
  reducers: {
    setMovie: (state, action) => {
      state.movies.push(action.payload);
    }
  }
});

export const { setMovie } = movie.actions;

export default configureStore({ reducer: movie.reducer });

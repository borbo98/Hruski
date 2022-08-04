import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: []
}

const favouritesSlice = createSlice({
  name: "favouritesList",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      let newFavourites = [...state.favourites, action.payload];
      state.favourites = newFavourites;
    },

    removeFromFavourites(state, action) {
      let newFavourites = [...state.favourites];
      const index = newFavourites.findIndex((item) => item === action.payload);
      if (index !== -1) {
        newFavourites.splice(index, 1);
        state.favourites = newFavourites;
      }
    }
  },
});


export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;
const favouritesReducer = favouritesSlice.reducer;

export default favouritesReducer;
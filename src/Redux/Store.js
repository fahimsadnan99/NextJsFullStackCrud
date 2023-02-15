import { configureStore } from '@reduxjs/toolkit'
import {pokemonApi} from "./pokemonApi.js"

export const store = configureStore({
  reducer: {

    [pokemonApi.reducerPath]: pokemonApi.reducer,
    
  },

  middleware: (gdf) =>
    gdf().concat(pokemonApi.middleware),
})
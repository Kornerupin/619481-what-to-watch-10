import {createReducer} from '@reduxjs/toolkit';
import {filterFilms, setGenre} from './action';
import {Films} from '../mocks/films';
import {FilmType} from '../types/film-type';

type initialStateTypes = {
  genre: string,
  films: FilmType[],
}

const initialState = <initialStateTypes> {
  genre: 'All genres',
  films: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(filterFilms, (state) => {
      if (state.genre === 'All genres') {
        state.films = Films;
      }
      else {
        state.films = Films.filter((current) => current.genre === state.genre);
      }
    })
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload || 'All genres';
      filterFilms();
    });
});

export {reducer};

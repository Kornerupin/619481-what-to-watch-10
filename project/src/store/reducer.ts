import {createReducer} from '@reduxjs/toolkit';
import {filterFilms, setGenre, showMore} from './action';
import {Films} from '../mocks/films';
import {FilmType} from '../types/film-type';
import {ShowMoreCount} from '../const';

type initialStateTypes = {
  genre: string,
  films: FilmType[],
  visibleFilmsMax: number,
  isVisibleLimit: boolean,
}

const initialState = <initialStateTypes> {
  genre: 'All genres',
  films: [],
  visibleFilmsMax: ShowMoreCount,
  isVisibleLimit: false,
};

const showMoreFunc = (state: initialStateTypes) => {
  const visibleLimit = state.films.length;
  state.visibleFilmsMax += ShowMoreCount;

  if (state.visibleFilmsMax >= visibleLimit) {
    state.isVisibleLimit = true;
  }
};

const filterFilmsFunc = (state: initialStateTypes) => {
  if (state.genre === 'All genres') {
    state.films = Films;
  }
  else {
    state.films = Films.filter((current) => current.genre === state.genre);
  }
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(filterFilms, (state) => {
      filterFilmsFunc(state);
    })
    .addCase(showMore, (state) => {
      showMoreFunc(state);
    })
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload || 'All genres';
      state.visibleFilmsMax = 0;
      state.isVisibleLimit = false;
      filterFilmsFunc(state);
      showMoreFunc(state);
    });
});

export {reducer};

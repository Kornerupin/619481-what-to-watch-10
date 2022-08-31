import {combineReducers, createReducer} from '@reduxjs/toolkit';
import {
  filterFilms,
  loadActiveFilm,
  loadFilms,
  loadReviews,
  loadSimilarFilms,
  setDataLoadedStatus,
  setGenre,
  showMore
} from './action';
import {FilmType} from '../types/film-type';
import {ShowMoreCount} from '../const';
import {ReviewType} from '../types/review-type';
import reducerAuth from './reducer-auth';

interface initialStateTypes {
  genre: string,
  films: FilmType[],
  filmsAll: FilmType[],
  activeFilm: FilmType | null,
  activeFilmSimilar: FilmType[] | null,
  activeFilmReviews: ReviewType[] | null,
  visibleFilmsMax: number,
  isVisibleLimit: boolean,
  isDataLoaded: boolean,
}

const initialState = <initialStateTypes> {
  genre: 'All genres',
  films: [],
  filmsAll: [],
  activeFilm: null,
  activeFilmSimilar: null,
  activeFilmReviews: null,
  visibleFilmsMax: ShowMoreCount,
  isVisibleLimit: false,
  isDataLoaded: true,
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
    state.films = state.filmsAll;
  }
  else {
    state.films = state.filmsAll.filter((current) => current.genre === state.genre);
  }
};

const reducerFilms = createReducer(initialState, (builder) => {
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
    })
    .addCase(loadFilms, (state, action) => {
      state.filmsAll = action.payload;
    })
    .addCase(loadActiveFilm, (state, action) => {
      state.activeFilm = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.activeFilmSimilar = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.activeFilmReviews = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

const reducer = combineReducers(
  {
    films: reducerFilms,
    auth: reducerAuth,
  }
);

export {reducer};

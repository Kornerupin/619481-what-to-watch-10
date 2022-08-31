import {createReducer} from '@reduxjs/toolkit';
import {filterFilms, loadFilms, requireAuth, setDataLoadedStatus, setError, setGenre, showMore} from './action';
import {FilmType} from '../types/film-type';
import {AuthStatus, ShowMoreCount} from '../const';
import {UserDataType} from '../types/user-data-type';

type initialStateTypes = {
  genre: string,
  films: FilmType[],
  filmsAll: FilmType[],
  visibleFilmsMax: number,
  isVisibleLimit: boolean,
  isDataLoaded: boolean,
  authStatus: AuthStatus,
  error: string | null,
  userData: UserDataType | null,
}

const initialState = <initialStateTypes> {
  genre: 'All genres',
  films: [],
  filmsAll: [],
  visibleFilmsMax: ShowMoreCount,
  isVisibleLimit: false,
  isDataLoaded: true,
  authStatus: AuthStatus.Unknown,
  error: null,
  userData: null,
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
    })
    .addCase(loadFilms, (state, action) => {
      state.filmsAll = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuth, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};

import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute, AuthStatus, TimeoutShowError} from '../const';
import {
  loadActiveFilm,
  loadFilms,
  loadReviews,
  loadSimilarFilms,
  requireAuth, sendReview,
  setDataLoadedStatus,
  setError
} from './action';
import {AppDispatchType, StateType} from '../types/state';
import {FilmType} from '../types/film-type';
import {dropToken, saveToken} from '../services/token';
import {AuthDataType} from '../types/auth-data-type';
import {UserDataType} from '../types/user-data-type';
import {store} from './index';
import {ReviewType} from '../types/review-type';
import {ReviewDataType} from '../types/review-data-type';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance,
}>(
  'load/films',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType[]>(APIRoute.Films);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadFilms(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchActiveFilmAction = createAsyncThunk<void, number, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance,
}>(
  'load/activeFilm',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType>(`${APIRoute.Films}/${filmId}`);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadActiveFilm(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance,
}>(
  'load/similarFilms',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType[]>(`${APIRoute.Films}/${filmId}/similar`);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadSimilarFilms(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance,
}>(
  'load/reviews',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${APIRoute.Reviews}/${filmId}`);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadReviews(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const sendNewReviewAction = createAsyncThunk<void, ReviewDataType, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance,
}>(
  'send/review',
  async ({filmId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post(`${APIRoute.Reviews}/${filmId}`, {comment, rating});
    dispatch(sendReview(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance,
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuth(AuthStatus.Auth));
    } catch {
      dispatch(requireAuth(AuthStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthDataType, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance,
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserDataType>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuth(AuthStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance,
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuth(AuthStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'user/removeError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TimeoutShowError
    );
  },
);

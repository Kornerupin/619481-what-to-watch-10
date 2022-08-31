import {createAction} from '@reduxjs/toolkit';
import {FilmType} from '../types/film-type';
import {AuthStatus} from '../const';
import {ReviewType} from '../types/review-type';
import {ReviewDataType} from '../types/review-data-type';
import {UserDataType} from '../types/user-data-type';

export const filterFilms = createAction('choice/films/genre');

export const setGenre = createAction('set/genre', (genre: string) => ({payload: genre}));

export const showMore = createAction('set/more');

export const loadFilms = createAction<FilmType[]>('load/films');

export const loadActiveFilm = createAction<FilmType>('load/activeFilm');

export const loadSimilarFilms = createAction<FilmType[]>('load/similarFilms');

export const loadReviews = createAction<ReviewType[]>('load/reviews');

export const setDataLoadedStatus = createAction<boolean>('load/setStatus');

export const requireAuth = createAction<AuthStatus>('user/requireAuth');

export const saveUserData = createAction<UserDataType>('user/saveUserData');

export const deleteUserData = createAction<AuthStatus>('user/deleteUserData');

export const setError = createAction<string | null>('user/setError');

export const sendReview = createAction<ReviewDataType>('send/review');

import {createAction} from '@reduxjs/toolkit';
import {FilmType} from '../types/film-type';
import {AuthStatus} from '../const';

export const filterFilms = createAction('choice/films/genre');

export const setGenre = createAction('set/genre', (genre: string) => ({payload: genre}));

export const showMore = createAction('set/more');

export const loadFilms = createAction<FilmType[]>('load/films');

export const setDataLoadedStatus = createAction<boolean>('load/setStatus');

export const requireAuth = createAction<AuthStatus>('user/requireAuth');

export const setError = createAction<string | null>('user/setError');

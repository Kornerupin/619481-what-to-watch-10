import {createAction} from '@reduxjs/toolkit';
import {FilmType} from '../types/film-type';

export const filterFilms = createAction('choice/films/genre');

export const setGenre = createAction('set/genre', (genre: string) => ({payload: genre}));

export const showMore = createAction('set/more');

export const loadFilms = createAction<FilmType[]>('load/films');

export const setDataLoadedStatus = createAction<boolean>('load/setStatus');

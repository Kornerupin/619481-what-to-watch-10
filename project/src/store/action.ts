import {createAction} from '@reduxjs/toolkit';

export const filterFilms = createAction('choice/films/genre');

export const setGenre = createAction('set/genre', (genre: string) => ({payload: genre}));

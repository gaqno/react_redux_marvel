import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Result } from '../models/characters';
import md5 from 'md5';

var baseUrl = "http://gateway.marvel.com/v1/public";

var privateKey = 'e3bbad0cda7a5dfb5638593490a121d03e87c886'
var publicKey = '0d3471b572698cd12b6c88dcaf4ae453'
var time = Number(new Date())
var hash = md5(time + privateKey+ publicKey);
var CONFIG = `?ts=${time}&apikey=${publicKey}&hash=${hash}`

export const marvelApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ['Results'],
  endpoints: (builder) => ({
    getCharacters: builder.query<any, void>({
      query: () => `/characters${CONFIG}`,
    }),
    getCharactersById: builder.query<any, void>({
      query: (id) => `/${id}/characters/${CONFIG}`,
    }),
  })
})
export const { useGetCharactersQuery, useGetCharactersByIdQuery } = marvelApi;
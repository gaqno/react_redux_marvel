import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Result } from '../src/models/characters';
import md5 from 'md5';

// http://gateway.marvel.com:433/v1/public/characters?ts=1656430827298&apikey=0d3471b572698cd12b6c88dcaf4ae453&hash=4e151549ce3bb7d2d7ca72a4a65b585f
var baseUrl = "http://gateway.marvel.com/v1/public";

var privateKey = 'e3bbad0cda7a5dfb5638593490a121d03e87c886'
var publicKey = '0d3471b572698cd12b6c88dcaf4ae453'
var time = Number(new Date())
var hash = md5(time + privateKey+ publicKey);
var CONFIG = `?ts=${time}&apikey=${publicKey}&hash=${hash}`

// http://gateway.marvel.com/v1/public/characters?ts=1656432629553&apikey=0d3471b572698cd12b6c88dcaf4ae453&hash=6e713fd1f1db329f2af7dffd87f9f3c3

// http://gateway.marvel.com/v1/public/characters?ts=1656432682705&apikey=0d3471b572698cd12b6c88dcaf4ae453&hash=15bebb76eed26848e86e8aae324dc286
 
export const marvelApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Response[], void>({
      query: () => `/characters${CONFIG}`,
    }),
    getCharactersById: builder.query<any, void>({
      query: (id) => `/${id}/characters/${CONFIG}`,
    }),
  })
})
export const { useGetCharactersQuery, useGetCharactersByIdQuery } = marvelApi;
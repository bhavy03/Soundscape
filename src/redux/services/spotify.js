import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyApi = createApi({
  reducerPath: 'spotifyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'eb9a43e9bbmsh0e53b3f6c5f2d03p1959aejsn5e52957c526b',
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPokemonByName2: builder.query({ query: () => 'browse_all/' }),
  }),
});

export const { usespotifyApiQuery } = spotifyApi;

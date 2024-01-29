'use client'

import Search from '@/components/Search';
import { Movie } from '@/types/movies';
import { useState } from 'react';
import Movies from '@/components/Movies';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 3% 2%;
  font-size: 1.5rem;
  color: var(--accent);
  font-weight: 600;
`

const fetchMovies = async (query: string) => {
  const movies = await fetch(`https://api.movies.dcts.se/rpc/movies_search?q=${query}`).then((res) => res.json())
  console.log(query, movies)
  return movies
}

const Home = () => {
  const [searchString, setSearchString] = useState<string>('') 
  const [movies, setMovies] = useState<Movie[]>([])

  const handleSearchInput = (value: string) => {
    setSearchString(value)
    if (movies) setMovies([])
  }

  const searchMovies = async () => {
    if (searchString) {
      const movies = await fetchMovies(searchString)
      setMovies(movies)
    }
  }

  return (
    <main>
      <Title>Devoteam Movie Search</Title>
      <Search value={searchString} handleSearchInput={handleSearchInput} searchMovies={searchMovies} />
      <Movies movies={movies} />
    </main>
  );
}

export default Home;

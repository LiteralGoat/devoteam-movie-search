'use client'

import { debounce } from 'lodash';
import { useState } from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  padding: 0 12%;
  margin-top: 10%;
  @media (max-width: 768px) {
    padding: 0 2%;
  }
`

const SearchSuggestion = styled.p`
  padding: 1.4rem;
  box-shadow: 0 0 40px 0 #00000012;
  border-radius: 20px;
  cursor: pointer;
  color: var(--gray);
  &:hover {
    color: var(--dark)
  }
  transition: all ease-in-out 0.2s;
  `

const SearchBar = styled.div`
  display: flex;
  position: relative;
  width: calc(100% - 2.8rem);
  box-shadow: 0 0 40px 0 #00000012;
  border-radius: 20px;
  padding: 1.2rem 1.4rem;
  `

const StyledInput = styled.input`
  width: calc(100% - 80px);
  font-size: 3rem;
  outline: none;
  border: none;
  @media (max-width: 768px) {
    font-size: 2rem;
    width: calc(100% - 56px);
  }
`

const SearchButton = styled.button`
  position: absolute;
  right: 1.4rem;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  height: 64px;
  width: 64px;

  color: var(--accent);
  background-color: var(--green);
  outline: none;
  border: none;
  & svg {
    transition: all ease-in-out 0.2s;
  }
  &:hover svg {
    transform: translateX(6px);
  }

  @media (max-width: 768px) {
    height: 48px;
    width: 48px;
    &:hover svg {
      transform: translateX(2px);
    }
  }
`

const fetchSuggestions = async (query: string) => {
  return await fetch(`https://api.movies.dcts.se/rpc/movies_autocomplete?q=${query}&limit=5`).then((res) => res.json())
}

const Search: React.FC<{value: string, handleSearchInput: (value: string) => void, searchMovies: () => void}> = ({ value, handleSearchInput, searchMovies }) => {
  const [suggestions, setSuggestions] = useState<string[]>([])

  // Debounce function after 1s of typing to fetch and update autocomplete suggestions
  const updateSuggestions = debounce(async () => {
    if (value) {
      const newSuggestions = await fetchSuggestions(value)
      setSuggestions(newSuggestions)
    }
  }, 1000);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Send back the search string to parent
    handleSearchInput(e.target.value)
    updateSuggestions()
  }

  const onSearch = () => {
    setSuggestions([])
    searchMovies()
  }

  return (
    <SearchWrapper>
      <SearchBar>
        <StyledInput value={value} type="text" placeholder='search movie' onInput={handleInput} />
        <SearchButton onClick={onSearch}>
          <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.0607 13.0607C29.6464 12.4749 29.6464 11.5251 29.0607 10.9393L19.5147 1.3934C18.9289 0.807612 17.9792 0.807612 17.3934 1.3934C16.8076 1.97918 16.8076 2.92893 17.3934 3.51472L25.8787 12L17.3934 20.4853C16.8076 21.0711 16.8076 22.0208 17.3934 22.6066C17.9792 23.1924 18.9289 23.1924 19.5147 22.6066L29.0607 13.0607ZM2.44162e-10 13.5L28 13.5L28 10.5L-2.44162e-10 10.5L2.44162e-10 13.5Z" fill="#F8475E"/>
          </svg>
        </SearchButton>
      </SearchBar>
      {suggestions?.map((suggestion, index) => (
        <SearchSuggestion key={index} onClick={() => handleSearchInput(suggestion)}>
          {suggestion}
        </SearchSuggestion>
      ))}
    </SearchWrapper>
  )
}

export default Search;

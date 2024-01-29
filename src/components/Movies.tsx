import { Movie } from '@/types/movies'
import styled from 'styled-components'
import MovieCard from './MovieCard'

const MoviesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 64px;
  gap: 64px;
`

const Movies: React.FC<{movies: Movie[]}> = ({ movies }) => (
  <MoviesWrapper>
    {movies?.map((movie: Movie) => (
      <div key={movie.id}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </MoviesWrapper>
)

export default Movies;

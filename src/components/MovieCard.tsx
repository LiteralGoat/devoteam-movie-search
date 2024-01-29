'use client'

import { Movie } from '@/types/movies';
import styled, { css } from 'styled-components';

const Card = styled.div<{poster: string}>`
  ${props => css`
    background-image: url(${props.poster});
    background-position: center;
    background-size: contain;
  `}
  position: relative;
  height: 375px;
  width: 250px;
  box-shadow: 0 0 60px 0 #00000030;
  .movie-metadata {
    opacity: 0;
  }
  &:hover .movie-metadata {
    opacity: 1;
  }
`

const CardContent = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-rows: 1fr 8fr auto;
  align-items: start;
  padding: 20px;
  color: var(--light);
  background-color: #000000cf;
  transition: all ease-in-out 0.2s;
  pointer-events: none;
`

const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  align-items: center;
  font-size: 0.75rem;
`

const MovieGenre = styled.div`
  padding: 4px 8px;
  border: 1px var(--light) solid;
  border-radius: 20px;
  text-align: center;
  justify-self: left;
`

const MovieYear = styled.div`
  justify-self: right;
`

const CardBody = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  padding-top: 16px;
  justify-items: top;
`

const OverviewText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const CardFooter = styled.div`
  margin-top: auto;
  font-size: 0.75rem;
`

const MovieCard: React.FC<{movie: Movie}> = ({ movie: { poster, genres, released, overview, runtime, popularity } }) => (
  <Card poster={poster}>
    <CardContent className='movie-metadata'>
      <CardHeader>
        {genres?.map((genre, index) => <MovieGenre key={index}>{genre}</MovieGenre>)}
      </CardHeader>
      <CardBody>
        <OverviewText>
          {overview}
        </OverviewText>
      </CardBody>
      <CardFooter>
        <p>{runtime && `Duration: ${runtime} minutes`}</p>
        <p>{popularity && `Rating: ${popularity.toFixed(2)}`}</p>
        <MovieYear>{released && `Released: ${released}`}</MovieYear>
      </CardFooter>
    </CardContent>
  </Card>
)

export default MovieCard;

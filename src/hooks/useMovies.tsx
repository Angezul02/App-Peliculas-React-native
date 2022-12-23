import React, {useEffect, useState} from 'react';
import movieDB from '../api/MovieDB';
import { MobieDBResponse, Movie } from '../interfaces/mobieinterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>(
    {
      nowPlaying: [],
      popular: [],
      topRated: [],
      upComing: [],
    }
  );

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MobieDBResponse>('/now_playing');
    const popularPromise = movieDB.get<MobieDBResponse>('/popular');
    const topRatedPromise = movieDB.get<MobieDBResponse>('/top_rated');
    const upComingPromise = movieDB.get<MobieDBResponse>('/upcoming');

    const responsePromises = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upComingPromise,
    ]);

    setMoviesState({
      nowPlaying: responsePromises[0].data.results,
      popular: responsePromises[1].data.results,
      topRated: responsePromises[2].data.results,
      upComing: responsePromises[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};

export default useMovies;

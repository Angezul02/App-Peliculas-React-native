import { useEffect, useState } from "react";
import movieDB from "../api/MovieDB";
import { MovieFull } from '../interfaces/mobieinterface';
import { CredistResponse, Cast } from '../interfaces/creditsinterface';

interface MovieDetails{
    cast: Cast[];
    isLoadig: boolean;
    movieFull?: MovieFull;
}


const useMoviesDetails = (movieId:number) => {
 const [state, setState] = useState<MovieDetails>(
    {
        isLoadig: true, 
        movieFull: undefined,
        cast: [] 
    }
 )

 const getMovieDetails = async () => {
    const moviesDetailsPromises= movieDB.get<MovieFull>(`/${movieId}`)
    const castPromises= movieDB.get<CredistResponse>(`/${movieId}/credits`)
   
  const [movieDetailsPromiseResp, castPromiseResponse]= await Promise.all([moviesDetailsPromises, castPromises])
    setState(
        {
            isLoadig: false, 
            movieFull: movieDetailsPromiseResp.data,
            cast: castPromiseResponse.data.cast 

        }
    )
 }
  useEffect(() => {
   getMovieDetails()
  }, [])

  return {
        ...state
  }
  
}

export default useMoviesDetails
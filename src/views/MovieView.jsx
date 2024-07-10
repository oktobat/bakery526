import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Title from '@/components/common/Title'
import MovieSearch from '@/components/movie/MovieSearch'
import MovieCategory from '@/components/movie/MovieCategory'
import MovieSection from '@/components/movie/MovieSection'

const MovieView = () => {
  const myMovieId = "6b5440f5531fc6b879cdf25b83b360f4"
  const [movies, setMovies] = useState([])
  const onSearch = (subject)=>{
    console.log(subject)
  }
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${myMovieId}&language=ko-KR`)
    .then(res=>{
      console.log(res.data.results)
      setMovies(res.data.results)
    })
  }, [])
  return (
    <div className="row">
      <Title title="파바 무비" />
      <MovieSearch onSearch={onSearch} />
      <MovieCategory />
      <MovieSection movies={movies} />
    </div>
  );
};

export default MovieView;
import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios'
import Title from '@/components/common/Title'
import MovieSearch from '@/components/movie/MovieSearch'
import MovieCategory from '@/components/movie/MovieCategory'
import MovieSection from '@/components/movie/MovieSection'
import Pagenation from '@/components/common/Pagenation'

const MovieView = () => {
  const totalItems = useRef(0)
  const itemsPerPage = 20
  const [currentPage, setCurrentPage] = useState(1)
  const myMovieId = "6b5440f5531fc6b879cdf25b83b360f4"
  const [movies, setMovies] = useState([])
  const [changeType, setChangeType] = useState({ name: '인기 영화',     media: 'movie',   type: 'popular' })
  const [keyword, setKeyword] = useState("")
  const categoryClick = (category, page)=>{
    if (page==1) {
      setKeyword("")
    }
    const { media, type } = category
    setCurrentPage(page)
    setChangeType(category)
    axios.get(`https://api.themoviedb.org/3/${media}/${type}?api_key=${myMovieId}&language=ko-KR&page=${page}`)
    .then(res=>{
      console.log(res)
      setMovies(res.data.results)
      totalItems.current = res.data.total_results
    })
  }
  const onSearch = (subject, page)=>{
    console.log(subject)
    if (page==1) {
      setKeyword(subject)
    }
    setCurrentPage(page)
    setChangeType({name:"", media:"", type:""})
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${myMovieId}&language=ko-KR&query=${subject}&page=${page}`)
    .then(res=>{
      console.log(res)
      setMovies(res.data.results)
      totalItems.current = res.data.total_results
    })
  }
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${myMovieId}&language=ko-KR&page=1`)
    .then(res=>{
      console.log(res)
      setMovies(res.data.results)
      totalItems.current = res.data.total_results
    })
  }, [])
  return (
    <div className="row">
      <Title title="파바 무비" />
      <MovieSearch onSearch={onSearch} />
      <MovieCategory changeType={changeType.name} categoryClick={categoryClick} />
      <MovieSection movies={movies} />
      <Pagenation totalItems={totalItems.current} itemsPerPage={itemsPerPage} currentPage={currentPage} categoryClick={categoryClick} changeType={changeType} keyword={keyword} onSearch={onSearch} />
    </div>
  );
};

export default MovieView;
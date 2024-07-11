import React, {useState} from 'react';
import styled from 'styled-components'

const MovieCategoryBlock = styled.div`
  display: flex;
  justify-content: center;
  button { flex: 0 0 150px; border: 1px solid #00c183;
    padding: 10px 20px; margin: 0 10px 10px;
    color: #00c183; background: #fff;
    &:hover, &.on { color: #fff; background: #00c183;  }
  }
`
const MovieCategory = ({changeType, categoryClick}) => {
  const movieType = [
    { name: '인기 영화',     media: 'movie',   type: 'popular' },
    { name: '현재 상영',     media: 'movie',   type: 'now_playing' },
    { name: '최신 영화',     media: 'movie',   type: 'upcoming' },
    { name: '인기 TV SHOW',  media: 'tv',      type: 'popular' },
    { name: 'TV 순위',       media: 'tv',      type: 'top_rated' },
    { name: 'TV SHOW',       media: 'tv',      type: 'on_the_air' }
  ]
  return (
    <MovieCategoryBlock>
      {
        movieType.map((item, index)=>(
          <button key={index} type="button" 
          className={ changeType===item.name ? "on" : ""} 
          onClick={ ()=>categoryClick(item, 1)}
          >
            {item.name}
          </button>
        ))
      }
    </MovieCategoryBlock>
  );
};

export default MovieCategory;
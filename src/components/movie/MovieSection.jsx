import React from 'react';
import styled from 'styled-components'

const MovieSectionBlock = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
const ListBlock = styled.li`
  flex: 0 0 23%;
  margin: 20px 1%;
  position:relative; 
  .title { padding: 5px 0;
    font-size: 20px;
    font-weight: bold;
  }
  .star { position: absolute; right: 20px;
    top: 20px; width: 30px; height: 30px;
    background: #fff; text-align: center;
    line-height: 30px; border-radius: 50%;
    font-size: 12px;
  }
`
const MovieSection = ({movies}) => {
  return (
    <MovieSectionBlock>
      {
        movies.map((item, index)=>(
          <ListBlock key={index}>
            <a href={`https://www.themoviedb.org/movie/${item.id}?language=ko`} target="_blank">
              <img src={`https://www.themoviedb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
            </a>
            <p className="title">{item.title}</p>
            <p className="star">{item.vote_average.toFixed(1)}</p>
          </ListBlock>
        ))
      }
    </MovieSectionBlock>
  );
};

export default MovieSection;
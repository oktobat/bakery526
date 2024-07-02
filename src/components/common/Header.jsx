import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const HeaderBlock = styled.div``

const Header = () => {
  return (
    <HeaderBlock>
      <nav>
        <ul>
          <li>
            <NavLink to="/cart">장바구니</NavLink>
          </li>
          <li>
            <NavLink to="/employee">점원관리</NavLink>
          </li>
          <li>
            <NavLink to="/">메인</NavLink>
          </li>
          <li>
            <NavLink to="/movie">영화목록</NavLink>
          </li>
          <li>
            <NavLink to="/detail">상품상세</NavLink>
          </li>
          <li>
            <NavLink to="/product">상품목록</NavLink>
          </li>
          <li>
            <NavLink to="/store">매장관리</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderBlock>
  );
};

export default Header;
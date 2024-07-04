import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
// NavLink는 클릭을 받으면 .active 클래스가 추가됨
import {useDispatch} from 'react-redux'
import { onChangeCategory } from '@/store/product'
import { useSelector } from 'react-redux'

const HeaderBlock = styled.div`
  background:#023586;
  color:#fff; 
  .row {
    display:flex; 
    justify-content:space-between;
    align-items:center; 
  }
`

const Nav = styled.nav`
  .depth1 {
    display:flex; 
    li {
      position:relative; 
      &:hover {
        .depth2 { display:block }
      }
      a {
        padding:40px 25px 40px 0; 
        &:hover, &.active { color:#f00 }
      }
      .depth2 {
        position:absolute;
        top:100%;
        left:0; 
        margin-left:-35px;
        color:#000;
        width:150px; border:1px solid #023586;
        display:none; 
        li {
          a { padding:10px }
        }
      }
    }
  }
`
const OtherNav = styled.div`
  a { padding-left:25px;
    &:hover, &.active { color:#f00 }
  }
`

const Header = () => {
  const user = useSelector(state=>state.members.logined)
  const [isUser, setIsUser] = useState(user)
  const dispatch = useDispatch()

  useEffect(()=>{
    setIsUser(user)
  }, [user])


  return (
    <HeaderBlock>
      <div className="row">
        <Nav>
          <ul className="depth1">
            <li>
              <NavLink to="/employee">파바의 인재</NavLink>
            </li>
            <li>
              <NavLink to="/movie">파바 매거진</NavLink>
            </li>
            <li>
              <NavLink to="/product" onClick={ ()=>dispatch(onChangeCategory("all")) }>상품 안내</NavLink>
              <ul className="depth2">
                <li>
                  <Link to="/product" onClick={ ()=>dispatch(onChangeCategory("bread")) }>브레드</Link>
                </li>
                <li>
                  <Link to="/product" onClick={ ()=>dispatch(onChangeCategory("cake")) }>케이크</Link>
                </li>
                <li>
                  <Link to="/product" onClick={ ()=>dispatch(onChangeCategory("sandwitch")) }>샌드위치</Link>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/store">매장 정보</NavLink>
            </li>
          </ul>
        </Nav>
        <h1>
          <Link to="/">PARIS BAGUETTE</Link>
        </h1>
        <OtherNav>
          <NavLink to="/cart">장바구니</NavLink>
          { !isUser ?
            <>
              <NavLink to="/login">로그인</NavLink>
              <NavLink to="/join">회원가입</NavLink>
            </>
            :
            <>
              <NavLink to="/login">로그아웃</NavLink>
              <NavLink to="/join">정보수정({isUser.userName})</NavLink>
            </>
          }
        </OtherNav>
      </div>
    </HeaderBlock>
  );
};

export default Header;
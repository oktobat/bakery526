import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import { NavLink, Link, useNavigate } from 'react-router-dom'
// NavLink는 클릭을 받으면 .active 클래스가 추가됨
import {useDispatch} from 'react-redux'
import { onChangeCategory } from '@/store/product'
import { useSelector } from 'react-redux'
import {userLogout} from '@/store/member'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdGroupAdd, MdLogin, MdLogout, MdShoppingCart } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive'

const HeaderBlock = styled.div`
  background:#023586;
  color:#fff; 
  .row {
    position:relative;
    display:flex; 
    justify-content:space-between;
    align-items:center; 
    @media screen and (max-width:1024px){
      display:block;
      h1 { padding:30px 0; }
    }
  }
`

const Nav = styled.nav`
  @media screen and (max-width:1024px) {
    position:fixed; left:100%; top:0; overflow:hidden; 
    width:100%; height:100%;
    background:rgba(0,0,0,0.5);
    z-index:99999;
    transition:all 0.3s; 
    &.on { left:0;  }
  }
  .depth1 {
    display:flex; 
    @media screen and (max-width:1024px) {
      display:block; 
      position:absolute;
      top:0; right:0;
      width:200px;
      height:100%; 
      background:#fff; 
      color:#000;
      padding-top:100px; 
    }
    li {
      position:relative; 
      &:hover {
        .depth2 { display:block }
      }
      a {
        padding:40px 25px 40px 0; 
        &:hover, &.active { color:#f00 }
        @media screen and (max-width:1024px) {
          padding:20px; 
          text-align:center;
          border-bottom:1px solid #ddd; 
          display:block; 
        }
      }
      @media screen and (max-width:1024px){
        &:first-child {
          a { border-top:1px solid #ddd; }
        }
      }
      .depth2 {
        position:absolute;
        top:100%;
        left:0; 
        margin-left:-35px;
        color:#000;
        width:150px; border:1px solid #023586;
        display:none; 
        @media screen and (max-width:1024px){
          display:none; 
          position:static;
          margin-left:0px;
          width:100%; border:0px solid #023586;
          background:#ddd; 
        }
        li {
          a { padding:10px }
        }
      }
    }
  }
`
const OtherNav = styled.div`
  @media screen and (max-width:1024px) {
    display:block;
    position:absolute; 
    top:50%; transform:translateY(-50%);
    right:65px; 
  }
  a { padding-left:25px;
    &:hover, &.active { color:#f00 }
    @media screen and (max-width:1024px) {
      padding-left:15px;
      font-size:30px; 
    }
  }
`
const OpenNav = styled.div`
  position:absolute;
  top:50%; transform:translateY(-50%);
  right:20px;
  font-size:30px;
  cursor:pointer; 
`
const CloseNav = styled.div`
  position:absolute;
  top:30px; right:20px; 
  font-size:30px;
  color:#000; 
  cursor:pointer; 
`

const ItemCount = styled.div`
  position:relative; 
  span {
    position:absolute;
    top:-2px;
    right:-3px;
    width:20px;
    height:20px;
    border-radius:50%;
    background:red;
    color:#fff;
    font-size:12px;
    text-align:center;
    line-height:20px;
  }
`

const Header = () => {
  const [open, setOpen] = useState(false)
  const mobile = useMediaQuery({ maxWidth:1024 })
  const user = useSelector(state=>state.members.user)
  const [isUser, setIsUser] = useState(user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    setIsUser(user)
  }, [user])

  const onLogout = ()=>{
    dispatch(userLogout())
    navigate("/") 
  }

  return (
    <HeaderBlock>
      <div className="row">
        { mobile &&
          <OpenNav onClick={ ()=>setOpen(true) }>
            <span className="blind">메뉴열기</span><GiHamburgerMenu />
          </OpenNav>
        }
        <Nav className={ open ? "on" : ""}>
          <ul className="depth1">
            <li>
              <NavLink to="/employee">파바의 인재</NavLink>
            </li>
            <li>
              <NavLink to="/movie">파바 무비</NavLink>
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
          { mobile &&
            <CloseNav onClick={ ()=>setOpen(false) }>
              <span className="blind">메뉴닫기</span><IoMdClose />
            </CloseNav>
          }
        </Nav>
        <h1>
          <Link to="/">PARIS BAGUETTE</Link>
        </h1>
        <OtherNav>
          { !isUser ?
            <>
              <NavLink to="/login" title="로그인">{ mobile ? <MdLogin /> : "로그인"}</NavLink>
              <NavLink to="/join" title="회원가입">{ mobile ? <MdGroupAdd /> : "회원가입"}</NavLink>
            </>
            :
            <>
              <a href="#none" onClick={ onLogout } title="로그아웃">{ mobile ? <MdLogout /> : "로그아웃"}</a>
              <NavLink to="/join" title="정보수정">{mobile ? <FaUserEdit />:"정보수정"}</NavLink>
            </>
          }
          <NavLink to="/cart" title="장바구니">{ mobile ? <ItemCount><MdShoppingCart /><span>0</span></ItemCount> : "장바구니"}</NavLink>
        </OtherNav>
      </div>
    </HeaderBlock>
  );
};

export default Header;
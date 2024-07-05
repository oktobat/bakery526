import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux'
import {userLogin } from '@/store/member'
import { useNavigate } from 'react-router-dom';

const LoginSectionBlock = styled.div`
  max-width:600px; margin:50px auto; 
  form {
    .idpw {
      p { display:flex; margin:10px 0; align-items:center; 
        label { width:100px; }
        input { flex:1; border:1px solid #000; height:40px; text-indent:1em; }
      }
    }
    .btn { text-align:center; margin-top:30px; 
      button { background:red; width:200px; height:80px; color:#fff; font-size:20px }
    }
  }
`

const LoginSection = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const members = useSelector(state=>state.members.members)
  
  const [userInfo, setUserInfo] = useState({
    userEmail : "",
    userPw : ""
  })

  const handleChange = (e)=>{
    const {value, name} = e.target
    setUserInfo(userInfo=>({...userInfo, [name]:value}))
  }

  const onLogin = (e)=>{
    e.preventDefault()
    if (!userInfo.userEmail) {
      alert("이메일을 입력하세요.")
      return
    }
    if (!userInfo.userPw) {
      alert("비밀번호를 입력하세요.")
      return
    }
    const user = members.find(item=>item.userEmail==userInfo.userEmail && item.userPw==userInfo.userPw)
    if (user){
      dispatch(userLogin(userInfo))
      navigate("/")
    } else {
      alert("회원이 아닙니다.")
      return
    }
  }


  return (
    <LoginSectionBlock>
      <form onSubmit={ onLogin }>
        <div className="idpw">
          <p>
            <label htmlFor="userEmail">이메일 : </label>
            <input type="text" id="userEmail" name="userEmail" value={userInfo.userEmail} onChange={handleChange} />
          </p>
          <p>
            <label htmlFor="userPw">비밀번호 : </label>
            <input type="password" id="userPw" name="userPw" value={userInfo.userPw} onChange={handleChange} />
          </p>
        </div>
        <div className="btn">
          <button type="submit">로그인</button>
        </div>
      </form>
    </LoginSectionBlock>
  );
};

export default LoginSection;
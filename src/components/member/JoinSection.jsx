import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components'
import {useDispatch} from "react-redux"
import {useNavigate} from 'react-router-dom'
import { addMember } from "@/store/member"

const JoinSectionBlock = styled.div`
  max-width:600px; margin:50px auto; 
  table { 
    col:nth-child(1) { width:150px }
    col:nth-child(2) { width:auto }
    td { padding:5px; 
      &:nth-child(1) { text-align:right }
      input { border:1px solid #ddd; height:30px; width:100%;
          text-indent:1em; }
    }
  }
  .btn { text-align:center; margin-top:20px; 
    button { padding:10px; background:red; color:#fff; margin:0 10px;  }
  }
`

const JoinSection = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userEmailRef = useRef("")
  const userPwRef = useRef("")
  const userPwOkRef = useRef("")
  const userNameRef = useRef("")
  const addr2Ref = useRef("")

  const [userInfo, setUserInfo] = useState({
    userEmail :"",
    userPw : "",
    userPwOk : "",
    userName : "",
    userPhone : "",
    zipCode : "",
    addr1 : "",
    addr2 : ""
  })

  const handleChange = (e)=>{
    console.log(e.target)
    const {value, name } = e.target
    setUserInfo(userInfo=>({...userInfo, [name]:value}))
  }

  const onReset = ()=>{
    setUserInfo({
      userEmail :"",
      userPw : "",
      userPwOk : "",
      userName : "",
      userPhone : "",
      zipCode : "",
      addr1 : "",
      addr2 : ""
    })
  }

  const onRegister = (e)=>{
    e.preventDefault()
    if (!userInfo.userEmail) {
      alert("이메일을 입력하세요.")
      userEmailRef.current.focus()
      return
    }
    if (!userInfo.userPw) {
      alert("비밀번호를 입력하세요.")
      userPwRef.current.focus()
      return
    }
    if (!userInfo.userPwOk) {
      alert("비밀번호를 입력하세요.")
      userPwOkRef.current.focus()
      return
    }
    if (userInfo.userPw != userInfo.userPwOk){
      alert("비밀번호가 일치하지 않습니다.")
      userPwOkRef.current.focus()
      return
    }
    if (!userInfo.userName) {
      alert("이름을 입력하세요.")
      userNameRef.current.focus()
      return
    }
    dispatch(addMember(userInfo))
    navigate("/login")
  }

  useEffect(()=>{
    window.openDaumPostcode = () => {
      new window.daum.Postcode({
        oncomplete: (data) => {
          let fullAddr = ''; // 최종 주소 변수
          let extraAddr = ''; // 조합형 주소 변수
          if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
            fullAddr = data.roadAddress;
          } else { // 사용자가 지번 주소를 선택했을 경우(J)
            fullAddr = data.jibunAddress;
          }
          if (data.userSelectedType === 'R') {
            if (data.bname !== '') {
              extraAddr += data.bname;
            }
            if (data.buildingName !== '') {
              extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '');
          }
          // 주소 정보를 입력 요소에 설정
          setUserInfo(prevState => ({
              ...prevState,
              zipCode: data.zonecode,
              addr1: fullAddr
          }));
          addr2Ref.current.focus();
        },
      }).open();
    };
  }, [])

  return (
    <JoinSectionBlock>
      <form onSubmit={ onRegister }>
        <table border="0">
          <colgroup>
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>이메일 중복체크 : </td>
              <td></td>
            </tr>
            <tr>
              <td><label htmlFor="userEmail">이메일 : </label></td>
              <td>
                <input ref={userEmailRef} type="text" id="userEmail" name="userEmail" value={userInfo.userEmail} onChange={ handleChange } />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="userPw">비밀번호 : </label></td>
              <td>
                <input ref={userPwRef} type="password" id="userPw" name="userPw" value={userInfo.userPw} onChange={ handleChange } />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="userPwOk">비밀번호확인 : </label></td>
              <td>
                <input ref={userPwOkRef} type="password" id="userPwOk" name="userPwOk" value={userInfo.userPwOk} onChange={ handleChange } />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="userName">이름 : </label></td>
              <td>
                <input ref={userNameRef} type="text" id="userName" name="userName" value={userInfo.userName} onChange={ handleChange } />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="userPhone">연락처 : </label></td>
              <td>
                <input type="text" id="userPhone" name="userPhone" value={userInfo.userPhone} onChange={ handleChange } />
              </td>
            </tr>
            <tr>
              <td rowSpan="3"><label htmlFor="addr1">주소 : </label></td>
              <td>
                <button onClick={ window.openDaumPostcode } type="button" style={{ height:'30px', padding:'0 5px', verticalAlign:'middle', marginRight:'5px' }}>우편번호</button>
                <input style={{ width:'150px'}} type="text" id="zipCode" name="zipCode" value={userInfo.zipCode} onChange={handleChange} readOnly />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" id="addr1" name="addr1" value={userInfo.addr1} onChange={handleChange} readOnly />
              </td>
            </tr>
            <tr>
              <td>
                <input ref={addr2Ref} type="text" id="addr2" name="addr2" value={userInfo.addr2} onChange={handleChange} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btn">
          <button type="submit">회원가입</button>
          <button type="button" onClick={ onReset }>취소</button>
        </div>
      </form>
    </JoinSectionBlock>
  );
};

export default JoinSection;
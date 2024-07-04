import React from 'react';
import styled from 'styled-components'

const FooterBlock = styled.div`
  background:#454a56;
  padding:50px 0; 
  color:#fff;
  .row {
    .company_nav {
      border-bottom:1px solid #fff; 
      padding-bottom:30px; 
      margin-bottom:30px; 
      a {
        margin-right:20px; 
        &:hover, &:focus { color:yellow }
      }
    }
    .company_info {
      line-height:1.5em 
    }
  }
`

const Footer = () => {
  return (
    <FooterBlock>
      <div className="row">
        <div className="company_nav">
          <a href="#none">회사소개</a>
          <a href="#none">이용약관</a>
          <a href="#none">개인정보처리방침</a>
          <a href="http://www.naver.com" target="_blank">사업자정보확인</a>
          <a href="#none">공지사항</a>
        </div>
        <div className="company_info">
          <p>회사명 : (주)파리바게트 <span>대표 : 이훈희, 이진성</span></p>
          <p>주소 : 서울시 강남구 삼성로146길 4-5 스타쉽ENT (06070)</p>
          <p>전화번호 : <a href="tel:070-5158-9176">070-5158-9176</a> <span>이메일 : chamsogum@gmail.com</span></p>
          <p>개인정보책임자 서승연 / <a href="mailto:chamsogum@gmail.com">chamsogum@gmail.com</a></p>
          <p>Copyright Paris Baguette. All rights reserved.</p>
        </div>
      </div>
    </FooterBlock>
  );
};

export default Footer;
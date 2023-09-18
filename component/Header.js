import React from 'react'
import Headercss from "@/styles/Headercss.module.css";

const Header = () => {
  return (

    <header className={Headercss.header}>
      <div className={Headercss.atag_box}>
        <a>회원가입</a>
        <a>로그인</a>
        <a>주문조회</a>
        <a>고객센터</a>
      </div>
      <div className={Headercss.logo_box}>
        <img src='logo.png' alt='logo'></img>
      </div>
    </header>
  )
}

export default Header
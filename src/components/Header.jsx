import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper className='mb-5'>
      <div className="header-logo">
        <img src="./images/logo.png" alt="" className="logo" />
      </div>
        <Navbar />
    </Wrapper>
  )
}
const Wrapper = styled.section`
    display: flex;
    background-color: #f1f2f8;
    width: 100%;
    .header-logo{
      width: 50%;
      .logo{
        height: 80px;
        margin-left: 100px;
        margin-top: 15px;
      }
    }
`;

export default Header
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-link">
        <NavLink className='navlink' to='/'>
          Home
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink className='navlink' to='/product'>
          Products
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink className='navlink' to='/users'>
          Users
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink className='navlink' to='/contact'>
          Contact
        </NavLink>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display:flex;
    gap: 40px;
    padding: 30px;
    background-color: #f1f2f8;

    float: right;
    
    .nav-link{
      font-size: 30px;
      word-spacing: 2px;
      .navlink{
        text-decoration: none;
        color: black;
      }
      .navlink:hover{
        color: darkblue;
      }
    }
`;

export default Navbar;
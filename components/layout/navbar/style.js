import styled from 'styled-components';
import Link from 'next/link.js'
import {BiMenu} from 'react-icons/bi';
import {BiX} from 'react-icons/bi';

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 999;
  transition: ease all .4s;
  background:${(props)=>props.active ? 'white' : 'linear-Gradient(black 0%,transparent 100%)'};
  box-shadow: ${(props)=>props.active? '0px 1px 5px gray':'none'};
  `;
export const NavContent = styled.div`
  flex-direction: ${(props)=>props.active ? 'row':'row'};
  display: flex;
  padding: 1rem;
  margin: 0px auto;
  justify-content: space-between;
  align-items: center;
  @media(max-width:800px){
    flex-direction: row;
  }
`;
export const Logo = styled(Link)`
  /*background:  linear-gradient(90deg,
    ${(props)=>props.active ? 'transparent':'black'}  0%,transparent 80%);
  /*border-bottom: 3px solid ${(props)=>props.active ? 'white':'#084526'};*/
`;


export const Open = styled(BiMenu)`
  width: 40px;
  height: 40px;
  color: ${(props)=>props.active ? '#D7B34C':'#084526'};
`
export const Close = styled(BiX)`
  width:40px;
  height: 40px;
  color: ${(props)=>props.active ? '#D7B34C':'#084526'};

`

export const NavList = styled.nav`
  
`;
export const NavRow = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media(max-width:800px){
    display: ${(props)=>props.menu ? 'block':'none'};
    position: absolute;
    height: calc(100vh - 70px); 
    top: 68px;
    right: 0px;
    padding: 0px;
    width: 100%;
    z-index: 1000;
    background: ${(props)=> props.active ? 'white':'rgb(0,0,0,0.9)'};
    box-shadow:0px -29px 48px black;
  }
`;
export const NavItem = styled.li`
  display: flex;
  width: 80px;
  justify-content: center;
  background: linear-gradient(120deg, transparent 0%, transparent 50%, 
    ${(props)=> props.active ? '#D7B34C':'#084526'} 50%);
  background-size:220%;

  border-radius: 0px;
  border-bottom: 3px solid ${(props)=>props.active ? '#D7B34C':'#084526'};
  
  transition: all .4s;
  
  &:hover{
    background-position: 100%;
    transform: translate(0.5rem);
  }
  &:active{
    background: transparent   
  }
  
  @media(max-width:800px){
    margin:0 auto ;
    width: 90%;
    padding: 1rem;
    font-size: 64px;
    border-bottom: 3px solid ${(props)=>props.active ? '#D7B34C':'#084526'};
  }
`;
export const Item = styled(Link)`
`;

export const textItem = styled.a`
  padding: 0.3rem;
  cursor: pointer;
  @media(max-width:800px){
    width: 100%;
    height: 100%;
    font-size: 24px;
  }
  font-family: sans-serif;
  font-size: 17px;
  font-weight: 500;
  /*
  text-shadow: ${(props)=>props.active ? 'none': '0px 0px 5px black'} ;
  #D7B34C;
  */
  color: ${(props)=>props.active ? '#D7B34C': 'white'}; 
  transition: 1s;
  &:hover{
    color: ${(props)=>props.active ? 'white':'white'};
  }
`;
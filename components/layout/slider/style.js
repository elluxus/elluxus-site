import styled from 'styled-components';
import {AiOutlineWhatsApp} from 'react-icons/ai';

export const SliderContainer = styled.div`
  width: 100%;
  min-height: 450px;
  background: transparent;
`
export const SliderContent = styled.div`
  /*background: url('https://vnavidros.com.br/wp-content/uploads/2018/07/vidracaria-1.jpg') no-repeat;*/
  background: transparent;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  min-height: 500px;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0px 15px gray inset;
  z-index: 1;
`
export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  text-shadow: 1px -2px 6px black;
  color: white;
`
export const Anchor = styled.a`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  padding: 1rem;
  margin:12px 0px 12px;
  border-radius: 0px;
  color: white;
  background-size:300%;
  text-shadow: 0px 0px 10px black;
  transition: all .4s;
  cursor: pointer;
  &:hover{
    background:linear-gradient(120deg,#084 50%,#0848 100%) !important;
    color: whitesmoke !important;
    border: white !important;
    background-position: 100%;
    transform: translate(0.4rem);
  }
  &:active{
    background:linear-gradient(120deg,#08484465 50%,#084831 100%) !important;
  }
  @media(max-width:800px){
    font-size: 24px;
    height: auto !important;
    width: auto !important;
    padding: 1.4rem;
  }
`
export const WppIcon = styled(AiOutlineWhatsApp)``
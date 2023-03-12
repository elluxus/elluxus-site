import styled from 'styled-components';

export const Container = styled.div`
  width: ${(props)=>props.box ? '85%':'100%'};
  padding: 20px 24px ;
  height: auto;
`
export const Content = styled.div`
  display: flex;
  width: auto;
  height: auto;
  padding: 1rem;
  border-top:1px solid #D7B34C;
  border-bottom:1px solid #D7B34C;
  align-items: center;
  justify-content: center;
`
export const Form = styled.form`
  @media(min-width:800px){
    width: 50%;
    display: flex;
    flex-flow: row wrap ;
    column-gap: 20px;
    justify-content: center;
  }
`
export const InputDiv = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 12px;
`

export const Inputs = styled.input`
  width: 100%;
  padding: 1.5rem 1rem 1rem;
  border-radius: 2px;
  border:1px solid #d4d6d8;
  font-size: 1rem;
  -webkit-appearance:none;
  flex-direction: column;
  transition: border-color .2s ease-in-out,box-shadow .2s ease-in-out,color .2s ease-in-out;
  margin:0px auto 10px;
  &:active, &:focus{
    outline: none !important;
    border: 2px solid #084526;
  }
  @media(max-width:800px){
    font-size: 24px;
  }
`

export const TextArea = styled.textarea`
  height: 200px;
  line-height: inherit;
  border-radius:2px ;
  border:1px solid #d4d6d8;
  min-height: 160px;
  width: 100%;
  font-family:sans-serif;
  font-size: 1rem;
  resize: none;
  padding: 1.5rem 1rem;
  &:active, &:focus{
    outline: none !important;
    border: 2px solid #084526;
  }
  @media(max-width:800px){
    font-size: 24px;
  }
`

export const Labels = styled.label`
  position: absolute;
  left: ${(props)=>props.actRequire !== '' ? '15px':'22px'};
  color: #8f9295;
  top:  ${(props)=>props.actRequire !== '' ? '3px':'5px'};
  line-height: 48px;
  font-size: 1rem;
  transform: ${(props)=>props.actRequire !== '' ? 'scale(0.6)':'scale(1)'};
  transform-origin: left top;
  transition: transform .2s ease-in-out;
  pointer-events:none;
  z-index: 200;
  ${Inputs}:active + &, 
  ${Inputs}:focus + &{
    transform: scale(0.6);
    top: 3px;
    left:15px;
  }
  ${TextArea}:active + &, 
  ${TextArea}:focus + &{
    transform: scale(0.6);
    top: 3px;
    left:15px;
  }
  @media(max-width:800px){
    font-size: 24px;
  }
`

export const SendButton = styled.button`
  display: flex;
  border: none;
  background: #084923;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  padding: 1rem;
  margin:0px auto;
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
  }
`

export const AreaContact = styled.div``

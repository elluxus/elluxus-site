import styled from 'styled-components';


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
  /*${TextArea}:active + &, 
  ${TextArea}:focus + &{
    transform: scale(0.6);
    top: 3px;
    left:15px;
  }*/
  @media(max-width:800px){
    font-size: 24px;
  }
`
import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  color: #4b4b4b;
  padding: 2rem 0;
  background: white;
  height: 300px;
  flex-direction:row;
  gap:20px;
  justify-content: center;
  box-shadow: 0px -1px 5px gray;
  border-top: solid 1px #D7B34C;
  @media(max-width:900px){
    height: auto;
    flex-direction:column;
  }
`

export const Content = styled.div`
  width: 300px;
  align-items: center;
  justify-content:center;
  font-family:sans-serif;
  @media(max-width:900px){
    margin:0px 25px
  }
`
export const Subcontent = styled.div`
  background: whitesmoke;
  display:flex;
  color:#1d1d1d;
  height: 80px;
  justify-content:space-around;
  align-items: center;
  border-top: solid 1px #D7B34C;
  @media(max-width:900px){
    margin:0px 25px
  }
`
export const Anchor = styled.a`
  margin-bottom: 4px;
  justify-content: space-around;
  cursor: pointer;
  text-decoration: underline; 
  &:hover{
    color: #D7B34C;
  }
`

import styled from 'styled-components';

export const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background: ${(props)=>props.white ? 'white'
  :'url("https://vnavidros.com.br/wp-content/uploads/2018/07/vidracaria-1.jpg")'};
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`
export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #1a1d23;
  justify-content: center;
  align-items: center;
  background: #1a1d23;
`
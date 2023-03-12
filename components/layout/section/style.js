import css from 'styled-jsx/css'

export default css.global`
  width: ${(props)=>props.box ? '85%':'100%'};
  min-height: 500px;
  padding: 20px 24px ;
  padding-bottom: 90px;
  margin: 0px auto 90px;
  font-family: sans-serif;
`
export const Content = styled.div`
  display: flex;
  border-top:1px solid #D7B34C;
  border-bottom:1px solid #D7B34C;
  justify-content: space-around;
  align-items: center;
  text-align: left;
  flex-direction: ${(props)=>props.reverb ? 'row-reverse' : 'row'};
  gap:2rem;
  @media(max-width:800px){
    flex-direction: column;
    height: auto !important;
  }
`
export const SubContent =styled.div`
  box-shadow: 4px 5px 0px gray;
  height: 300px;
  width: 800px;
  border-radius: 2px;
  justify-content: space-between;
  background:white;
  background-position: center;
  background-size: cover;
  position: relative;
  @media(max-width:800px){
    width: 300px;
  }
`
export const TextDiv =  styled.div``

export const Title = styled.h1`
`
export const SubTitle = styled.h2``
export const Text = styled.div``

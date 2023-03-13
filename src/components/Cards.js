import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row ;
    gap:1rem;
`
const CardContainer = styled.div`
    padding: 2.4rem;
    background-color: whitesmoke;
    border-radius: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 2px 2px 0px gray;
`
const TitleCard = styled.h3`
    margin-bottom: 0.8rem;
    font-size: 1.8rem;
    font-weight: bold;
    color: gray;
`
const Text = styled.p`
    margin-bottom: 1.8rem;
    color: gray;
`
const Anchor = styled.a``

const Card = ()=>{
    return(
        <Container>
            <CardContainer>
                <TitleCard>heelo</TitleCard>
                <Text>hsdajkshdkjashdkjashdkjasdhakjsdhkj</Text>
            </CardContainer>
            <CardContainer>
                <TitleCard>heelo</TitleCard>
                <Text>dkajsdjkhaskjhdjkashdasdkaskjdhakjsdh</Text>
            </CardContainer>
            <CardContainer>
                <TitleCard>heelo</TitleCard>
                <Text>dasdhajksdhjkashdjkashdjkasdhjkasdhjkadh</Text>
            </CardContainer>
        </Container>
    )
}

export default Card;
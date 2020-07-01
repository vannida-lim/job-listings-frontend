import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 0 auto;
    z-index: 2;
    position: relative;
    border-radius: 5px;
    height: 65px; 
    width: 75%;
    top: 100px;
    background: #fff;
    text-align: center;
    box-shadow: 0px 0px 20px hsla(179, 29%, 51%, 0.5), 0px 7px 20px hsla(179, 29%, 51%, 0.19);
    @media (max-width: 375px) {
       width: 90%;
       z-index: 2;
    }
`

const Button = styled.button`
    border-radius: 5px;
    border-style: none;
    background: hsla(180, 52%, 94%, 1);
    color: #5EA4A4;
    font-weight: 700;
    padding: 7px 14px;
    margin: 18px 5px; 
    font-size: 12px;
    height: 30px;
    &:hover {
        background: #5EA4A4;
        color: white;
    }
`

const Filter = (props) => {
    return(
        <Wrapper>
            <Button onClick={(e) => props.onClick(e)}>All</Button>
            <Button onClick={(e) => props.onClick(e)}>Frontend</Button>
            <Button onClick={(e) => props.onClick(e)}>Backend</Button>
            <Button onClick={(e) => props.onClick(e)}>Fullstack</Button>
            <Button onClick={(e) => props.onClick(e)}>Senior</Button>
            <Button onClick={(e) => props.onClick(e)}>Midweight</Button>
            <Button onClick={(e) => props.onClick(e)}>Junior</Button> 
        </Wrapper>
    )
}

export default Filter;
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    border-style: solid;
    margin: 0 auto;
    z-index: 2;
    position: relative;
    width: 75%;
    top: 100px;
    background: #fff;
    box-shadow: 0px 0px 20px hsla(179, 29%, 51%, 0.5), 0px 7px 20px hsla(179, 29%, 51%, 0.19);
    @media (max-width: 375px) {
       width: 90%;
       z-index: 2;
    }
    

`
//add 2% padding to buttons later
class Filter extends React.Component {
    render(){
        return(
            <Wrapper>
                <div>Filter</div> 
            </Wrapper>
        )
    }
}

export default Filter;
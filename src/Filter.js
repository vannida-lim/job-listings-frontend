import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    border-style: solid;
    margin: 0 auto;
    z-index: 2;
    position: relative;
    width: 75%;
    top: 100px;
    

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
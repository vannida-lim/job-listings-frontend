import React from 'react'
import styled from 'styled-components'

import Job from './Job'

const Wrapper = styled.div`
    margin: 0 auto;
    border-style: solid;
    position: relative;
    z-index: 2;
    width: 75%;
    top: 100px;
`
class JobList extends React.Component {
    render() {
        // console.log(this.props.data)
        return(
            <Wrapper>
                {this.props.data.map((job) => <Job job={job}/>)}
            </Wrapper>
        )
    }
}

export default JobList;
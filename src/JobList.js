import React from 'react'
import styled from 'styled-components'

import Job from './Job'

const Wrapper = styled.div`
    margin: 0 auto;
    position: relative;
    z-index: 2;
    width: 75%;
    top: 100px;
    @media (max-width: 375px) {
        width: 90%;
    }
`
class JobList extends React.Component {

    displayJobs = () => {
        return this.props.data.map((job) => <Job 
            key={job.id} 
            job={job}
            />
        )
    }

    render() {
        return(
            <Wrapper>
                {/* {this.props.data.map((job) => <Job key={job.id} job={job}/>)} */}
                {this.displayJobs()}
            </Wrapper>
        )
    }
}

export default JobList;
import React from 'react'
import Job from './Job'


class JobList extends React.Component {
    render() {
        console.log(this.props.data)
        return(
            <div>
                {/* <h1>{this.props.company}</h1> */}
                {this.props.data.map((job) => <Job job={job}/>)}
                {/* <Job job={this.props}/> */}
        
            </div>
        )
    }
}

export default JobList;
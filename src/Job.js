import React from 'react'
import logo from './images/account.svg'

const Job = (props) => {
    console.log(props.job.logo)
    return (
        <div>
            {/* <img src={logo} alt='test'/> */}
            <img src={require(props.job.logo)} alt='avatar'/>
            <h1>{props.job.company}</h1>
            <div>{props.job.new ? 'new': ''}</div>
            <div>{props.job.featured ? 'featured' : ''}</div>
            <div>{props.job.position}</div>
            <div>{props.job.postedAt}</div>
            <div>{props.job.contract}</div>
            <div>{props.job.location}</div>

            <div>{props.job.role}</div>
            <div>{props.job.level}</div>
            <div>{props.job.languages.map((lan) => lan)}</div>
            <div>{props.job.tools.map((tool) => tool)}</div>
       
        </div>
    )
}

export default Job;
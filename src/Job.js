import React from 'react'
import styled from 'styled-components'
// import account from './images/account.svg'
// import eyecam from './images/eyecam-co.svg'
// import faceit from './images/faceit.svg'
// import insure from './images/insure.svg'
// import loopstudios from './images/loop-studios.svg'
// import manage from './images/manage.svg'
// import myhome from './images/myhome.svg'
// import photosnap from './images/photosnap.svg'
// import shortly from './images/shortly.svg'
// import theairfiltercompany from './images/the-air-filter-company.svg'

const JobDiv = styled.div`
    border-style: solid;
    border-color: blue;
    padding: 2%;
    margin-top: 3%;
`

// const logos = {
//     account, 
//     eyecam,
//     faceit,
//     insure,
//     loopstudios,
//     manage,
//     myhome,
//     photosnap,
//     shortly,
//     theairfiltercompany
// }
const Logo = styled.img`

`

const Company = styled.div`
    font-size: 1.3em;
    color: #5EA4A4;
    font-weight: 500;
`

const Position = styled.div`
    font-size: 1.5em;
    font-weight: 700;
    :hover: {
        background-color: #5EA4A4;
    }

`

const Info = styled.div`
    border-style: solid;

`

const InfoText = styled.div`
    color: grey;
    display: inline-block;
    padding: 5px;

`

const Job = (props) => {
    // console.log(props.job.logo)
    // console.log(logos)
    return (
        <JobDiv>
            {/* <img src={logo} alt='test'/> */}
            {/* <img src={require(props.job.logo)} alt='avatar'/> */}
            {/* <img src={props.job.logo} alt='avatar'/> */}
            {/* <img src={account} alt='avatar'/> */}
            {/* {logos.map((logo) => <img src={require(logo)} alt='logo'/>)} */}
            {/* {props.job.company === manage? <img src={manage} alt='logo'/> : null} */}

            <Logo src={props.job.logo}/>
            <Company>{props.job.company}</Company>
            <div>{props.job.new ? 'new': ''}</div>
            <div>{props.job.featured ? 'featured' : ''}</div>
            <Position>{props.job.position}</Position>
            <Info>
                <InfoText>{props.job.postedAt}   •</InfoText>
                <InfoText>{props.job.contract}   •</InfoText>
                <InfoText>{props.job.location}</InfoText>
            </Info>

            <div>{props.job.role}</div>
            <div>{props.job.level}</div>
            <div>{props.job.languages.map((lan) => lan)}</div>
            <div>{props.job.tools.map((tool) => tool)}</div>
       
        </JobDiv>
    )
}

export default Job;
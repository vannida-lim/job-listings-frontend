import React from 'react'
import styled from 'styled-components'

const JobDiv = styled.div`
    border-style: solid;
    border-color: blue;
    padding: 2%;
    margin-top: 3%;
`

const Logo = styled.img`
    border-style: solid;
    display: inline-block;
`
const CompanyContainer = styled.div`
    display: inline-block;
    border-style: solid;
`

const Company = styled.div`
    font-size: 1.3em;
    color: #5EA4A4;
    font-weight: 700;
    display: inline-block;
`

const New = styled.div`
    border-radius: 90px;
    background-color: #5EA4A4;
    color: white;
    font-weight: 700;
    display: inline-block;
    padding: 8px;
    height: 9px;
    font-size: 0.7em;
    margin: 10px;
`

const Featured = styled.div`
    border-radius: 90px;
    background-color: #2d3939;
    color: white;
    font-weight: 700;
    display: inline-block;
    padding: 8px;
    height: 9px;
    font-size: 0.7em;
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
    return (
        <JobDiv>
            <Logo src={require(`${props.job.logo}`)}/>
            <CompanyContainer>
                <Company>{props.job.company}</Company>
                {props.job.new ? <New>NEW!</New>: ''}
                {props.job.featured ? <Featured>FEATURED</Featured> : ''}
           </CompanyContainer>
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
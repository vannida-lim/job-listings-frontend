import React from 'react'
import styled from 'styled-components'

const JobDiv = styled.div`
    padding: 2%;
    margin-top: 3%;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    background: #fff;
	border-radius: 5px;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05), 0px 7px 20px rgba(0, 0, 0, 0.19);
    @media (max-width: 375px) {
        display: flex;
        flex-direction: column;
        overflow: visible;
    }
`

const Logo = styled.img`
    align-self: center;
    @media (max-width: 375px) {
        width: 30px;
        height: 30px;
        align-self: start;
        position: relative;
        top: -25px;
    } 
`

const LeftSide = styled.div`
    justify-self: start;
    align-self: center;
    @media (max-width: 375px) {
        border-bottom: 1px solid #8b9493;
    }
`

const CompanyContainer = styled.div`
    grid-column: 1;
    z-index: 1;
    padding: 5px;
`

const Company = styled.div`
    font-size: 15px;
    color: #5EA4A4;
    font-weight: 700;
    display: inline-block;
    @media (max-width: 375px) {
        display: inline-block;
        width: 100%;
        font-size: 10px;
    }
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
    font-size: 20px;
    font-weight: 700;
    &:hover {
       color: #5EA4A4;
    }
    grid-column: 1;
    z-index: 2;
    padding: 5px;
`

const Info = styled.div`
    grid-column: 1;
    z-index: 3;
    padding: 5px;
`

const InfoText = styled.div`
    font-size: 15px;
    color: grey;
    display: inline-block;
    padding: 5px;
`

const RightSide = styled.div`
    align-self: center;
    display: flex;
    justify-content: space-between;
    @media (max-width: 375px) {

    }
`

const Details = styled.button`
    border-radius: 5px;
    border-style: none;
    background: hsla(180, 52%, 94%, 1);
    color: #5EA4A4;
    font-weight: 700;
    padding: 7px 14px;
    margin: 0 5px; 
    font-size: 12px;
    justify-self: end;
    &:hover {
        background-color: #5EA4A4;
        color: white;
    }
`

const Job = (props) => {
    return (
        <div>
            {props.job.new && props.job.featured ? 
            <JobDiv style={{borderLeft: '6px solid hsl(179, 29%, 51%)'}}>
                <Logo src={require(`${props.job.logo}`)}/>
                <LeftSide>
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
                </LeftSide>

                <RightSide>
                    <Details>{props.job.role}</Details>
                    <Details onClick={props.handleClick}>{props.job.level}</Details>
                    {props.job.languages.map((lan) => <Details>{lan}</Details>)}
                    {props.job.tools.map((tool) => <Details>{tool}</Details>)}
                </RightSide>
       
            </JobDiv> 
            : 
            <JobDiv>
                <Logo src={require(`${props.job.logo}`)}/>
                <LeftSide>
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
                </LeftSide>

                <RightSide>
                    <Details>{props.job.role}</Details>
                    <Details>{props.job.level}</Details>
                    {props.job.languages.map((lan) => <Details>{lan}</Details>)}
                    {props.job.tools.map((tool) => <Details>{tool}</Details>)}
                </RightSide>
        
            </JobDiv>}
        </div>
    )
}

export default Job;
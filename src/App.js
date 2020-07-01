import React from 'react'
import styled from 'styled-components'

import JobList from './JobList'
import Filter from './Filter'
import data from './data/data.json'

import BgHeaderDesktop from './images/bg-header-desktop.svg'

const Wrapper = styled.div`
  border-styled: solid;
  border-color: red;
`

const Header = styled.img`
  display: inline-block;
  width: 100%;
  background: #5ea4a4;
  position: absolute;
  z-index: 1;
  @media (max-width: 375px) {
    transform: scale(1.1);
    display: inline-block;
  }
`

class App extends React.Component {
  state = {
    data,
    filtered: []
  }

  componentDidMount() {
    fetch('./data/data.json')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        data: data
      })
    })
  }

  handleFilter = (e) => {
    if (e.target.innerHTML === 'All') {
      this.setState({
        filtered: data
      })
    }
    let filteredJobs = this.state.data.filter(job => job.role === e.target.innerHTML || job.level === e.target.innerHTML)
    if (e.target.innerHTML !== 'All') {
      this.setState({
        filtered: filteredJobs
      })
    }
  }

  render() {
    console.log(this.state.data)
    return(
      <Wrapper>
        <Header src={BgHeaderDesktop}/>
        <Filter onClick={this.handleFilter}/>
        {/* <JobList data={this.state.data}/> */}
        <JobList data={this.state.filtered.length === 0? this.state.data : this.state.filtered}/>
      </Wrapper>
    )
  }
}
export default App;

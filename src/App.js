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
`


class App extends React.Component {
  state = {
    data
  }

  render() {
    // console.log(this.state)
    return(
      <Wrapper>
        <Header src={BgHeaderDesktop}/>
        <Filter/>
        <JobList data={this.state.data}/>
      </Wrapper>
    )
  }
}
export default App

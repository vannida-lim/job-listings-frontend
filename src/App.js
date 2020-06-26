import React from 'react'
import JobList from './JobList'
import Filter from './Filter'
import data from './data/data.json'


class App extends React.Component {
  state = {
    data
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <Filter/>
        <JobList data={this.state.data}/>
      </div>
    )
  }
}
export default App

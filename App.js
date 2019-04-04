import React, { Component } from 'react'
import Table from './Table'

const name = 'Jimmy'
const heading = <h1>Hello, {name}</h1>

class App extends Component {
    render() {
      const characters = [
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Mac',
          job: 'Bouncer',
        },
        {
          name: 'Dee',
          job: 'Aspring actress',
        },
        {
          name: 'Dennis',
          job: 'Bartender',
        },
      ]
      return (
        <div className="App">
           <h1>{ heading }</h1>
           <div className="container">
           <Table characterData={characters} />
           </div>
        </div>
      )
    }
  }

  export default App
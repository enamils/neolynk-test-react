import React from 'react'
import './App.css';

import Form from './components/Form'
import List from './components/List'
import ListDisplay from './components/ListDisplay'

class App extends React.Component {

  state = {
    listing: [],
    contacts: []
  }

  addListing = (title) => {
    const newList = {
      title: title
    }

    this.setState({ listing: [...this.state.listing, newList]})
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(err => console.error(err))
  }

  render () {
    return (
      <div className='App'>
        <h1>NEOLYNK Test React</h1>
        <Form addListing={this.addListing} />
        <List listing={this.state.listing} />
        <ListDisplay contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App

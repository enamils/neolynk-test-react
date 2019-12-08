import React from 'react'
import './App.css';

import Form from './components/Form'
import List from './components/List'

class App extends React.Component {

  state = {
    listing: [],
    contacts: []
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://jsonplaceholder.typicode.com/users')
      const json = await response.json()
      this.setState({ contacts: json })
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    return (
      <div className='App'>
        <h1>NEOLYNK Test React</h1>
        <Form addListing={this.addListing} />
        <List listing={this.state.listing} />
        {this.listDisplay()}
      </div>
    )
  }

  addListing = (title) => {
    const newList = {
      title: title
    }

    this.setState({ listing: [...this.state.listing, newList] })
  }

  listDisplay = () => {
    const { contacts } = this.state

    return (
      <React.Fragment>
        {contacts.map((contact, index) => (
          <div className="card" key={`${contact}-${index}`}>
            <div className="card-body">
              <h5 className="card-text">{contact.name}</h5>
            </div>
          </div>
        ))}
      </React.Fragment>
    )
  }
}

export default App

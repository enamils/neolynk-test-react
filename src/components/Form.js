import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
    static propTypes = {
        addListing: PropTypes.func.isRequired
    }

    state = {
        title: ''
    }

    handleSubmitMessage = (e) => {
        const { addListing } = this.props

        e.preventDefault()
        addListing(this.state.title)
        this.setState({ title: '' })
    }

    handleInputMessage = (e) => this.setState({ title: e.target.value })

    render() {
        return (
            <form onSubmit={this.handleSubmitMessage}>
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Ajoutez du texte...'
                        value={this.state.title}
                        onChange={this.handleInputMessage}
                    />
                </div>
                <div className='form-group'>
                    <button type="submit" className="btn btn-primary">Valider</button>
                </div>
            </form>
        )
    }
}

export default Form
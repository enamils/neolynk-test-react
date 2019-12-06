import React from 'react'
import PropTypes from 'prop-types'

class ListItem extends React.Component {
  static propTypes = {
    listing: PropTypes.object.isRequired,
  }

  render() {
    const { listing } = this.props
    const { title } = listing

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-text">{title}</h5>
        </div>
      </div>
    )
  }
}

export default ListItem
import React from 'react'

const ListItem = ({ listing }) => {
  const { title } = listing

      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-text">{title}</h5>
          </div>
        </div>
      )
}

export default ListItem
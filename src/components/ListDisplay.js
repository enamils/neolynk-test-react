import React from 'react'

const ListDisplay = ({ contacts }) => {

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
};

export default ListDisplay
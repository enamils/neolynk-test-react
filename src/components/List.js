import React from 'react'
import ListItem from './ListItem';

class List extends React.Component {

    render() {
        const { listing } = this.props

        return listing.map((listing, index) => (
            <ListItem key={`${listing}-${index}`} listing={listing} />
        ));
    }
}


export default List
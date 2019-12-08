import React from 'react'
import ListItem from './ListItem';

const List = ({ listing }) => {

    return listing.map((listing, index) => (
        <ListItem key={`${listing}-${index}`} listing={listing} />
    ));
}


export default List
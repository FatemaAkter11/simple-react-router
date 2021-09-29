import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;
    const FriendSyles = {
        border: '2px solid greenyellow',
        borderRadius: '10px',
        padding: '10px'
    }
    const url = `/friend/${id}`;
    return (
        <div style={FriendSyles}>
            <h2>This is {name} {id}</h2>
            <h5>Call me:{phone}</h5>
            <h6>Visit me:{website}</h6>
            <p><small>I live in {address.city}</small></p>
            <Link to={url}>Please Visit Me</Link>
        </div>
    );
};

export default Friend;
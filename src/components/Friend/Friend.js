import React from 'react';

const Friend = (props) => {
    const { name, phone, website, address } = props.friend;
    const FriendSyles = {
        border: '2px solid greenyellow',
        borderRadius: '10px',
        padding: '10px'
    }
    return (
        <div style={FriendSyles}>
            <h2>This is {name}</h2>
            <h5>Call me:{phone}</h5>
            <h6>Visit me:{website}</h6>
            <p><small>I live in {address.city}</small></p>
        </div>
    );
};

export default Friend;
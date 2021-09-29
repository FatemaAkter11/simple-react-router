import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;

    const history = useHistory();

    const FriendSyles = {
        border: '2px solid greenyellow',
        borderRadius: '10px',
        padding: '10px'
    }
    const btnStyle = {
        backgroundColor: 'tomato',
        color: 'white',
        fontSize: '20px',
        border: '1px solid lightgray',
        borderRadius: '5px',
        padding: '10px'
    }

    const url = `/friend/${id}`;

    const handleFriendClick = () => {
        history.push(`/friend/${id}`);
    }

    return (
        <div style={FriendSyles}>
            <h2>This is {name} {id}</h2>
            <h5>Call me:{phone}</h5>
            <h6>Visit me:{website}</h6>
            <p><small>I live in {address.city}</small></p>
            <Link to={url}>Please Visit Me</Link>
            <br />
            <br />
            <Link to={url}>
                <button style={btnStyle}>Visit Me</button>
            </Link>
            <br />
            <br />
            <button style={btnStyle} onClick={handleFriendClick}>Visit me 2</button>
        </div>
    );
};

export default Friend;
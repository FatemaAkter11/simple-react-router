import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});

    const history = useHistory();

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, []);
    const FriendSyles = {
        border: '5px solid lightblue',
        borderRadius: '10px',
        padding: '10px',
        margin: '150px'
    }
    const btnStyle = {
        backgroundColor: 'tomato',
        color: 'white',
        fontSize: '20px',
        border: '1px solid lightgray',
        borderRadius: '5px',
        padding: '10px'
    }

    const handleClick = () => {
        history.push('/friends');
    }

    return (
        <div style={FriendSyles}>
            <h3>Friend detail is coming soon: {friendId}</h3>
            <h2>This is: {friend.name}</h2>
            <h3>Call me: {friend.phone}</h3>
            <h5>Visit Me: {friend.website}</h5>
            <h4>Works At:{friend.company?.name} </h4>
            <button style={btnStyle} onClick={handleClick}>All the Friends</button>
        </div>
    );
};

export default FriendDetail;
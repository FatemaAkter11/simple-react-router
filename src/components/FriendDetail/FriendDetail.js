import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});

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
    return (
        <div style={FriendSyles}>
            <h3>Friend detail is coming soon: {friendId}</h3>
            <h4>This is: {friend.name}</h4>
            <h5>Call me: {friend.phone}</h5>
            <h5>Visit Me: {friend.website}</h5>
            <h6>Company:{friend.company?.name} </h6>
        </div>
    );
};

export default FriendDetail;
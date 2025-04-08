import { use } from "react"
import Friend from './Friend';

export default function Friends({friendsPromise}){

    const friends = use(friendsPromise);

    const friendsStyle = {
        border: '2px solid blue',
        margin: '10px',
        padding: '10px',
        borderRadius: '20px'
    }
    return(
        <div style={friendsStyle}>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}
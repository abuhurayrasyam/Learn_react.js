import { useEffect, useState } from "react"


export default function Users(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    const usersStyle = {
        border: '2px solid gold',
        margin: '10px',
        padding: '10px',
        borderRadius: '20px'
    }
    return(
        <div style={usersStyle}>
            <h3>Users: {users.length}</h3>
            <ol>
                {
                    users.map(user => <li>{user.name}</li>)
                }
            </ol>
        </div>
    )
}
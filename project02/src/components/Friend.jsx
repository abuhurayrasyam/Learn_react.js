export default function Friend({friend}){

    const {name, email, phone} = friend;

    const friendStyle = {
        border: '2px solid blue',
        margin: '10px',
        padding: '10px',
        borderRadius: '20px'
    }
    return(
        <div style={friendStyle}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone Number: {phone}</p>
        </div>
    )
}
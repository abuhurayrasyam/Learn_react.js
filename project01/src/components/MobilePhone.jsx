export default function Mobile({name}){
    const mobileStyle = {
        border: '2px solid red',
        borderRadius: '10px',
        marginBottom: '5px',
    }
    return(
        <div style={mobileStyle}>
            <p>Name: {name}</p>
        </div>
    )
}
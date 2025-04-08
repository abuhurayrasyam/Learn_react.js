import '../App.css'

export default function Person({person}){
    return(
        <div className="person">
            <h3>Name: {person.name}</h3>
            <h4>Age: {person.age}</h4>
            <p>Department: {person.dept}</p>
        </div>
    )
}
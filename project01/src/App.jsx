import './App.css'
import Mobile from './components/MobilePhone';
import Task from './components/Task';
import City from './components/City';
import Person from './components/Person';

function App() {
  // const time = 0;
  const cites = ['Dhaka', 'Tangail', 'Ghatail', 'Dewlabari'];
  const persons = [
    {id:1, name: 'Abu Hurayra', age: 21, dept: 'Computer Science'},
    {id:2, name: 'Sanjida Sinha', age: 15, dept: 'Medical Science'}
  ];
  return (
    <>
      <h1>Vite + React</h1>

      {/* <Person></Person>
      <Developer name='Abu Hurayra' tech='JS'></Developer>
      <Developer name='Hurayra'></Developer>
      <Student name='Sanjida' dept='Medical Science'></Student>
      <Student name='Syam' dept='Computer Science'></Student>
      <Student name='Sinha'></Student> */}

      {/* <Mobile name='Samsung'></Mobile>
      <Mobile name='OnePlus'></Mobile> */}

      {/* Organized Codes */}
      {/* <Task 
        task='Learn React' 
        isDone={true} 
        duration= '60'>
      </Task>
      <Task 
        task='Learn Vue' 
        isDone={false} 
        duration={time}>
      </Task>
      <Task
        task='Learn Laravel' 
        isDone={true} 
        duration='120'>
      </Task>
      <Task 
        task='Learn SQL' 
        isDone={false} 
        duration={time}>
      </Task> */}

      {
        cites.map(city => <City city={city}></City>)
      }

      {
        persons.map(person => <Person key={person.id} person={person}></Person>)
      }
    </>
  )
}

// function Person(){
//   const name = "Abu Hurayra";
//   const age = 21;
  
//   const personStyle = {
//     color: 'green',
//     fontSize: '20px'
//   }
//   return(
//     <>
//       <p style={personStyle}>My Name is {name} and My Age is {age}</p>
//     </>
//   )
// }

// function Developer(props){
//   return(
//     <>
//       <div style={{
//           border: '2px solid purple',
//           borderRadius: '10px',
//           marginBottom: '5px',
//       }}>
//         <p>Developer: {props.name}</p>
//         <p>Technology: {props.tech}</p>
//       </div>
//     </>
//   )
// }

// function Student({name, dept = 'Non Department'}){
//   return(
//     <div className='student'>
//       <p>Name: {name}</p>
//       <p>Department: {dept}</p>
//     </div>
//   )
// }

export default App

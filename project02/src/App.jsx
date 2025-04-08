import './App.css'
// import Counter from './components/Counter';
// import Batsman from './components/Batsman';
import Users from './components/Users';
import Friends from './components/Friends';
import { Suspense } from 'react';

const fetchFriends = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

function App() {

    // const handleClick = () => {
    //   alert('I am Clicked 01')
    // }

    // const handleClickSum = (num) => {
    //   const newNum = num + 5;
    //   alert(newNum);
    // }

    const friendsPromise = fetchFriends();

  return (
    <>
      <h1>Vite + React</h1>
      {/* <button onClick={handleClick}>Btn01 Click Me</button>

      <button onClick={() => alert('I am Clicked 02')}>Btn02 Click Me</button>

      <button onClick={() => handleClickSum(7)}>Btn03 Click Me</button> */}

      {/* <Counter></Counter> */}

      {/* <Batsman></Batsman> */}

      <Users></Users>

      <Suspense fallback={<h3>Friends are Coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
    </>
  )
}

export default App

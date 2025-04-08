import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch('https://restcountries.com/v3.1/all').then(response => response.json());

function App() {

  return (
    <>
      <Suspense fallback={<h4>Countries are Loading...</h4>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App

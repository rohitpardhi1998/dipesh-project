import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
function App() {
  // const [count, setCount] = useState(0); 

  useEffect(() =>  console.warn("Component rendered successfully"));

  return (
    <>
 <Navbar/>
 <Home/>
    </>
  )
}
export default App;
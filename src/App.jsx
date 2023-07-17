import { useState, useEffect } from 'react'
import getAllStarships from './components/sw-api'
import ShipCard from './components/ShipCard'

import './App.css'
import Header from './components/Header'



function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getAllStarships(setData) 
  },[])

  
  return (
    <div>
      <Header/>
      <main><ShipCard data={data}/></main>     
    </div>
  );
}

export default App

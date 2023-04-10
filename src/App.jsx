import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import { Link } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Sidebar />
      <div className='main'>
        <h1 id='home-header'>Welcome to the Candy Crewmate Creator</h1>
        <h3>You can create a whole crew of Sour Patch Crewmates!</h3>
        <button>
          <Link to={'/create-crewmate'}>Create a Crewmate</Link>
        </button>
      </div>
    </div>
  )
}

export default App

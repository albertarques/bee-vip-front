import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Buttons from './components/Buttons'

function App() {

  return (
    <>

    <Buttons/>
      {/* <Router>
        <Routes>
          <Route path='/' element={ <Dashboard /> } />
          <Route path='/entrepreneurships' element={ <Dashboard /> } />
        </Routes>
      </Router> */}
    </>
  )
}

export default App

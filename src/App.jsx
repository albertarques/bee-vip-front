import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Dashboard /> } />
          <Route path='/entrepreneurships' element={ <Dashboard /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App

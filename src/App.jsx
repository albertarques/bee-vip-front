import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Login from './components/Login'
import Home from './views/Home'



function App() {

  return (
    <>
   <Login></Login>
      <Router>
        <Routes>
          <Route path='/' element={ <Dashboard /> } />
          <Route path='/entrepreneurships' element={ <Dashboard /> } />
          <Route path='/home' element={ <Home /> } />
        </Routes>
      </Router> 
    </>
  )
}

export default App

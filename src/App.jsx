
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/Shared/Layout'
import Dashboard from './Components/Dashboard'
import Products from './Components/Produucts'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Dashboard/>} />
          <Route path='products' element={<Products/>}/>
   </Route>
   <Route path='login' element={<div>Log in Page</div>} />
      </Routes>
    </Router>
  )
}

export default App

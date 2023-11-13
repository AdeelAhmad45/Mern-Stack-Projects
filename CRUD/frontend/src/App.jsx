
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './components/User'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'

function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes >
        <Route path='/' element={<User />}/>
        <Route path='/createuser' element={<CreateUser />}/>
        <Route path='/update' element={<UpdateUser />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

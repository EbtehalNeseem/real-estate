import './App.css'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Properties from './pages/Properties'
import EditProperty from './pages/EditProperty'
import AddProperty from './pages/AddProperty'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={< Register/>}/>
        <Route path='/dashboard' element={< Dashboard/>}/>
        <Route path='/dashboard/properties' element={< Properties/>}/>
        <Route path='/dashboard/properties/:id/edit' element={<EditProperty/>}/>
        <Route path='/dashboard/properties/add' element={<AddProperty/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'
import EmployeeList from './EmployeeList'
import EmployeeAdd from './EmployeeAdd'
import EmployeeDetails from './EmployeeDetails'
import EmployeeEdit from './EmployeeEdit'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeeList/>}/>
        <Route path='/employee/add' element={<EmployeeAdd/>}/>
        <Route path='/employee/edit/:id' element={<EmployeeEdit/>}/>
        <Route path='/employee/details/:id' element={<EmployeeDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

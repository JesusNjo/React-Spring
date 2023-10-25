import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { DataList } from './DataList'
import { NavBar } from './NavBar'
import { Form } from './Form'

export const DataUser = () => {
    
  return (
    <>
    <BrowserRouter>
        <NavBar/>
   
    <Routes>
        <Route path="/" element={
            <>
        <h1>User List</h1>
        <DataList/>
        </>
        }
        />
       

        <Route path="/crear" element={
        <>
        <h1>Formulario</h1>
        <Form/>
        </>
        
        
        }/>

    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

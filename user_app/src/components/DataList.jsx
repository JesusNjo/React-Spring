import React, { useEffect, useState } from 'react'
import { deleteUser, getInformation } from '../services/DataService';

export const DataList = () => {
    const [data,setData] = useState([]);

    const deleteUserSubmit= async(user)=>{
       await deleteUser(user.id);
       const newUser = data.filter(p => p.id != user.id); 

       setData(newUser);

    }
   

    useEffect(()=>{getInformation().then(res=> setData(res.getInfo)).catch()}, []);
  return (
    <>
    <table className='table'>
        <thead >
            <tr >
            <th scope='col'>id</th>
            <th scope='col'>Name</th>
            <th scope='col'>Last name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Age</th>
            <th scope='col'>Acction</th>
            </tr>
        </thead>

        <tbody>
            {data.map((item)=>{return <tr key={item.id}>

                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td><button className='btn btn-danger'
                onClick={()=>deleteUserSubmit(item)}
                >Delete</button></td>

            </tr>})}
        </tbody>

    </table>
    </>
  )
}

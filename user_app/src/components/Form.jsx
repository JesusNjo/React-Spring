import React, { useState } from 'react'
import { createNewUser } from '../services/DataService';
import { useNavigate } from 'react-router-dom';

export const Form = () => {

    const[info,setInfo] = useState({
        name: '',
        lastname:'',
        email:'',
        age:''
    });

    const navigate = useNavigate();
    const{name,lastname,email,age} = info;

    const onChanges= ({target})=>{
        const {id,value} = target;
        setInfo({
            ...info,
            [id]:value
        })
    }



    const onSubmits= async (e)=>{
        e.preventDefault();
        const newPersona = {
            name,
            lastname,
            email,
            age
        }
        await createNewUser(newPersona);
        navigate("/");
    }

  return (
    <>
    <h2>Enter your information</h2>
    <form action="" 
    className='container bg-dark align-center text-light font-weight-bold text-capitalize p-5'
    onSubmit={onSubmits}
    >

        <div className='form-group m-auto'>
            <label className='' htmlFor="name">User name <span>*</span></label>
            <input type="text" 
            className='form-control ' 
            id='name'
            placeholder='Enter your username'
            value={name}
            onChange={onChanges}
            required
            autoComplete='off'
            
            />
        </div>




        
        <div className='form-group m-auto'>
            <label className='font-weight-bold' htmlFor="lastname"> Last Name<span>*</span></label>

            <input type="text" 
            className='form-control ' 
            id='lastname'
            placeholder='Enter your last name'
            value={lastname}
            onChange={onChanges}
            required
            autoComplete='off'
            />
        </div>




        <div className='form-group m-auto'>
            <label className='font-weight-bold' htmlFor="email">Email <span>*</span></label>
            <input type="email" 
            className='form-control ' 
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={onChanges}
            required
            autoComplete='off'
            />
        </div>




        <div className='form-group m-auto'>
            <label className='font-weight-bold' htmlFor="age">
            Enter your age <span>*</span></label>
            <input type="number" 
            className='form-control ' 
            id='age'
            placeholder='¿How old are you?'
            value={age}
            onChange={onChanges}
            required
            autoComplete='off'
            />
        </div>




      <div className='form-group m-auto'>
      <input type="submit" className='btn btn-primary form-control ' value={"Send information"}/>
      </div>



    </form>
            </>
  )
}

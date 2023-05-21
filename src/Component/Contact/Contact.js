import React from 'react'
import {useState} from 'react'
import './Contact.css'

const Contact = () => {
    const [data,setData] = useState({name:"",email:"",subject:"",message:""});

    const handleChange = (e) =>{
        const name=e.target.name;
        const value=e.target.value;
        setData({...data,[name]: value})
    }

    const handleSubmit = (e) =>{
        e.previentDefault()
    }
  return (
    <>
    <form method='post' onSubmit={handleSubmit} className='contact1'>
        <div className="con-left">
        <h3 className='con-head'>REQUEST A CALL BACK.</h3>
        <span className='con-span'>Call For Best Rates </span>
        </div>
        <div className="con-right">
        <span className='labelit'>Your name</span>
        <input type="text" name="name" id="" onChange={handleChange} value={data.name} className='inpu1' />
        <span className='labelit'>Your email</span>
        <input type="email" name="email" id="" onChange={handleChange} value={data.email} className='inpu1'/>
        <span className='labelit'>Subject</span>
        <input type="text" name="subject" id="" onChange={handleChange} value={data.submit} className='inpu1'/>
        <span className='labelit'>Your message(option)</span>
        <textarea name="message" id="" cols="50" rows="10" onChange={handleChange} value={data.message}className='inpu2'></textarea>
        <button type='submit' className=' btn1'>Submit</button>
        </div>
    </form>
    </>
  )
}

export default Contact

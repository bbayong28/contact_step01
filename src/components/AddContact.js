import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ContactList from './ContactList'

const AddContact = ({ addContactHandler }) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  //state = {
  //  name: "",
  //  email:"",
  //}


  const add = (e) => { 
    e.preventDefault();
    if (name === '' && email === '') { 
      alert("All the fields are mandatory!");
      return;
    }
    //console.log(name, email)
    //this.props.addContactHandler(this.state)
    //this.useState({name:'', email:''})
    addContactHandler({ name, email });
    setEmail("");
    setName("");
    navigate("/");
    
  }
  return (
    <div className='ui main'>
      <h2>Add Contact</h2>
      <form
        className='ui form'
        onSubmit={add}
      >
        <div className='field'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => { setName(e.target.value) }} />
        </div>
        <div className='field'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <button className='ui button blue'>Add</button>     
      </form>
    </div>
  )
}

export default AddContact
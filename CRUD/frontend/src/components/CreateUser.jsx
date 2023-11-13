import React, { useState } from 'react'
import axios from 'axios'


function CreateUser() {
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    const Submit = (e) => {
        e.preventDefault();
    axios
      .post("http://localhost:6000/createuser", {
        name,
        username,
        email,
        phone,
      })
      .then((result) => {
        console.log(result);
        // navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
        {/* <div className='w-20  bg-white rounded p-3'> */}
        <form onSubmit={Submit}>
            <h2>Add User</h2>
            <div className='mb-2'> 
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter Name' className='form-control'
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='mb-2'> 
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Enter Username' className='form-control'
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='mb-2'> 
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Enter Email' className='form-control'
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='mb-2'> 
                <label htmlFor="">Phone</label>
                <input type="tel" placeholder='Enter Phone No.' className='form-control' 
                onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <button className='btn btn-success'>Submit</button>
        </form>
        {/* </div> */}
    </div>
  )
}

export default CreateUser
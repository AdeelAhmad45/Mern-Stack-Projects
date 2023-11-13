import React from 'react'

function UpdateUser() {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
    {/* <div className='w-20  bg-white rounded p-3'> */}
    <form action="">
        <h2>Add User</h2>
        <div className='mb-2'> 
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className='form-control' />
        </div>
        <div className='mb-2'> 
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Enter username' className='form-control' />
        </div>
        <div className='mb-2'> 
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter Email' className='form-control' />
        </div>
        <div className='mb-2'> 
            <label htmlFor="">Phone</label>
            <input type="tel" placeholder='Enter Age' className='form-control' />
        </div>
        <button className='btn btn-success'>Submit</button>
    </form>
    {/* </div> */}
</div>
  )
}

export default UpdateUser
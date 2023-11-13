import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function User() {

    const [users, setUsers] = useState([{
        name: "Addy",
        username: "ieiei",
        email: "addy@gmail.com",
        phone: 6464658375
    }])

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
        <div className='w-20 h-25  bg-white rounded p-3'>
            <Link to='/createuser' className='btn btn-success'>Add +</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return <tr>
                                 <td>{user.name}</td>
                                 <td>{user.username}</td>
                                 <td>{user.email}</td>
                                 <td>{user.phone}</td>
                                 <td>
                                 <Link to='/update' className='btn btn-success'>Edit </Link>
                                 <button>Delete</button>
                                 </td>
                             </tr>
                         })
                        }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default User
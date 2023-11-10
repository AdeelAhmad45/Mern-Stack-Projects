import React from "react";
import { useState } from "react";
import { addUser } from "../service/api";

const defaultValue = {
    name: "",
    username: "",
    address: "",
    phone: ""
}


function AddUser() {
    const [user, setUser] = useState(defaultValue)
    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const addUserDetails = async() => {
       await addUser()
    }
  return (
    <div>
      <form action="" className="justify-center items-center">
        <h1 className="text-center m-10 text-3xl font-semibold ">Add Users</h1>
        <div className="flex justify-center ">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="" className="mt-2 mx-3">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              onChange={(e) => onValueChange(e)}
            />
            <label htmlFor="" className="mt-2 mx-3">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="username"
              className=" w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              onChange={(e) => onValueChange(e)}
            />
            <label htmlFor="" className="mt-2 mx-3">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="address"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              onChange={(e) => onValueChange(e)}
            />
            <label htmlFor="" className="mt-2 mx-3">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="phone"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              onChange={(e) => onValueChange(e)}
            />
            <button
              type="adduser"
              className=" bg-blue-500 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-blue-600 transition ease-in-out duration-300"
              onClick={() => addUserDetails() }
            >
              Add User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddUser;

const User = require('../models/userModel')

exports.home =  (req, res) => {
    res.send('Hello world')
}

exports.addUser = async (req, res) => {
    // extract info
    try {
        const {name, username, email, phone} = req.body

        // if(!name || !email) {
        //     throw new Error("Name and email are required")
        // }

        // const userExist = User.findOne({email:email})

        // if(userExist) {
        //     throw new Error("User already exists")
        // }

        const user = await User.create({
            name,
            username,
            email,
            phone
        })

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
        
    }
}

exports.getUsers = async(req, res) => {
    try {
        const users = await User.find({})

        res.status(200).json({
            success: true,
            message: "All users",
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.editUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).json({
            success: true,
            message: "User Updated successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.deleteUser = async(req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}
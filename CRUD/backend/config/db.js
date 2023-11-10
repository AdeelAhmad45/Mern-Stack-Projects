const mongoose = require('mongoose')

const connectToDb = async () => {
    mongoose.connect(process.env.MONGO_URL)
    .then((conn) => {
        console.log(`Connected to database ${conn.connection.host}`);
    })
    .catch((error) => console.log(error.message))
}

module.exports = connectToDb
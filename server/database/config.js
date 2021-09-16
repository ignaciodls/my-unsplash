const mongoose = require('mongoose')

const dbConnection = async() => {

    try{
        await mongoose.connect(process.env.DB_CNN)

    } catch(error){
        throw new Error('DB connection failure')
    } 

}

module.exports = dbConnection


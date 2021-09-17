const {Schema, model} = require('mongoose')

const ImageSchema = Schema({

    name:{
        type:String
    },

    secure_url: {
        type: String
    },
    
    public_id:{
        type: String
    } 


})

module.exports = model('Image', ImageSchema)
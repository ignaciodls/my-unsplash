const {Schema, model} = require('mongoose')

const ImageSchema = Schema({

    secure_url: {
        type: String
    },
    
    public_id:{
        type: String
    } 


})

module.exports = model('Image', ImageSchema)
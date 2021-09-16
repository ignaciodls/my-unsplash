require('dotenv').config()

const cors = require('cors')

const cloudinary = require('cloudinary').v2
cloudinary.config(process.env.CLOUDINARY_URL)

const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())

require('./database/config')()

const Model = require('./components/images/model')


app.post('/', async (req,res) => {

    const {imageURL} = req.body

    try{
        const {secure_url, public_id} = await cloudinary.uploader.upload(imageURL)

        const image = new Model({secure_url, public_id})
        await image.save()

        res.json({
            ok:true,
            image
        })
    }
    catch(err){
        res.status(400).json({
            ok:false
        })
    }

})

app.delete('/', async(req,res) => {

    const {imageID} = req.query

    try{

        cloudinary.uploader.destroy(imageID)

        await Model.findOneAndDelete({public_id:imageID})

        res.json({
            ok:true
        })

    }catch(err){

        res.status(400).json({
            ok:false
        })

    }


})

app.listen(process.env.PORT)
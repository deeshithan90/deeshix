const express = require('express')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
const PortFoModel = require('./model/Portoflio')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://deeshiss_db_user:Tv0ITx0SUB5B8KC2@deeshix.q03jd3t.mongodb.net/deeshix67?appName=deeshix')
.then(() => {
    console.log('Successfully MongoDB connected')
})
.catch((err) => {
    console.log('MongoDB connection failed', err)
})
const __dirnames = path.resolve()
app.use(express.static(path.join(__dirnames,"frontend/build")))
app.use("/",(req,res)=> {
    res.sendFile(path.resolve(__dirnames,"frontend,","build","index.html"))
})

app.post('/book', async (req, res) => {
    try {
        const { name, email, contact, productEnquiry, describe } = req.body

        if (!name || !email || !contact  || !describe || !productEnquiry) {
            return res.status(400).json({
                message: 'Please enter all values',
                success: false
            })
        }

        const data = await PortFoModel.create({
            name,
            email,
            contact,
            productEnquiry,
            describe,
        })

        res.status(201).json({
            message: 'Successfully created project',
            success: true,
            data
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            success: false,
            error: error.message
        })
    }
})

app.listen(5000, () => {
    console.log(`Server is running on port 5000`)
})

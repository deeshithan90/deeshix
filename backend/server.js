const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
const PortFoModel = require('./model/Portoflio')

app.use(express.json())
app.use(cors())

dotenv.config({ path: path.join(__dirname, '.env') })

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Successfully MongoDB connected')
})
.catch((err) => {
    console.log('MongoDB connection failed', err)
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

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

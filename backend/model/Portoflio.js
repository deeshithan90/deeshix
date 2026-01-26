const mongoose = require('mongoose')
const PortFo = new mongoose.Schema({
    name : String,
    email : String,
    Contact : String,
    productEnquiry : String,
    describe : String,
})

const PortFoModel = mongoose.model('Projects',PortFo)

module.exports = PortFoModel
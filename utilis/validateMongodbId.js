const mongoose = require('mongoose')


//validate Mongodb Id
const validateMongoDbID = (id=>{
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if (!isValid) {
        throw new Error('This Id is not valid or not Found')
    }
})

module.exports = {
    validateMongoDbID
}
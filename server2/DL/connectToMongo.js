const mongoose = require('mongoose');

require("dotenv").config()
async function connectToMongo() {
    try {
        mongoose.connect(process.env.MONGO_URI)
        .then(res=>console.log("### DB - Connection ###"))
    } catch (error) {

    }
}
module.exports = {connectToMongo};
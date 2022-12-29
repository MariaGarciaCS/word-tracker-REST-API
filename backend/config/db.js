const mongoose = require('mongoose')

const connectDB = async () => {
    console.log("Connecting DB".magenta.underline)
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`.green.bgBlack);
    }
    catch(error){
        console.log(error);
        process.exit(1) //exit with failure
    }
}

module.exports = connectDB
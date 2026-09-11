const {mongoose, Connection } = require("mongoose")

const connectDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.DATABASE_URI)
        console.log("SGS DB SUCCESSFULLY CONNECTED : ", conn.connection.name)

    } catch (error) {
        console.log("SGS DB CONNECTION FAILED : ", error.message)
    }
}

module.exports = connectDB

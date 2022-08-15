const mongose = require('mongoose')

const connectDB = async () => {
    const connection = await mongose.connect(process.env.MONGO_URI)

    console.log(
        `MongoDB Connected: ${connection.connection.host}`.cyan.underline.bold
    )
}

module.exports = connectDB

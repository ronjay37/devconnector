const mongoose = require('mongoose');
const config = require('config')
const db = config.get('mongoURI');


const connectDB = async () => {
    try {
        const con = await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })

        console.log(`DB connected: ${con.connection.host}`)
    } catch (err) {
        console.log(err.message);
        process.exit(1)
    }
}

module.exports = connectDB;
const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      // useFindAndModify: false,
      // useCreateIndex: true,
    })
    console.log('DB connection successful')
  } catch (error) {
    console.error(error)
  }
}

module.exports = { dbConnection }

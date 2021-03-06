// Not sure where to require this to. 
// Do I need to create a main models file that connects to all my other models.
const mongoose = require('mongoose')

mongoose.Promise = Promise

const mongoUri = 'mongodb://localhost/sof'

// connect to the database, with the imported mongoose instance
mongoose
  .connect(mongoUri, {useNewUrlParser: true})
  .then(connection => console.log(`Connection established to db`))
  .catch(connectionError => console.log('Connection failed!', connectionError))

// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration
module.exports = mongoose

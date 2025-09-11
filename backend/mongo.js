const mongoose = require('mongoose')

const url='mongodb+srv://fullstack:EMCN89VT8yHcmGOQ@notes.dnmjleh.mongodb.net/testNoteApp?retryWrites=true&w=majority&appName=Notes'

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'CSS is fun',
  important: true,
})

note.save().then(() => {
  console.log('note saved!')
  mongoose.connection.close()
})

// Note.find({ content: { $regex: /fu/i } }).then(result => {
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })
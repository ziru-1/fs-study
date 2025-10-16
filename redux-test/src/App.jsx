import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import NoteForm from './components/NoteForm'
import NotesList from './components/NotesList'
import VisibilityFilter from './components/VisibilityFilter'
import { setNotes } from './reducers/noteReducer'
import noteService from './services/notes'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    noteService.getAll().then((notes) => dispatch(setNotes(notes)))
  }, [dispatch])

  return (
    <div>
      <NoteForm />
      <VisibilityFilter />
      <NotesList />
    </div>
  )
}

export default App

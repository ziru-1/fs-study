import NoteForm from './components/NoteForm'
import NotesList from './components/NotesList'
import VisibilityFilter from './components/VisibilityFilter'

const App = () => {

  return (
    <div>
      <NoteForm />
      <VisibilityFilter />
      <NotesList />
    </div>
  )
}

export default App

import NoteForm from './components/NoteForm'
import NotesList from './components/NotesList'

const App = () => {
  const filterSelected = (value) => {
    console.log(value)
  }

  return (
    <div>
      <NoteForm />
      <div>
        all{' '}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected('ALL')}
        />
        important{' '}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected('IMPORTANT')}
        />
        nonimportant{' '}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected('NONIMPORTANT')}
        />
      </div>
      <NotesList />
    </div>
  )
}

export default App

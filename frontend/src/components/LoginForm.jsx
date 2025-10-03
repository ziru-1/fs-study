import { useState } from 'react'

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginSubmit = (e) => {
    e.preventDefault()

    handleLogin({ username, password })
      .then(() => {
        setUsername('')
        setPassword('')
      })
      .catch(() => {})
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLoginSubmit}>
        <div>
          <label>
            username
            <input
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            password
            <input
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm

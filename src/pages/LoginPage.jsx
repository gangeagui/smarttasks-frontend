import { useState } from 'react'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Iniciar sesión con:', { email, password })
    // Aquí luego llamaremos a la API con Axios
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label>Contraseña</label><br />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '1.5rem' }}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
}

export default LoginPage

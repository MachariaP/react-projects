import './App.css'

function App() {
  const message = 'Test!'

  return (
    <div className='App'>
      <h1>{message === 'Hello!' ? 'The message was "Hello!"' : message}

      </h1>
      </div>
  )
}

export default App
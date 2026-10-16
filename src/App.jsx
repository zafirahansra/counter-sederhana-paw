import { useState, useEffect } from 'react'
import Header from './components/Header'
import CounterDisplay from './components/CounterDisplay'
import CounterButton from './components/CounterButton'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
  document.title = `Counter: ${count}`
  }, [count])

  function tambah() {
    setCount(count + 1)
  }

  function kurang() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }

  return (
  <div className="app-container">
    <div className="counter-card">
      <Header />

      <p className="subtitle">
        Hitung angka dengan mudah ✨
      </p>

      <CounterDisplay count={count} />

      <div className="button-group">
        <CounterButton
          onTambah={tambah}
          onKurang={kurang}
          onReset={reset}
        />
      </div>

      <p className="footer-text">
        Made with love 💗
      </p>
    </div>
  </div>
)
}

export default App
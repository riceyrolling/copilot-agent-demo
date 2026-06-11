import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="container py-4">
        <h1>OctoFit Tracker</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<p>Welcome to OctoFit Tracker!</p>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

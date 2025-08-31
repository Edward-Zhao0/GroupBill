import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ReceiptInput from './pages/ReceiptInput.jsx'

const App = () => {
  return (
    <div>
      <h1>Split Trip</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/receipt">Add Receipt</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receipt" element={<ReceiptInput />} />
      </Routes>
    </div>
  )
}

export default App
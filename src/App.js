import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Nav from './Nav'
import Loading from './travel/Loading'
import Main from './themeProject/Main'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pro2" element={<Loading />} />
        <Route path="/Pro3" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App

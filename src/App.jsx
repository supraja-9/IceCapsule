import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import fileSlice from './store/fileSlice'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

const store = configureStore({ reducer: { files: fileSlice } })

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App

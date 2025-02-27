import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import fileSlice from '/src/store/fileSlice'
import Home from '/src/pages/Home'
import Navbar from '/src/components/Navbar'
import Login from '/src/pages/Login'

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

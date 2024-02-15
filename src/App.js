import LoginForm from './components/LoginForm'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

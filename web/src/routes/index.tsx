import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import path from '../constants'
import Home from '../views/home'
import CookiesCard from '../components/Cookies'

const AppNavigation = () => {
  return (
      <Router>
        <Routes>
          <Route path={`${path.Home.list}`}  element={<Home/>} />
        </Routes>
        <CookiesCard/>
      </Router>
      )
}

export default AppNavigation

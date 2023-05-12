import { Route, Routes } from "react-router-dom"
import Drivers from "./components/Drivers"
import Navbar from "./components/Navbar"
import Favorites  from "./components/Pages/Favorites"
function App() {

  return (
    <>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Drivers />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import MainLayout from "./components/layout/MainLayout"
import Reservation from "./pages/Reservation"
import Register from "./pages/Register"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}
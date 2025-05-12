import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import MainLayout from "./components/layout/MainLayout"
import Reservation from "./pages/Reservation"
import Register from "./pages/Register"
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import MainLayout from "./components/layout/MainLayout";
import Contact from "./pages/Contact"
import Wallet from "./pages/Wallet"
import Account from "./pages/Account"
import Cart from "./pages/Cart"
import DetailProduct from "./pages/DetailProduct"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account/wallet" element={<Wallet />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail-product" element={<DetailProduct />} />
      </Route>
    </Routes>
  );
}

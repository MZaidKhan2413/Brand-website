import Navbar from "./components/Header/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App

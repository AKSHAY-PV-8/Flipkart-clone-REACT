
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductListPage from "./pages/ProductListPage"
import ProductDetails from "./pages/ProductDetails"
import AddtoCartPage from "./pages/AddtoCartPage"

function App() {
  return (
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home></Home>}/> */}
          <Route path="/" element={<ProductListPage></ProductListPage>}/>
          <Route path="/productDetail/:id" element={<ProductDetails></ProductDetails>}/>
          <Route path= "/cart/:id" element={<AddtoCartPage></AddtoCartPage>}/>
        </Routes>
      </Router>
  )
}

export default App


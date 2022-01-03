import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Admin/Pages/Dashboard/Dashboard";
import AddProduct from "./pages/Admin/Pages/AddProduct/AddProduct";
import ManageProducts from "./pages/Admin/Pages/ManageProducts/ManageProducts";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/home" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/*" element={<Dashboard />}>
              <Route path="manageProducts" element={<ManageProducts />} />
              <Route path="addProduct" element={<AddProduct />} />

            </Route>

            {/* <Route exact path="/dashboard/settings">
    //       <Redirect from='/dashboard/settings' to='/404' />
    //     </Route>

    //     <Route path='/404' component={Notfound} />
    //     <Redirect from='*' to='/404' /> */}
          </Routes>
        </Router>
      </main>
      <Footer></Footer>

    </>
  );
}

export default App;

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
function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          {/* <Route exact path="/dashboard/settings">
    //       <Redirect from='/dashboard/settings' to='/404' />
    //     </Route>

    //     <Route path='/404' component={Notfound} />
    //     <Redirect from='*' to='/404' /> */}
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;

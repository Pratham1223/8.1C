import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import SignUp from "./components/register";
import Profile from "./components/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./utl/firebase";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route path="/" element={
              <>
              <Profile user={user} />
              <CardList/>
              <Footer/>
              </>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default App;


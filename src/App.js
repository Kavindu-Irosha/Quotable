import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NavComponent from "./components/NavComponent";
import Home from "./pages/Home";
import LikedQuotes from "./pages/LikedQuotes"
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/profile";
import NewQuote from "./pages/NewQuote";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/" element={<NavComponent />}>
          <Route path="newQuote" element={<NewQuote/>}/>
          <Route path="home" element={<Home />} />
          <Route path="liked_quotes" element={<LikedQuotes />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
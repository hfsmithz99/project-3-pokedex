import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import userService from "./utils/userService";
import AddPokePage from "./pages/AddPokePage/AddPokePage";

function App() {

  const [user, setUser] = useState(userService.getUser());

  function handleSignUpAndLogin(){
    setUser(userService.getUser());
  }

  return (
    <Routes>
      <Route path="/" element={<h1>Home Pageeeeeeeeeee</h1>} />
      <Route path="/login" element={<LoginPage handleSignUpAndLogin={handleSignUpAndLogin} />} />
      <Route path="/signup" element={<SignupPage handleSignUpAndLogin={handleSignUpAndLogin} />} />
      <Route path="/:username" element={<ProfilePage loggedUser={user} />} />
      <Route path="/add" element={<AddPokePage loggedUser={user} />} />
    </Routes>
  );
}

export default App;

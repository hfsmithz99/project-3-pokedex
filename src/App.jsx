import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AddPokePage from "./pages/AddPokePage/AddPokePage";
import MainPage from "./pages/MainPage/MainPage"

import userService from "./utils/userService";


function App() {

  const [user, setUser] = useState(userService.getUser());

  function handleSignUpAndLogin(){
    setUser(userService.getUser());
  }

  function logout(){
    setUser.logout();
    setUser(null);
  }

  return (
    <Routes>
      <Route path="/" element={<MainPage loggedUser={user} logout={logout} />} />
      <Route path="/login" element={<LoginPage handleSignUpAndLogin={handleSignUpAndLogin} logout={logout}/>} />
      <Route path="/signup" element={<SignupPage handleSignUpAndLogin={handleSignUpAndLogin} logout={logout} />} />
      <Route path="/:username" element={<ProfilePage loggedUser={user} logout={logout} />} />
      <Route path="/add" element={<AddPokePage loggedUser={user} logout={logout} />} />
    </Routes>
  );
}

export default App;

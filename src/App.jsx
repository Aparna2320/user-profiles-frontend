import React from "react";
import { Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import AddUserPage from "./pages/AddUserPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/add-user" element={<AddUserPage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
    </Routes>
  );
}

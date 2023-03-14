import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./component/SideBar";
import Home from "./pages/Home";
import ListApoinment from "./pages/ListApoinment";
import UserProfile from "./pages/UserProfile";
import Aodio from "./utils/AudioRecoder";
import PrivateRoute from "./utils/PrivateRoute";
import Login from './pages/Login'
import BookApoinment from "./pages/BookApoinment";
import LoginRoute from "./utils/LoginRouter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar><Home /></Sidebar>} />
      <Route path="/UserPrfile/:id" element={<Sidebar><UserProfile /></Sidebar>} />
      <Route path="/tablelist" element={<PrivateRoute><Sidebar><ListApoinment /></Sidebar></PrivateRoute>} />
      <Route path="/bookapoinment" element={<PrivateRoute><Sidebar><BookApoinment /></Sidebar></PrivateRoute>} />
      <Route path="/login" element={<LoginRoute><Login /></LoginRoute>} />
      <Route path="/audio" element={<Sidebar><Aodio /></Sidebar>} />
    </Routes>
  );
}

export default App;

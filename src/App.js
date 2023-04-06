import React, { useContext } from "react";
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
import Context from "./context/context";
import ThemeAdd from "./component/Theme";
import AddItems from "./pages/Add_EditItems";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Registerd from "./pages/Registerd";

function App() {

  const Theme = useContext(Context)
  
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Context.Provider value={Theme}>
        <Routes>
          <Route path="/" element={<ThemeAdd><Sidebar><Home /></Sidebar></ThemeAdd>} />
          <Route path="/UserPrfile/:id" element={<Sidebar><UserProfile /></Sidebar>} />
          <Route path="/tablelist" element={<PrivateRoute><Sidebar><ListApoinment /></Sidebar></PrivateRoute>} />
          <Route path="/bookapoinment" element={<PrivateRoute><Sidebar><BookApoinment /></Sidebar></PrivateRoute>} />
          <Route path="/additems" element={<PrivateRoute><Sidebar><AddItems /></Sidebar></PrivateRoute>} />
          <Route path="/additems/:id" element={<PrivateRoute><Sidebar><AddItems /></Sidebar></PrivateRoute>} />
          <Route path="/login" element={<LoginRoute><Login /></LoginRoute>} />
          <Route path="/registerd" element={<Registerd />} />
          <Route path="/audio" element={<Sidebar><Aodio /></Sidebar>} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;

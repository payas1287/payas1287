import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Detail from "../pages/Detail";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="newblog" element={<NewBlog />} />
        <Route path="profil" element={<Profile />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

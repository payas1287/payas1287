import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Detail from "../pages/Detail";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route path="" element={<About />} />
            <Route path="newblog" element={<NewBlog />} />
            <Route path="profil" element={<Profile />} />
            <Route path="detail" element={<Detail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

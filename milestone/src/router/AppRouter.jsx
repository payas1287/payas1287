import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Detail from "../pages/Detail";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="newblog" element={<NewBlog />} />
        <Route path="/" element={<Dashboard />} />
        <Route oatah="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />{" "}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

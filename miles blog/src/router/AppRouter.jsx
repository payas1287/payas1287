import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewBlog from "../pages/NewBlog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="newblog" element={<NewBlog />} />
      
      </Routes>
    </Router>
  );
};

export default AppRouter;

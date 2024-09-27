import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "../pages/News";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrivateRouter/>}>
        <Route path="" element={<News />} />
      </Route>
      
      <Route path="/login" element={<Login />} />
    </Routes>




    </BrowserRouter>
  )
}

export default AppRouter
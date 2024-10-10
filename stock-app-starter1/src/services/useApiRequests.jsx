import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
const useApiRequests = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async (userData) => {
    dispatch(fetchStart);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userData
      );
      toastSuccessNotify("Login başarılı");
      dispatch(loginSuccess);
      navigate("stock");
      console.log(data);
    } catch (error) {
      toastErrorNotify("Login başarısız");
      dispatch(fetchFail);
      console.log(error);
    }
  };
  return { login };
};

export default useApiRequests;

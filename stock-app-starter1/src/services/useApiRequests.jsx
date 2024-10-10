import axios from "axios"
import { toastErrorNotify, toastSuccessNotify} from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom"




const useApiRequests = () => {
    const navigate = useNavigate()
    const login = async (userData)=>{
        
       
       try {
        const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, userData)
        toastSuccessNotify("Login başarılı")
        navigate("stock")
        console.log(data)
        
       } catch (error) {
        toastErrorNotify("Login başarısız")
        console.log(error)
        
       }
    }
    return {login}
}

export default useApiRequests


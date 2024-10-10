import axios from "axios"
import { toastErrorNotify, toastSuccessNotify} from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom"




const useApiRequests = () => {
    const navigate = useNavigate()
    const login = async (userData)=>{
        
        const BASE_URL = "https://13156.fullstack.clarusway.com/"
       try {
        const { data } = await axios.post(`${BASE_URL}/auth/login`, userData)
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


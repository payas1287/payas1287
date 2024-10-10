import axios from "axios"




export const login = async (userData)=>{
    const BASE_URL = "https://13156.fullstack.clarusway.com"
    const data = await axios.post(`${BASE_URL}/auth/login`, userData)

}
login("")
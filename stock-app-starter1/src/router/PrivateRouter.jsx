import {useSelector} from "react-redux"
import {Navigate, Outlet} from "react-router-dom"

const PrivateRouter = () => {
  const username = useSelector((state) => state.auth)

  return usernama ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRouter

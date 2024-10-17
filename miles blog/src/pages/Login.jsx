import Container from "@mui/material/Container";
import Dashboard from "./Dashboard";
import {LoginForm} from "../components/auth/LoginForm"

const Login = () => {
  return (
    <Container maxWidth="lg">
      <Dashboard />
      <LoginForm />
    </Container>
  );
};

export default Login;

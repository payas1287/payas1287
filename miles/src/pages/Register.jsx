import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import { Formik } from "formik";

const Register = () => {
  return (
    <Container maxWidth="lg">
      <Grid2
        container
        justifyContent={"center"}
        direction={"row-reverse"}
        rowSpacing={{ sm: 3 }}
        sx={{ height: "100vh", p: 2 }}
      >
        <Grid2 item xs={12}>
          <Typography>Your Blog</Typography>
        </Grid2>
        <Typography variant="h4">Register</Typography>

        <Formik
          initialValues={{
            username: "",
            fisrtName: "",
            lastName: "",
            email: "",
            image: "",
            bio: "",
            password: "",
          }}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            registerSchema(values);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          componenet={(props) => <RegisterForm {...props} />}
        ></Formik>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Link to="/">Do you have an account?</Link>
        </Box>
      </Grid2>
    </Container>
  );
};

export default Register;

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { Formik, Form } from "formik";
import TextField from "@mui/material/TextField";
import useApiRequests from "../services/useApiRequests";

const Register = () => {
  const { register } = useApiRequests();
  const registerSchema = object({
    username: string().required("Username zorunludur"),
    firstname: string().required("Firstname zorunludur"),
    lastname: string().required("Lastname zorunludur"),
    password: string()
      .required("Şifre zorunludur")
      .min(8, "Şifre en az 8 karekter içermelidir")
      .max(16, "Şifre en fazla 16 karakter içermelidir")
      .matches(/[a-z]+/, "Şifre en az bir küçük harf içermelidir")
      .matches(/[A-Z]+/, "Şifre en az bir büyük harf içermelidir")
      .matches(
        /[@$!%*?&]+/,
        "Şifre en az bir özel karakter (@$!%*?&) içermelidir"
      ),
    email: string()
      .email("Lütfen geçerli email giriniz")
      .required("Email zorunludur"),
  });
  

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>
          <Formik
            initialValues={{
              username: "",
              firstname: "",
              lastname: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({
              isSubmitting,
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
            }) => (
              <Form>
                <Box
                  component="form"
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <TextField
                    label="User Name"
                    name="username"
                    id="userName"
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.username}
                    error={touched.username && Boolean(errors.username)}
                    onBlur={handleBlur}
                    helperText={errors.username}
                  />
                  <TextField
                    label="First Name"
                    name="first_name"
                    id="firstName"
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.firstname}
                    error={touched.firstname && Boolean(errors.firstname)}
                    onBlur={handleBlur}
                    helperText={errors.firstname}
                  />
                  <TextField
                    label="Last Name"
                    name="last_name"
                    id="last_name"
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.lastname}
                    error={touched.lastname && Boolean(errors.lastname)}
                    onBlur={handleBlur}
                    helperText={errors.lastname}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    onBlur={handleBlur}
                    helperText={errors.email}
                  />
                  <TextField
                    label="password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.password}
                    error={touched.password && Boolean(errors.password)}
                    onBlur={handleBlur}
                    helperText={errors.password}
                  />
                  <Button type="submit" variant="contained" size="large">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { object, string } from "yup";


export  const NewBlogSchema = object({
  title: string().max(20).required(),
  image: string().required().url(),
  category: string().required(),
  status: string().required(),
  content: string().required(),
});

const NewBlogForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Title"
          name="title"
          id="title"
          type="text"
          variant="outlined"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.title && Boolean(errors.title)}
          helperText={errors.title}
        />
        <TextField
          label="Image URL"
          name="ımage url"
          id="image"
          type="url"
          variant="outlined"
          value={values.imageURL}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.imageURL && Boolean(errors.imageURL)}
          helperText={errors.imageURL}
        />
        <TextField
          label="Category"
          name="category"
          id="category"
          type="text"
          variant="outlined"
          value={values.category}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.category && Boolean(errors.category)}
          helperText={errors.category}
        />
        <TextField
          label="Status"
          name="status"
          id="status"
          type="text"
          variant="outlined"
          value={values.status}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.status && Boolean(errors.status)}
          helperText={errors.status}
        />
        <TextField
          label="Content"
          name="content"
          id="content"
          type="text"
          variant="outlined"
          value={values.content}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.content && Boolean(errors.content)}
          helperText={errors.content}
        />
        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
      </Box>
    </Form>
  );
};

export default NewBlogForm;

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import CallIcon from "@mui/icons-material/Call";
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from "@mui/icons-material/Delete";
export default function ProductCard({ thumbnail,title,description }) {
  return (
    <Card
      sx={{
        height: 450,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          "& .MuiButtonBase-root": {
            color: "primary.main",
            "&:hover": {
              backgroundColor: "black",
            },
          },
        }}
      >
        <Button size="small" endIcon={<ShareIcon />}>Share</Button>
        <Button size="small" startIcon={<DeleteIcon />}>Delete</Button>
        {/* <CallIcon sx={{ color: "red", "&:hover": { color: "cyan" } }} /> */}
      </CardActions>
    </Card>
  );
}

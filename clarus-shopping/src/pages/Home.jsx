import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2"; 
import ProductCard from "../components/ProductCard";




const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.product));
  }, []);
  return <div>
<Navbar />
<Container maxWidth="xl">
      {products.map((item)=> (
        <Grid key={item.id} size={{xs:12, sm:6, md:4, lg:3}}>
            <ProductCard {...item} />
        </Grid>
      ))}
      </Container>


  </div>;
};

export default Home;

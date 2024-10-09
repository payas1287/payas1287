import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequests";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProductModal from "../components/ProductModal";
import ProductTable from "../components/ProductTable";

const Products = () => {
  const { getStock } = useStockRequest();

  const initialState = { image: "", address: "", phone: "", name: "" };
  const [data, setData] = useState(initialState);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setData(initialState);
  };

  //? Sayfa yüklendikten sonra firmaları getir.
  useEffect(() => {
    getStock("products");
  }, [getStock]);
  return (
    <div>
      <Typography variant="h5" color={"error"} mb={2}>
        Product
      </Typography>
      <Button variant="contained" sx={{ mb: 2 }} onClick={handleOpen}>
        New Product
      </Button>
      <ProductTable />
      <ProductModal
        open={open}
        handleClose={handleClose}
        data={data}
        setData={setData}
      />
    </div>
  );
};

export default Products;

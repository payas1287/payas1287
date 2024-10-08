import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequests";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";

const Firms = () => {
  const { getStock } = useStockRequest();
  const { firms } = useSelector((state) => state.stock);

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
    getStock("firms");
  }, [getStock]);
  return (
    <div>
      <Typography variant="h5" color={"error"} mb={2}>
        Firms
      </Typography>
      <Button variant="contained" sx={{ mb: 2 }} onClick={handleOpen}>
        NEW FIRM
      </Button>

      <FirmModal
        open={open}
        handleClose={handleClose}
        data={data}
        setData={setData}
      />
      <Grid container justifyContent={"center"} gap={2}>
        {firms?.map((firm, index) => (
          <Grid item key={index}>
            <FirmCard
              firm={firm}
              handleOpen={handleOpen}
              data={data}
              setData={setData}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;

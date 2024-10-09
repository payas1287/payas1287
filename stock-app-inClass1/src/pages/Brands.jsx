import { useEffect } from "react";
import useStockRequests from "../services/useStockRequests";


const Brands = () => {
  const { getBrands } = useStockRequests();

  useEffect(() => {
    getBrands("brands");
  }, [getBrands]);
  return <div>Brand</div>;
};

export default Brands;

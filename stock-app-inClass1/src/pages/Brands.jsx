import { useEffect } from "react";
import useBrandsRequest from "../services/useBrandRequests";

const Brands = () => {
  const { getBrands } = useBrandsRequest();

  useEffect(() => {
    getBrands("brands");
  }, []);
  return <div>Brand</div>;
};

export default Brands;

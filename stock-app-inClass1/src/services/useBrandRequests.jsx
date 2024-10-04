import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fetchFail, fetchStart, getBrandsSuccess } from "../features/brandSlice";

const UseBrandsRequests = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch;

  const getBrands = async (path) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken.get(path);
      dispatch(getBrandsSuccess({ data: data.data, path }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  return { getBrands };
};

export default UseBrandsRequests;

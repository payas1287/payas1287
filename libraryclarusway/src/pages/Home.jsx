import React, { useEffect, useState } from "react";
import AddBilgi from "../components/AddBilgi";
import BilgiList from "../components/BilgiList";
import axios from "axios";

const Home = () => {
  const [library, setLibrary] = useState([]);
  const url = "https://clarus-library-api.vercel.app/";

  const getBilgiler = async () => {

    const res = await axios.get(url);
    setLibrary(res.data);
  };
  useEffect(() => {
    getBilgiler();
  }, []);

  const postBilgiler = async (yeniVeri) => {
    await axios.post(url, yeniVeri);
    getBilgiler();
  };

  const putBilgi = async (editItem) => {
    console.log(editItem);
    await axios.put(`${url}${editItem.id}/`, editItem)
  getBilgiler()
  };
  const deleteBilgi=async(id)=>{

    await axios.delete(`${url}${id}/`)
    
    // istenen veri database den silindikten sonra hemen ekranda yeni diziyi görebilmek için getBilgiler i çağırdık
    getBilgiler()
    
    }
  return (
    <div>
      <AddBilgi postBilgiler={postBilgiler}/>
      <BilgiList deleteBilgi={deleteBilgi} library={library} putBilgi={putBilgi} />
    </div>
  )
};
export default Home;

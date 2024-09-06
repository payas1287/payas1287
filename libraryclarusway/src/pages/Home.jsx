import React, { useEffect, useState } from "react";
import axios from "axios";
import AddBilgi from "../components/AddBilgi";
import BilgiList from "../components/BilgiList";

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

  const deleteBilgi = async(id)=>{
    await axios.delete (`${url}${id}/`)
    getBilgiler()

  }

  const putBilgi =async(editItem)=>{
    await axios.put(`${url}${editItem.id}/`, editItem)
    getBilgiler()
  }



  return (
    <div>
        <AddBilgi  />
      <BilgiList library={library} deleteBilgi={deleteBilgi} putBilgi={putBilgi} />
    </div>
  );
};

export default Home;

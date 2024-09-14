import React, { useEffect, useState } from 'react'
import AddBilgi from '../components/AddBilgi'
import BilgiList from '../components/BilgiList'
import axios from "axios"

const Home = () => {
const[library,setLibrary]=useState([])

const url = "https://clarus-library-api.vercel.app/";

//! GET-READ

const getBilgiler=async()=>{

   const res= await axios.get(url)

  //  console.log(res.data);
   
setLibrary(res.data)

}

useEffect(()=>{
  getBilgiler();
},[])


//!DELETE

const deleteBilgi=async(id)=>{

await axios.delete(`${url}${id}/`)

// istenen veri database den silindikten sonra hemen ekranda yeni diziyi görebilmek için getBilgiler i çağırdık
getBilgiler()

}

//! POST - VERİ GÖNDERME

const postBilgiler=async(yeniVeri)=>{
await axios.post(url, yeniVeri )

getBilgiler()

}



//!PUT - UPDATE

const putBilgi=async(editItem)=>{

  console.log(editItem);
  
await axios.put(`${url}${editItem.id}/`,editItem)


getBilgiler()
}

  return (
    <div>
      <AddBilgi postBilgiler={postBilgiler}/>
      <BilgiList deleteBilgi={deleteBilgi} tutorials={library}  putBilgi={putBilgi}/>
    </div>
  )
}

export default Home
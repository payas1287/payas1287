import React from "react";
import OgrenciItem from "./OgrenciItem";


const OgrenciList = () => {
  return (
    <div >
      <div style={{ textAlign:"center"}}>
         <img 
        src="https://gelecekegitimde.com/wp-content/uploads/2015/01/fft99_mf3019637.jpeg"
        alt=""
      />
      </div>
     

      <h2 style={{ textAlign: "center", background: "pink" }}>
        ÖĞRENCİ LİSTESİ
      </h2>

      <OgrenciItem />
    </div>
  );
};

export default OgrenciList;

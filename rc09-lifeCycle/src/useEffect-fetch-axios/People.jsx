import React, { useEffect, useState } from "react";
import axios from "axios"


const People = () => {
  const [people, setPeople] = useState([]);

  //! 1.yol fetch then yapısı
  // useEffect(() => {
  //   fetch("https://reqres.in/api/users")
  //     .then((res) => res.json())
  //     .then((veri) => setPeople(veri.data));
  // }, []);

  //! 2. yol fetch async await

  // const getir = async () => {
  //   const res = await fetch("https://reqres.in/api/users");
  //   const veri = await res.json();

  //   setPeople(veri.data);
  // };

  // useEffect(() => {
  //   getir();
  // }, []);


  //! 3. yol axios 

  useEffect(()=>{
axios
  .get("https://reqres.in/api/users")
  .then((res) => setPeople(res.data.data))

  },[])


  



  return (
    <div className="container text-center mt-4">
      <div className="row">
        {people.map(({ id, avatar, first_name, last_name }) => (
          <div key={id} className="col-12 col-sm-6 col-md-4">
            <img className="rounded" src={avatar} alt="" />
            <h5>{first_name} </h5>
            <h6>{last_name} </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;

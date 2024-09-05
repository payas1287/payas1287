import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [home, setHome] = useState([]);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setHome(res.data.data));
  }, [])
  return(
    <div className="text-center mt-4">
        <div className="row">
            {home.map(({picture, gender, name,  }))}
        </div>
    </div>
  );
};
export default Home;

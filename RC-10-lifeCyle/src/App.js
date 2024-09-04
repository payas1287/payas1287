import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LifeCycleMethods from "./LifeCycleMethods";
const App = () => {
  const [goster, setGoster] = useState(true);

  return (
    <div className="text-center mt-4 container">
      <button onClick={() => setGoster(!goster)} className="btn btn-danger">
        SHOW
      </button>

      {goster && <LifeCycleMethods />}
    </div>
  );
};
export default App;

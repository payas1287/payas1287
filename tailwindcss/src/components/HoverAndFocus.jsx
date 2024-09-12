import React from "react";

const HoverAndFocus = () => {
  return (
    <>
      <div className="text-center">
        <h1>Hover And Focus</h1>
        <button className="w-40 bg-sky-400  text-slate-50 hover:bg-sky-900 shadow-slate-400 rounded-full">
          Save
        </button>
        <button className="w-40 bg-sky-400  text-slate-50 hover:bg-sky-900 shadow-slate-400 rounded-full focus:ring-4 ml-4">
          Edit
        </button>
      </div>
      <div>
        <input type="email" className="border border-gray-400">
    
        
        </input>
      </div>
    </>
  );
};

export default HoverAndFocus;

import React from "react";
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import { sil } from "../../redux/actions/todoActions";


const TodoItem = ({gorev}) => {

const dispatchh=useDispatch()

  return (
    <div
    style={{textDecoration:gorev.completed ? "line-through": "none",
    background:gorev.completed ? "lightgray": "orange"
    
    
    }}
      className="todo-list"
    >
      <h2 className="todoText">{gorev.yazi}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
           

          
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"

            onClick={()=>dispatchh(sil(gorev.id))}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;

import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import React from "react";
import EditBilgi from "./EditBilgi";

export const BilgiList = ({ library, deleteBilgi, putBilgi }) => {
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {library.map(({ id, title, description }) => (
            <tr key={id}>
              <th>{id}</th>
              <td>{title}</td>
              <td>{description}</td>
              <td className="text-center ">
                <AiFillDelete
                  type="button"
                  size={22}
                  className="text-danger cursor-pointer"
                  onClick={() => deleteBilgi(id)}
                />

                <FaEdit
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  size={20}
                  type="button"
                  className="me-2 text-warning cursor-pointer"
                  //   onClick={() => setEditItem({ id, title, description })}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditBilgi />
    </div>
  );
};
export default BilgiList;

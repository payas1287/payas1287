import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditBilgi from "./EditBilgi";
import { useState } from "react";

const BilgiList = ({ vercel, deleteBilgi,putBilgi }) => {


const[editItem,setEditItem]=useState("")

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ISBN</th>
            <th scope="col">Kapak Resmi</th>
            <th scope="col">Kitap Adı</th>
            <th scope="col">Yazar Adı</th>
            <th scope="col">Tür</th>
            <th scope="col">Yayınlanma Yılı</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {vercel.map(({ title, author, ISBN, image, genre, publicationYear, id }) => (
            <tr key={id}>
              <th>{ISBN}</th>
              <td>{image}</td>
              <td>{title}</td>
              <td>{author}</td>
              <td>{genre}</td>
              <td>{publicationYear}</td>
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
                  onClick={() => setEditItem({title, author, ISBN, image, genre, publicationYear, id })}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditBilgi editItem={editItem} setEditItem={setEditItem} putBilgi={putBilgi} />
    </div>
  );
};

export default BilgiList;

import { useState } from "react";

const AddBilgi = ({postBilgiler}) => {

const[baslik,setBaslik]=useState("")
const[yazar, setYazar]=useState("")
const [isbn, setIsbn]=useState("")
const [image, setImage]=useState("")
const [tür,setTür]=useState("")
const [date,setDate]=useState("")
  
const handleSubmit=(e)=>{
e.preventDefault()

// database e yolla
postBilgiler({title:baslik, author:yazar, kod:isbn, resim:image, cins:tür, tarih:date})

setBaslik("")
setYazar("")
setIsbn("")
setImage("")
setTür("")
setDate("")

}

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Kitab Adı
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Kitab Adı"
            required
            onChange={(e) => setBaslik(e.target.value)}
            value={baslik}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Yazar Adı
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Yazarın Adı"
            required
            onChange={(e) => setYazar(e.target.value)}
            value={yazar}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            ISBN
          </label>
          <input
            type="text"
            className="form-control"
            id="kod"
            placeholder="ISBN"
            required
            onChange={(e) => setIsbn(e.target.value)}
            value={isbn}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Kapak Resmi
          </label>
          <input
            type="text"
            className="form-control"
            id="resim"
            placeholder="Kapak Resmi"
            required
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Tür
          </label>
          <input
            type="text"
            className="form-control"
            id="cins"
            placeholder="Tür"
            required
            onChange={(e) => setTür(e.target.value)}
            value={tür}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
          Yayınlanma Tarihi(Yılı)
          </label>
          <input
            type="text"
            className="form-control"
            id="tarih"
            placeholder="Yayınlanma Tarihi (Yılı)"
            required
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBilgi;

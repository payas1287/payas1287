import { useState } from "react";

const AddBilgi = ({ postBilgiler }) => {
  const [baslik, setBaslik] = useState("");
  const [desc, setDesc] = useState("");
  const [ısbn, setIsbn] = useState("");
  const [resim, setResim] = useState("");
  const [tür, setTür] = useState("");
  const [tarih, setTarih] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // database e yolla
    postBilgiler({ title: baslik, description: desc });

    setBaslik("");
    setDesc("");
  };

  return (
    <div className="container  mt-4">
      <h1 className="display-6 text-danger text-center">Payas Library</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Kitabın Adı
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Kitabın Adı"
            required
            onChange={(e) => setBaslik(e.target.value)}
            value={baslik}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Yazarın Adı
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Yazarın Adı"
            required
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ısbn" className="form-label">
            ISBN
          </label>
          <input
            type="text"
            className="form-control"
            id="ısbn"
            placeholder="ISBN"
            required
            onChange={(e) => setIsbn(e.target.value)}
            value={ısbn}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resim" className="form-label">
            Kapak Resmi
          </label>
          <input
            type="text"
            className="form-control"
            id="resim"
            placeholder="Kapak Resmi"
            required
            onChange={(e) => setResim(e.target.value)}
            value={resim}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tür" className="form-label">
            Tür
          </label>

          <input
            type="text"
            className="form-control"
            id="tür"
            placeholder="Tür"
            required
            onChange={(e) => setTür(e.target.value)}
            value={tür}
          />
          Birden fazla seçenek varsa slash ile ayırabilirsiniz
        </div>
        <div className="mb-3">
          <label htmlFor="tarih" className="form-label">
            Yayınlama Tarihi
          </label>
          <input
            type="text"
            className="form-control"
            id="tarih"
            placeholder="Yayınlama Tarihi"
            required
            onChange={(e) => setTarih(e.target.value)}
            value={tarih}
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

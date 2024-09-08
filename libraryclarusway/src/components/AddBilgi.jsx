import { useState } from "react";

const AddBilgi = ({postBilgiler}) => {

const[baslik,setBaslik]=useState("")
const[desc,setDesc]=useState("")
const[ısbn, setIsbn]= useState("")
const[image, setImage]=useState("")
const [tür, setTür] = useState("")
const[date, setDate] = useState("")
  
const handleSubmit=(e)=>{
e.preventDefault()

// database e yolla
postBilgiler({title:baslik, description:desc, =ısbn})

setBaslik("")
setDesc("")
setIsbn("")

}

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Kitabın Adı
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
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
            placeholder="Enter your Description"
            required
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
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

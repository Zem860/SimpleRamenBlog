import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Add = () => {
  const [ramenName, setRamenName] = useState('');
  const [shopName, setShopName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ramenName, shopName, imageUrl, description, rating };
    axios.post("http://localhost:5000/addRamen", data).then(()=>{
        console.log(data)
        navigate("/menu")
    })
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="ramenName" className="form-label mb-3 fw-bold">
            ramenName
          </label>
          <input
            onChange={(e) => {
              setRamenName(e.target.value);
            }}
            type="text"
            className="form-control mb-3"
            id="ramenName"
            aria-describedby="ramen"
          />
          <div id="ramen" className="form-text mb-3">
            Enter your favorite ramen
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="shopName"
            className="form-label mb-3 text-left fw-bold"
          >
            Name of the ramen shop{' '}
          </label>
          <input
            type="text"
            onChange={(e) => {
              setShopName(e.target.value);
            }}
            className="form-control mb-3"
            id="shopName"
          />
        </div>
        <div className="mb-3 ">
          <label className="form-label fw-bold" htmlFor="imageUrl">
            Provide ramen photo link
          </label>
          <input
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            type="text"
            className="form-control"
            id="imageUrl"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label fw-bold">
            Rate your Ramen
          </label>
          <select
            id="rating"
            className="form-select"
            onChange={(e) => setRating(Number(e.target.value))}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-floating mb-5">
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="form-control"
            placeholder="Leave a comment here"
            id="description"
            style={{ height: '200px' }}
          ></textarea>
          <label htmlFor="description">
            Say something about your ramen
          </label>
        </div>
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;

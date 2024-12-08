import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const EditingForm = ({ data, switchEdit }) => {
  const [ramenName, setRamenName] = useState(data.ramenName);
  const [shopName, setShopName] = useState(data.shopName);
  const [imageUrl, setImageUrl] = useState(data.imageUrl);
  const [rating, setRating] = useState(data.rating);
  const [description, setDescription] = useState(data.description);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const changedData = { ramenName, shopName, imageUrl, rating, description };
    axios
      .patch(`http://localhost:5000/edit/${data.id}`, changedData)
      .then((res) => {
        console.log(res)
        console.log("Edit Complete")
        switchEdit()
        navigate('/menu')

      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="col-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="ramenName" className="form-label mb-3 fw-bold">
            ramenName
          </label>
          <input
            value={ramenName}
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
            value={shopName}
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
            value={imageUrl}
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
            value={rating}
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
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="form-control"
            placeholder="Leave a comment here"
            id="description"
            style={{ height: '200px' }}
          ></textarea>
          <label htmlFor="description">Say something about your ramen</label>
        </div>
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditingForm;

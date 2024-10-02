import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [ramenShopName, setRamenShopName] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('anonymous');
  const [rating, setRating] = useState(0);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!author||author===""){
        setAuthor("anonymous")
    }
    
    const blog = { ramenShopName, photo, description, rating,  author: author.trim() === "" ? "anonymous" : author };
    axios.post('http://localhost:8000/blogs', JSON.stringify(blog)).then(() => {
      console.log('new rament place added');
      navigate('/menu')
    });
  };

  return (
    <div className="addingForm d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h2 className="mb-4">Add Your Favorite Ramen</h2>
      <form className="w-50 text-center" onSubmit={handleSubmit}>
        <label htmlFor="ramenShopName">Ramen Shop Name</label>
        <br />
        <input
          type="text"
          required
          value={ramenShopName}
          onChange={(e) => setRamenShopName(e.target.value)}
          className="form-control mb-3"
        />
        <br />
        <label htmlFor="author">Author</label>
        <br />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="form-control mb-3"
        />
        <br />
        <label htmlFor="photo">Photo</label>
        <br />
        <input
          type="text"
          required
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="form-control mb-3"
        />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control mb-3"
        />
        <br />
        <label className="me-3" htmlFor="rating">
          Rating
        </label>
        <select
          id="rating"
          className="form-select"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          style={{
            padding: '0.5rem 1rem',
            marginBottom: '3rem',
            marginTop: '1rem',
          }}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <button className="btn btn-info">Add Ramen</button>
      </form>
    </div>
  );
};

export default Add;

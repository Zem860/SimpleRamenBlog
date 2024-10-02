import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const RamenDetails = () => {
  const location = useLocation();
  const { data } = location.state || {}; // 確保 state 存在
  const navigate= useNavigate()
  const handleDelete = () => {
    axios.delete('http://localhost:8000/blogs/' + data.id).then((res) => {
      console.log('server data deleted');
      navigate("/menu")
    });
  };
  return (
    <>
      <div className="container">
        <div className=" detailThing row d-flex flex-column text-align-center justify-content-center">
            <h1>{data.ramenShopName}</h1>
            <div className="details text-center">
            <img src={data.photo} alt="" />
            </div>
            <h2>Author: {data.author}</h2>
            <p>Description: {data.description}</p>
            <p>Rating:{"⭐".repeat(data.rating)}</p>
            
            <div className="btnBox text-center">
            <button className='btn btn-danger w-50' style={{"height":"4rem"}} onClick={handleDelete}>Delete</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default RamenDetails;

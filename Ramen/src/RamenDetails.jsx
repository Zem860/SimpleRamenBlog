import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import EditingForm from './EditingForm';
const RamenDetails = () => {
  const location = useLocation();
  const { data } = location.state || {}; // 確保 state 存在
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const handleDelete = () => {
    console.log('click');
    axios.delete('http://localhost:5000/delete/' + data.id).then(() => {
      console.log('server data deleted');
      navigate('/menu');
    });
  };
  const switchEdit = () => {
    setIsEditing(!isEditing);
    console.log(data)
  };
  return (
    <>
      <div className="container text-center">
        <div className=" detailThing row d-flex ">
          <div className={isEditing ? 'col-5' : 'col-12'}>
            <h1>{data.shopName}</h1>
            <div className="details">
              <img src={data.imageUrl} alt="" />
            </div>
            <h2>Ramen Name: {data.ramenName}</h2>
            <p>Description: {data.description}</p>
            <p>Rating:{data.rating ? '⭐'.repeat(data.rating) : '💩'}</p>

            <div className="btnBox text-center">
              
              <button
                className={
                  isEditing ? 'btn btn-dark w-50' : 'btn btn-warning w-50'
                }
                style={{ height: '4rem' }}
                onClick={switchEdit}
              >
                {isEditing ? 'Close Editing' : 'Edit'}
              </button>
              {!isEditing && (
                <button
                  className="btn btn-danger w-50 me-2"
                  style={{ height: '4rem' }}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
          {isEditing && <EditingForm data = {data} switchEdit={switchEdit} />}
        </div>
      </div>
    </>
  );
};

export default RamenDetails;

import axios from 'axios';
import { useState, useEffect } from 'react';
import MenuCard from './MenuCard';

const Menu = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/blogs').then((res) => {
      setData(res.data);
    });
  }, []);
  return (
   
    <div className="ramen-gallery d-flex align-items-center justify-content-center m-0">
      <div className="container">
      <h1 className='my-4 text-center'>Ramen Gallery</h1>
        <div className="row">
          {data && <MenuCard data={data} />}</div>
        </div>
      </div>

  );
};
export default Menu;
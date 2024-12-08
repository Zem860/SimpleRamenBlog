import MenuCard from './MenuCard';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Menu = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("useEffect is called"); // 调试语句
    axios
      .get('http://localhost:5000/menu')
      .then((res) => {
        console.log("Data fetched:", res.data); // 确认请求已成功并打印数据
        setData(res.data.ramens);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  

  return (
    <div className="container text-center">
    <h1 className="h1 mb-5"> Ramen Gallery</h1>

      <div className="row text-start gx-3">
        {data && data.map((d, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <MenuCard data={d} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Menu;

import axios from "axios";
import {useEffect, useState} from 'react'

const Home = () => {
    const [data,setData] = useState(null)
    useEffect(()=>{
        axios.get('http://localhost:5000/homepage').then(res=>{
            setData(res.data.ramens[0]) 
            })
    },[])
    
  return (
    <>
      <div className="container">
        <div className="row  text-center">
          <h1 className="h1 mb-4">Travel with Ramen</h1>
            <h3 className="display-1 mb-4">{data && data.shopName}</h3>
            <h4 className="display-2 mb-4">{data && data.ramenName}</h4>
            <div  className = "d-flex justify-content-center mb-5" style={{"width":"100%"}}>
                <img src={data &&data.imageUrl} alt="delicious ramen" />
            </div>
            <p className="display-4 mb-4 fw-bold">Description: <br />{data &&data.description}</p>
            <p className="display-6">Ratings:{data &&'⭐'.repeat(data.rating)}</p>
        </div>
      </div>
    </>
  );
};

export default Home;

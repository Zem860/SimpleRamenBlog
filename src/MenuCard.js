import { Link } from "react-router-dom";
const MenuCard = ({ data }) => {
  return (
    <>
      {data.map((d) => (
        <div className="col-12 col-md-6 col-lg-4 mb-4" key={d.id}>
            <Link  className="detailLink" to={`/ramen/${d.id}` } state={{data:d}}>
          <div className="card h-100" style={{ width: '18rem' }}>
            <img
              src={d.photo}
              className="card-img-top"
              style={{ maxHeight: '160px', objectFit: 'cover' }}
              alt="delicious ramen"
            />
            <div className="card-body">
              <h5 className="card-title">{d.ramenShopName}</h5>
              <p className="card-text">
                Author: {d.author}
              </p>
              <p className="card-text">
                Rating: {d.rating} {'⭐'.repeat(d.rating)}
              </p>
            </div>
          </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MenuCard;

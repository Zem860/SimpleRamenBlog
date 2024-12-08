import { Link } from 'react-router-dom';

const MenuCard = ({ data }) => {
  return (
    <Link className="detailLink" to={`/ramen/${data.id}`} state={{ data }}>
      <div className="card " style={{ width: '18rem', height: '30rem' }}>
        <img
          src={data.imageUrl}
          className="card-img-top"
          alt={data.ramenName}
          style={{ height: '12rem', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title fw-bold">{data.ramenName}</h5>
          <p className="card-text fw-bold">{data.shopName}</p>
          <p className="card-tex text-center">Description:</p>

          <p className="card-text">
            {data.description.length > 50
              ? data.description.slice(0, 50) +"..."
              : data.description}
          </p>

          <p className="card-text">
            Rating: {data.rating ? '⭐'.repeat(data.rating) : '💩'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MenuCard;

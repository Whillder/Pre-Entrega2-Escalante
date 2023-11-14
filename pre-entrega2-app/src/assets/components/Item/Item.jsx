import { Link } from "react-router-dom";

export const Item = ({ id, name, img}) => {
  return (
    <div className="border m-2 d-flex flex-column .col-sm-1 justify-content-center align-content-center border border-3 border-black rounded-3 p-4">
      <div className="card border-0 ">
        <div className="card-body d-flex flex-column ">
          <h5 className="card-title text-align-center">{name}</h5>
          <img className="m-2" src={img} alt="Img-product" />
          <Link to={`/item/${id}`}>
            <button className="btn btn-dark m-2">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ( {description, price, stock, name, img, category} ) => {

  const onAdd = (items) => { 
    alert(`Se agregaron ${items} al carrito`)
 }

  return (
    <div className="container">
    <div className="border m-2">
        <div className="card d-flex justify-content-center align-content-center border border-3 border-primary rounded-3 p-4">
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center align-content-center">{name}</h5>
          <div className="d-flex justify-content-center align-content-center">
          <img src={img} alt="Img Item" />
          </div>
          <p className="card-text d-flex justify-content-center align-content-center"> {description} </p>
          <p className="d-flex justify-content-center align-content-center">Precio: {price} </p>
          <div className="d-flex justify-content-center align-content-center">
          <ItemCount stock={stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
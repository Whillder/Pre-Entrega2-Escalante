import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };


  return (
    <div className="d-flex flex-column col-6 justify-content-center align-content-center border border-3 border-primary rounded-3 p-4">
      <div className="d-flex justify-content-center align-content-center">
        <button className="btn btn-outline-secondary mx-3" onClick={decrement}>
          -
        </button>
        <strong className="d-flex justify-content-center align-items-center">{count}</strong>
        <button className="btn btn-outline-secondary mx-3" onClick={increment}>
          +
        </button>
      </div>
      <button className="btn btn-outline-primary mt-2" onClick={() => {if(count!=0){onAdd(count)}alert("No puede agregar en 0")}}>Agregar al carrito</button>
    </div>
  );
};
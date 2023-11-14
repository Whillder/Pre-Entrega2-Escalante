import { FaShoppingCart } from "react-icons/fa";
import style from "./cartWidget.module.css"
import { Link } from "react-router-dom";


export const CartWidget = () => {
  return (
    <>
    <Link to={"/"}>
    <a className={`nav-link active ${style.linkNavShow}`} aria-current="page" href="#">
      <FaShoppingCart color="white" size={35}/>
    <span className={style.countCar}>0</span></a>
    </Link>
    </>
  )
}
//{`nav-link active ${style.car}`}

import templeLogo from '/temple.svg'
import { CartWidget } from '../CartWidget/CartWidget'
import styles from './navbar.module.css'
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
    <header className='margin-bottom-40'>
        <nav className={`navbar-expand-md bg-body-tertiary ${styles.father}`}>
            <div className={`container-fluid ${styles.header}`}>
            <Link to={"/category/burger"}>
            <p className={`navbar-brand ${styles.logo}`}><img src={templeLogo} alt="Logo" />{CartWidget}</p>
                </Link>
                <button className={`navbar-toggler ${styles.button}`} type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`nav collapse navbar-collapse ${styles.list}`} id="navbarNavAltMarkup">
                    <div className={`navbar-nav ${styles.alignCenter}`}>
    <CartWidget/>
                <Link to={"/category/burger"}>
                    <p className={`nav-link ${styles.linkNav}`}>Burguers</p>
                </Link>
                <Link to={"/category/cerveza"}>
                <p className={`nav-link ${styles.linkNav}`}>Cervezas</p>
                </Link>
                <Link to={"/category/trago"}>
                <p className={`nav-link ${styles.linkNav}`}>Tragos</p>
                </Link>        
                        
                    </div>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}

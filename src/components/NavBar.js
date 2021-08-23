import CartWidget from "./CartWidget/CartWidget"
import  "./NavBar.css";
import { Link } from 'react-router-dom'


const NavBar = ()=>{
    return (
        
    <nav>
         <div className="logo">
            <p><a href="index.html"><img src="./logoFelita.jpg" class="logofeli" alt="logo Felita"></img></a></p>
         </div>   
        <ul>
            <Link to='/'> Home </Link>
            <Link to='/productos'> Productos </Link>
            <Link to ='/contacto'> Contacto </Link>
            
            <CartWidget />
           
        </ul>
        
    </nav>)
};
export default NavBar;

import CartWidget from "./CartWidget/CartWidget"
import  "./NavBar.css";
import { Link } from 'react-router-dom'


const NavBar = ()=>{
    return (
        
    <nav>
         <div className="logo">
            <p><Link to="/"><img src="./logoFelita.jpg" class="logofeli" alt="logo Felita"></img></Link></p>
         </div>   
        <ul>
            <Link to='/'> Home </Link>
            <Link to='/COMBO'> Combos </Link>
            <Link to ='/contacto'> Contacto </Link>
            
            <CartWidget />
           
        </ul>
        
    </nav>)
};
export default NavBar;

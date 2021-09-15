import CartWidget from "./CartWidget/CartWidget"
import  "./NavBar.css";
import { Link } from 'react-router-dom'


const NavBar = ()=>{
    return (
        
    <nav>
         <div className="logo">
            <Link to="/"><img src="./logoFelita.jpg" class="logofeli" alt="logo Felita"></img></Link>
         </div>   
        <ul>
            <Link to='/'> <li> Home </li></Link>
            <Link to='/category/COMBO'><li> Combos </li></Link>
            <Link to ='/category/Macetas'> <li>Macetas</li></Link>
            <Link to=""> <li>Contacto </li></Link>
            <Link to='/cart'><li> <CartWidget /></li></Link>
           
        </ul>
        
    </nav>)
};
export default NavBar;

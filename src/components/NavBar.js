import CartWidget from "./CartWidget/CartWidget"
import  "./NavBar.css";


const NavBar = ()=>{
    return (
        
    <nav>
         <div className="logo">
            <p><a href="index.html"><img src="./logoFelita.jpg" class="logofeli" alt="logo Felita"></img></a></p>
         </div>   
        <ul>
            <li><a class="link" href="#">Home</a></li>
            <li><a class="link" href="#">Productos</a></li>
            <li><a class="link" href="#">Contacto</a></li>
            <li><a class="link" href="#"></a></li>
           
            <CartWidget />
        </ul>
        
    </nav>)
};
export default NavBar;

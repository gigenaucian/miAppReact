import React from 'react';
import './footer.css';
import img from './logo-ins.png'




const Footer = ({title}) => {
    return (
        <div className="Footer">
            <h3>Seguinos en {title}</h3>
            <a href='https://www.instagram.com/felita.tiendadeceramica/'> <img src={img} alt="redes" width="30px" /></a> 
        </div>
    )
};

export default Footer

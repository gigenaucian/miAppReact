import React from 'react';
import './footer.css';
import img from './logo-ins.png'




const Footer = ({title}) => {
    return (
        <div className="Footer">
            <h3>Seguinos en {title}</h3>
            <img src={img} alt="redes" width="30px" />
            

            
        </div>
    )
};

export default Footer

import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css'

export const NavBar = () => {

    const activar = (id) =>{
        const lista = document.querySelectorAll('.menu')
        lista.forEach(element => {
            if(element.classList.contains('active')){
                element.classList.remove('active')
            }
        }); 
        lista[id].classList.add('active')
    }

    return (
        <nav>
            <p><Link to='/main'>Gestor de Pagos</Link></p>
            <ul>
                <li className='menu active'><Link onClick={()=>activar(0)} to='/main'>Inicio</Link></li>
                <li className='menu'><Link onClick={()=>activar(1)} to='clientes'>Clientes</Link></li>
                <li className='menu'><Link onClick={()=>activar(2)} to='servicios'>Servicios</Link></li>
                <li className='menu'><Link onClick={()=>activar(3)} to='contactos'>Contactos</Link></li>
                <li className='menu'><Link onClick={()=>activar(4)} to='pagos'>Pagos</Link></li>
            </ul>
        </nav>
    );
}

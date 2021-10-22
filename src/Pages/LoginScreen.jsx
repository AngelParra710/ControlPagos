import React from 'react';
import { FormLogin } from '../Components/FormLogin';
import '../Styles/login.css'

export const LoginScreen = ({history}) => {
    return (
        <main className="container-login">
           <h1 className='texttitle'>Gestor Control de Pagos</h1>
           <div className='container'>
                <div className="containerform">
                    <div>
                        <h4>Inicia sesion para continuar</h4>
                    </div>
                    <FormLogin history={history}/>
                </div>
           </div>
           <div className="wave" style={{backgroundImage: "url(./assets/wave.svg)"}} >
           </div>
        </main>
    );
}

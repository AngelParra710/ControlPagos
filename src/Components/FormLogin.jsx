import React, {useState} from 'react';
import '../Styles/login.css'

export const FormLogin = ({ history }) => {

    let user = 'Angel Parra'
    let pass = 'lobito'

    const [client, setClient] = useState({
        usuario: '',
        password: '',
    });

    const submit = (e) =>{
        e.preventDefault()
        if(client.usuario === user && client.password === pass){
            history.replace('/menu')
        }
        else{
            alert('Usuario y password invalidos')
        }
    }

    const setUsuario = (e) =>{
        setClient({
            ...client, 
            usuario:e.target.value
        })
    }

    const setPassword = (e)=>{
        setClient({
            ...client, 
            password:e.target.value
        })
    }
    
    return (
        <form onSubmit={submit}>
            <label>Usuario:</label>
            <input type="text" onChange={setUsuario} placeholder='Ingresa tu usuario'/>
            <label>Contraseña:</label>
            <input type="password" onChange={setPassword} placeholder='Ingresa tu password'/>
            <button type='submit' onSubmit={submit} >Iniciar</button>
        </form>
    );
}

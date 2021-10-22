import React from 'react';
import { MenuScreen as Main } from '../Pages/MenuScreen'
import { Clientes } from '../Pages/Clientes'
import { Servicios } from '../Pages/Servicios'
import { Contactos } from '../Pages/Contactos'
import { Pagos } from '../Pages/Pagos'
import { NavBar } from '../Components/NavBar';
import { Switch, Route } from 'react-router-dom';

export const MenuRoute = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/main' component={ Main } />
                <Route exact path='/clientes' component={ Clientes } />
                <Route exact path='/servicios' component={ Servicios } />
                <Route exact path='/contactos' component={ Contactos } />
                <Route exact path='/pagos' component={ Pagos } /> 
            </Switch>
        </div>
    );
}

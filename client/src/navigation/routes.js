import React from 'react'
import Tablas from '../components/tabla/tablas'


function HandleRoutes() {

    const routes = [
        {
            path: "/tablas",
            element: <Tablas />,
            exact: true,
            private: true,
        }        
    ]
    return routes;
};

export default HandleRoutes;

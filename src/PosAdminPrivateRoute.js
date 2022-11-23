import React from 'react';
import { Route } from 'react-router-dom';
import PosLayout from './layouts/admin/pos/PosLayout';

function PosAdminPrivateRoute({...rest}) {

    console.log('Hello world...');

    return (
        
        <Route {...rest}
            render={ ({props,location}) =>  
                <PosLayout {...props}/>  
            }
        />

    );
}

export default PosAdminPrivateRoute;

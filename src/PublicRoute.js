import React from 'react';
import {Route} from 'react-router-dom';
import FrontendLayout from './app/layouts/frontend/FrontendLayout';

console.log('pulic route');

function PublicRoute({...rest})
{
    return (
        <Route {...rest} render={ (props) => <FrontendLayout {...props} /> } />
    )
}

export default PublicRoute;
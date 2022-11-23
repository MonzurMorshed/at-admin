import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import '../../../assets/admin/css/styles.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../../../assets/admin/js/scripts';

import PosNavbar from './PosNavbar';
import PosSidebar from './PosSidebar';
import PosFooter from './PosFooter';

import routes from '../../../routes/pos/routes';

const PosLayout = () => {

    return (
        <div className="sb-nav-fixed">
            <PosNavbar />
            <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                    <PosSidebar />
                </div>

                <div id="layoutSidenav_content" style={{backgroundColor: '#fff'}}>
                    <main>
                        
                        <Switch>
                            {routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route 
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => (
                                                <route.component {...props} />
                                            )}
                                        />
                                    )
                                )
                            })};
                            <Redirect from="/admin" to="/admin/pos/dashboard" />
                        </Switch>

                    </main>
                    <PosFooter />
                </div>

            </div>
        </div>
    );

}

export default PosLayout;

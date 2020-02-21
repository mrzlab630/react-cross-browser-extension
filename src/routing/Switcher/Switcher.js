import React from 'react';
import { Route,Redirect,Switch } from 'react-router-dom';
import appRoutes from '../appRoutes';




const Switcher = (location,login) =>{



    const routeUrls = Object.keys(appRoutes);

    const renderRoutes = routeUrls.map((itm,idx) => {

        if (appRoutes[itm].private) {

            return (
                <Route
                    key={`renderRoutes-${idx}`}
                    path={appRoutes[itm].path}
                    component={login ? appRoutes[itm].component : false}
                    render={!login ? props => <Redirect to={appRoutes[itm].redirect}/> : props => false}
                />

            );
        }

            return (<Route
                key={`renderRoutes-${idx}`}
                path={appRoutes[itm].path}
                component={appRoutes[itm].component}
                exact={appRoutes[itm].exact}
            />)

    });





    return( <Switch location={location}>
            {
                renderRoutes
            }
            <Redirect to="/Error404"/>
        </Switch>);
};


export default Switcher;
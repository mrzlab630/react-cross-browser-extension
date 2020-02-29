import React from 'react';
import { Switch ,Redirect, useLocation } from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore} from '../../store/';


import Switcher from '../../routing/Switcher';

import {InfoInConsole} from '../../utilities';


const App = () =>{

    InfoInConsole();


    let location = useLocation();

    const store = createStore;

    const state = store && store.getState() || false;


    const {error,isLoading} = state || false;

    if(error){
        console.error(error);
    }




    return (<Provider store={store}>

            <Switch>
                {
                    Switcher(location,isLoading)
                }
                <Redirect to="/Error404"/>
            </Switch>

        </Provider>
    );

};


export default App;

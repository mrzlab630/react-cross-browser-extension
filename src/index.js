import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter as Router } from "react-router-dom";

import {  ThemeProvider } from "@material-ui/styles";

import theme from './theme';

import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
        <ErrorBoundry>
                <Router>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                    <App/>
                    </ThemeProvider>
                </Router>
        </ErrorBoundry>,
    document.getElementById('root')
);
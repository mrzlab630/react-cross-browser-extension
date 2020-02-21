import React, { Component } from 'react';
import ErrorIndicator from '../ErrorIndicator';


export default class ErrorBoundry extends Component{

    state = {
        hasError: false,
        error: false,
        errorInfo:false
    };

    componentDidCatch(error, errorInfo) {

    this.setState({
        hasError:true,
        error: error,
        errorInfo: errorInfo})
    }


    render() {

        if(this.state.hasError){

            console.error('ErrorBoundry',this.state);

        return <ErrorIndicator
            info={this.state.error && this.state.error.toString() + " " + this.state.errorInfo.componentStack}/>;
        }

        return this.props.children;

    }
}
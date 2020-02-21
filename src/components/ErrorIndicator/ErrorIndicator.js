import React from 'react';


const ErrorIndicator = ({info}) =>{

    return (
        <div className='ErrorIndicator'>
            <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Error!</h4>
                <p>{info || ':('}</p>
                <p className="mb-0"></p>
            </div>
        </div>
    );
};

export default ErrorIndicator;
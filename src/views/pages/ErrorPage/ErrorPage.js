import React from 'react';
import PropTypes from 'prop-types';


import './ErrorPage.scss';



const ErrorPage = ({title =`Oops! Page not found`,
                       code=404,
                       info=`we are sorry, but the page you requested was not found`}) =>{




    const codeRender = String(code).split('').map((val,idx)=>{
        return <span key={`codeRender-${idx}`}>{val}</span>;
    });

    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h3>
                        {
                            title
                        }
                    </h3>
                    <h1>
                        {
                            codeRender
                        }
                    </h1>
                </div>
                <h2>
                    {
                        info
                    }
                </h2>
            </div>
        </div>

    );
};

ErrorPage.prototype = {
                            title:PropTypes.strict,
                            code:PropTypes.numeric,
                            info:PropTypes.strict,
                        };



export default ErrorPage;
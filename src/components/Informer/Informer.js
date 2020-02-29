import React,{useState,useEffect} from "react";
import PropTypes from 'prop-types';

import Alert from './Alert';

import {Snackbar,Box,IconButton,Grid} from '@material-ui/core';
import {useTheme} from "@material-ui/styles";
import useStyles from "./useStyles";

/**
 *
 * @param severity -- error warning info success
 * @param open
 * @param info
 * @param callback
 * @param res
 * @returns {*}
 * @constructor
 */

const Informer = ({severity,open = false,info,callback, ...res}) => {


    const [openA, setOpenA] = useState(false);

    const [infoA,setInfoA] = useState(false);

    const [alertStyle,setAlertStyle] = useState(false);

    useEffect(()=>{

        if(severity){
            setAlertStyle(severity);
        }

        if(open){
            setOpenA(open);
        }


        if(info){
            setInfoA(info);
        }

    },[severity,open,info]);






    const handleClose = e => {

        if (e === 'close') {
            setOpenA(false);
            callback(e);
        }

    };


    const theme = useTheme();
    const classes = useStyles();

    return (
        <Snackbar
            open={openA}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{
                            vertical:'top',
                            horizontal:'right'
                        }}
        >

                <Alert
                    alertStyle={alertStyle}
                    callback={handleClose}
                 >
                    {infoA}
                </Alert>

        </Snackbar>
    );
};

Informer.prototype = {
    severity:PropTypes.string,
    open:PropTypes.bool,
    info:PropTypes.string,
    callback: PropTypes.func,
};

export default Informer;
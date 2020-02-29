import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import InfoIco from "../../assets/svgs/info-circle.inline.svg";
import WarningIco from "../../assets/svgs/exclamation-triangle.inline.svg";
import ErrorIco from "../../assets/svgs/exclamation-circle.inline.svg";
import SuccesIco from "../../assets/svgs/check-circle.inline.svg";
import DefaultIco from "../../assets/svgs/circle.inline.svg";
import {Box, Grid, IconButton} from "@material-ui/core";
import CloseIco from "../../assets/svgs/times.inline.svg";
import {useTheme} from "@material-ui/styles";
import useStyles from "./useStyles";


const Alert = ({alertStyle,children,callback}) => {

    const theme = useTheme();
    const classes = useStyles();

    const handleClose = () =>{
        callback(`close`);
    };

    const [themeAlert,setThemeAlert] = useState({
                                                        alert:classes.default,
                                                        ico:<DefaultIco width={20}/>
                                                            });

    const themeAlertDetect = alertStyle =>{

        let alert;
        let ico;

        switch (alertStyle && alertStyle.toLowerCase() || 'default') {
            case "info":
                alert = classes.info;
                ico =  <InfoIco width={20}/>;
                break;

            case 'warning':
                alert = classes.warning;
                ico =  <WarningIco width={20}/>;
                break;

            case 'error':
                alert = classes.error;
                ico =  <ErrorIco width={20}/>;
                break;

            case 'success':
                alert = classes.success;
                ico =  <SuccesIco width={20}/>;
                break;

            default:
                alert = classes.default;
                ico =  <DefaultIco width={20}/>;
        }

        return {alert,ico}

    };

    useEffect(()=>{

      const  alertStyleDetect = themeAlertDetect(alertStyle);

        setThemeAlert(alertStyleDetect);

    },[alertStyle]);


    return   <Grid
              container
              className={`${themeAlert.alert} ${classes.wrapperContent}`}
              spacing={1}
        >

            <Grid item xs={2} className={`${classes.ContentIco} ${classes.center}`}>
                {themeAlert.ico}
            </Grid>
            <Grid item xs={8} className={`${classes.ContentInfo} ${classes.center}`}>
                {children}
            </Grid>
            <Grid item xs={2} className={`${classes.ContentClose} ${classes.center}`}>

                <IconButton
                    aria-label="close"
                    color="inherit"
                    className={classes.closeBtm}
                    onClick={handleClose}
                >
                    <CloseIco width={15} />
                </IconButton>

            </Grid>

        </Grid>;
};

Alert.prototype = {
    alertStyle:PropTypes.string,
    children:PropTypes.node,
    callback: PropTypes.func,
};

export default Alert;
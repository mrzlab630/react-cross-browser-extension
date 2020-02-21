/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 23.09.2019
 * Time: 11:14
 * About:
 *
 */
import React from "react";
import PropTypes from 'prop-types';

import {useTheme} from "@material-ui/styles";
import useStyles from "./useStyles";
import {Button, IconButton} from "@material-ui/core";



const ButtonRender = ({callback,items,sendBtm,toggleDropMenu, ...res}) => {


    const theme = useTheme();
    const classes = useStyles();

    const handleClick = id => e => {
        callback(id);
    };
    const handleClickDropMenu = val => e => {
        callback(val);
    };

    const renderItms = items ? items.map((itm,idx)=>{

        const {id,ico,name,size,list,command} = itm || false;
        const {font,fontSize,colors} = list || false;

        const renderMenuColors = colors
                            ? colors.map((itm,idx)=>(
                                                    <button
                                                    key={`renderMenu-${idx}`}
                                                    className={classes.dropMenuItem}
                                                    style={{
                                                        background:itm
                                                    }}
                                                    onClick={handleClickDropMenu({id,color:itm,command})}
                                                    ></button>
                                                ))
                            : null;

        const renderMenuFontSize = fontSize
                        ? fontSize.map((itm,idx)=>(
                                            <button
                                                key={`renderMenu-${idx}`}
                                                className={classes.dropMenuItemNumber}
                                                onClick={handleClickDropMenu({id,size:itm.action,command})}
                                            >{itm.px}px</button>
                                        ))
                        : null;

        const renderMenuFont = font
                        ? font.map((itm,idx)=>(
                            <button
                                key={`renderMenu-${idx}`}
                                className={classes.dropMenuItemNumber}
                                onClick={handleClickDropMenu({id,font:itm,command})}
                            >{itm}</button>
                        ))
                        : null;


        return(
            <li
                key={`renderItm-${idx}-${id}`}
                className={classes.buttonsListItm}
            >
                {
                    renderMenuColors || renderMenuFontSize || renderMenuFont
                        ? <div
                            className={classes.dropMenu}
                        >
                            {renderMenuColors || renderMenuFontSize || renderMenuFont}
                    </div>
                        : null
                }
                <IconButton
                    aria-label="delete"
                    className={classes.buttonsListItmBtm}
                    onClick={renderMenuColors || renderMenuFontSize ? null : handleClick(itm)}
                >
                    <img src={ico} width={size || 15} height={`auto`} alt={name}/>
                </IconButton>
            </li>

        )
    }) : false;
    const renderBtms = sendBtm ? sendBtm.map((itm,idx)=>{

        const {id,name} = itm || false;

        return(
            <li
                key={`renderItm-${idx}-${id}`}
                className={classes.buttonsListItm}
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick(itm)}
                >
                    {name}
                </Button>
            </li>

        )
    }) : false;

    return ( <ul {...res}>
                {
                    renderItms
                }

            {
                renderBtms
            }
            </ul>);
};

ButtonRender.prototype = {
    toggleDropMenu:PropTypes.bool,
    items:PropTypes.array,
    sendBtm:PropTypes.array,
    callback: PropTypes.func
};


export default ButtonRender;
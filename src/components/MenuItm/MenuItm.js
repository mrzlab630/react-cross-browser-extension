import React, {useState} from "react";
import PropTypes from 'prop-types';
import {IconButton, Menu, MenuItem} from "@material-ui/core";

import {useTheme} from "@material-ui/styles";
import useStyles from "./useStyles";



const MenuItm = ({icon,items,callback,classNameBtm, ...res}) => {


    const [anchorElMenu, setAnchorElMenu] = useState(null);

    const handleClick = event => {
        setAnchorElMenu(event.currentTarget);
    };

    const handleClose = id => () => {
        setAnchorElMenu(null);
        callback(id);
    };


    const renderItems = items
                    ? items.map((itm,idx)=>{

                        const {name,ico} = itm || false;

                        return(<MenuItem
                                    key={`renderItems-${idx}`}
                                    onClick={handleClose(name)}
                                >
                                 {ico || name}
                            </MenuItem>);
        })
                    : false;


    const theme = useTheme();
    const classes = useStyles();

    return (<>
        <IconButton
            className={`${classes.menuBtm} ${classNameBtm}`}
            aria-label="settings"
            aria-haspopup="true"
            onClick={handleClick}
        >{
            icon
        }
        </IconButton>
        <Menu
            anchorEl={anchorElMenu}
            keepMounted
            open={Boolean(anchorElMenu)}
            onClose={handleClose()}
        >
            {
                renderItems
            }
        </Menu>
    </>);
};

MenuItm.prototype = {
    icon:PropTypes.node,
    items:PropTypes.object,
    classNameBtm:PropTypes.node,
    callback: PropTypes.func,

};

export default MenuItm;
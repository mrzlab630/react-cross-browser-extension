import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';

import {Collapse,IconButton,CardActions,CardContent,CardHeader,Card} from '@material-ui/core';

import MenuItm from '../MenuItm';

import {useTheme} from "@material-ui/styles";
import useStyles from "./useStyles";


import AngleDown from  '../../assets/svgs/angle-down.inline.svg';
import EllipsisV from "../../assets/svgs/ellipsis-v.inline.svg";

import {menuAction} from '../../config';


const NoteItm = ({title,subheader,preview,children,callback, ...res}) =>{

    const [expanded, setExpanded] = useState(false);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleClickMenuItm = e =>{

        if(!e){
            return false;
        }
        callback(e);
    };


    const theme = useTheme();
    const classes = useStyles();

    return(<Card
        className={classes.root}
    >
        <CardHeader

            action={
                <MenuItm
            icon={<EllipsisV width={5}/>}
            items={menuAction}
            callback={handleClickMenuItm}
            />
            }
            {...{title,subheader}}
        />
        <CardContent>
            {
                preview
            }
        </CardContent>

        <CardActions disableSpacing>

            <IconButton
                className={`${classes.expand} ${expanded ? classes.expandOpen : false}`}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <AngleDown width={10}/>
            </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <span
                    dangerouslySetInnerHTML={{__html: children}}/>
            </CardContent>
        </Collapse>
    </Card>);
};




NoteItm.prototype = {
    title:PropTypes.string,
    subheader:PropTypes.string,
    preview:PropTypes.string,
    children:PropTypes.node,
    callback: PropTypes.func,
};

export default NoteItm;
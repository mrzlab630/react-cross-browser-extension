import { makeStyles } from "@material-ui/core/styles";
import {CardContent} from "@material-ui/core";
import React from "react";




const useStyles = makeStyles(theme => ({

    root: {
       // width: 315,
        wordWrap: `break-word`,
        whiteSpace: `pre-wrap`,
        '& pre':{
            ...theme.pre
        }
    },
    settings:{
        padding:`12px 19px`,
    },
    expand: {
        padding:`12px 14px`,
        marginLeft: `auto`,
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    listWrap:{
        padding:15
    }
}));



export default useStyles;
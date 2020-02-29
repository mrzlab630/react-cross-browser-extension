import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';

import {Grid} from '@material-ui/core';
import NoteItm from './NoteItm';
import Progress from '../Progress';

import {getDateTimeFromTimestamp,cutPreview} from '../../utilities';

import {useTheme} from "@material-ui/styles";
import useStyles from "./useStyles";


const NotesList = ({notesList,callback, ...res}) => {

    const [list,setList] = useState(false);


    useEffect(()=>{
            setList(notesList ? notesList.sort((a,b)=> b.date - a.date) : []);

    },[notesList]);


    const handleClickNoteMenuItm = id => e =>{
        callback({value:id,action:e});
    };

/*
value: {html: "wef", text: "wef"}
category: "my"
date: 1582301603682
id: 4
 */

const renderList = list
                        ? list.map((itm,idx) =>{

                            const {id,date,category,title,value} = itm || false;
                            const {html,text} = value || false;
                            const subheader = getDateTimeFromTimestamp(date);

                            return(
                                <Grid
                                    key={`renderList-${idx}`}
                                    item
                                    xs={12} sm={6} md={4} lg={4} xl={3}
                                >
                                <NoteItm
                                    title={title}
                                    subheader={subheader}
                                    preview={cutPreview(text,30)}
                                    children={html}
                                    callback={handleClickNoteMenuItm(id)}
                                />
                                </Grid>
                            )})
                        : false;


    const theme = useTheme();
    const classes = useStyles();

    return (<Grid
                container
                spacing={10}
                className={classes.listWrap}
    >
     {
            renderList
     }
    </Grid>);
};

NotesList.prototype = {
    notesList:PropTypes.array,
    callback: PropTypes.func,
};

export default NotesList;
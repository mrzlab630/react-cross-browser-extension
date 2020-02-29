import React, {useEffect, useState} from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import {Grid} from '@material-ui/core';
import {useTheme} from "@material-ui/styles";
import useStyles from "./useStyles";

import Progress from '../../../components/Progress';
import TextEditor from '../../../components/TextEditor';
import Informer from '../../../components/Informer';
import NotesList from '../../../components/NotesList';

import {actionsNotesFromDB,putStatus} from '../../../store/actions';



const Home = ({   dispatchActionsNotesFromDB,
                  dispatchAddStatus,
                  notes,
                  status,
                  isLoading   }) =>{


    const [notesList,setNotesList]                  = useState(false);
    const [statusAddToDb,setStatusAddToDb]          = useState(false);
    const [refreshNotesList,setRefreshNotesList]    = useState(true);


    useEffect(()=>{

        if(refreshNotesList){
            dispatchActionsNotesFromDB('get all');
            setRefreshNotesList(false);
        }

        if(notes){
            setNotesList(notes);
        }


    },[refreshNotesList,notes]);


    useEffect(()=>{

        if(status){
            return      setStatusAddToDb(status);
        }

        return () => {
            setStatusAddToDb(null);

            if(status){
                dispatchAddStatus(null);
            }

        };

    },[status]);



const itmAction = val =>{

    const {action,value,count} = val || false;
    let dataToSend;

    switch (action || 'none') {

        case 'add':
            dataToSend = {value,count,category:'my'};
            break;

        default:
            dataToSend = value;
           break;
    }

    return dispatchActionsNotesFromDB(action,dataToSend);

};

const cleanStatusAddToDb = e =>{

    if(e === 'close'){

        if(status){
            dispatchAddStatus(null);
        }

    }
};



    const theme = useTheme();
    const classes = useStyles();


    return(<Grid container className={classes.wrapper}>
            <Informer
                severity={statusAddToDb && statusAddToDb.status}
                info={statusAddToDb && statusAddToDb.message}
                open={statusAddToDb && !!statusAddToDb.message}
                callback={cleanStatusAddToDb}
            />
        {
                isLoading
                    ?  <div
                            className={classes.loading}>
                            <Progress/>
                        </div>
                    :    false
            }
        <Grid item xs={12} className={classes.textarea}>
            <TextEditor
                callback={itmAction}
            />
        </Grid>

        <Grid item xs={12} className={classes.notesList}>

            <NotesList
                notesList={notesList}
                callback={itmAction}
            />

        </Grid>

    </Grid>);
};

Home.prototype ={
    dispatchActionsNotesFromDB:Proptypes.func,
    dispatchAddStatus:Proptypes.func,
    notes:Proptypes.array,
    status:Proptypes.object,
    isLoading:Proptypes.bool
};


const mapDispatchToProps = dispatch =>{

    return{
        dispatchActionsNotesFromDB: (action,data) =>   {
            actionsNotesFromDB(action,data)(dispatch);
        },
        dispatchAddStatus: val =>   {
            putStatus(val)(dispatch);
        },

    }


};

const mapStateToProps = state =>{

    const {
        notes,
        status,
        isLoading
            } = state || false;

    return{
        notes,
        status,
        isLoading
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);

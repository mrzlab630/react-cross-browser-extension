import React, {useEffect, useState} from 'react';
import Proptypes from 'prop-types';

import {useTheme} from "@material-ui/styles";
import useStyles from "./useStyles";

import TextEditor from '../../../components/TextEditor';

import {useIndexedDB} from '../../../hooks';





const Home = () =>{

    const [actoionToDb,setactoionToDb] = useState('get all');

    const [dataToDb,setDAtaToDb] = useState(null);

    const [statusAddToDb,setStatusAddToDb] = useState(null);

    const indexedDB = useIndexedDB(
                                'mrZLab630DBnotes',
                                    2,
                                'notes',
                                actoionToDb,
                                dataToDb,
                                ['category']
                                );

            useEffect(()=>{

                if(indexedDB){
                    setStatusAddToDb(indexedDB);
                }

            return () => setStatusAddToDb(null);

            },[indexedDB]);

console.log(statusAddToDb);


const textAction = val =>{

    const {action,value} = val || false;

    switch (action || 'none') {

        case 'send':
            setactoionToDb('add');
            return setDAtaToDb({value,category:'my'});

        default:
            console.log(val);
    }


};


    const theme = useTheme();
    const classes = useStyles();


    return(<div className={classes.wrapper}>


        <div className={classes.textarea}>
            <TextEditor
                callback={textAction}
            />
        </div>

    </div>);
};

export default Home;

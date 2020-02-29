import {DB} from '../../config';
import {IndexedDB} from '../../utilities';


const actionsNotesFromDB = (action, data) => async dispatch => {

    try{

        if(!action){
            throw new Error('no action');
        }

        if(action !== 'get all' && !data){
            throw new Error('no data');
        }

        dispatch({
                    type: 'IS_LOADING',
                    payload:true,
                });

        const {nameDb,ver,storeName} = DB || false;

        const resultIndexedDB = await IndexedDB(nameDb,ver,storeName,action,data);

        const {status,value,message} = resultIndexedDB;

        if(!status || status === 'error'){
                                    throw new Error(message || 'unknown error');
                                }

        switch (action || 'none') {

            case 'add':

                return      dispatch({
                                        type: 'ADD_ONE_NOTE',
                                        payload: {status,message,value}
                                    });

            case 'delete':
                return      dispatch({
                                        type: 'DELETE_ONE_NOTE',
                                        payload: data
                                    });

            default:

                return      dispatch({
                                        type: 'LOAD_NOTES',
                                        payload: {status,message,value}
                                    });
        }





    }catch (e) {
        dispatch({
            type: 'ADD_STATUS',
            payload: {
                status:'error',
                id:parseInt(new Date().getTime()/1000),
                message:e.message
            }
        });
    }


    return [];

};


export default actionsNotesFromDB;
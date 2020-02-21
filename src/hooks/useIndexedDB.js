import {useEffect, useState} from "react";
import { openDB} from 'idb';



const useIndexedDB = (
                    nameDb = 'mrZLab630DB',
                      ver= 1,
                    storeName = 'store',
                      action = 'list',
                      data,
                    indexs = [],
                      ) =>{

    const [nameDB,]           = useState(nameDb);
    const [rev,]              = useState(ver);
    const [objectStore,]      = useState(storeName);
    const [keyPath,]          = useState('id');

    const [result,setResult]  = useState(null);



    async function init() {
        const db = await openDB(nameDB, rev, {
            upgrade(db, oldVersion) {
                if (oldVersion < 1) {
                 let  store =   db.createObjectStore(objectStore,{keyPath,autoIncrement: true});

                    store.createIndex('date', 'date');

                 if(indexs && Array.isArray(indexs) && indexs.length > 0){

                     for (let i = 0; i < indexs.length; i++) {
                         store.createIndex(indexs[i], indexs[i]);
                     }

                 }

                }

            },

        });

        const transaction = db.transaction(objectStore, 'readwrite');


            {
                try{

                    let res;

                    switch (action && action.toLowerCase() || 'none') {
                        case 'add':
                            if(data && action && action.toLowerCase() === 'add'){

                                if(Array.isArray(data) && data.length > 0){

                                    for (let i = 0; i < data.length; i++) {
                                        transaction.store.add({...data[i],date: Date.now()});
                                    }

                                }else{
                                    transaction.store.add({...data,date: Date.now()});
                                }


                                await transaction.done;
                            }

                            res = {success:true};

                            break;

                        case 'get all':
                            const value = await transaction.store.getAll();

                            res = {value,success:true};

                            break;

                        default:
                                  throw  new Error('no action');

                    }


                setResult(res);

                }catch(err){
                    setResult({error:err.message})
                }

            }






    }




    useEffect(()=>{

        if(action){
            init();
        }

    },[action]);


    return result;

};

export default useIndexedDB;
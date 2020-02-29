import {openDB} from 'idb';

const IndexedDB = async (
                            nameDb = 'mrZLab630DB',
                            ver= 1,
                            storeName = 'store',
                            action = 'list',
                            data,
                            indexes = [],
                            keyPath = 'id'
                        ) =>{


    const db = await openDB(nameDb, ver, {
        upgrade(db, oldVersion) {
            if (oldVersion < 1) {
                let  store =   db.createObjectStore(storeName,{keyPath,autoIncrement: true});

                store.createIndex('date', 'date');

                if(indexes && Array.isArray(indexes) && indexes.length > 0){

                    for (let i = 0; i < indexes.length; i++) {
                        store.createIndex(indexes[i], indexes[i]);
                    }

                }

            }

        },

    });

    const transaction = db.transaction(storeName, 'readwrite');

    {
        try{

            let res;
            let value;
            let dataToStore;
            let id;

            switch (action && action.toLowerCase() || 'none') {
                case 'add':

                    if(!data || data.count === 0){
                        throw  new Error('no data to add to DB');
                        return false;
                    }
                    value = [];
                        if(Array.isArray(data) && data.length > 0){

                            for (let i = 0; i < data.length; i++) {

                                dataToStore = {...data[i],date: Date.now()};

                                id =  await   transaction.store.add(dataToStore);

                                value.push({...dataToStore,id});
                            }

                        }else{
                             dataToStore = {...data,date: Date.now()};

                            id =   await   transaction.store.add(dataToStore);

                            value = {...dataToStore,id};

                        }


                        await transaction.done;

                        res = {
                            status:`success`,
                            message:`success add to DB`,
                            value
                        };


                    break;

                case 'delete':

                    if(!data || data.count === 0){
                        throw  new Error('no data to delete from DB');
                        return false;
                    }

                     value = await   transaction.store.delete(data);

                    res = {
                        status:`success`,
                        message:`delete itm from DB`,
                        value
                    };

                    break;

                case 'get all':
                     value = await transaction.store.getAll();

                    res = {
                        status:`success`,
                        value
                    };

                    break;

                default:
                    throw  new Error('no action');

            }


            return(res);

        }catch(err){
            return({
                status:`error`,
                message:err.message,
                value:data
            })
        }

    }


};


export default IndexedDB;


const putStatus = val => dispatch =>{

    try {


        dispatch({
            type: 'ADD_STATUS',
            payload: val
        });


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
};

export default putStatus;
import initState from '../initState';



const reducers = (state = initState, action) => {

    const {type,payload} = action || false;

    const {status,message,value} = payload || false;

    const {notes:stateNotes} = state || false;

    let newStatus = {status,message};

    switch (type) {

        case 'IS_LOADING':
            return {
                ...state,
                isLoading:payload,
            };

        case 'ADD_ONE_NOTE':

            return {
                ...state,
                isLoading:false,
                notes:stateNotes ? [...stateNotes,value] : [...value],
                status:newStatus
            };

        case 'DELETE_ONE_NOTE':

            const newNotes = stateNotes && Array.isArray(stateNotes) ? stateNotes.filter(itm => itm.id !== payload) : [];

            return {
                ...state,
                isLoading:false,
                notes:newNotes,
                status:newStatus
            };


        case 'LOAD_NOTES':

            return {
                ...state,
                isLoading:false,
                notes:value,
                status:newStatus
            };

        case 'ADD_STATUS':
            return {
                ...state,
                isLoading:false,
                status:payload,
            };

        default:
            return state
    }
};

export default reducers;
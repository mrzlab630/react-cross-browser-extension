import initState from '../initState';



const reducers = (state = initState, action) => {

    const {type,payload} = action || false;

    switch (type) {

        case 'IS_LOADING':
            return {
                ...state,
                isLoadingPage:payload,
            };

        case 'ERROR_FETCH_PAGES':
            return {
                ...state,
                isLoading:false,
                isLoadingPage:false,
                error:{
                    ...payload
                }

            };

        default:
            return state
    }
};

export default reducers;
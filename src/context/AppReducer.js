const type = {
    getActorName: 'GET_ACTOR_NAME',
    getActorInfo: 'GET_ACTOR_INFO'
};

const initialState = {
    actorName: '',
    actorInfo: null
};

const appReducer = (state, action) => {
    switch (action.type) {
        case type.getActorName:
            return {
                ...state,
                actorName: action.payload
            }
        
        case type.getActorInfo:
            return {
                ...state,
                actorInfo: action.payload
            }
    
        default:
            return state;
    }
};

export { initialState, type }
export default appReducer;
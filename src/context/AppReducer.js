const type = {
    getActorName: 'GET_ACTOR_NAME',
    getActorInfo: 'GET_ACTOR_INFO',
    resetAll: 'RESET_ALL'
};

const initialState = {
    actorName: 'Julya Roberts',
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

        case type.resetAll:
            return {
                ...state,
                actorName: '',
                actorInfo: null
            }

        default:
            return state;
    }
};

export { initialState, type }
export default appReducer;
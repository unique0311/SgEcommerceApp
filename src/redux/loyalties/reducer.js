import {
    GET_LOYALTIES
} from '../action_types';

const INIT_STATE = {
    loyalties: null
}

const loyaltiesReducer = (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_LOYALTIES:
            return {
                loyalties: payload
            };
        default: return { ...state };
    }
}

export default loyaltiesReducer;
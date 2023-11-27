import {
    GET_FLAYERS
} from '../action_types';

const INIT_STATE = {
    flayers: null
}

const flayersReducer = (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_FLAYERS:
            return {
                flayers: payload
            };
        default: return { ...state };
    }
}

export default flayersReducer;
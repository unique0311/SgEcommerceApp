import {
    GET_OFFERS,
    GET_OFFER
} from '../action_types';

const INIT_STATE = {
    offers: null,
    offer: null
}

const offersReducer = (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_OFFERS:
            return {
                ...state,
                offers: payload
            };
        case GET_OFFER:
            return {
                ...state,
                offer: payload
            };
        default: return { ...state };
    }
}

export default offersReducer;
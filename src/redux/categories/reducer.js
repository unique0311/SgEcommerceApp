import {
    GET_CATEGORIES
} from '../action_types';

const INIT_STATE = {
    categories: null
}

const categoriesReducer = (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CATEGORIES:
            return {
                categories: payload
            };
        default: return { ...state };
    }
}

export default categoriesReducer;
import {
    GET_RECIPES
} from '../action_types';

const INIT_STATE = {
    recipes: null
}

const recipesReducer = (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_RECIPES:
            return {
                recipes: payload
            };
        default: return { ...state };
    }
}

export default recipesReducer;
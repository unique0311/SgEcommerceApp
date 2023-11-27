import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    SAVE_SIGNUPEMAIL_STEP_1,
    LOAD_TOKEN
} from '../action_types';

import AsyncStorage from '@react-native-async-storage/async-storage';

// async function INIT_STATE_FUNC() {
//     return {
//         token: await AsyncStorage.getItem('token'),
//         isAuthenticated: await AsyncStorage.getItem('token') ? true : false,
//         user: {},
//         registerForm: {
//             firstName: '',
//             lastName: '',
//             email: '',
//             password: '',
//             passwordConf: '',
//             phoneNumber: '',
//             birthday: '',
//             gender: '',
//             familyCode: ''
//         },
//         loading: false,
//     }
// };

const INIT_STATE = {
    token: null,
    isAuthenticated: null,
    user: {},
    registerForm: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        phoneNumber: '',
        birthday: '',
        gender: '',
        familyCode: ''
    },
    loading: false,
}

// birthday: '1998-04-15',
// gender: 'MALE',
// familyCode: 'KASMOD'

const authReducer = (state = INIT_STATE, action) => {
    const { type, payload } = action;            
    switch (type) {
        case LOGIN_SUCCESS:            
            return {
                ...state,
                user: payload
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: payload
            };
        case SAVE_SIGNUPEMAIL_STEP_1:
            return {
                ...state,
                registerForm: payload
            };
        case LOAD_TOKEN:
            return {
                ...state,
                ...payload
            }
        default: return { ...state };
    }
}

export default authReducer;
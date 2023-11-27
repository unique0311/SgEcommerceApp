import { combineReducers } from 'redux';
import auth from './auth/reducer';
import categories from './categories/reducer';
import offers from './offers/reducer';
import recipes from './recipes/reducer';
import loyalties from './loyalties/reducer';
import flayers from './flayers/reducer';

const reducers = combineReducers({
  auth,
  categories,
  offers,
  recipes,
  loyalties,
  flayers
});

export default reducers;
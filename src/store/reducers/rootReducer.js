import {combineReducers} from 'redux'
import {itemsReducer} from './items'
import {userReducer} from './user'

export const rootReducer = combineReducers(
  {
    item: itemsReducer,
    user: userReducer,
  }
)
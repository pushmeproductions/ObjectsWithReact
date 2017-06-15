import {combineReducers} from 'redux'

import items from './items'
import inventory from './inventory' 

export default combineReducers({
  inventory,
  items
})

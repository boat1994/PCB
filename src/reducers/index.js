import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import todoApp from './todos'
import { combineReducers } from 'redux'
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
// Updates an entity cache in response to any action with response.entities.
const entities = (state = { users: {}, repos: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

const rootReducer = combineReducers({
  entities,
  todoApp,
  i18n: i18nReducer
})

export default rootReducer

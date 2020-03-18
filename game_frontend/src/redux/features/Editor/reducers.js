import { combineReducers } from 'redux'
import types from './types'
import { RunCodeButtonStatus } from 'components/RunCodeButton'
import { DEFAULT_CODE } from '../constants'

const codeReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_CODE_SUCCESS:
      return {
        ...state,
        code: action.payload.code,
        codeOnServer: action.payload.code
      }
    case types.CHANGE_CODE:
      return {
        ...state,
        code: action.payload.code
      }
    case types.POST_CODE_SUCCESS:
      return {
        ...state,
        codeOnServer: state.code
      }
    case types.RESET_CODE:
      return {
        ...state,
        code: DEFAULT_CODE
      }
    default:
      return state
  }
}

const runCodeButtonReducer = (state = {}, action) => {
  switch (action.type) {
    case types.POST_CODE_REQUEST:
      return {
        ...state,
        status: RunCodeButtonStatus.updating
      }
    case types.POST_CODE_SUCCESS:
      return {
        ...state,
        status: RunCodeButtonStatus.done
      }
    default:
      return state
  }
}

export default combineReducers({
  code: codeReducer,
  runCodeButton: runCodeButtonReducer
})

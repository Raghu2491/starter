import { Map, fromJS } from 'immutable'
import { actions } from './actions'

const initialState = Map({
   data: null
});

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case actions.MAKE_API_CALL:{
            return {...state, makingAPICall: true}
        }

        case actions.API_RESPONSE:{
            return {...state, data: payload};
        }
        default:
            return state
    }
}

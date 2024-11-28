// add counter action creators imports here
import { INCREMENT, DECREMENT, RESET } from "../actions/counterActions"

const INITIAL_STATE = { count: 0 };

// define counter reducer function here
export const counterReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                count: ++state.count
            }
        case DECREMENT:
            return {
                count: --state.count
            }
        case RESET:
            return {
                count: 0
            }

        default:
           return state;
    }
}

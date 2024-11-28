// define counter action constants here
export const INCREMENT="increment counter"
export const DECREMENT="decrement counter"
export const RESET="reset counter"

// define counter action creators here

export const increment=()=>{return {type:INCREMENT}}
export const decrement=()=>{return {type:DECREMENT}}
export const reset=()=>{return {type:RESET}}


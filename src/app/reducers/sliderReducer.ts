import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    number: 0
}

const SET_RIGHT = createAction('SET_RIGHT')

export default createReducer(initialState, {
    //[SET_RIGHT]: func
})


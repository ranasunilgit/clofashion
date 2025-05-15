import {configureStore} from "@reduxjs/toolkit"
import cloReducer from './slice/clo'

export const store = configureStore({
    reducer : {
       clo: cloReducer
    }
})  
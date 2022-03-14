import {combineReducers,configureStore} from '@reduxjs/toolkit'
import sliderReducer from './reducers/sliderReducer'

const rootReducer = combineReducers({
    slider: sliderReducer,
})

export const store:any = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export default store;
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
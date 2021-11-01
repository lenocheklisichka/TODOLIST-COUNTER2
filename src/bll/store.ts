import { createStore} from "redux";
import {counterReducer} from "./counter-reducer";

export type AppStateType = ReturnType<typeof counterReducer>

export const store = createStore(counterReducer);
import { GetterTree } from "vuex"
import { TState } from "./state"

type Getters = {
    GetTest(state: TState): string
}

export const getters: GetterTree<TState, TState> & Getters = {
    GetTest(state) {
        return state.test
    }
}
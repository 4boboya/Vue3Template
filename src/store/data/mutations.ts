import { MutationTree } from "vuex"
import { TState } from "./state"

export const enum MutauionType {
    SetTest = "SET_TEST"
}

export type Mutations = {
    [MutauionType.SetTest](state: TState, test: string): void
}

export const mutations: MutationTree<TState> & Mutations = {
    [MutauionType.SetTest](state, test) {
        state.test = test
    }
}
import { ActionContext, ActionTree } from "vuex"
import { TState } from "./state"
import { MutauionType, Mutations } from "./mutations"

const enum ActionType {
    SetTest = "SET_TEST"
}

type ActionAugments = Omit<ActionContext<TState, TState>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}
type Actions = {
    [ActionType.SetTest](context: ActionAugments, test: string): void
}

export const actions: ActionTree<TState, TState> & Actions = {
    [ActionType.SetTest]({ commit }, test) {
        commit(MutauionType.SetTest, test)
    }
}
import { MutationTree, ActionContext, ActionTree, GetterTree } from "vuex"


const enum MutauionType {
    SetTest = "SET_TEST"
}
const enum ActionType {
    SetTest = "SET_TEST"
}

type State = {
    test: string
}
type Mutations = {
    [MutauionType.SetTest](state: State, test: string): void
}
type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}
type Actions = {
    [ActionType.SetTest](context: ActionAugments, test: string): void
}
type Getters = {
    GetTest(state: State): string
}


const state: State = {
    test: "Test",
}
const mutations: MutationTree<State> & Mutations = {
    [MutauionType.SetTest](state, test) {
        state.test = test
    }
}
const actions: ActionTree<State, State> & Actions = {
    [ActionType.SetTest]({ commit }, test) {
        commit(MutauionType.SetTest, test)
    }
}
const getters: GetterTree<State, State> & Getters = {
    GetTest(state) {
        return state.test
    }
}

const DataModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default DataModule
import { Module } from "vuex"

type State = {
    test: string
}

const DataModule: Module<State, State> = {
    namespaced: true,
    state: {
        test: "Test"
    },
    mutations: {
        SetTest(state, test) {
            state.test = test
        }
    },
    actions: {
        SET_TEST({ commit }, test) {
            commit("SetTest", test)
        }
    },
    getters: {
        GetTest(state) {
            return state.test
        }
    }
}

export default DataModule
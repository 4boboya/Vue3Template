import { createStore, useStore } from 'vuex'
import { computed } from 'vue'
import { modules } from './modules';


export const mapGetters = () => {
  const store = useStore()
  return Object.fromEntries(
    Object.keys(store.getters).map(key => [key, computed(() => store.getters[key])])
  )
}

export default createStore({
  modules,
})

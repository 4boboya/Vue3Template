<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" :user="user" />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, reactive, computed } from "vue";
import { useStore } from "vuex"
import { mapGetters } from "@/store"
import { User } from "@/type/user";

export default defineComponent({
  components: {
    HelloWorld: defineAsyncComponent(() => import("@/components/HelloWorld.vue")),
  },

  setup() {
    const store = useStore();
    let msg = ref<string>("Welcome to Your Vue.js + TypeScript App");
    let user = reactive({
      name: "bobo",
      phone: "1233211234567",
      body: {},
    } as User);
    console.log(store)
    let test2 = computed(() => store.getters["DataTwo/GetTest"])
    let test = computed(() => store.getters["Data/GetTest"])
    const getters = mapGetters()['Data/GetTest']
    console.log(test2.value)
    console.log(test.value)
    console.log(getters.value)

    store.dispatch("DataTwo/SET_TEST", "change test")
    store.dispatch("Data/SET_TEST", "change test")
    console.log(test2.value)
    console.log(test.value)
    console.log(getters.value)

    // actions.value("two change test")
    // console.log(test.value)

    setTimeout(() => {
      msg.value = "Welcome to Your Vue.js + TypeScript App YOYOYO";
      user.phone = "09098080704";
      user.body.height = "181cm";
      user.body.weight = "73kg"
    }, 1000);

    return { msg, user };
  },
});
</script>

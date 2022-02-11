<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" :user="user" />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, reactive, computed } from "vue";
import { useStore } from "vuex"
import { User } from "@/model/user";

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
    let test = computed(() => store.getters.GetTest)
    console.log(test.value)

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

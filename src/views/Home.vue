<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" :user="user"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref } from "vue";
import { User } from "@/model/user"

export default defineComponent ({
  components: {
    HelloWorld: defineAsyncComponent(() => import("@/components/HelloWorld.vue"))
  },

  setup() {
    let msg = ref<string>("Welcome to Your Vue.js + TypeScript App")
    let user = ref<User>({name: "bobo", phone: "1233211234567"})


    setTimeout(() => {
      msg.value = "Welcome to Your Vue.js + TypeScript App YOYOYO"
    },1000)

    return { msg, user }
  }
})
</script>

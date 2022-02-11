<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" :user="user" />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, reactive } from "vue";
import { User } from "@/model/user";

export default defineComponent({
  components: {
    HelloWorld: defineAsyncComponent(() => import("@/components/HelloWorld.vue")),
  },

  setup() {
    let msg = ref<string>("Welcome to Your Vue.js + TypeScript App");
    let user = reactive({ name: "bobo", phone: "1233211234567" } as User);

    setTimeout(() => {
      msg.value = "Welcome to Your Vue.js + TypeScript App YOYOYO";
      user.phone = "09098080704";

      console.log(user)
    }, 1000);

    return { msg, user };
  },
});
</script>

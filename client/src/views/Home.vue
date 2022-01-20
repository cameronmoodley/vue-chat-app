<template>
  <div class="home">
    <h2>Please enter a name</h2>
    <input type="text" v-model="name" />
    <br />
    <button @click.prevent="enterChat">Enter Chat</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Chat",
  setup() {
    const router = useRouter();
    const name = ref<string>("");
    const enterChat = (): void => {
      router.push({ name: "chat", params: { name: name.value } });
    };
    return { name, enterChat };
  },
});
</script>

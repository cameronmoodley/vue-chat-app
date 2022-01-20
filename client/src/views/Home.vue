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
import { io } from "socket.io-client";
import { BASE_URL } from "../utilities/";

export default defineComponent({
  name: "Chat",
  setup() {
    const socket = io(BASE_URL);
    console.log(socket.connected);
    const router = useRouter();
    const name = ref<string>("");
    const enterChat = (): void => {
      console.log(name.value);

      socket.emit("joined", name.value);
      router.push({ name: "chat", params: { name: name.value } });
    };
    return { name, enterChat };
  },
});
</script>

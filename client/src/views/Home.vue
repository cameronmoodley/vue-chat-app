<template>
  <div class="home">
    <h2>Please enter a username</h2>
    <input type="text" v-model="name" />
    <div v-if="showError" class="error">Please enter a value username</div>
    <button @click.prevent="enterChat">
      <i class="fas fa-sign-in-alt"></i>
    </button>
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

    const router = useRouter();
    const name = ref<string>("");
    const showError = ref<boolean>(false);

    const enterChat = (): void => {
      if (name.value === "" || name.value.length < 2) {
        showError.value = true;
        return;
      }

      socket.emit("joined", name.value);
      router.push({ name: "chat", params: { name: name.value } });
    };

    return { name, enterChat, showError };
  },
});
</script>

<style scoped>
.home {
  width: 100%;
  background-color: rgba(146, 75, 244, 0.3);
  border-radius: 10px;
  padding: 30px;
  position: relative;
  height: 97px;
}

h2 {
  margin: 0px;
  font-family: "Nunito", sans-serif;
  width: 100%;
  color: white;
  margin-bottom: 15px;
}

input[type="text"] {
  width: 100%;
  height: 25px;
  border-radius: 5px;
  background-color: white;
  border: none;
  outline: none;
  padding-left: 10px;
}

button {
  position: absolute;
  background-color: transparent;
  border: none;
  right: 18px;
  top: 78px;
  height: 27px;
  border-radius: 5px;
}

i {
  color: #939393;
  font-size: 20px;
}

.error {
  color: red;
  margin-top: 5px;
}
</style>

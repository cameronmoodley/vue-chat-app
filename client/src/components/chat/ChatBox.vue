<template lang="">
  <div>
    <input type="text" name="message" v-model="messageVal" />
    <button @click.prevent="onSend">Send</button><br />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "chatbox",
  emits: ["message"],
  setup(props, { emit }) {
    let messageVal = ref<string>("");
    let onSend = (): void => {
      emit("message", messageVal.value);
      messageVal.value = "";
    };

    return { onSend, messageVal };
  },
});
</script>
<style scoped>
input {
  width: 90%;
}
</style>

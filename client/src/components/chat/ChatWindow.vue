<template lang="">
  <div class="chat-window">
    <div>{{ message.message }} {{ message.name }}</div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import iMessage from "./interface.iMessage";
export default defineComponent({
  props: {
    message: iMessage,
  },
});
</script>
<style>
.chat-window {
  border: solid 2px black;
}
</style>

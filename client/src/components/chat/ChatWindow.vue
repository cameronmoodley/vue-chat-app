<template lang="">
  <div class="chat-box">
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
.chat-box {
  border: solid 2px black;
  height: 30px;
}
</style>

<template>
  <div class="home">
    <chat-window
      v-for="(message, index) in messages"
      :key="index"
      :message="message"
    />
    <chat-box @message="writeMessage" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import ChatBox from "@/components/chat/ChatBox.vue";
import ChatWindow from "@/components/chat/ChatWindow.vue";
import { iMessage } from "@/components/chat/interface.iMessage";

export default defineComponent({
  name: "Home",
  components: { ChatBox, ChatWindow },
  setup() {
    const messages = ref<iMessage[]>([]);
    const writeMessage = (message: string): void => {
      const newMessage: iMessage = { name: "Cameron", message };
      messages.value.push(newMessage);
    };

    return { writeMessage, messages };
  },
});
</script>

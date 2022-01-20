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
import { useRoute } from "vue-router";

import ChatBox from "@/components/chat/ChatBox.vue";
import ChatWindow from "@/components/chat/ChatWindow.vue";
import { iMessage } from "@/components/chat/interface.iMessage";

export default defineComponent({
  name: "Chat",
  components: { ChatBox, ChatWindow },
  setup() {
    const router = useRoute();
    let name =
      typeof router.params.name !== "string"
        ? "new phone who dis"
        : router.params.name;

    const messages = ref<iMessage[]>([]);
    const writeMessage = (message: string): void => {
      const newMessage: iMessage = { name, message };
      messages.value.push(newMessage);
    };

    return { writeMessage, messages };
  },
});
</script>

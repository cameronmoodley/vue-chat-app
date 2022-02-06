<template>
  <div>
    <div class="heading">Douglas green chats</div>
    <div class="chat-window" ref="chatWindow">
      <chat-window
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
      />
    </div>
  </div>
  <chat-box @message="writeMessage" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

import ChatBox from "../components/chat/ChatBox.vue";
import ChatWindow from "../components/chat/ChatWindow.vue";
import { iMessage } from "../components/chat/interface.iMessage";
import { io } from "socket.io-client";
import { BASE_URL } from "../utilities/";

export default defineComponent({
  name: "Chat",
  components: { ChatBox, ChatWindow },
  setup() {
    const socket = io(BASE_URL);
    const router = useRoute();
    const messages = ref<iMessage[]>([]);
    const chatWindow = ref<HTMLElement | null>(null);

    const name =
      typeof router.params.name !== "string" ? "Admin" : router.params.name;

    socket.on("joined", (data): void => {
      messages.value.push({
        name: "",
        message: `${data} has joined the chat`,
      });
    });

    socket.on("message", (data): void => {
      messages.value.push({ name: data.name, message: data.message });
    });

    const writeMessage = (message: string): void => {
      const newMessage: iMessage = { name, message };
      messages.value.push(newMessage);

      if (chatWindow.value) {
        chatWindow.value.scrollTop = chatWindow.value.scrollHeight;
        console.log(chatWindow.value.scrollHeight);
      }

      socket.emit("message", newMessage);
    };

    return { writeMessage, messages, chatWindow };
  },
});
</script>

<style scoped>
.chat-window {
  height: 100px;
  overflow-y: scroll;
  width: 100%;
}

.heading {
  background-color: rgba(255, 255, 255, 0.7);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 30px;
  font-size: 30px;
  text-align: center;
  font-family: "Nunito", sans-serif;
}
</style>

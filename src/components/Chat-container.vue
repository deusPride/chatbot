<template>
  <div
    class="floating-Chat"
    v-show="!chatVisibility"
    @click="toggleVisibility"
  ></div>
  <div class="Chat" v-show="chatVisibility">
    <div class="chat-header">
      <h3>{{ title }}</h3>
      <div class="close" @click="toggleVisibility">X</div>
    </div>

    <ChatMessage
      v-for="message in messages"
      :key="message.id"
      :content="message.content"
      :sender="message.sender"
    />
    <form v-on:submit.prevent="addMessage">
      <input type="text" v-model="content" value="" /><input
        type="submit"
        value=""
      />
    </form>
  </div>
</template>

<script>
import ChatMessage from "./Chat/Message.vue";
var messages = [
  { id: 1, sender: "bot", content: "Hello to you user" },
  { id: 2, sender: "user", content: "Hi to you bot" },
];

export default {
  name: "ChatContainer",
  components: { ChatMessage },
  data() {
    const date = new Date();

    return {
      title: "Conversationnal ChatBot",
      date: date.toLocaleDateString(),
      messages,
      chatVisibility: true,
    };
  },
  methods: {
    addMessage() {
      if (this.content !== "") {
        let message = {
          id: length,
          sender: "user",
          content: this.content,
        };

        this.messages.push(message);
      }
      this.content = "";
    },
    toggleVisibility() {
      this.chatVisibility = !this.chatVisibility;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  transition: 0.5s all;
}
.Chat {
  height: 500px;
  width: 100%;
  margin: auto;
  border: 1px solid #6293c2d5;
  display: flex;
  flex-direction: column;
  position: relative;
}
.Chat .chat-header {
  display: flex;
  margin-top: 0px;
  background-color: #42b983;
  color: beige;
  padding: 0 3%;
  box-shadow: 2px 2px 2px rgba(138, 158, 141, 0.699);
  border-bottom: 1px solid #41638367;
  justify-content: space-between;
  align-items: center;
}
form {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  input[type="text"] {
    width: 80%;
  }
  input[type="submit"] {
    width: 20%;
  }
  height: 8%;
}
.floating-Chat {
  background-color: #0dbb6d;
  width: 75px;
  height: 75px;
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.floating-Chat:hover {
  background-color: #42b983;
}
</style>

<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <ChatMessage />
    <ChatMessage />
  </div>
</template>

<script>
import ChatMessage from "./Chat/Message.vue";
export default {
  name: "ChatContainer",
  components: { ChatMessage },
  data() {
    const date = new Date();

    return {
      title: "Conversationnal ChatBot",
      sender: "Bot",
      content: "test",
      date: date.toLocaleDateString(),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 800px;
  width: 600px;
  margin: auto;
  border: 1px solid #111f2c;
}
.hello h1 {
  margin-top: 0px;
  background-color: #42b983;
  color: beige;
  padding: 0 2%;
  border-bottom: 1px solid #111f2c;
}
</style>

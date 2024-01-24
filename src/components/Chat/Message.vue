<template>
  <div class="message-container">
    <div class="message" :class="sender === 'user' ? 'user' : 'bot'">
      <h5>{{ sender }}</h5>
      <p>{{ content }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChatMessage",
  props: {
    id: Number,
    content: String,
    sender: String,
    date: Date,
  },
};
</script>

<style scoped>
.message {
  display: inline-block;
  margin: 5px 5px 0 5px;
  border-radius: 10px 10px 10px 0;
  padding: 5px;
  color: rgb(49, 49, 49);
  max-width: 70%;
  max-height: fit-content;
  bottom: 2px;
  position: relative;
  border: 1px solid #a3b4af62;
  box-shadow: 2px 2px 2px rgba(138, 158, 141, 0.699);
  text-align: left;
}

.message.bot {
  background-color: beige;
  right: 41%;
}

.message.user {
  position: relative;
  background-color: rgb(53, 219, 95);
  right: -45%;
  border-radius: 10px 10px 0 10px;
}

p,
h5 {
  margin: 2px;
}
.message-container{
    display: flex;
    flex-direction: row;
}
.message-container.message.user {
  
}
</style>

<template>
  <ChatContainer />
</template>

<script>
import ChatContainer from "./components/Chat-container.vue";

export default {
  name: "App",
  components: {
    ChatContainer,
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Hvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  position: fixed;
  width: 350px;
  bottom: 10px;
  right: 10px;
}
</style>

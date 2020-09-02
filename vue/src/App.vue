<template>
  <div id="app">
    <Game />
  </div>
</template>

<script>
import Game from "./containers/Game.vue";

export default {
  name: "App",
  components: {
    Game,
  },
};
</script>

<style>
#app {
  margin: 10%;
  padding: 0;
}
</style>
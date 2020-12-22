<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <h1>Counter</h1>
    <button class="inc">Increase</button>
    <button class="dec">Decrease</button>
    <button>Reset</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["title", "subtitle"])
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 400px;
  border: 2px solid blue;
  border-radius: 10px;
  text-align: center;
  color: green;
  margin: 40px auto;
}

button {
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: blue;
  border-radius: 5px;
  margin: 0 0.25rem 1rem;
}

.inc {
  background-color: green;
}

.dec {
  background-color: red;
}
</style>

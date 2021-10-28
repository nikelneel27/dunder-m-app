<template>
  <div id="app">
    <Home />
    <Navigation />
    <Equity />
    <Benefits />
    <CompensationProject />
    <About />

    <div class="footer">
      *The calculations and information provided should not be construed as
      financial, legal or tax advice. These are hypothetical illustrations only,
      and may not accurately reflect present or future valuations or performance
      information. We cannot guarantee the accuracy of the information provided
      or calculated, and we shall not be liable for any actions taken in
      reliance thereon.
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Navigation from "./components/Navigation.vue";
import Equity from "./components/Equity.vue";
import Benefits from "./components/Benefits.vue";
import CompensationProject from "./components/CompensationProject.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    Home,
    Navigation,
    Equity,
    Benefits,
    CompensationProject,
    About,
  },
};
</script>

<style>
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 !important;
  padding: 24px;
  box-sizing: border-box;
  /* background-color: #2e3653; */
}
body {
  margin: 0 !important;
  color: rgba(0, 0, 0, 0.85);
  /* background-color: black; */
}
</style>

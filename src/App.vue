<template>
  <div id="app">
    <!-- <Confetti /> -->
    <Home />
    <!-- <div class="bg-color"></div> -->
    <Navigation />
    <Equity />
    <Benefits />
    <CompensationProject />
    <About />

    <div class="footer">
      <div>
        <p>
          *The calculations and information provided should not be construed as
          financial, legal or tax advice. These are hypothetical illustrations
          only, and may not accurately reflect present or future valuations or
          performance information. We cannot guarantee the accuracy of the
          information provided or calculated, and we shall not be liable for any
          actions taken in reliance thereon.
        </p>
      </div>
      <div class="footer-image">
        <span>Powered by</span>
        <span class="DM-footer-img-span"
          ><a target="_blank" href="https://www.figurehr.com"
            ><img src="./assets/DM-footer-logo.svg" alt="figure-logo" /></a
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
// import Confetti from "./components/Confetti.vue";
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
    // Confetti,
  },
};
</script>

<style>
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background-color: #2e3653; */
  /* color: #2c3e50; */
}
body {
  box-sizing: border-box;
  margin: 0 !important;
  color: rgba(0, 0, 0, 0.85);
  line-height: 1.5715;
  font-size: 14px;
  padding: 24px 0 78px;
  background-color: white;
}

.dm-home-page,
.dm-equity,
.dm-benefits,
.dm-compensation,
.dm-about {
  padding: 0 24px;
  border-bottom: 3rem solid #10131f;
}
/* .bg-color {
  width: 100%;
  padding-bottom: 3rem;
  padding: 0 0 3rem 0 !important;
  background-color: #2e3653;
} */
.footer {
  padding: 20px 24px 40px;
  background-color: #10131f;
  color: white;
  /* margin-bottom: ; */
}

@media (min-width: 570px) {
  body {
    font-size: 16px;
  }
}

@media (min-width: 768px) {
  .footer {
    display: flex;
  }
  .footer-image {
    flex: 4;
  }
  body {
    background-color: #10131f;
    padding: 48px 24px;
  }
}
@media (min-width: 1024px) {
  body {
    padding: 48px 85px;
  }
}
</style>

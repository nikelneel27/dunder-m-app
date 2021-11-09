<template>
  <div class="dm-navigation">
    <div @click="scroll('dm-home-page')" class="dm-navigation-link">
      <div><i class="fas fa-home"></i></div>
      <div>Home</div>
    </div>

    <div @click="scroll('dm-equity')" class="dm-navigation-link">
      <div><i class="fas fa-bolt"></i></div>
      <div>Equity</div>
    </div>

    <div @click="scroll('dm-benefits')" class="dm-navigation-link">
      <div><i class="fas fa-briefcase-medical"></i></div>
      <div>Benefits</div>
    </div>
    <div @click="scroll('dm-compensation')" class="dm-navigation-link">
      <div><i class="fas fa-rocket"></i></div>
      <div>Projection</div>
    </div>
    <div @click="scroll('dm-about')" class="dm-navigation-link">
      <div><i class="fas fa-exclamation-circle fa-2x"></i></div>
      <div>About</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scroll(className) {
      document.querySelector(`.${className}`).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.dm-navigation {
  display: flex;
  /* flex: 0 0 20%; */
  width: 100%;
  justify-content: space-between;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #eee;
  box-shadow: 0 0 5px 0 #ddd;
  background-color: #fff;
  padding: 8px 0 12px;
  z-index: 9999;
  font-size: 14px;
}
.dm-navigation-link {
  padding: 4px;
  font-weight: 400;
  color: #70767d;
  opacity: 0.8;
  width: 20%;
}
.dm-navigation-link i {
  color: #70767d;
  font-size: 1.4rem;
  opacity: 0.8;
  padding-bottom: 4px;
}

@media (min-width: 570px) {
  .dm-navigation {
    display: none;
  }
}
</style>
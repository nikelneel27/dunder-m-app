<template>
  <div>
    <div>value: {{ value }} %</div>
    <vue-slider v-model="value" :lazy="true"></vue-slider>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

module.exports = {
  components: {
    VueSlider,
  },
  data: function () {
    return {
      value: 0,
    };
  },
};
</script>
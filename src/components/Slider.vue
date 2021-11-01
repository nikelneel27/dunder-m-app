<template>
  <div>
    <!-- <VueSimpleRangeSlider
      style="width: 300px"
      :min="0"
      :max="1000000"
      :logarithmic="true"
      v-model="range"
    /> -->
    <VueSimpleRangeSlider
      style="width: 300px"
      :min="0"
      :max="20"
      v-model="number"
    />
    <!-- :activeBarColor="rgb(108, 122, 255)" -->
  </div>
</template>
<script>
import VueSimpleRangeSlider from "vue-simple-range-slider";
import "vue-simple-range-slider/dist/vueSimpleRangeSlider.css";
export default {
  // register the component
  components: { VueSimpleRangeSlider },
  data() {
    return {
      range: [20, 1000],
      number: 0,
    };
  },
};
</script>

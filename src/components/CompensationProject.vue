<template>
  <div class="dm-compensation">
    <div>
      <h2>Compensation Projection</h2>
      <p>
        Here's what your total compensation amount could look like over time.
        Explore with various scenarios and see your earning potential.
      </p>
    </div>
    <div class="dm-compensation-year1">
      <span class="dm-compensation-year1-title">Year 1</span>

      <div class="dm-compensation-year1-data">
        <div>
          <div>Benefits</div>
          <div>$20,400</div>
        </div>
        <div class="dm-compensation-year1-data-button">
          <toggle-button
            @change="onChangeEventHandler"
            :switch-color="{
              checked: 'rgb(108, 122, 255)',
              unchecked: 'rgb(85, 99, 203)',
              disabled: '#CCCCCC',
            }"
          />
        </div>
      </div>
      <div class="dm-compensation-year1-data">
        <div>
          <div>Target Bonus</div>
          <div>$10,000</div>
        </div>
        <div>
          <toggle-button
            @change="onChangeEventHandler"
            :switch-color="{
              checked: 'rgb(108, 122, 255)',
              unchecked: 'rgb(85, 99, 203)',
              disabled: '#CCCCCC',
            }"
          />
        </div>
      </div>
      <div class="dm-compensation-year1-data">
        <div>
          <div>Sign-on Bonus</div>
          <div>$10,000</div>
        </div>
        <div>
          <toggle-button
            @change="onChangeEventHandler"
            :switch-color="{
              checked: 'rgb(108, 122, 255)',
              unchecked: 'rgb(85, 99, 203)',
              disabled: '#CCCCCC',
            }"
          />
        </div>
      </div>
      <div class="dm-compensation-year1-data">
        <div>
          <div>Equity</div>
          <div>$77,500</div>
        </div>
        <div>
          <toggle-button
            @change="onChangeEventHandler"
            :switch-color="{
              checked: 'rgb(108, 122, 255)',
              unchecked: 'rgb(85, 99, 203)',
              disabled: '#CCCCCC',
            }"
          />
          <!-- <toggle-button @change="onChangeEventHandler" /> -->
        </div>
      </div>
      <div class="dm-compensation-year1-data">
        <div>
          <div>Base Salary</div>
          <div>$100,000</div>
        </div>
        <div>
          <toggle-button
            @change="onChangeEventHandler"
            :switch-color="{
              checked: 'rgb(108, 122, 255)',
              unchecked: 'rgb(85, 99, 203)',
              disabled: '#CCCCCC',
            }"
          />
        </div>
      </div>
    </div>
    <div class="dm-compensation-company-peformance">
      <div>
        Company's Performance <i class="fas fa-exclamation-circle"></i>
        <div class="dm-compensation-company-drop-down">
          <label for="touch"
            ><span>{{ selectedOption }}</span></label
          >
          <input type="checkbox" id="touch" />

          <ul class="slide">
            <li><a href="#">Current - 1x</a></li>
            <li><a href="#">Good - 3x</a></li>
            <li><a href="#">Staples - 5x</a></li>
            <li><a href="#">Office Depot - 10x</a></li>
            <li><a href="#">Custom - 1x</a></li>
          </ul>
        </div>
      </div>

      <div class="dm-compensation-company-chart">
        <!-- <Echart /> -->
        <LineChart />
      </div>
      <div class="dm-compensation-company-slider">
        <Slider :barColor="black" />
        <Slider />
      </div>
    </div>
  </div>
</template>

<script>
// import Echart from "./Echart.vue";
import LineChart from "./LineChart.vue";
import Slider from "./Slider.vue";

export default {
  // components: { Echart },
  name: "CompensationProject",
  components: { LineChart, Slider },
  data() {
    return {
      isHidden: true,
      selectedOption: "Current - 1x",
    };
  },
};
</script>

<style scoped>
.dm-compensation-year1 {
  border: 1px solid #ccc;
  border-radius: 8px;
}
.dm-compensation-company-drop-down {
  background: #d9d9d9;
  margin: 16px auto;
  position: relative;
}
.dm-section-border {
  /* border: 0.12px solid #ccc; */
  border-top: 1px solid rgb(235, 226, 226);
}

.dm-compensation-company-drop-down span {
  padding: 5px;
  color: #674d0f !important;
  font-size: 1.2em;
  cursor: pointer;
  display: block;
  border: 1px solid #ddd;

  background-color: #fff;
  border-radius: 8px;
  outline: none;
}
.dm-compensation-company-drop-down span::after {
  float: right;
  right: 10%;
  content: ">";
}

.slide {
  clear: both;
  width: 100%;
  height: 0px;
  overflow: hidden;
  transition: height 0.4s ease;
  background-color: white;
  /* border: 1px solid #eee; */
  position: absolute;
  margin: 0;
  top: 100%;
  left: 0;
  padding: 0;

  box-shadow: 0 -4px 4px rgb(0 0 0 / 5%), 1px 4px 8px rgb(0 0 0 / 5%);
}

.slide li {
  padding: 5px 10px;
  list-style: none;
}
.slide li a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
}

#touch {
  display: none;
}
#touch:checked + .slide {
  height: 160px;
}

.dm-compensation h2 {
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
}
.dm-compensation p {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 16px;
}
.dm-compensation-year1-title {
  display: inline-block;
  text-align: left !important;
  padding: 20px;
}
.dm-compensation-year1-data {
  display: flex;
  text-align: left;
  justify-content: space-between;
  padding: 5px 20px 5px 20px;
}

.v-switch-core {
  width: 54px;
  height: 32px;
  background-color: rgb(191, 203, 217);
  border-radius: 34px;
}
.v-switch-button {
  width: 24px;
  height: 24px;
}

/* toggle-button .v-switch-core {
  width: 54px !important;
  height: 32px !important;
  background-color: rgb(191, 203, 217);
  border-radius: 34px;
}
toggle-button .v-switch-button {
  width: 24px;
  height: 24px;
} */
</style>
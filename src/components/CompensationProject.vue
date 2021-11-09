<template>
  <div class="dm-compensation">
    <div>
      <h2>Compensation Projection</h2>
      <p>
        Here's what your total compensation amount could look like over time.
        Explore with various scenarios and see your earning potential.
      </p>
    </div>
    <div class="dm-compensation-grid">
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
                checked: 'rgb(255, 68, 141)',
                unchecked: 'rgba(255, 68, 141, 0.4)',
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
                unchecked: 'rgba(108, 122, 255,0.4)',
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
                checked: 'rgb(85, 99, 203)',
                unchecked: 'rgba(85, 99, 203,0.4)',
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
                checked: 'rgb(255, 199, 66)',
                unchecked: 'rgba(255, 199, 66,0.4)',
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
                checked: 'rgb(19, 204, 165)',
                unchecked: 'rgba(19, 204, 165,0.4)',
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
          <Echart :value1="value1" :value2="value2" />
          <!-- <LineChart /> -->
        </div>
      </div>
    </div>
    <div class="dm-compensation-company-slider">
      <div class="dm-compensation-company-slider-annual-salary">
        <div class="dm-compensation-company-slider-annual-salary-text">
          Annual base salary increase: <strong> {{ value1 }} % </strong>
        </div>

        <vue-slider
          v-model="value1"
          :lazy="true"
          :interval="0.1"
          :min="0"
          :max="15"
          v-bind="options"
        ></vue-slider>
      </div>
      <div class="dm-compensation-company-slider-taget-bonus">
        <div class="dm-compensation-company-slider-annual-salary-text">
          Target bonus: <strong>{{ value2 }} %</strong>
        </div>

        <vue-slider
          v-model="value2"
          :lazy="true"
          :interval="0.1"
          :min="0"
          :max="10"
          v-bind="options"
        ></vue-slider>
      </div>
    </div>
  </div>
</template>

<script>
import Echart from "./Echart.vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  // components: { Echart },
  name: "CompensationProject",
  components: { Echart, VueSlider },
  data() {
    return {
      isHidden: true,
      selectedOption: "Current - 1x",
      value1: 0,
      value2: 0,
      options: {
        dotSize: 34,
        tooltip: false,
      },
    };
  },
};
</script>

<style scoped>
.dm-compensation {
  padding-top: 10px;
  background-color: #fff;
}
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

::v-deep .v-switch-core {
  width: 60px !important;
  height: 32px !important;
  background-color: #efefef !important;
  border-radius: 100px !important;
  border: 1px solid #ccc !important;
}
::v-deep .v-switch-button {
  width: 24px !important;
  height: 24px !important;
}
.dm-compensation-company-slider {
  margin: 30px auto;
}
/* ::v-deep .vue-slider:hover {
  background-color: red !important;
} */

::v-deep .vue-slider-process {
  background-color: rgb(108, 122, 255) !important;
}

::v-deep .vue-slider-dot-handle {
  background-color: rgb(108, 122, 255) !important;
  border: none !important;
}
::v-deep .vue-slider-dot-tooltip {
  display: none !important;
}

.dm-compensation-company-slider-annual-salary-text {
  margin: 10px;
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

@media (min-width: 768px) {
  .dm-compensation {
    border-radius: 12px !important;
  }

  .dm-compensation-grid {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .dm-compensation-year1 {
    margin-top: 90px;
  }
  .dm-compensation-company-peformance {
    width: 70%;
  }
  .dm-compensation-company-slider {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .dm-compensation-company-slider-annual-salary,
  .dm-compensation-company-slider-taget-bonus {
    width: 40%;
  }
}
</style>
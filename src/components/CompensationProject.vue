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
      <span>Year 1</span>
      <div class="dm-compensation-year1-data">
        <div>
          <div>Benefits</div>
          <div>$20,400</div>
        </div>
        <div><toggle-button @change="onChangeEventHandler" /></div>
      </div>
      <div class="dm-compensation-year1-data">
        <div>
          <div>Benefits</div>
          <div>$20,400</div>
        </div>
        <div><toggle-button @change="onChangeEventHandler" /></div>
      </div>
      <div class="dm-compensation-year1-data">
        <div>
          <div>Target Bonus</div>
          <div>$10,000</div>
        </div>
        <div><toggle-button @change="onChangeEventHandler" /></div>
      </div>
      <div class="dm-compensation-year1-data">
        <div>
          <div>Sign-on Bonus</div>
          <div>$10,000</div>
        </div>
        <div><toggle-button @change="onChangeEventHandler" /></div>
      </div>
      <div class="dm-compensation-year1-data">
        <div>
          <div>Equity</div>
          <div>$77,500</div>
        </div>
        <div><toggle-button @change="onChangeEventHandler" /></div>
      </div>
      <div class="dm-compensation-year1-data">
        <div>
          <div>Base Salary</div>
          <div>$100,000</div>
        </div>
        <div><toggle-button @change="onChangeEventHandler" /></div>
      </div>
    </div>
    <div class="dm-compensation-company-peformance">
      <div>
        Company's Performance <i class="fas fa-exclamation-circle"></i>
        <div class="dm-compensation-company-drop-down">
          <label for="touch"><span>titre</span></label>
          <input type="checkbox" id="touch" />

          <ul class="slide">
            <li><a href="#">Current -1x</a></li>
            <li><a href="#">Good -3x</a></li>
            <li><a href="#">Staples -5x</a></li>
            <li><a href="#">Office Depot -10x</a></li>
            <li><a href="#">Custom -1x</a></li>
          </ul>
        </div>
      </div>
      <div class="dm-compensation-company-chart">CHART</div>
      <div class="dm-compensation-company-slider">SLIDER</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompensationProject",
};
</script>

<style scoped>
.dm-compensation-year1 {
  border: 1px solid #ccc;
  border-radius: 8px;
}
.dm-compensation-company-drop-down {
  width: 300px;
  background: #d9d9d9;
  margin: 0 auto;
}
.dm-section-border {
  /* border: 0.12px solid #ccc; */
  border-top: 1px solid rgb(235, 226, 226);
}

.dm-compensation-company-drop-down span {
  padding: 5px;
  background: #2d2f31;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  display: block;
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
  text-align: center;
  transition: height 0.4s ease;
}

.slide li {
  padding: 5px;
}

#touch {
  position: absolute;
  opacity: 0;
  height: 0px;
}
#touch:checked + .slide {
  height: 200px;
}
</style>
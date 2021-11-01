<template>
  <div class="dm-equity">
    <div class="dm-equity-top-section">
      <div>
        <h1 class="dm-equity-title">Equity</h1>
      </div>
      <div class="dm-equity-right-side">
        <div class="dm-equity-right-side-val">100,000</div>
        <div><strong>Incentive Stock Options</strong></div>
        <div class="dm-equity-right-side-val-company">
          1% of the company<span
            ><i class="fas fa-exclamation-circle fa-2x"></i
          ></span>
        </div>
      </div>
    </div>
    <div class="dm-equity-image">
      <img src="../assets/DM-equity.svg" alt="equity image" />
    </div>
    <div class="dm-equity-value">
      <span>Value</span>
      <p>
        Unlike your salary, the value of your equity isn’t a set amount—it
        depends on the value of our company as a whole. Here, we lay out
        different growth scenarios to help you estimate how much your equity
        could be worth.
      </p>
    </div>
    <div class="dm-growth-secnarios">
      <span>Growth Scenarios</span>
      <div class="dm-equity-drop-down">
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
    <div class="dm-equity-projected-value">
      <div>
        <span>$310,000</span>
        <div>
          Projected equity value <i class="fas fa-exclamation-circle"></i>
        </div>
      </div>
      <div class="dm-equity-projected-value-projected-company">
        <span>$100M</span>
        <div>Projected company</div>
        <div>valuation</div>
      </div>
    </div>
    <div class="dm-equity-projected-value-cost">
      Cost:<span>$110,000 </span> <i class="fas fa-exclamation-circle"></i>
    </div>
    <div>
      Staples — 5x
      <p>
        Staples followed a similar growth trajectory as us, and our projections
        have us scaling to their current revenue in the next few years if we
        continue to hit our targets.
      </p>
    </div>
    <div class="dm-section-border"></div>
    <section class="dm-equity-vesting">
      <div class="dm-equity-vesting-img">
        <img src="../assets/DM-vesting.svg" alt="" />
      </div>
      <div class="dm-equity-vesting-title">
        <span>Vesting</span>
        <p>
          Each month you earn the right to buy more stocks of the company. You
          will have to wait 1 year to earn the first 25%. Explore the graph
          below to understand how vesting works.
        </p>
      </div>
      <div class="dm-equity-chart">
        <LineChart />
      </div>
      <div class="dm-section-border"></div>
      <div class="dm-equity-section-border"></div>
      <div class="dm-equity-key-details-image">
        <img src="../assets/DM-key-details.svg" alt="key-details" />
      </div>
      <div class="dm-equity-key-details">
        <span> Key Details</span>

        <p>
          You'll get your official stock option agreement later, but here are
          the numbers and details you should know.

          <a href="https://carta.com/blog/what-are-incentive-stock-options"
            >Read more about how ISO works.</a
          >
        </p>
      </div>
      <div class="dm-equity-key-details-datas">
        <div class="dm-equity-key-details-data">
          <span>ISO</span>
          <span>Equity type</span>
          <p>
            Incentive stock options give you the right to purchase shares of
            company stock at a fixed price, called your strike price.
          </p>
        </div>
        <div class="dm-equity-key-details-data">
          <span>Standard</span>
          <span>Vesting schedule</span>
          <p>
            You'll earn ("vest") stock options over time according to this
            schedule: 25/25/25/25, 1 year cliff, monthly.
          </p>
        </div>
        <div class="dm-equity-key-details-data">
          <span>90 Day</span>
          <span>Exercise window</span>
          <p>
            How long you have, after you leave the company, to purchase your
            options.
          </p>
        </div>
        <div class="dm-equity-key-details-data">
          <span>$1.10</span>
          <span
            >Strike price
            <i
              v-tooltip="{
                content:
                  '*This number is not guaranteed, as our board has to approve your equity offer after you accept, and the fair market value of our shares, which is what your strike price is based on, could go up in the meantime.',
                classes: 'tooltip tooltip-inner',
              }"
              class="fas fa-exclamation-circle"
            ></i>
          </span>
          <p>The fixed price you pay to purchase one share of company stock.</p>
        </div>
        <div class="dm-equity-key-details-data">
          <span>$3.10</span>
          <span>Preferred price</span>
          <p>
            The price investors paid per share of stock in our latest
            fundraising round. This can help you think about how to value your
            own shares.
          </p>
        </div>
        <div class="dm-section-border"></div>

        <div class="dm-equity-faqs">
          <div class="dm-equity-faqs-image">
            <img src="../assets/DM-faqs.svg" alt="" />
          </div>
          <div class="dm-equity-faqs-title">
            <span> FAQ's</span>
            <p>
              Got the basics down? Here are a few other things you might want to
              know.
            </p>
          </div>
          <Accordion
            title="What are the different types of options?"
            description="There are two main types of stock options: incentive stock options
              (ISOs) and non-qualified stock options (NSOs). The main difference
              is how they’re taxed—with NSOs, you usually have to pay taxes both
              when you exercise them and sell the resulting shares. With ISOs,
              you’re usually not taxed until you sell the shares (unless you
              qualify for the alternative minimum tax)."
          />
          <Accordion
            title="What’s the difference between stock options and stock?"
            description="Stock options are the right to buy a set number of company shares at a fixed price (your strike price) — they’re not actual shares of stock. Sometimes, later-stage companies give restricted stock units (RSUs), which are shares of stock you get when certain conditions are met."
          />
          <Accordion
            title="What does it mean to exercise stock options?"
            description="Exercising stock options means purchasing shares of company stock
              at your strike price (the fixed price defined in your stock option
              agreement). You can usually only exercise vested stock options
              unless your company offers early exercising. You’re not obligated
              to exercise your stock options, but you need to exercise them if
              you want to own those shares of company stock."
          />
          <Accordion
            title="When can I sell my shares?"
            description="In the past, you could usually only sell private company stock if
              the company got acquired or went public. However, some private
              companies now offer shareholders liquidity through tender offers
              (events that allow you to sell shares back to the company or other
              investors), private stock exchanges, and other methods."
          />
          <Accordion
            title="How are stock options taxed?"
            description="It depends on a few factors, including what type of stock options
              you have and how long you hold your shares before you sell them.
              In general, you may be taxed on two amounts: 1. The difference
              between what the shares were worth when you purchased them and
              what you paid for them (this difference is often called your
              “spread”) and 2. The difference between what the shares were worth
              when you purchased them and what you sold them for. If you hold
              your shares for at least a year before selling them, you may pay a
              lower tax rate."
          />
          <Accordion
            title="How was my strike price determined?"
            description="Your strike price is based on the fair market value of our shares
              when your equity grant is approved by our board. To determine the
              fair market value of our shares, we get a 409A valuation, which is
              an appraisal conducted by an independent 3rd party."
          />
          <Accordion
            title="What is stock dilution?"
            description="If we raise more money, we may have to issue shares to our new
              investors, which means you’ll own a smaller piece of the company.
              However, this doesn’t necessarily mean the value of your shares
              will go down. If our company valuation keeps getting higher, so
              may the value of your shares."
          />
          <Accordion
            title="What is a tender offer?"
            description="Usually, it’s much harder to sell shares of a private company than
              shares of a public company. A tender offer is a company-sponsored
              event that allows qualifying employees to sell their shares while
              the company is still private."
          />

          <div class="dm-faqs-footer-para">
            <p>
              These are hypothetical illustrations only, and may not accurately
              reflect future valuations or performance information.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LineChart from "./LineChart.vue";
import Accordion from "./Accordion.vue";
export default {
  name: "Equity",
  data: function () {
    return {
      isHidden: true,
      selectedOption: "Current - 1x",
    };
  },
  components: {
    Accordion,
    LineChart,
  },
};
</script>

<style scoped>
.dm-equity {
  text-align: left;
  /* padding: 24px; */
  background-color: #fff;
}
.dm-equity-drop-down {
  background: #d9d9d9;
  margin: 16px auto;
  position: relative;
}
.dm-section-border {
  /* border: 0.12px solid #ccc; */
  border-top: 1px solid rgb(235, 226, 226);
}

.dm-equity-drop-down span {
  padding: 5px;
  color: #674d0f !important;
  font-size: 1.2em;
  cursor: pointer;
  display: block;
  background-color: #fffaee;
}
.dm-equity-drop-down span::after {
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
.dm-equity-top-section {
  display: flex;
  justify-content: space-between;
}
.dm-equity-right-side {
  text-align: right;
}
.dm-equity-right-side-val {
  color: #ffc742;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 500;
}
.dm-equity-right-side-val-company {
  margin-top: 4px;
  color: #262522;
}
.dm-equity-right-side i {
  font-size: 10px;
}
.dm-equity-image img {
  width: 100%;
  height: 231px;
  margin-top: 24px;
}
.dm-equity-value span {
  font-weight: 500;
  margin: 10px 0;
}
.dm-equity-value p {
  opacity: 0.5;
}
.dm-growth-secnarios > span {
  margin-bottom: 16px;
  font-weight: 500;
}
.dm-equity-projected-value {
  display: flex;
  justify-content: space-between;
}
.dm-equity-projected-value span {
  color: #ffc742;
  font-size: 2rem;
  font-weight: 500;
}
.dm-equity-projected-value-projected-company {
  background-color: #fffaee;
  padding: 12px;
  border-radius: 8px;
}

.dm-equity-projected-value-cost {
  margin-bottom: 8px;
}
.dm-equity-projected-value-cost span {
  color: #ffc742;
  font-weight: 500;
}
.dm-equity-vesting-img img {
  width: 100%;
  height: 231px;
  padding-top: 25px;
  margin-top: 25px;
}
.dm-section-border {
  /* border: 0.12px solid #ccc; */
  border-top: 1px solid rgb(235, 226, 226);
  margin-top: 55px;
}
.dm-equity-vesting-title span {
  font-weight: 500;
}
.dm-equity-vesting-title p {
  opacity: 0.5;
  padding-top: 0;
}
.dm-equity-key-details-image img {
  width: 100%;
  height: 231px;
  margin-top: 25px;
}
.dm-equity-key-details span {
  font-weight: 500;
}
.dm-equity-key-details p {
  opacity: 0.5;
}
.dm-equity-key-details p > a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.85);
  opacity: 1 !important;
}
.dm-equity-key-details-data span {
  display: inline-block;
  font-weight: 500;
}
.dm-equity-key-details-data span:first-child {
  width: 125px;
  padding: 16px 4px;
  background-color: #fffaee;
  text-align: center;
  margin-right: 20px;
  border-radius: 8px;
  color: #ffc742;
}
.dm-equity-faqs-image img {
  width: 100%;
  height: 231px;
  margin: 40px 0;
}
.dm-equity-faqs-title span {
  font-weight: 500;
}
.dm-equity-faqs-title p {
  opacity: 0.5;
}

.dm-faqs-footer-para {
  opacity: 0.5;
  margin-top: 50px;
}
.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

/* .tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
} */
</style>





<template>
  <div class="dm-equity">
    <div class="dm-equity-top-section">
      <div>
        <h1 class="dm-equity-title">Equity</h1>
      </div>
      <div class="dm-equity-right-side">
        <div class="dm-equity-right-side-val">100,000</div>
        <div><strong>Incentive Stock Options</strong></div>
        <div>1% of the company</div>
        <span><i class="fas fa-exclamation-circle fa-2x"></i></span>
      </div>
    </div>
    <div class="dm-equity-image">
      <img src="../assets/DM-equity.svg" alt="equity image" />
    </div>
    <div class="dm-equity-value">
      Value
      <p>
        Unlike your salary, the value of your equity isn’t a set amount—it
        depends on the value of our company as a whole. Here, we lay out
        different growth scenarios to help you estimate how much your equity
        could be worth.
      </p>
    </div>
    <div class="dm-growth-secnarios">
      <div class="dm-equity-drop-down">
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
    <div class="dm-equity-projected-value">
      <div>
        <div>$310,000</div>
        <div>
          Projected equity value <i class="fas fa-exclamation-circle"></i>
        </div>
      </div>
      <div>
        <div>$100M</div>
        <div>Projected company</div>
        <div>valuation</div>
      </div>
    </div>
    <div>Cost: $110,000 <i class="fas fa-exclamation-circle"></i></div>
    <div>
      Staples — 5x
      <p>
        Staples followed a similar growth trajectory as us, and our projections
        have us scaling to their current revenue in the next few years if we
        continue to hit our targets.
      </p>
    </div>
    <section class="dm-equity-vesting">
      <div>
        <img src="../assets/DM-vesting.svg" alt="" />
      </div>
      <div>
        Vesting
        <p>
          Each month you earn the right to buy more stocks of the company. You
          will have to wait 1 year to earn the first 25%. Explore the graph
          below to understand how vesting works.
        </p>
      </div>
      <div class="dm-equity-chart">
        <LineChart />
      </div>
      <div class="dm-equity-section-border"></div>
      <div class="dm-equity-key-details-image">
        <img src="../assets/DM-key-details.svg" alt="key-details" />
      </div>
      <div>
        Key Details
        <p>
          You'll get your official stock option agreement later, but here are
          the numbers and details you should know. Read more about how ISO
          works.
        </p>
      </div>
      <div class="dm-equity-key-details-data">
        <div>
          <span>ISO</span>
          <span>Equity type</span>
          <p>
            Incentive stock options give you the right to purchase shares of
            company stock at a fixed price, called your strike price.
          </p>
        </div>
        <div>
          <span>Standard</span>
          <span>Vesting schedule</span>
          <p>
            You'll earn ("vest") stock options over time according to this
            schedule: 25/25/25/25, 1 year cliff, monthly.
          </p>
        </div>
        <div>
          <span>90 Day</span>
          <span>Exercise window</span>
          <p>
            How long you have, after you leave the company, to purchase your
            options.
          </p>
        </div>
        <div>
          <span>$1.10</span>
          <span>Strike price <i class="fas fa-exclamation-circle"></i> </span>
          <p>The fixed price you pay to purchase one share of company stock.</p>
        </div>
        <div>
          <span>$3.10</span>
          <span>Preferred price</span>
          <p>
            The price investors paid per share of stock in our latest
            fundraising round. This can help you think about how to value your
            own shares.
          </p>
        </div>
        <div class="dm-equity-section-border"></div>
        <div class="dm-equity-faqs">
          <div class="dm-equity-faqs-image">
            <img src="../assets/DM-faqs.svg" alt="" />
          </div>
          <div>FAQ's</div>
          <p>
            Got the basics down? Here are a few other things you might want to
            know.
          </p>
          <div @click="isHidden = !isHidden">
            <i class="fas fa-chevron-right"></i>
            <strong>What are the different types of options?</strong>

            <p v-if="!isHidden">
              There are two main types of stock options: incentive stock options
              (ISOs) and non-qualified stock options (NSOs). The main difference
              is how they’re taxed—with NSOs, you usually have to pay taxes both
              when you exercise them and sell the resulting shares. With ISOs,
              you’re usually not taxed until you sell the shares (unless you
              qualify for the alternative minimum tax).
            </p>
          </div>
          <div @click="isHidden = !isHidden">
            <i class="fas fa-chevron-right"></i>
            <strong>What does it mean to exercise stock options?</strong>

            <p v-if="!isHidden">
              Exercising stock options means purchasing shares of company stock
              at your strike price (the fixed price defined in your stock option
              agreement). You can usually only exercise vested stock options
              unless your company offers early exercising. You’re not obligated
              to exercise your stock options, but you need to exercise them if
              you want to own those shares of company stock.
            </p>
          </div>
          <div @click="isHidden = !isHidden">
            <i class="fas fa-chevron-right"></i>
            <strong>When can I sell my shares?</strong>

            <p v-if="!isHidden">
              In the past, you could usually only sell private company stock if
              the company got acquired or went public. However, some private
              companies now offer shareholders liquidity through tender offers
              (events that allow you to sell shares back to the company or other
              investors), private stock exchanges, and other methods.
            </p>
          </div>
          <div @click="isHidden = !isHidden">
            <i class="fas fa-chevron-right"></i>
            <strong>How are stock options taxed?</strong>

            <p v-if="!isHidden">
              It depends on a few factors, including what type of stock options
              you have and how long you hold your shares before you sell them.
              In general, you may be taxed on two amounts: 1. The difference
              between what the shares were worth when you purchased them and
              what you paid for them (this difference is often called your
              “spread”) and 2. The difference between what the shares were worth
              when you purchased them and what you sold them for. If you hold
              your shares for at least a year before selling them, you may pay a
              lower tax rate.
            </p>
          </div>
          <div @click="isHidden = !isHidden">
            <i class="fas fa-chevron-right"></i>
            <strong>How was my strike price determined?</strong>

            <p v-if="!isHidden">
              Your strike price is based on the fair market value of our shares
              when your equity grant is approved by our board. To determine the
              fair market value of our shares, we get a 409A valuation, which is
              an appraisal conducted by an independent 3rd party.
            </p>
          </div>
          <div @click="isHidden = !isHidden">
            <i class="fas fa-chevron-right"></i>
            <strong>What is stock dilution?</strong>

            <p v-if="!isHidden">
              If we raise more money, we may have to issue shares to our new
              investors, which means you’ll own a smaller piece of the company.
              However, this doesn’t necessarily mean the value of your shares
              will go down. If our company valuation keeps getting higher, so
              may the value of your shares.
            </p>
          </div>
          <div @click="isHidden = !isHidden">
            <i class="fas fa-chevron-right"></i>
            <strong> What is a tender offer?</strong>

            <p v-if="!isHidden">
              Usually, it’s much harder to sell shares of a private company than
              shares of a public company. A tender offer is a company-sponsored
              event that allows qualifying employees to sell their shares while
              the company is still private.
            </p>
          </div>

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
export default {
  data: function () {
    return {
      isHidden: true,
    };
  },
  components: {
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
  width: 300px;
  background: #d9d9d9;
  margin: 0 auto;
}
.dm-section-border {
  /* border: 0.12px solid #ccc; */
  border-top: 1px solid rgb(235, 226, 226);
}

.dm-equity-drop-down span {
  padding: 5px;
  background: #2d2f31;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  display: block;
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
..dm-equity-right-side i {
  font-size: 1rem;
}
</style>
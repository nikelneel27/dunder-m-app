<template>
  <div class="dm-home-page">
    <div class="dm-image-logo">
      <img src="../assets/DM-logo.png" alt="" />
    </div>
    <div class="dm-home-main">
      <div class="dm-home-heading">
        <h1>Welcome to the team, Jane.</h1>
        <div class="dm-home-main-desc">
          <p>
            Congratulations! The team at Dunder Mifflin is very excited to
            extend this offer to you to join our family. We believe you would be
            a perfect fit on our team and make a huge impact here. We hope you
            join us on our mission to make paper more accessible and affordable
            for all.
          </p>
        </div>
        <div class="dm-home-job-desc">
          <div>
            <span>Title: <strong>Software Engineer</strong> </span>
          </div>
          <div>
            <span>Location: <strong>San Francisco</strong> </span>
          </div>
          <div>
            <span>Offer expires: <strong>Apr 1, 2030</strong> </span>
          </div>
        </div>
      </div>
      <div class="dm-home-image">
        <img
          src="https://figurecdn.com/companies/f4698cc4-14cd-46fa-b068-4b0fa7840536/company_images/offer_letter_welcome/94848257d5b7d596b6aa98597219b3ed.jpeg"
          alt=""
        />
      </div>
    </div>
    <div class="dm-home-job-salary-details">
      <div class="dm-home-job-salary-details-data">
        <div>Salary</div>
        <div class="dm-home-job-salary-details-data-sal-val">$100,000</div>
        <div>Your annual salary</div>
      </div>
      <div class="dm-home-job-salary-details-data">
        <div>Equity</div>
        <div class="dm-home-job-salary-details-data-equ-val">100,000</div>
        <div>Stock options earned over 4 years</div>
      </div>
      <div class="dm-home-job-salary-details-data">
        <div>Sign-on Bonus</div>
        <div class="dm-home-job-salary-details-data-sign-val">$10,000</div>
        <div>For joining us</div>
      </div>
      <div class="dm-home-job-salary-details-data">
        <div>Target Bonus</div>
        <div class="dm-home-job-salary-details-data-target-val">10%</div>
        <div>If you hit your performance target</div>
      </div>
      <div class="dm-home-job-salary-details-data">
        <div>Benefits</div>
        <div class="dm-home-job-salary-details-data-benefits-val">$20,400</div>
        <div>Estimated total annual value</div>
      </div>
    </div>

    <div class="dm-home-secondary-desc">
      <div>What's next?</div>
      <p>
        Read over the offer details below, then when you are ready to accept
        this offer, let your recruiter know and they'll be happy to share next
        steps!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style  scoped>
p {
  font-size: 14px;
}
.dm-home-page {
  position: relative;
  text-align: left;
  line-height: 1.5;

  background-color: #fff;
  /* padding: 24px; */
  padding-bottom: 3rem;
  /* font-weight: 500; */
}
.dm-home-heading h1 {
  line-height: 1.1;
}
.dm-image-logo img {
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100px;
  /* padding: 24px; */
}
.dm-home-job-desc {
  margin-top: 35px;
}
.dm-home-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 1px 2px #ccc;
  margin: 30px 0;
  background-size: cover;
}

.dm-home-job-salary-details {
  display: flex;

  flex-wrap: wrap;
  text-align: center;
}
.dm-home-job-salary-details-data {
  color: #70767d;
  flex: 0 0 50%;
  max-width: 50%;
  margin-bottom: 24px;
}
.dm-home-job-salary-details-data-sal-val {
  color: #13cca5;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 500;
}
.dm-home-job-salary-details-data-equ-val {
  color: #ffc742;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 500;
}
.dm-home-job-salary-details-data-sign-val {
  color: #5563cb;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 500;
}
.dm-home-job-salary-details-data-target-val {
  color: #6c7aff;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 500;
}
.dm-home-job-salary-details-data-benefits-val {
  color: #ff448d;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 500;
}
.dm-home-secondary-desc {
  margin-top: 20px;
  font-weight: 500;
}
.dm-home-secondary-desc p {
  margin-top: 0;
}

@media (min-width: 570px) {
  .dm-home-page {
    padding: 36px 48px;
  }
  .dm-home-heading h1 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.5rem;
    margin-bottom: 2rem;
  }
  .dm-home-secondary-desc p {
    font-size: 16px !important;
  }
}
@media (min-width: 768px) {
  .dm-home-main {
    display: flex;

    /* flex: 0 0 48%; */
    justify-content: space-between;
  }
  .dm-home-page {
    border-radius: 12px !important;
  }
  .dm-home-image,
  .dm-home-heading {
    width: 48%;
  }
  .dm-home-job-desc {
    margin-bottom: 40px;
  }
}

@media (min-width: 1024px) {
  .dm-home-job-salary-details {
    display: flex;
    flex-wrap: nowrap;
    text-align: left;
    justify-content: flex-start;
    max-width: 100%;
  }
  .dm-home-job-salary-details-data {
    flex: 1;
  }
}
</style>
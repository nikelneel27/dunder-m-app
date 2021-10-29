<template>
  <div class="dm-benefits">
    <div class="dm-benefits-section">
      <div class="dm-benefits-section-top">
        <div class="dm-benefits-section-title">Benefits</div>
        <div class="dm-benefits-section-right">
          <div>$20,400</div>
          <p>Estimated annual value</p>
        </div>
      </div>
      <div class="dm-benefits-addition-section">
        <p>
          For you and<i class="fas fa-minus-circle"></i><span>0</span>
          <i class="fas fa-plus-circle"></i>dependents
        </p>
      </div>
      <div class="dm-benefits-data">
        <div class="dm-benefits-details">
          <i class="fas fa-notes-medical"></i>
          <AccordionBenefits
            title="Medical"
            subHeading="Estimated value: $6,000"
            description="We cover 100% of the insurance cost for you and 50% for your
              dependents"
          />
        </div>
        <div class="dm-benefits-details">
          <i class="fas fa-tooth"></i>
          <AccordionBenefits
            title="Dental"
            subHeading="Estimated value: $400"
            description="We cover 100% of the insurance cost for you and 50% for your
              dependents"
          />
        </div>
        <div class="dm-benefits-details">
          <i class="far fa-eye"></i>
          <AccordionBenefits
            title="Vision"
            subHeading="Estimated value: $400"
            description="We cover 100% of the insurance cost for you and 50% for your
              dependents"
          />
        </div>
        <div class="dm-benefits-details">
          <i class="fas fa-hamburger"></i>
          <AccordionBenefits
            title="Free Lucnhes"
            subHeading="Estimated value: $3,500 "
            description="We offer daily lunches and snacks in the office"
          />
        </div>
        <div class="dm-benefits-details">
          <i class="fas fa-umbrella-beach"></i>
          <AccordionBenefits
            title="Unlimited PTO"
            subHeading=""
            description="Dunder Mifflin offers unlimited vacation. Feel free to take the
              time off you need."
          />
        </div>
        <div class="dm-benefits-details">
          <i class="fas fa-tooth"></i>
          <AccordionBenefits
            title="401k"
            subHeading="Estimated value: $10,000 "
            description="We offer 401k matching with our partner Human Interest and will
            match up to 4% of your base salary."
          />
        </div>
        <div class="dm-benefits-details">
          <i class="fas fa-dog"></i>
          <AccordionBenefits
            title="Dog friendly office"
            subHeading=""
            description="We love our office dogs! Bring your fur baby to work and join our
            group of office dogs at Dunder Mifflin!"
          />
        </div>
        <div class="dm-benefits-details">
          <i class="fas fa-hand-holding-usd"></i>
          <AccordionBenefits
            title="Free Paper"
            subHeading="Estimated value: $100"
            description="As an employee at Dunder Mifflin, you'll never have to worry about
            buying paper for your printer ever again - it's all on us!"
          />
        </div>
      </div>
    </div>
    <div class="dm-benefits-footer">
      <p>
        The benefits listed above are estimates only, and subject to change at
        the company's discretion.
      </p>
    </div>
  </div>
</template>

<script>
import AccordionBenefits from "./AccordionBenefits.vue";
export default {
  name: "Benefits",
  components: {
    AccordionBenefits,
  },
};
</script>

<style scoped>
.dm-benefits-details {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 0.5rem 1rem;
}
.dm-benefits-section-title {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 8px;
}
.dm-benefits-section-top {
  display: flex;
  justify-content: space-between;
}
.dm-benefits-section-right > div {
  color: #ff448d;
  font-size: 2rem;
  font-weight: 500;
}
.dm-benefits-section-right p {
  font-weight: 500;
}
.dm-benefits-details {
  display: flex;
}
.dm-benefits-details i {
  font-size: 2rem;
  color: rgb(68, 66, 66);
  /* margin-top: 20px; */
  padding: 15px;
}
.dm-benefits-addition-section {
  opacity: 0.5;
}
.dm-benefits-addition-section i {
  padding: 4px;
  font-size: 1.2rem;
}
.dm-benefits-addition-section span {
  font-size: 1.2rem;
  font-weight: 800;
  color: #ff448d;
}
</style>
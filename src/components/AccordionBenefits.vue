<template>
  <div class="dm-benefits-accordion">
    <div class="dm-benefits-title">{{ title }}</div>
    <div class="dm-benefits-details">
      <span>{{ subHeading }}</span>
      <i class="fas fa-exclamation-circle"></i>
      <i @click="isHidden = !isHidden" class="fas fa-chevron-down"></i>
      <p v-if="!isHidden">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionBenefits",
  props: {
    title: {
      type: String,
      default: "",
    },
    subHeading: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isHidden: true,
    };
  },
};
</script>

<style scoped>
.dm-benefits-accordion {
  padding: 12px 16px 12px 12px;
  text-align: left;
}
.dm-benefits-title {
  font-weight: 500;
}
.dm-benefits-details {
  opacity: 0.5;
}
.fa-chevron-down {
  padding-left: 12px;
}
.fa-exclamation-circle {
  margin-left: 8px;
}

@media (min-width: 768px) {
  .dm-benefits-accordion {
    display: flex;
    justify-content: space-between !important;
    align-items: center;
    width: 100%;
  }
}
</style>
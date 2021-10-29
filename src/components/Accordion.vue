<template>
  <div class="dm-equity-faqs-questions" @click="isHidden = !isHidden">
    <i class="fas fa-chevron-right"></i>
    <strong>{{ title }}</strong>

    <p v-if="!isHidden">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    title: {
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
.dm-equity-faqs-questions {
  padding: 8px 0;
}
.fa-chevron-right {
  padding-right: 12px;
  font-size: 12px;
  /* font-weight: regular; */
}
</style>
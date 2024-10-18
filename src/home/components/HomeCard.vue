<template>
  <q-card>
    <q-card-section class="flex column items-center">
      <q-icon :name="cardData.icon" color="black" size="xl" />
      <span class="text-h6">{{ cardData.title }}</span>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    cardData: {
      type: Object,
      required: true
    },
  },
})
</script>

<style scoped>
.q-card {
  width: 100%;
  height: 120px;
  border-radius: 12%;
  background-color: white;
}
</style>

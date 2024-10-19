<template>
  <div class="card-list">
    <HomeCard v-for="(cardData, index) in cardsData" :key="index" :cardData="cardData" class="home-card" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HomeCard from './HomeCard.vue';

export default defineComponent({
  props: {
    cardsData: {
      type: Array,
      required: true,
    }
  },
  components: {
    HomeCard
  }
})
</script>

<style>
.card-list {
  width: 80%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>

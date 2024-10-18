<template>
  <div class="flex column items-center">
    <PageHeader title="Inicio" />
    <img src="../assets/engine.jpg" class="hero">
    <CardsList :cards-data="cards" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import PageHeader from '../../shared/components/PageHeader.vue';
import CardsList from '../components/CardsList.vue';

export default defineComponent({
  name: "HomePage",
  components: {
    PageHeader,
    CardsList,
  },
  setup() {
    const cards = [
      { title: 'Marca', icon: 'store' },
      { title: 'Model', icon: 'directions_car' },
      { title: 'Motor', icon: 'settings' },
      { title: 'Switch', icon: 'toggle_off' }
    ]

    return {
      cards
    }
  }
})

</script>

<style scoped>
.hero {
  height: 180px;
  width: 80%;
  margin-top: 30px;
  border-radius: 5%;
}
</style>

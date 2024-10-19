<template>
  <div class="main-header">
    <header class="flex row items-center">
      <q-icon name="home" color="white" size="lg" class="q-pr-sm" />
      <h1 class="text-h5 text-white">{{ title }}</h1>
    </header>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "PageHeader",
  props: {
    title: {
      type: String,
      required: true,
    }
  }
})
</script>

<style scoped>
.main-header {
  height: 70px;
  width: 80%;
  margin-top: 20px;
  border-bottom: 2px solid gray;
}
</style>

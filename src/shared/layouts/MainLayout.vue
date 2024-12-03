<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="text-white">
      <q-toolbar class="flex justify-around q-pa-md">
        <q-icon @click="navigateTo(menuOption.name)" v-for="(menuOption, index) in menuOptions" :key="index"
          :name="menuOption.iconName" size="lg" />
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'MainLayout',
  setup() {
    const router = useRouter();

    const menuOptions = [
      { name: "home", iconName: "home", },
      { name: "telemetry", iconName: "computer" },
      { name: "mapping", iconName: "place" },
      { name: "mode", iconName: "tune" }
    ]

    const navigateTo = (routeName) => {
      router.push({ name: routeName })
    }
    return {
      menuOptions,
      navigateTo
    }
  }
})
</script>

<style scoped>
.q-layout {
  background-color: #272222;
}

.q-footer {
  background-color: #272222;
  border-top: 2px solid gray;
}

.q-icon {
  width: 50px;
  height: 50px;
  border-radius: 12%;
}

.q-icon:focus {
  background-color: gray;
  opacity: 0.5;
}
</style>

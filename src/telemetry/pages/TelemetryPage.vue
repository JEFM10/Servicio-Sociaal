<template>
  <div class="flex column items-center">
    <PageHeader title="Telemetriaa" />

    <q-tabs v-model="tab" style="width: 83%;" class="text-white q-mb-md">
      <q-tab @click="navigateTo(menuOption)" v-for="(menuOption, index) in telemetryMenuOptions" :key="index"
        :to="menuOption.routPath" :name="menuOption.tabName" :label="menuOption.tabLabel" class="text-white" />
    </q-tabs>

    <router-view />
  </div>
</template>

<script>
import PageHeader from 'src/shared/components/PageHeader.vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "TelemetryPage",
  components: {
    PageHeader
  },
  setup() {
    const router = useRouter();
    const telemetryMenuOptions = [
      { tabName: 'rpm', tabLabel: 'RPM', routeName: 'rpm', routPath: '/telemetry/rpm' },
      { tabName: 'time', tabLabel: 'Tiempo', routeName: 'time', routPath: '/telemetry/time' },
      { tabName: 'sensors', tabLabel: 'Sensores', routeName: 'sensors', routPath: '/telemetry/sensors' },
      { tabName: 'autonomy', tabLabel: 'Autonomia', routeName: 'autonomy', routPath: '/telemetry/autonomy' },
    ];
    const tab = ref('rpm');

    const navigateTo = (menuOption) => {
      router.push({ name: menuOption.routeName });
      tab.value = menuOption.tabName;
    }

    return {
      telemetryMenuOptions,
      tab,
      navigateTo
    }
  }
})
</script>

<style scoped></style>

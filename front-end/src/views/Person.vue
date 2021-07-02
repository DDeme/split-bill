<template>
  <div>
    <app-header title="John Doe"></app-header>
    <container class="py-16">
      <tabs v-model="selectedTab">
        <tab
          v-for="(tab, i) in tabs"
          :key="`t${i}`"
          :val="tab"
          :label="tab"
          :indicator="true"
        />
      </tabs>
      <tab-panels v-model="selectedTab" :animate="true" :swipeable="true">
        <tab-panel v-for="(tab, i) in tabs" :key="`tp${i}`" :val="tab">
          {{ tab }}
        </tab-panel>
      </tab-panels>
    </container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AppHeader from "@/components/AppHeader.vue"; // @ is an alias to /src
import Container from "@/components/Container.vue";
import { Tabs, Tab, TabPanels, TabPanel } from "vue3-tabs";
import { reactive, toRefs } from "vue";

@Options({
  components: {
    AppHeader,
    Container,
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
  },
})
export default class Settings extends Vue {
  tabs = ["Transactions", "Info"];
  selectedTab = "Transactions";
  setup() {
    const state = reactive({
      selectedTab: this.tabs[1],
    });
    return {
      tabs: this.tabs,
      ...toRefs(state),
    };
  }
}
</script>

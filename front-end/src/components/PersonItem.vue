<template>
  <card class="flex mt-5">
    <div class="flex-grow p-5">
      {{ contact.firstName }} {{ contact.lastName }}
    </div>
    <recent-change class="py-4 px-2" />
    <display-balance class="p-4" :amount="balance" />
    <button class="px-4"><font-awesome-icon icon="arrow-right" /></button>
  </card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "@/components/Card.vue"; // @ is an alias to /src
import DisplayBalance from "@/components/DisplayBalance.vue";
import RecentChange from "@/components/RecentChange.vue";

@Options({
  props: {
    contact: Object,
  },
  components: {
    Card,
    DisplayBalance,
    RecentChange,
  },
})
export default class PersonItem extends Vue {
  balance = 250;
}
</script>

<style lang="scss"></style>

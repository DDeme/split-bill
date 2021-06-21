<template>
  <container>
    <route-title>Home</route-title>
    <h2>Total money:</h2>
    <display-balance :amount="totalAmount" />
    <div class="flex justify-center">
      <div class="w-50 text-center">
        <radial title="Borrowed" />
        <display-balance :amount="borrowedAmount" />
      </div>
      <div class="w-50 text-center">
        <radial title="Lended" />
        <display-balance :amount="lendedAmount" />
      </div>
    </div>
    <Button class="w-full" label="Add a record"></Button>
  </container>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RouteTitle from "@/components/RouteTitle.vue"; // @ is an alias to /src
import Container from "@/components/Container.vue";
import Radial from "@/components/charts/Radial.vue";
import DisplayBalance from "@/components/DisplayBalance.vue";
import Button from "@/components/Button.vue";
@Options({
  components: {
    RouteTitle,
    Container,
    Radial,
    Button,
    DisplayBalance,
  },
})
export default class Home extends Vue {
  borrowedAmount = 1000;
  lendedAmount = 2000;
  totalAmount = 1000 - 2000;
}
</script>

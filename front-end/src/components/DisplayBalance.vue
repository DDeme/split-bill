<template>
  <span>{{ amount }} {{ currency }}</span>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    amount: Number,
    currency: {
      type: String,
      default: "€",
    },
  },
})
export default class DisplayBalance extends Vue {
  amount!: number;
  currency!: string;
}
</script>

<template>
  <span :class="style"><font-awesome-icon :icon="icon" /></span>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { BalanceChange } from "../models/Contact";
@Options({
  props: {
    change: Number,
  },
})
export default class RecentChange extends Vue {
  change: BalanceChange = BalanceChange.UNCHANGED;
  get style() {
    return {
      "text-green-400": this.change === BalanceChange.POSITIVE,
      "text-red-400": this.change === BalanceChange.NEGATIVE,
    };
  }
  get icon() {
    switch (this.change) {
      case BalanceChange.POSITIVE:
        return "chevron-up";
      case BalanceChange.NEGATIVE:
        return "chevron-down";
      case BalanceChange.UNCHANGED:
        return "minus";
      default:
        return "minus";
    }
  }
}
</script>

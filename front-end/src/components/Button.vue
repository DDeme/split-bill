<template>
  <button class="button rounded px-10 py-5">{{label}}</button>
</template>

<script lang="ts">
  import { Options, Vue } from "vue-class-component";

  @Options({
    props: {
      label: String,
    },
  })
  export default class Button extends Vue {
    label!: string
  }
</script>

<style lang="scss" scoped>
  .button {
    background-color: #2f333c;
  }
</style>
<template>
  <card> John Doe john.doe@doe.com phone total </card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "@/components/Card.vue"; // @ is an alias to /src
@Options({
  components: {
    Card,
  },
})
export default class PersonItem extends Vue {}
</script>

<style lang="scss"></style>

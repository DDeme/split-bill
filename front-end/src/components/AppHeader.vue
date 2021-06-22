<template>
  <header class="flex fixed header-bg w-full z-10">
    <container>
      <route-title>{{title}}</route-title>
    </container>
  </header>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import RouteTitle from "./RouteTitle.vue";
import Container from "@/components/Container.vue";
@Options({
  props: {
    title: String,
  },
  components: {
    RouteTitle,
    Container,
  },
})
export default class AppHeader extends Vue {


} 
</script>

<style lang="scss" scoped>
.header-bg {
  background-color: #282b33;
}
</style>
<template>
    <container>
        <div> {{ $route.params.id }}</div>
    </container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RouteTitle from "@/components/RouteTitle.vue"; // @ is an alias to /src
import Container from "@/components/Container.vue";
@Options({
  components: {
    RouteTitle,
    Container,
  },
})
export default class Settings extends Vue {}
</script>
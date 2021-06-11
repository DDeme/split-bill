<template>
    <div class="p-5">
        <route-title>Settings</route-title>
        <form action="">
            <select name=""> </select>
        </form>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RouteTitle from "@/components/RouteTitle.vue"; // @ is an alias to /src

@Options({
  components: {
    RouteTitle,
  },
})
export default class Settings extends Vue {}
</script>
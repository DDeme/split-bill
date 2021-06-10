<template>
  <nav class="absolute w-full p-5 rounded bottom-0">
    <ul class="flex flex-row gap-4 justify-center">
      <li v-for="item in items" :key="item.title">
        <router-link to="/" class="p-5 block">{{ item.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Navigation extends Vue {
  items = [ 
    { 
      title: "Home", 
      route: "/",
    }, 
    { 
      title: "Stats", 
      route: "/",  
    }, 
    { 
      title: "About", 
      route: "/",
    }
  ];
}
</script>

<style scoped lang="scss">
ul {
  background-color: #2f333c;
}
</style>

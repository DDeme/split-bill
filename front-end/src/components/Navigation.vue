<template>
  <nav class="fixed w-full md:p-5 rounded bottom-0">
    <ul class="flex flex-row gap-4 justify-center">
      <li v-for="item in items" :key="item.title">
        <router-link :to="item.route" class="p-5 block text-center">
          <font-awesome-icon :icon="item.icon" />
          <span class="hidden md:block mx-2">{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

// TODO: IMPORT FROM ROUTER
export default class Navigation extends Vue {
  items = [
    {
      title: "Home",
      route: "/",
      icon: "home",
    },
    {
      title: "People",
      route: "/people",
      icon: "user-friends",
    },
    {
      title: "Stats",
      route: "/",
      icon: "chart-area",
    },
    {
      title: "About",
      route: "/about",
      icon: "home",
    },
    {
      title: "Settings",
      route: "/settings",
      icon: "cog",
    },
  ];
}
</script>

<style scoped lang="scss">
nav {
  background-color: #282b33;
}
ul {
  background-color: #2f333c;
}
a:hover {
  color: #45aaf2;
}
</style>

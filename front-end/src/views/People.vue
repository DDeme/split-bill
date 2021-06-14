<template>
  <container>
    <route-title>People</route-title>
    <virtual-list
      :data-key="'id'"
      :data-sources="items"
      :data-component="personItem"
      :estimate-size="70"
      v-on:tobottom="onScrollToBottom"
    >
      <template v-slot:footer>
        <div class="loading-spinner">Loading ...</div>
      </template>
    </virtual-list>

    <personItem></personItem>
    <personItem></personItem>
    <personItem></personItem>
    <personItem></personItem>
    <personItem></personItem>
  </container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RouteTitle from "@/components/RouteTitle.vue"; // @ is an alias to /src
import Container from "@/components/Container.vue";
import PersonItem from "@/components/PersonItem.vue";
@Options({
  components: {
    RouteTitle,
    Container,
    PersonItem,
  },
})
export default class Settings extends Vue {
  items: number[] = [];

  onScrollToBottom(): void {
    this.items = this.items.concat([1, 2, 3, 4, 5, 6, 7]);
  }
}
</script>

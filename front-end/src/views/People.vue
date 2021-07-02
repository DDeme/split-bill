<template>
  <div>
    <app-header title="People" />
    <div class="list-container">
      <VirtualList :data="contacts" :itemSize="84" class="py-16">
        <template v-slot="{ item }">
          <container class="py-0"><personItem :contact="item" /></container>
        </template>
      </VirtualList>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { VirtualList } from "vue3-virtual-list";
import RouteTitle from "@/components/RouteTitle.vue"; // @ is an alias to /src
import Container from "@/components/Container.vue";
import PersonItem from "@/components/PersonItem.vue";
import AppHeader from "@/components/AppHeader.vue";
import { IContact } from "../models/Contact";
import { generateContacts } from "../data/generateFakeData";
@Options({
  components: {
    RouteTitle,
    Container,
    PersonItem,
    AppHeader,
    VirtualList,
  },
})
export default class Settings extends Vue {
  contacts: IContact[] = [];
  data() {
    return {
      contacts: this.contacts,
      personItem: PersonItem,
    };
  }

  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  }

  fetchData() {
    this.contacts = generateContacts();
  }
}
</script>

<style>
.list-container {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  margin: 0 auto;
}
.item-container {
  height: 84px;
  display: flex;
  flex-direction: row;
}
</style>

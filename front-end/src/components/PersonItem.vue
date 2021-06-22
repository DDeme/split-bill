<template>
  <card class="flex mt-5">
    <div class="flex-grow p-5">
      {{ contact.firstName }} {{ contact.lastName }}
    </div>
    <recent-change class="py-4 px-2" />
    <display-balance class="p-4" :amount="balance" />
    <button class="px-4" v-on:click="openPerson">
      <font-awesome-icon icon="arrow-right" />
    </button>
  </card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "@/components/Card.vue"; // @ is an alias to /src
import DisplayBalance from "@/components/DisplayBalance.vue";
import RecentChange from "@/components/RecentChange.vue";
import router from "../router/index";
import { IContact } from "../models/Contact";

@Options({
  props: {
    contact: Object,
  },
  components: {
    Card,
    DisplayBalance,
    RecentChange,
  },
})
export default class PersonItem extends Vue {
  contact!: IContact;
  balance = 2000;

  openPerson() {
    const { id } = this.contact;
    if (id !== null) {
      router.push({ name: "Person", params: { id } });
    }
  }
}
</script>

<style lang="scss"></style>

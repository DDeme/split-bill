<template>
  <apexchart type="radialBar" :options="options" :series="series"></apexchart>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
  },
})
export default class Radial extends Vue {
  title?: string;

  data() {
    return {
      options: {
        labels: [this.title],
        //   radialBar: {
        //     hollow: {
        //       margin: 70,
        //       size: "70%",
        //       background: "#293450",
        //     },
        //     track: {
        //       dropShadow: {
        //         enabled: true,
        //         top: 2,
        //         left: 0,
        //         blur: 4,
        //         opacity: 0.15,
        //       },
        //     },
        //     dataLabels: {
        //       name: {
        //         offsetY: -10,
        //         color: "#fff",
        //         fontSize: "13px",
        //       },
        //       value: {
        //         color: "#fff",
        //         fontSize: "30px",
        //         show: true,
        //       },
        //     },
        // },
        // fill: {
        //   type: "gradient",
        //   gradient: {
        //     shade: "dark",
        //     type: "vertical",
        //     gradientToColors: ["#87D4F9"],
        //     stops: [0, 100],
        //   },
        // },
        stroke: {
          lineCap: "round",
        },
      },
      series: [70],
    };
  }
}
</script>

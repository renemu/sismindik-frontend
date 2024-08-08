<script setup>
import { formatMoneyShort } from "@/utils/calculationHelper";
import thousandSeparator from "@/utils/thousandSeparator";
import { defineProps } from "vue";
const props = defineProps({
  series: {
    type: Array,
  },
  color: {
    type: String,
  },
  categories: {
    type: Array,
  },
  tooltip: {
    type: Array,
  },
  tooltipYMoney: {
    type: Boolean,
    default: false,
  },
  yaxisLabelMoney: {
    type: Boolean,
    default: false,
  },
  doubleChart: {
    type: Boolean,
    default: true,
  },
});
let chartOptions = {
  chart: {
    type: "area",
    height: 250,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  title: {
    enabled: false,
  },
  xaxis: {
    categories: props.categories,
    labels: {
      show: true,
    },
  },
  yaxis: {
    labels: {
      show: true,
      formatter: function (t) {
        if (props.yaxisLabelMoney) {
          return formatMoneyShort(t);
        } else {
          return thousandSeparator(t);
        }
      },
    },
  },
  tooltip: {
    y: {
      formatter: function (t) {
        if (props.tooltipYMoney) {
          return "Rp. " + thousandSeparator(t);
        } else {
          return thousandSeparator(t);
        }
      },
    },
  },
};

if (props.color) {
  let dataColor = [props.color];
  if (props.doubleChart && props.tooltip) {
    dataColor.push("#2385BA");
  }
  if (props.doubleChart && !props.tooltip) {
    dataColor.unshift("#F06B4F");
  }
  chartOptions.colors = dataColor;
}

if (props.tooltip) {
  chartOptions.tooltip.x = {
    formatter: function (t) {
      return props.tooltip[t - 1];
    },
  };
}

if (props.doubleChart) {
  (chartOptions.fill = {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  }),
    (chartOptions.grid = {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    });
}
</script>
<template>
  <apexchart class="apex-charts" height="250" dir="ltr" :series="props.series" :options="chartOptions"></apexchart>
</template>

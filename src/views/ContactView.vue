<script setup>
import Layout from "@/layouts/MainLayout.vue";
import apiClient from "@/service/ApiClientService";
import { reactive } from "vue";

const state = reactive({
  // url: "https://freetestapi.com/api/v1/birds",
  data: {},
  url: "/person",
  columns: [
    {
      label: "id",
      name: "id",
      sort: false,
    },
    {
      label: "nama",
      name: "nama",
    },
  ],
});
const fetchData = async () => {
  const data = await apiClient.get(state.url).then((e) => e.data);
  state.data = data.data;
  console.log(state.data);
};
fetchData();
</script>
<template>
  <Layout>
    <h1>contact</h1>
    <div class="card">
      <div class="card-body">
        <div class="table">
          <div v-for="data in state.data.data" :key="data">
            {{ data.nama }}
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

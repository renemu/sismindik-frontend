<script setup>
import Layout from "@/layouts/MainLayout.vue";
import { personService } from "@/service";
import { reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const state = reactive({
  dataId: route.params.id,
  personData: {},
});

const fetchDataId = async () => {
  await personService.detail(state.dataId).then((e) => {
    state.personData = e;
    console.log(e);
  });
};
fetchDataId();
</script>
<template>
  <Layout>
    <div class="card">
      <div class="card-body">
        Nama :
        <span class="text-uppercase fw-bold">
          {{ state.personData.nama }}
        </span>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from "@/layouts/MainLayout.vue";

let user = localStorage.getItem("user");
let dataUser = JSON.parse(user);
</script>
<template>
  <Layout title="Users">
    <div class="card">
      <div class="card-body">
        <h1 class="text-uppercase">{{ dataUser.name }}</h1>
        <h5>{{ dataUser.email }}</h5>
      </div>
    </div>
  </Layout>
</template>

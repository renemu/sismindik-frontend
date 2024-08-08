<script setup>
import layout from "@/layouts/MainLayout.vue";
</script>
<template>
  <layout>
    <h1>Form</h1>
    <div class="card">
      <div class="card-body">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="Nama Lengkap" />
          <label for="floatingInput">Nama Lengkap</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <textarea class="form-control" style="height: 200px" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>
      </div>
    </div>
  </layout>
</template>

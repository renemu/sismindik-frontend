<script setup>
import Layout from "@/layouts/MainLayout.vue";
</script>
<template>
  <Layout title="Contact">
    <h1>contact</h1>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header d-flex align-items-center">
            <h5 class="flex-grow-1 mb-0 text-muted text-uppercase"><i class="las la-wallet"></i> Assets</h5>
            <div class="flex-shrink-0">
              <button type="button" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#modalFilterAsset"><i class="las la-filter"></i> Filter</button>

              <!--End Btn-Group-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

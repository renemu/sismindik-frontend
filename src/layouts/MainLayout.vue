<script setup>
import sidebar from "@/components/Sidebar.vue";
import navbar from "@/components/Navbar.vue";
</script>
<template>
  <div class="layout">
    <sidebar />
    <div class="main-container">
      <navbar class="navbar" :title="titleRoute" />
      <main class="main-content">
        <slot />
      </main>
      <footer class="footer">@mrzulfikar v1.0.0</footer>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  display: flex;
  width: 100%;
  height: 100vh;
}
.navbar {
  display: flex;
  box-shadow: 1px 1px 3px rgb(119, 119, 119);
}
.main-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  padding: 25px;
}

.footer {
  background-color: rgb(247, 247, 247);
  width: 100%;
  height: 40px;
  color: rgb(201, 201, 201);
  text-align: center;
  padding: 10px 0;
}
</style>

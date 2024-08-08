<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "/src/assets/custom-css/dataTables.bootstrap5.min.css";

:root {
  --primary: rgb(0, 161, 0);
  --grey: grey;
  --dark: rgb(29, 29, 29);
  --dark-alt: rgb(0, 63, 24);
  --light: white;
  --sidebar-width: 250px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}
body {
  background: rgb(245, 245, 245);
}
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>

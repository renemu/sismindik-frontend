<script setup>
import Swal from "sweetalert2";
import { authLogin } from "@/service";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["title", "routeTitle"]);
let token = localStorage.getItem("token");
let user = localStorage.getItem("user");
let dataUser = JSON.parse(user);
if (dataUser === null) {
  Swal.fire({
    title: "Please Login!!!",
    icon: "error",
    confirmButtonText: "OK",
  }).then((result) => {
    if (result.isConfirmed) {
      router.push({ name: "login" });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  });
}
const logout = async () => {
  let dataLogout = {
    token: token.replace(/"/g, ""),
  };
  Swal.fire({
    title: "Anda Yakin Ingin Keluar!",
    icon: "question",
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    confirmButtonText: "Keluar",
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      authLogin.logout(dataLogout);
      router.push({ name: "login" });
      localStorage.clear();
    }
  });
};
</script>
<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px">
          <li class="nav-item">
            <span class="text-light">
              <!-- <router-link class="text-light nav-link" aria-current="page" to="props.routeTitle">{{ props.title }}</router-link> -->
              {{ props.title }}
            </span>
          </li>
        </ul>
        <span class="text-end text-light text-uppercase" style="margin-right: 30px"> {{ dataUser.name }} </span>
        <button class="btn btn-outline-light" @click="logout">Logout</button>
      </div>
    </div>
  </nav>
</template>
<style scoped>
nav {
  background-color: rgb(0, 119, 36);
}
</style>

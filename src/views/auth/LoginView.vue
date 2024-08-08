<script setup>
import Swal from "sweetalert2";
import { authLogin } from "@/service";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const state = reactive({
  formData: {},
});
const toRegis = () => {
  Swal.fire({
    title: "Anda Mencoba Mendaftar !!!",
    text: "Hubungi admin! / atau masukan kode!",
    icon: "info",
    input: "text",
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    confirmButtonText: "Masuk",
    showCancelButton: true,
    showLoaderOnConfirm: true,
    preConfirm: async (registerCode) => {
      try {
        if (registerCode === "321") {
          return true;
        } else {
          Swal.showValidationMessage("Kode salah, coba lagi.");
          return false;
        }
      } catch (error) {
        Swal.showValidationMessage(`Terjadi kesalahan: ${error}`);
        return false;
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      router.push({ name: "register" });
    }
  });
};
const formSubmit = async () => {
  let loginData = {
    email: state.formData.name,
    password: state.formData.password,
  };
  await authLogin
    .login(loginData)
    .then(() => {
      router.push({ name: "home" });
    })
    .catch((e) =>
      Swal.fire({
        title: "Invalid Login",
        icon: "error",
        text: `${e.response.data.message}`,
      })
    );
};
</script>
<template>
  <main>
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="login" id="authlogin" @submit.prevent="formSubmit">
            <div class="head-title">
              <img src="/src/assets/Sismindik_ico_1.png" />
              <h1 class="title">Sismindik</h1>
            </div>
            <div class="login__field">
              <i class="login__icon ri-user-2-fill"></i>
              <input type="text" class="login__input" v-model="state.formData.name" placeholder="User name / Email" required />
            </div>
            <div class="login__field">
              <i class="login__icon ri-key-2-fill"></i>
              <input type="password" class="login__input" v-model="state.formData.password" placeholder="Password" required />
            </div>
            <button type="submit" form="authlogin" class="button login__submit">
              <span class="button__text">Log In </span>
              <i class="button__icon ri-arrow-right-s-line"></i>
            </button>
          </form>
          <div class="media">
            <button @click="toRegis">
              <span class="regis">Register</span>
            </button>
            <span class="sosmed">Sismindik v1.0</span>
          </div>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Raleway, sans-serif;
}

main {
  background: linear-gradient(90deg, #cafcc4, #40a748);
  padding: 0;
}
.title {
  position: relative;
  font-weight: 600;
  width: 250px;
  // background-color: wheat;
  color: #40a748;
  margin-bottom: -30px;
  top: -35px;
}
.head-title {
  align-items: center;
  img {
    width: 150px;
  }
}
.media {
  display: flex;
  // background-color: #40a748;
  justify-content: end;
  padding-right: 40px;
  gap: 1rem;
  margin-top: -20px;
  .sosmed {
    margin-top: 60px;
    color: white;
    font-size: 15px;
  }
  .regis {
    color: white;
    font-size: 25px;
    font-weight: 600;
  }
  .regis:hover {
    color: green;
  }
  a {
    text-decoration: none;
    margin: 0;
    align-items: center;
  }
  a:hover {
    text-decoration: none;
    padding: 0;
    // box-shadow: 0px 0px 24px #569661;
    .sosmed {
      font-size: 50px;
      transition: 0.2s ease-in-out;
    }
  }
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: auto;
  height: 100vh;
}

.screen {
  background: linear-gradient(90deg, #54a46f, #78b886);
  position: fixed;
  height: 600px;
  width: 360px;
  box-shadow: 0px 0px 24px #569661;
}

.screen__content {
  z-index: 1;
  position: relative;
  // height: 100%;
}

.screen__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}

.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}

.screen__background__shape1 {
  height: 520px;
  width: 520px;
  background: #fff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: #63ac75;
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #54a465, #679e7c);
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: #7bb98e;
  top: 420px;
  right: 50px;
  border-radius: 60px;
}

.login {
  width: 320px;
  padding: 30px;
  padding-top: 5px;
}

.login__field {
  padding: 20px 0px;
  position: relative;
}

.login__icon {
  position: absolute;
  top: 28px;
  color: #75b57a;
}

.login__input {
  border: none;
  border-bottom: 2px solid #d1d4d1;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #679e7c;
}

.login__submit {
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d3e8d6;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: #489d53;
  box-shadow: 0px 2px 2px #569664;
  cursor: pointer;
  transition: 0.2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #679e6e;
  outline: none;
}

.button {
  text-decoration: none;
}

.button__icon {
  font-size: 24px;
  margin-left: auto;
  color: #75b57e;
}

.social-login {
  position: absolute;
  height: 140px;
  width: 160px;
  text-align: center;
  bottom: 0px;
  right: 0px;
  color: #fff;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-login__icon {
  padding: 20px 10px;
  color: #fff;
  text-decoration: none;
  text-shadow: 0px 0px 8px #75b580;
}

.social-login__icon:hover {
  transform: scale(1.5);
}
</style>

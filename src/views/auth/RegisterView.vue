<script setup>
import Swal from "sweetalert2";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { authLogin } from "@/service";

const router = useRouter();
const data = reactive({
  formData: {},
});
const handleCancel = () => {
  data.formData = {};
  router.push({ name: "login" });
};
const submit = async () => {
  let dataRegister = data.formData;
  Swal.fire({
    title: "Anda Yakin Sudah Benar!",
    icon: "question",
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      router.push({ name: "login" });
      authLogin.register(dataRegister);
      // console.log(dataRegister);
    }
  });
};
</script>
<template>
  <main>
    <div class="container">
      <div class="screen">
        <div class="screen__content p-4">
          <h5 class="title-header mb-3">REGISTER</h5>
          <form id="formRegister" @submit.prevent="submit">
            <div class="card-body p-2">
              <div class="form-floating mb-3">
                <input type="name" class="form-control" v-model="data.formData.name" id="name" placeholder="Your Name" required />
                <label for="name">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" v-model="data.formData.email" id="email" placeholder="name@example.com" required />
                <label for="email">Email Address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" v-model="data.formData.password" id="password" placeholder="Password" required />
                <label for="password">Password</label>
              </div>

              <div class="form-floating">
                <input type="password" class="form-control" v-model="data.formData.password_confirmation" id="passwordCnfrm" placeholder="Password Confirmation" required />
                <label for="passwordCnfrm">Password Confirmation</label>
              </div>
              <div class="mt-4 d-flex justify-content-end gap-2">
                <button type="submit" class="btn btn-success p-2 btn-md">Submit</button>
                <button type="button" @click="handleCancel" class="btn btn-danger p-2 btn-md">Cancel</button>
              </div>
            </div>
          </form>
          <span class="text-light">Sismindik v1.0</span>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4" />
          <span class="screen__background__shape screen__background__shape3" />
          <span class="screen__background__shape screen__background__shape2" />
          <span class="screen__background__shape screen__background__shape1" />
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
  top: 12%;
  margin: auto;
  padding: 0;
  .title-header {
    color: #3c7c42;
    text-align: center;
    font-weight: 600;
  }
  #formRegister {
    color: #40a748;
    height: 400px;
    input {
      box-shadow: 0px 0px 5px #c7c7c7;
      opacity: 80%;
    }
  }
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

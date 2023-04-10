<template>
  <div class="">
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <form class="form-auth">
      <div class="auth-heading">
        <img src="../../assets/img/logo.png" alt="" width="50%" />
        <h3>Login</h3>
      </div>

      <label class="form-label" for="username">Username</label>
      <input
        type="text"
        class="auth-input"
        placeholder="Email or Phone"
        id="email"
        name="user.email"
        v-model="user.email"
      />
      <label class="form-label" for="password">Password</label>
      <div class="auth-pass">
        <input
          v-if="showPass"
          type="text"
          class="auth-input"
          placeholder="Password"
          id="password"
          name="user.password"
          v-model="user.password"
        />
        <input
          v-else
          type="password"
          class="auth-input"
          placeholder="Password"
          id="password"
          name="user.password"
          v-model="user.password"
        />
        <i
          class="bi eye-pass"
          :class="{ 'bi-eye-slash': showPass, 'bi-eye': !showPass }"
          @click="toggleShow()"
        ></i>
      </div>
      <p class="question">
        Don't have an Account?
        <router-link :to="{ name: 'register' }">Sign Up</router-link>
      </p>

      <button
        type="submit"
        @click="handleLogin(user)"
        class="btn-auth"
        :disabled="loading"
      >
        <span v-show="loading" id="loading"></span>
        <span>Login</span>
      </button>
      <p class="question question-register">
        Back to
        <router-link :to="{ name: 'home' }">Home page</router-link>
      </p>
    </form>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  name: "BlogLogin",
  data() {
    return {
      showPass: false,
      user: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    toggleShow() {
      this.showPass = !this.showPass;
    },
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        (res) => {
          if (res) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "success",
              title: "Login in successfully",
            });
          }
          this.$router.push("/");
        },
        (error) => {
          this.loading = false;
          console.log("test message", error.response);

          if (error.response.status === 422 || error.response.status === 403) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "error",
              title: "Invalid email or password!",
            });
          } else if (error.response.status == 402) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "error",
              title: "Login unsuccessful!",
            });
          } else if (error.response.status == 500) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "warning",
              title: "System error!",
            });
          }
        }
      );
    },
  },
};
</script>
<style scoped>
.auth-pass {
  position: relative;
}
.eye-pass {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}
#loading {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 5px solid rgb(70 118 10 / 56%);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  position: fixed;
  top: 40%;
  left: 45%;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}

.btn-auth span {
  color: #fff;
}
</style>
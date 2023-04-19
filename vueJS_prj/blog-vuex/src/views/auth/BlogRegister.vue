<template>
  <div class="">
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <form class="form-auth">
      <div class="auth-heading">
        <img src="../../assets/img/logo.png" alt="" width="50%" />
        <h3>Register</h3>
      </div>

      <label class="form-label" for="username">Username</label>
      <input
        type="text"
        class="auth-input"
        placeholder="User Name"
        id="username"
        name="user.username"
        v-model="user.username"
      />
      <label class="form-label" for="email">Email</label>
      <input
        type="text"
        class="auth-input"
        placeholder="Email"
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
      <button
        type="button"
        @click="handleRegister(user)"
        class="btn-auth"
        :disabled="loading"
      >
        <span v-show="loading" id="loading"></span>
        <span>Sign Up</span>
      </button>
      <p class="question question-register">
        Back to
        <router-link :to="{ name: 'home' }">Home page</router-link>
      </p>
    </form>
  </div>
</template>
<script>
export default {
  name: "BlogRegister",
  data() {
    return {
      showPass: false,
      user: {
        username: "",
        password: "",
        email: "",
      },
      loading: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    toggleShow() {
      this.showPass = !this.showPass;
    },
    handleRegister(user) {
      this.loading = true;
      this.$store.dispatch("auth/register", user).then(
        (res) => {
          if (res) {
          }
          this.$router.push("/login");
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
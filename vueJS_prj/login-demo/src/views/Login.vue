<template>
  <div class="login">
    <input type="text" v-model="email" placeholder="Email" />
    <input type="text" v-model="password" placeholder="Password" />
    <button v-on:click="login()">Login</button>
  </div>
</template>
<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  method: {
    login() {
      console.log(this.email, this.password);
    },
  },
};
</script>
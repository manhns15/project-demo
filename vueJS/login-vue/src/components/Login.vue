<template>
  <div class="">
    <h1>Login</h1>
    <div class="">
      <input type="text" v-model="username" placeholder="username" />
      <input type="text" v-model="password" placeholder="password" />
      <button @click="login()">Login</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?username=${this.username}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "home" });
      }
      console.log(result);
    },
  },
};
</script>
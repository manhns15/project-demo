<template>
  <header class="header">
    <div class="container">
      <div class="header-container">
        <div class="header-top">
          <div class="header-left">
            <ul class="header-infos">
              <li class="header-infos--item">
                <a href="#">Chat with us</a>
              </li>
              <li class="header-infos--item">
                <a href="#">+420 336 775 664</a>
              </li>
              <li class="header-infos--item">
                <a href="#">info@freshnesecom.com</a>
              </li>
            </ul>
          </div>
          <div class="header-right">
            <ul class="header-menu">
              <li class="header-menu--item">
                <router-link :to="{ name: 'home' }">Blog</router-link>
              </li>
              <li class="header-menu--item"><a href="#">About Us</a></li>
              <li class="header-menu--item"><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>
        <div class="header-bot">
          <router-link :to="{ name: 'home' }" class="header-logo">
            <img srcset="../assets/img/logo.png 2x" alt="" />
          </router-link>
          <div class="header-search">
            <form class="header-form" action="">
              <select name="" id="" class="header-form--select">
                <option value="">All categories</option>
                <option value="">Saab</option>
              </select>
              <div class="header-form--item">
                <input
                  type="text"
                  class="header-form--input"
                  placeholder="Search Products, categories ..."
                />
                <button class="header-form--button">
                  <img src="../assets/img/ic-actions-search.svg" alt="" />
                </button>
              </div>
            </form>
          </div>
          <!-- <div class="header-auth"> -->
          <div class="header-auth--icon">
            <ul class="header-auth" v-if="this.currentUser">
              <li class="menu__item menu__item--dropdown">
                <a class="menu__link menu__link--toggle" href="#">
                  <span><i class="bi bi-person-circle"></i></span>
                </a>

                <ul class="dropdown-menu">
                  <li class="dropdown-menu__item">
                    <a class="dropdown-menu__link" href="#"
                      ><i class="bi bi-person-circle"></i> {{ currentUser }}</a
                    >
                  </li>

                  <li class="dropdown-menu__item" @click.prevent="logOut()">
                    <a class="dropdown-menu__link" href="#"
                      ><i class="bi bi-box-arrow-right"></i> Logout</a
                    >
                  </li>
                </ul>
              </li>
              <li class="menu__item">
                <a href="javascript:void(0)" class="menu__link"
                  ><i class="bi bi-gear"></i
                ></a>
              </li>
            </ul>

            <ul class="header-auth" v-if="!this.currentUser">
              <li class="menu__item menu__item--dropdown">
                <a class="menu__link menu__link--toggle" href="#">
                  <span><i class="bi bi-person-circle"></i></span>
                </a>

                <ul class="dropdown-menu">
                  <li class="dropdown-menu__item">
                    <router-link
                      :to="{ name: 'login' }"
                      class="dropdown-menu__link"
                      ><i class="bi bi-box-arrow-right"></i> Login</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="menu__item">
                <a href="" class="menu__link"><i class="bi bi-gear"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },

  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
  computed: {
    currentUser() {
      const userToken = JSON.parse(localStorage.getItem("user"));
      console.log("userToken", userToken);
      if (userToken) {
        return userToken.user.username;
      }
    },
  },
  mounted() {
    console.log("mounted Login", this.currentUser);
  },
};
</script>
<style scoped>
.header-auth {
  position: relative;
}
.header-auth__item {
  display: flex;
  gap: 0 5px;
  position: relative;
  padding-right: 3rem;
}
.header-auth__link {
  text-transform: uppercase;
}
.header-auth__icon {
  margin: 0 !important;
}

.dropdown-menu {
  font-size: 16px;
  z-index: 1;
  position: absolute;
  padding: 0;
  top: 30px;
  left: -20px;
  background-color: white;
  list-style-type: none;
  width: 154px;
  border-radius: 2px;
  box-shadow: 0 0 3px #ccc;
  transform-origin: calc(100% - 20px) top;
  animation: growth ease 0.2s;
  will-change: opacity, transform;
  display: none;
}

.menu__link {
  color: #151515;
}
.menu__item--dropdown::before {
  content: " ";
  width: 100%;
  position: absolute;
  top: 19px;
  height: 13px;
}
.menu__item--dropdown:hover .dropdown-menu {
  display: block;
}
.dropdown-menu__item:first-child .dropdown-menu__link {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.dropdown-menu__item:last-child .dropdown-menu__link {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.dropdown-menu__link {
  display: block;
  padding: 1rem;
  color: #151515;
  background-color: #fafafa;
}
.dropdown-menu__link:hover {
  color: #6a983c;
  background-color: #ccc;
}
</style>
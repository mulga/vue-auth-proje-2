<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg bg-light" v-if="$store.state.user">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <router-link class="navbar-brand" to="/">Logo</router-link> |
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
          <button class="btn btn-danger" @click="$store.dispatch('logout')">
            Logout
          </button>
        </div>
      </div>
    </nav>
  </div>

  <div class="container">
    <router-view />
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
export default {
  name: "App",

  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
};
</script>

<style>
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

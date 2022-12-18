<template>
  <main class="login">
    <section class="forms">
      <!-- register -->
      <form class="form-register" @submit.prevent="register">
        <h2>Register</h2>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="example@email.com"
          v-model="register_form.email"
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="register_form.password"
        />

        <input type="submit" value="register" />
      </form>
      <!-- login -->
      <form class="form-login" @submit.prevent="login">
        <h2>Login</h2>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="login_form.email" />
        <label for="password">Password</label>
        <input type="password" id="password" v-model="login_form.password" />
        <input type="submit" value="Login" />
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "PageLogin",
  components: {},
  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return {
      login_form,
      register_form,
      login,
      register,
    };
  },
};
</script>

<style scoped>
.forms {
  max-width: 550px;
  margin: 0 auto;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #ccc;
}
input {
  padding: 0.3rem;
}
</style>

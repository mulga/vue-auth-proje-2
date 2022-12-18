<template>
  <div class="container">
    <main class="login ms-auto me-auto">
      <!-- register -->
      <h3 class="mt-5 text-center">Register</h3>
      <form @submit.prevent="register">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
            v-model="register_form.email"
          />
          <small id="emailHelpId" class="form-text text-muted"
            >Your email</small
          >
        </div>

        <div class="mb-3">
          <label for="" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            name=""
            id=""
            placeholder=""
            v-model="register_form.password"
          />
          <small id="emailHelpId" class="form-text text-muted">Password</small>
        </div>
        <button class="btn btn-primary" type="submit">Register</button>
      </form>

      <!-- login form -->
      <h3 class="mt-5 text-center">Login</h3>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
            v-model="login_form.email"
          />
          <small id="emailHelpId" class="form-text text-muted"
            >Your email</small
          >
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            id="password"
            placeholder=""
            v-model="login_form.password"
          />
          <small id="emailHelpId" class="form-text text-muted">Password</small>
        </div>
        <button class="btn btn-primary" type="submit">Login</button>
      </form>
    </main>
  </div>
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
main {
  max-width: 650px;
}

.forms {
  max-width: 550px;
  margin: 0 auto;
}

form {
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #ccc; */
}
input {
  padding: 0.3rem;
}
</style>

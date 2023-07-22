<template>
  <div class="login-container relative-position">
    <div style="padding: 16px;">
      <div @click="$router.back()">
        <img svg-inline src="assets/icons/general/arrow-left.svg" />
      </div>

      <h1 class="text__title-2 text__primary">
        Masuk
      </h1>

      <p class="text__body text__neutral-dark-grey">
        Masukkan data yang terdaftar
      </p>

      <!-- FIELD EMAIL -->
      <div style="margin-bottom: 16px;">
        <label
          for="login-email"
          class="text__title-4 text__neutral-dark"
          style="display: block; margin-bottom: 8px;"
        >
          Email
        </label>
        <input
          type="email"
          class="input-field"
          placeholder="emailkamu@email.com"
          ref="loginEmailInput"
          v-model="login.email"
          @input="checkInput()"
        />
      </div>

      <!-- FIELD PASSWORD -->
      <div style="margin-bottom: 12px;">
        <label
          for="login-pass"
          class="text__title-4 text__neutral-dark"
          style="display: block; margin-bottom: 8px;"
        >
          Password
        </label>
        <div class="relative-position">
          <input
            type="password"
            class="input-field"
            placeholder="••••••••"
            style="padding-right: 40px;"
            ref="loginPassInput"
            v-model="login.password"
            @input="checkInput()"
          />
          <div class="absolute" style="top: 8px; right: 8px;">
            <div v-if="!showPassword" @click="togglePassword()">
              <img svg-inline src="assets/icons/general/eye-close.svg" />
            </div>
            <div v-if="showPassword" @click="togglePassword()">
              <img svg-inline src="assets/icons/general/eye-open.svg" />
            </div>
          </div>
        </div>
      </div>

      <div class="text-right">
        <span class="text__foot-button text__primary">Lupa kata sandi</span>
      </div>
    </div>

    <BarSingle label="Lanjut" :buttonActive="formFilled" :action="tryLogin" />
  </div>
</template>

<script>
import BarSingle from "components/inputs/BarSingle";

export default {
  name: "Login",
  components: { BarSingle },
  data() {
    return {
      showPassword: false,
      login: {
        email: "",
        password: ""
      },
      formFilled: false
    };
  },
  computed: {
    account() {
      return this.$store.state.account.account;
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
      const type = this.showPassword ? "text" : "password";
      this.$refs.loginPassInput.setAttribute("type", type);
    },
    checkInput() {
      this.formFilled = !!this.login.email && !!this.login.password;
    },
    tryLogin() {
      if (
        this.login.email === this.account.email &&
        this.login.username === this.account.username
      ) {
        this.$store.commit("account/loginAccount", true);

        window.location.href = "/";
        window.history.replaceState(null, null, "/");
        //
        //
      } else {
        this.$store.dispatch(
          "app/showDangerToast",
          "Email atau kata sandi salah",
          "danger"
        );
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  height: 100%;
  overflow: hidden;
}
</style>

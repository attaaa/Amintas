<template>
  <div class="register-container relative-position">
    <div style="padding: 16px;">
      <div @click="$router.back()">
        <img svg-inline src="assets/icons/general/arrow-left.svg" />
      </div>

      <h1 class="text__title-2 text__primary">
        Daftar
      </h1>

      <p class="text__body text__neutral-dark-grey">
        Lengkapi data di bawah ini ya
      </p>

      <!-- FIELD NAME -->
      <div style="margin-bottom: 16px;">
        <label
          class="text__title-4 text__neutral-dark"
          style="display: block; margin-bottom: 8px;"
        >
          Nama Lengkap
        </label>
        <input
          type="email"
          class="input-field"
          placeholder="Tsubara Ozora"
          v-model="name"
          @input="inputValidation()"
        />
      </div>

      <!-- FIELD EMAIL -->
      <div style="margin-bottom: 16px;">
        <label
          class="text__title-4 text__neutral-dark"
          style="display: block; margin-bottom: 8px;"
        >
          Email
        </label>
        <input
          type="email"
          class="input-field"
          placeholder="emailkamu@email.com"
          v-model="email"
          @input="inputValidation()"
        />
      </div>

      <!-- FIELD PASSWORD -->
      <div style="margin-bottom: 12px;">
        <label
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
            v-model="password"
            @input="inputValidation()"
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
    </div>

    <BarSingle
      label="Daftar"
      :buttonActive="showDaftarBtn"
      :action="actionDaftar"
    />

    <PopUp ref="popUpConfirmation" :enablePanArea="false">
      <!-- illustration -->
      <div
        class="placeholder-illustration flex"
        style="height: 188px; margin-top: 6px;"
      >
        <img
          style="height: 100%; width: 100%; object-fit:cover;  border-radius: 8px"
          src="img/popup_get_started.png"
        />
      </div>

      <span
        class="block text__primary text__title-3 full-width text-center"
        style="margin-top: 24px; margin-bottom: 16px;"
        >Mulai Atasi Cemasmu
      </span>
      <p
        class="text__body text__neutral-dark-grey text-center"
        style="margin-bottom: 48px"
      >
        Dengan amintas kamu bisa menangani rasa cemas mengganggu di keseharianmu
      </p>

      <div class="pop-up--action row">
        <button
          class="btn__large btn__accent col-12 relative-position"
          @click="register()"
          v-ripple
        >
          Mulai Sekarang
        </button>
      </div>
    </PopUp>
  </div>
</template>

<script>
import BarSingle from "components/inputs/BarSingle";
import PopUp from "components/bottomsheet/PopUp";

export default {
  name: "Register",
  components: { BarSingle, PopUp },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      inputValid: false,
      showDaftarBtn: false,
      showPassword: false
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
      const type = this.showPassword ? "text" : "password";
      this.$refs.loginPassInput.setAttribute("type", type);
    },
    inputValidation() {
      this.inputValid = !!this.name && !!this.email && !!this.password;
      this.showDaftarBtn = this.inputValid;
    },
    actionDaftar() {
      this.showDaftarBtn = false;
      this.$refs.popUpConfirmation.setState("open");
    },
    register() {
      const accountData = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("account/registerAccount", accountData);

      window.location.href = "/";
      window.history.replaceState(null, null, "/");
    }
  }
};
</script>

<style scoped>
.register-container {
  height: 100%;
  overflow: hidden;
}
</style>

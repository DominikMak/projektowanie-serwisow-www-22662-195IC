<template>
  <div>
    <div class="display-1 font-weight-light text-xs-center">3. v-otp-input.</div>
    <div class="ma-auto position-relative" style="max-width: 300px">
      <v-otp-input
        type="password"
        length = 5
        v-model="otp"
        :disabled="loading"
        @finish="onFinish"
      ></v-otp-input>
      <v-overlay absolute :value="loading">
        <v-progress-circular
          indeterminate
          color="pink"
        ></v-progress-circular>
      </v-overlay>
    </div>
    <div>
      Hasło to: <span class="font-weight-bold">{{ expectedOtp }}</span>
    </div>
    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000">
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "JeszczeSecond",
  data: () => ({
      loading: false,
      snackbar: false,
      snackbarColor: 'default',
      otp: '',
      text: '',
      expectedOtp: '22662',
    }),
    methods: {
      onFinish (rsp) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.snackbarColor = (rsp === this.expectedOtp) ? 'success' : 'warning'
          this.text = `Podane hasło: "${rsp}" (${this.snackbarColor})`
          this.snackbar = true
        }, 3500)
      },
    },
};
</script>

<style scoped>
.position-relative {
   position: relative;
 }
</style>
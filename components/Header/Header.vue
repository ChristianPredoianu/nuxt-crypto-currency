<template>
  <header class="w-screen">
    <p
      class="dark:text-white text-md cursor-pointer text-black pt-5 px-5 tracking-widest uppercase md:text-xl lg:px-10"
      @click="goToHome"
    >Crypto check</p>
  </header>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    goToHome() {
      this.$router.push({ path: "/" });
    },
    ...mapActions(["colorMode"]),
  },
};
</script>

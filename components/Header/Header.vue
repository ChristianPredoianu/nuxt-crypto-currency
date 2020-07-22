<template>
  <header class="w-screen">
    <p
      class="text-md text-black pt-5 px-3 tracking-widest uppercase md:text-xl lg:mx-10"
      @click="goToHome"
    >
      Crypto check
    </p>
  </header>
</template>
<script>
export default {
  methods: {
    goToHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

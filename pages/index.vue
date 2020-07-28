<template >
  <div class="dark:bg-gray-900">
    <header class="w-full bg-blue-900 relative bg-fixed">
      <div class="flex justify-between">
        <p
          class="text-md text-white pt-5 px-5 tracking-widest uppercase md:text-xl lg:px-10"
        >Crypto Check</p>
        <div class="w-1/2 flex justify-end">
          <button
            @click="colorMode('light')"
            class="bg-black text-xs text-white mr-2 px-2 mt-3 focus:outline-none lg:text-lg"
          >Light mode</button>
          <button
            @click="colorMode('dark')"
            class="bg-black text-xs text-white px-2 mt-3 focus:outline-none lg:text-lg lg:mr-3"
          >Dark mode</button>
        </div>
      </div>

      <div class="flex flex-col items-center pt-10 pb-24 text-white xl:mt-16">
        <h2 class="text-xl md:text-4xl">Check out info about</h2>
        <h1 class="text-4xl md:text-6xl">Cryptocurrency</h1>
        <button
          class="bg-blue-400 mt-10 p-3 text-xl rounded-lg cursor-pointer focus:outline-none z-20 hover:bg-blue-500 xl:text-4xl xl:px-10 xl:py-5"
          @click="goToInfo"
        >Get started</button>
      </div>
    </header>
    <section
      class="dark:bg-gray-900 flex flex-col justify-center items-center mt-20 mb-10 text-xl md:mt-40 lg:mt-64 lg:pb-40 lg:pt-10 xl:mt-56 xl:pt-10 xl:pb-48"
    >
      <h3
        class="dark:text-white w-1/2 text-center font-bold md:text-4xl tracking-widest uppercase"
      >Just like a bank but for crypto</h3>
      <img
        src="~/assets/images/bitcoin.svg"
        alt="Bitcoin"
        class="w-32 pt-10 md:py-10 mt-10 md:w-56 xl:w-64"
      />
    </section>
    <a href="https://coinranking.com/" target="_blank" rel="noopener" class="pointer">
      <p class="dark:text-white text-xs pt-10 ml-3 pb-5 xl:mt-32">API: Coinranking</p>
    </a>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    goToInfo() {
      this.$router.push("/aboutCrypto");
    },
    ...mapActions(["colorMode"]),
  },
};
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>

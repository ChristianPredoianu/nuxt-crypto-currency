<template>
  <div>
    <header class="w-full bg-blue-900 relative bg-fixed">
      <p class="text-md text-white pt-5 px-10 tracking-widest uppercase md:text-xl">Crypto Check</p>
      <div class="flex flex-col items-center pt-10 pb-24 text-white xl:mt-20">
        <h2 class="text-xl md:text-4xl">Check out info about</h2>
        <h1 class="text-4xl md:text-6xl">Cryptocurrency</h1>
        <button
          class="bg-blue-400 mt-10 p-3 text-xl rounded-lg cursor-pointer focus:outline-none z-20 hover:bg-blue-500"
          @click="goToInfo"
        >Get started</button>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="hidden absolute inset-0 pt-56 mt-20 w-full md:block md:mt-40 lg:mt-48 xl:mt-56"
      >
        <path
          fill=" #2a4365"
          fill-opacity="1"
          d="M0,96L120,122.7C240,149,480,203,720,202.7C960,203,1200,149,1320,122.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        />
      </svg>
    </header>
    <section
      class="flex flex-col justify-center items-center mt-20 mb-10 text-xl md:mt-40 xl:mt-64 xl:pt-20"
    >
      <h3
        class="w-1/2 text-center font-bold md:text-4xl tracking-widest uppercase"
      >Just like a bank but for crypto</h3>
      <img
        src="~/assets/images/bitcoin.svg"
        alt="Bitcoin"
        class="w-32 pt-10 md:py-10 mt-10 md:w-56"
      />
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goToInfo() {
      this.$router.push("/aboutCrypto");
    },
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

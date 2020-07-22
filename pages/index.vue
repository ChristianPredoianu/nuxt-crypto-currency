<template>
  <div>
    <header class="w-full bg-blue-900">
      <p
        class="text-md text-white pt-5 px-10 tracking-widest uppercase md:text-xl"
      >
        Crypto Check
      </p>
      <div class="flex flex-col items-center pt-10 pb-24 text-white">
        <h2 class="text-xl md:text-4xl">Check out info about</h2>
        <h1 class="text-4xl md:text-6xl">Cryptocurrency</h1>
        <button
          class="bg-blue-400 mt-10 p-3 text-xl rounded-lg cursor-pointer focus:outline-none"
          @click="goToInfo"
        >
          Get started
        </button>
      </div>
    </header>
    <section
      class="flex flex-col justify-center items-center mt-20 mb-10 text-xl md:mt-40 xl:mt-32"
    >
      <h3 class="w-1/2 text-center font-bold md:text-4xl">
        Just like a bank but for crypto
      </h3>
      <img
        src="~/assets/images/bitcoin.png"
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
    }
  }
};
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>

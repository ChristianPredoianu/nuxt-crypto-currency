<template>
  <div class="overflow-hidden dark:bg-blue-900">
    <Header />
    <div class="dark:bg-blue-900 flex justify-center py-20">
      <img src="~/assets/images/info.svg" alt="Info" class="w-40 xl:w-64" />
    </div>
    <h1 class="dark:text-white text-center text-5xl py-10">We provide</h1>
    <section
      class="dark:bg-gray-600 flex flex-col justify-around w-screen bg-gray-400 py-20 mt-10 lg:flex-row"
    >
      <div class="flex flex-col justify-center items-center">
        <font-awesome-icon :icon="['fas', 'briefcase']" class="text-6xl" />
        <h2 class="text-2xl mt-5">Info</h2>
        <p class="text-lg mt-2">Getting the right information is crucial</p>
      </div>
      <div class="flex flex-col justify-center items-center mt-10 lg:mt-0">
        <font-awesome-icon :icon="['fas', 'hand-paper']" class="text-6xl" />
        <h2 class="text-2xl mt-5">A helping hand</h2>
        <p class="text-lg mt-2">We provide info about cryptocurrency</p>
      </div>
      <div class="flex flex-col justify-center items-center mt-10 lg:mt-0">
        <font-awesome-icon :icon="['fas', 'calendar-alt']" class="text-6xl" />
        <h2 class="text-2xl mt-5">Up to date info</h2>
        <p class="text-lg mt-2">Our info is always up to date</p>
      </div>
    </section>
    <section class="md:flex justify-center">
      <div
        class="dark:bg-gray-600 w-full text-center text-5xl mt-20 mb-10 py-20 bg-blue-100 lg:w-2/3"
      >
        <h2 class="text-2xl xl:text-4xl">Top five cryptocurrencies</h2>
      </div>
    </section>
    <Card :data="data" />
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Card from "@/components/Cards/Card";
import { mapActions } from "vuex";

export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      "https://api.coinranking.com/v1/public/coins"
    );
    console.log(data);
    return { data: data.coins.slice(0, 5) };
  },
  components: {
    Header,
    Card,
  },
  methods: {
    ...mapActions(["colorMode"]),
  },
  mounted() {
    this.$colorModePreferance = this.$store.dispatch("colorMode");
  },
};
</script>

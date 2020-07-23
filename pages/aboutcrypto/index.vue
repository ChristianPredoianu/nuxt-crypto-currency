<template>
  <div class="overflow-hidden">
    <Header />
    <div class="flex justify-center py-20">
      <img src="~/assets/images/info.svg" alt="Info" class="w-40 xl:w-64" />
    </div>
    <section class="flex flex-col w-screen bg-gray-400 justify-around mt-10 py-20 lg:flex-row">
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
        <h2 class="text-2xl mt-5">Up to date</h2>
        <p class="text-lg mt-2">Our info is always up to date</p>
      </div>
    </section>

    <Card :data="data" />
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Card from "@/components/Cards/Card";

export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      "https://api.coinranking.com/v1/public/coins"
    );
    return { data: data.coins.slice(0, 5) };
  },
  components: {
    Header,
    Card,
  },
  methods: {
    getData() {},
  },
};
</script>

<template>
  <div class="overflow-hidden dark:bg-gray-700">
    <Header />
    <section class="flex flex-col items-center">
      <h1 class="dark:text-white text-3xl mt-10 xl:text-6xl">{{cryptoDataById.name}}</h1>
      <img :src="cryptoDataById.iconUrl" alt class="w-40 my-10 xl:w-40" />
    </section>
    <section
      class="dark:bg-gray-600 bg-blue-100 text-center px-10 xl:relative xl:flex xl:justify-end xl:pb-64 xl:mt-64 xl:text-left"
    >
      <div class="dark:text-white xl:w-1/3 xl:mr-64 xl:pr-5 xl:pt-20">
        <h1 class="text-4xl py-10 xl:text-4xl xl:mb-10 xl:pb-0">Description</h1>
        <p class="xl:text-xl">{{ paragraph }}</p>
        <section
          class="relative bg-white text-black dark:bg-gray-500 py-20 mt-20 xl:absolute xl:flex xl:flex-col xl:items-center xl:w-1/3 xl:top-0 xl:left-0 xl:mt-0 xl:py-20 xl:border-gray-300 xl:border-solid xl:border"
        >
          <h3 class="text-xl xl:text-2xl">Rank:</h3>
          <p class="text-lg mb-5 xl:mb-2">{{ cryptoDataById.rank }}</p>
          <h3 class="text-xl xl:text-2xl">First Seen:</h3>
          <p class="text-lg mb-5 xl:mb-2 xl:px-5 xl:text-center">{{ date }}</p>
          <h3 class="text-xl xl:text-2xl">Symbol:</h3>
          <p class="text-lg mb-5 xl:mb-2">{{ cryptoDataById.symbol }}</p>
          <h3 class="text-xl xl:text-2xl">Slug:</h3>
          <p class="text-lg mb-5 xl:mb-2">{{ cryptoDataById.slug }}</p>

          <img
            src="~/assets/images/woman.svg"
            alt="Woman"
            class="absolute top-0 left-0 w-20 md:w-40 xl:w-32"
          />

          <h3 class="lext-xl xl:text-2xl">Total supply:</h3>
          <p class="text-lg mb-5 xl:mb-2">{{ formatDecimals(this.cryptoDataById.totalSupply)}}</p>
          <h3 class="text-xl xl:text-2xl">Circulating supply:</h3>
          <p class="text-lg mb-5 xl:mb-2">{{ parseInt(cryptoDataById.circulatingSupply) }}</p>
          <h3 class="text-xl xl:text-2xl">Price:</h3>
          <p class="text-lg mb-5 xl:mb-2">{{ formatDecimals(this.cryptoDataById.price) }} &#36;</p>
        </section>

        <img
          src="~/assets/images/finance.svg"
          alt="link"
          class="hidden xl:w-48 xl:absolute xl:right-0 xl:bottom-0 xl:mr-20 xl:mb-20 xl:block"
        />
      </div>
    </section>
    <div class="ml-10 xl:pb-10 xl:ml-20">
      <a :href="cryptoDataById.websiteUrl" target="blank">
        <img
          src="~/assets/images/link.svg"
          alt="link"
          class="ml-5 w-20 mt-10 lg:ml-0 xl:w-48 xl:-ml-3 xl:mt-20"
        />
        <p class="mb-5 dark:text-white mt-6 xl:mt-5">Visit {{ cryptoDataById.name }} homepage</p>
      </a>
    </div>
  </div>
</template>


<script>
import Header from "@/components/Header/Header";
import { mapActions } from "vuex";
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      "https://api.coinranking.com/v1/public/coins"
    );
    return { data: data.coins.slice(0, 5) };
  },
  components: {
    Header,
  },
  data() {
    return {
      cryptoDataById: {},
      paragraph: "",
      date: "",
      formatElementDecimals: null,
    };
  },

  methods: {
    formatDecimals(element) {
      let result = parseFloat(element);
      result = parseFloat((Math.round(result * 100) / 100).toFixed(2));
      return (this.formatElementDecimals = result);
    },
    ...mapActions(["colorMode"]),
  },

  computed: {
    getDataById() {
      const result = this.data.find(
        ({ id }) => id === parseInt(this.$route.params.id)
      );
      console.log(result);
      this.cryptoDataById = result;
    },
    replaceTagsInParagraph() {
      this.paragraph = this.cryptoDataById.description
        .replace(/<p[^>]*>/g, "")
        .replace(/<\/?p[^>]*>/g, "")
        .replace(/<h3[^>]*>/g, "")
        .replace(/<\/?h3[^>]*>/g, "");
    },
    formatTimeStamp() {
      const date = new Date(this.cryptoDataById.firstSeen).toDateString();
      this.date = date;
    },
  },

  mounted() {
    this.getDataById;
    this.replaceTagsInParagraph;
    this.formatTimeStamp;
  },
};
</script>
<template>
  <div class="flex flex-col my-10 lg:flex-row lg:flex-wrap lg:justify-around">
    <div
      class="dark:bg-gray-600 dark:shadow-lg w-full flex flex-col items-center mt-10 shadow-lg lg:w-1/5 lg:mx-1"
      v-for="cryptoInfo in data"
      :key="cryptoInfo.id"
    >
      <div class="h-32 xl:h-48">
        <img :src="cryptoInfo.iconUrl" alt="Crypto image" class="mt-2 w-24 xl:bg-cover xl:w-40" />
      </div>
      <h3 class="text-3xl mt-10 mb-5">{{ cryptoInfo.name }}</h3>
      <button
        class="bg-blue-400 px-10 my-5 py-4 text-xl rounded-lg cursor-pointer focus:outline-none hover:bg-blue-600"
        @click="$router.push('/aboutcrypto/' + cryptoInfo.id)"
      >Info</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["data"],
  methods: {
    ...mapActions(["colorMode"]),
  },
};
</script>

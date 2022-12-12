<template>
  <div class="container"></div>
</template>

<script>
// importazione componente singola card

import SingleItem from "./components/SingleItem.vue";

// importazione del file degli array
import { store ,FetchMoviesData, FetchSeriesData } from "./store";
export default {
  // componente esterno card singola
  components: { SingleItem },
  data() {
    return {
      store,
    };
  },
  created() {
    FetchMoviesData();
    FetchSeriesData()
  },
};
</script>

<style scoped lang="scss"></style>

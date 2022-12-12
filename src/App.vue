<script>
// import Componente from './components/Componente';
import TheHeader from "./components/TheHeader.vue";

import TheMain from "./components/TheMain.vue";

// importo file esterno con i dati
import { store } from "./store";

export default {
  components: { TheHeader, TheMain },
  data() {
    return {
      store,
    };
  },
  methods: {
    SearchTitle(filtersEmitted) {
      this.store.Filters = filtersEmitted;
      FetchMoviesData();
      FetchSeriesData();

      console.log(filtersEmitted);
    },
  },
};
</script>

<template>
  <TheHeader @search="SearchTitle"></TheHeader>
  <TheMain></TheMain>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>

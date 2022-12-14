<template>
  <nav>
    <div class="container">
      <div class="contentNav">
        <!-- logo -->
        <div class="logoSide">
          <img src="../../public/logo.jpg" alt="" />
        </div>
        <!-- barra di ricerca -->
        <div class="searchSide">
          <!-- in questo componente vado a richiamare l'evento PERMORMSEARCH il quale utilizza la funzione SEARCHTITLE -->
          <TheSearchBar @performSearch="SearchTitle"></TheSearchBar>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// importo componente
import TheSearchBar from "./TheSearchBar.vue";
// importo lo store e le funzioni che devo utilizzare
import { store, FetchMoviesData, FetchSeriesData } from "../store";
export default {
  // componente esterno card
  components: { TheSearchBar },
  data() {
    return {
      store,
    };
  },
  methods: {
    // funzione per la ricerca attraverso il titolo che è un filtro dichiarato nel componete SEARCH
    // questa funzione utilizzerà come argomenti i dati passati nell'emit del componente figlio
    SearchTitle(filtersEmitted) {
      this.store.Filters = filtersEmitted;
      FetchMoviesData();
      FetchSeriesData();
      // assegno true alla varibaile cosi da mostrare Movies and Series (titoli)
      this.store.generateItems = true;
      // se il campo è vuoto non mostrare i titoli
      if (filtersEmitted === "") {
        this.store.generateItems = false;
      }

      console.log(filtersEmitted);
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  background-color: black;
  color: white;

  .contentNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logoSide {
    img {
      height: 100px;
      aspect-ratio: 16/9;
    }
  }

  .searchSide {
    padding: 10px;
  }
}
</style>

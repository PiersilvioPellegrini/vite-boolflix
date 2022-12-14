<template>
  <div class="container">
    <div class="Movies">
      <div class="row">
        <!-- MOVIE -->
        <!-- mostra il titolo solo quando sono state generati gli items -->
        <h2 v-if="store.generateItems">Movies</h2>
        <div v-for="Item in store.movies" class="col-3">
          <SingleItem :Item="Item"></SingleItem>
        </div>
      </div>
    </div>
    <div class="Series">
      <div class="row">
        <!-- SERIES -->
        <h2 v-if="store.generateItems">Series</h2>
        <div v-for="Item in store.series" class="col-3">
          <SingleItem :Item="Item"></SingleItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// importazione componente singola card

import SingleItem from "./SingleItem.vue";

// importazione del file degli array
import { store } from "../store";
export default {
  // componente esterno card singola
  components: { SingleItem },
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 30px;

  h2{
    display:flex;
    justify-content:center;
    padding: 40px 0px;
    color: white;
  }

  .row {
    row-gap: 20px;
  }
}
</style>

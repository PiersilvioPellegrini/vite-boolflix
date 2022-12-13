<template>
  <div class="container">
    <div v-for="Item in store.movies" class="col-3">
    
    <SingleItem :Item = Item></SingleItem>
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

.container{
  margin-top: 30px;
  
  .cards{
    display: flex;
    flex-wrap: wrap;
  }
}


</style>

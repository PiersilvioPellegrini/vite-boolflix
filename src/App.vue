<script>
// import Componente from './components/Componente';
import TheHeader from './components/TheHeader.vue';
import TheSelect from './components/TheSelect.vue';
import TheMain from './components/TheMain.vue';

// importo file esterno con i dati
import { FunzionePerApi, store } from "./store";

export default {
  components: { TheHeader,TheSelect,TheMain },
  data () {
    return {
      
      store
    };
  },
  methods: {
    // Search (filtersEmitted) {
    //   this.store.Filters = filtersEmitted;
    //   fetchCharacters();

    //   console.log(filtersEmitted);
    // }
  },
  }


</script>

<template>

</template>

<style lang="scss">

@use "./styles/general.scss";

</style>
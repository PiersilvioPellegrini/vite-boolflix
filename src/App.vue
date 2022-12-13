<script>
// import Componente from './components/Componente';
import TheNavBar from "./components/TheNavBar.vue"
import TheMain from "./components/TheMain.vue";

// importo file esterno con i dati
import { store} from "./store";

export default {
  components: { TheMain, TheNavBar },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <TheNavBar></TheNavBar>
  
  <TheMain></TheMain>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>

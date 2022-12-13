<template>
  
      <nav>
        <div class="container">
            <div class="contentNav">
                <div class="logoSide">
                    <img src="../../public/logo.jpg" alt="">
                </div>
                <div class="searchSide">
                    <TheSearchBar @performSearch="SearchTitle"></TheSearchBar>
                </div>
            </div>

        </div>
        

    </nav>

</template>

<script>
import TheSearchBar from "./TheSearchBar.vue";
import { store, FetchMoviesData ,FetchSeriesData  } from "../store";
export default {
      // componente esterno card 
  components: { TheSearchBar },
  data() {
    return {
      store
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

<style scoped lang="scss">

nav{
    background-color: black;
    color: white;

    .contentNav{
        display:flex;
        align-items: center;
        justify-content: space-between;
    }

    .logoSide{

        img{
            height: 100px;
            aspect-ratio: 16/9;   
        }
    }

    .searchSide{
        padding: 10px;
    }
}



</style>

<template>
    <!-- cambio il comportamneto di default del submit invocando la funzione al click del bottone  -->
    <form @submit.prevent="SearchClick">
      <div class="row">
            <!-- collego il testo inserito per assegnarlo al filtro TITLE -->
            <input
              type="text"
              class="form-control"
              name="Titolo"
              placeholder="Inserisci il titolo"
              
              v-model="filters.Title"
            />
          <div>
            <button class="btn">
              <i class="fas fa-search"></i>
            </button>
          </div>
          
        
      </div>
    </form>
  
</template>

<script>
export default {
  data() {
    return {
      // filtri
      filters: {
        Title: "",
      },
    };
  },
  methods: {
    // creo un collegamneto con il padre(in cui andrò ad utilizzare il componente)
    SearchClick() {
      // nome:performSearch
      // argomento funzione:filtri
      this.$emit("performSearch", { ...this.filters });
      
    },
  },
};
</script>

<style scoped lang="scss">
.row{
  flex-wrap: nowrap;
  align-items: center;
  
  .form-control{
    width: 200px;
  }

  button{
    background-color: red;
    color: white;
    border: 0px;
  }
 
}
</style>

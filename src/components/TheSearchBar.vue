<template>
  
    <form @submit.prevent="SearchClick">
      <div class="row">
          
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
      filters: {
        Title: "",
      },
    };
  },
  methods: {
    SearchClick() {
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

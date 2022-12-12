<template>
  <div class="container">
    <form action="" class="mb-4" @submit.prevent="SearchClick">
      <div class="row">
        <div class="col-sm-4">
          <div class="mb-3">
            <label>Nome</label>
            <input
              type="text"
              class="form-control"
              name="Titolo"
              placeholder="Inserisci il titolo del film o della serieTV"
              v-model="filters.Title"
            />
          </div>
        </div>

        <div class="d-flex gap-3 justify-content-center">
          <button class="btn btn-info">Cerca</button>
        </div>
      </div>
    </form>
  </div>
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

<style scoped lang="scss"></style>

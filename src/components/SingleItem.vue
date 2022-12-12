<template>
    <ul>
        <li>{{Item.title}}</li>
    </ul>
</template>
<script>
export default {
    name: "SingleItem",
    props: {
      /**
       * Oggetto che rappresenta un singolo elemento
       *
       * @property {number} id
       * @property {string} Title
       * @property {string} Original_Title
       * @property {string} Original_Language
       * @property {number} Vote_Average
       * 
       */
      Item: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {};
    },
    
  };
  </script>
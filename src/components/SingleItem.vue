<template>
    
    <img :src="CreateUrlImageItem" alt="">
    <ul> 
        <li>{{Item.title}}</li>
        <li>{{Item.id}}</li>
        <li>{{Item.original_title}}</li>
        <li>{{Item.vote_average}}</li>
        <li>{{Item.original_language}}</li>
        
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
      return {
        sizeImageItem:"w342",
        rootUrl: "https://image.tmdb.org/t/p/",
        
      };

    },
    computed:{
      CreateUrlImageItem(){
        return `${this.rootUrl}${this.sizeImageItem}${this.Item.poster_path}`
      }
    }
    
  };
  </script>
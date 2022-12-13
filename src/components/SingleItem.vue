<template>
    <div class="card">
      <img :src="CreateUrlImageItem" alt="">
      <div class="infoItem">
         <ul> 
            <li><h2>
              <!-- <template v-if="store.title = false"> -->
                
                  <!-- {{Item.name}} -->
                
              <!-- </template>
              <template v-else> -->
               
                  {{Item.title}}
               
                
              <!-- </template> -->
             
              
            </h2></li>
            <li>{{Item.overview}}</li>
            <!-- <li>{{Item.original_title}}</li> -->
            <!-- <li>{{Item.vote_average}}</li> -->
            <!-- <li>{{Item.original_language}}</li> -->
            
        </ul>
      </div>
    </div>
</template>
<script>
import { store } from "../store";
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

  <style scoped  lang="scss">

  .card{
    border: 0px;
    position: relative;
    overflow: hidden;
    &:hover{
      border: 5px solid white;
      // opacity: 30%;
    }

    
    ul{
      list-style: none;
      padding-left: 5px;
    }

    img{
      object-fit: cover;
      display:block;
      
    }

    .infoItem{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: white;
      // display: none;
      overflow-y: hidden;

      &:hover{
      z-index: 2;
      overflow-y: auto;
      background-color: black;
      color: white;
      // display: block;

      img{
        opacity: 50%;
      }
      }
    }
  }

</style>
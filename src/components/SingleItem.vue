<template>
  <div class="card">
    <!-- se l'immagine è presnete la mostra  -->
    <img v-if="Item.poster_path" :src="CreateUrlImageItem" alt="" />
    <!-- altrimenti ne mostro una mia standard -->
    <img  v-else src="../../public/mine.jpg" alt="">

    <!-- info del film in :hover -->
    <div class="infoItem">
      <ul>
        <li>
          <h2 class="pt-2">
            <!-- se il valore è presente o ha un valore inserisce Title, altrimenti inserisci Name -->
            <template v-if="!Item.title">{{ Item.name }}</template>
            <template v-else> {{ Item.title }}</template>
          </h2>
        </li>
        <!-- se il ha la descrizione la inserisce -->
        <li v-if="Item.overview">{{ Item.overview }}</li>
        <!-- altimenti mostra testo mio -->
        <li v-else>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus aliquid vero officia rerum, facilis fugiat illo impedit? Fuga, voluptatibus. Error, aut! Mollitia hic magni eveniet, quo veniam molestiae dolorem!</li>
        
        
      </ul>
      <!-- bandierina -->
      <div class="bandiera mb-3">
        LANGUAGE:
        <img class="ps-2" :src="CreatedUrlBandiera" alt="" />
      </div>
      <!-- stelline -->
      <div class="Vote ps-2">
        RATING:
        <!-- cicla sulla funzione CREATESTARS -->
        <!-- la I rappresnta il numero di stelline da creare  -->
        <i class="fa-solid fa-star ps-1" v-for="i in createStars"></i>
        
      </div>
    </div>
  </div>
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
      // immagine copertina
      sizeImageItem: "w342",
      rootUrl: "https://image.tmdb.org/t/p/",


      // bandierine
      rootBandiera: "https://flagcdn.com/",
      sizeBandiera: "20x15/",
      finalBandiera: ".png",

    };
  },
  computed: {
    // funzione che crea l'immagine della copertina 
    CreateUrlImageItem() {
      return `${this.rootUrl}${this.sizeImageItem}${this.Item.poster_path}`;
    },

    // funzione che crea la bandiera in pase alla lingua del film
    CreatedUrlBandiera() {
      // cambio i valori di alcune lingue per fare visualizzare corretamente le bandiere
      if(this.Item.original_language === "en"){
        this.Item.original_language = "gb"
        return `${this.rootBandiera}${this.sizeBandiera}${this.Item.original_language}${this.finalBandiera}`;
      }else if(this.Item.original_language === "ja"){
        this.Item.original_language = "jp"
        return `${this.rootBandiera}${this.sizeBandiera}${this.Item.original_language}${this.finalBandiera}`;
      }else if(this.Item.original_language === "da"){
        this.Item.original_language = "dk"
        return `${this.rootBandiera}${this.sizeBandiera}${this.Item.original_language}${this.finalBandiera}`;
      }
      else if(this.Item.original_language === "ko"){
        this.Item.original_language = "xk"
        return `${this.rootBandiera}${this.sizeBandiera}${this.Item.original_language}${this.finalBandiera}`;
      }
      else if(this.Item.original_language === "zh"){
        this.Item.original_language = "ch"
        return `${this.rootBandiera}${this.sizeBandiera}${this.Item.original_language}${this.finalBandiera}`;
      }
      else if(this.Item.original_language === "ga"){
        this.Item.original_language = "gm"
        return `${this.rootBandiera}${this.sizeBandiera}${this.Item.original_language}${this.finalBandiera}`;
      }
      else{
        return `${this.rootBandiera}${this.sizeBandiera}${this.Item.original_language}${this.finalBandiera}`;
      }
      },

      // funzione che crea le stelline in base al rating del film 
      createStars(){
        let vote = this.Item.vote_average;
        vote = vote/2;
        return Math.ceil(vote);

      },
    
  },
};
</script>

<style scoped lang="scss">
.card {
  border: 0px;
  position: relative;
  overflow: hidden;
  &:hover {
    border: 5px solid white;

    .infoItem {
      z-index: 2;
    }

    .bandiera{
      display:flex;
      padding-left:10px;
      align-items: center;
    }
  }

  ul {
    list-style: none;
    padding-left: 5px;
  }

  img {
    object-fit: cover;
  }

  .infoItem {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: white;
    overflow-y: hidden;
    z-index: -1;

    &:hover {
      overflow-y: auto;
      background-color: rgb(69, 66, 66);
      color: white;
    }
  }
}
</style>

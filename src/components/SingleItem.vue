<template>
  <div class="card">
    <img v-if="Item.poster_path" :src="CreateUrlImageItem" alt="" />
    <img  v-else src="../../public/mine.jpg" alt="">
    <div class="infoItem">
      <ul>
        <li>
          <h2>
            <template v-if="!Item.title">{{ Item.name }}</template>
            <template v-else> {{ Item.title }}</template>
          </h2>
        </li>
        <li v-if="Item.overview">{{ Item.overview }}</li>
        <li v-else>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus aliquid vero officia rerum, facilis fugiat illo impedit? Fuga, voluptatibus. Error, aut! Mollitia hic magni eveniet, quo veniam molestiae dolorem!</li>
        
        
      </ul>
      <div class="bandiera mb-3">
        LANGUAGE:
        <img class="ps-2" :src="CreatedUrlBandiera" alt="" />
      </div>
      <div class="Vote ps-2">
        RATING:
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
      sizeImageItem: "w342",
      rootUrl: "https://image.tmdb.org/t/p/",

      rootBandiera: "https://flagcdn.com/",
      sizeBandiera: "20x15/",
      finalBandiera: ".png",

    };
  },
  computed: {
    CreateUrlImageItem() {
      return `${this.rootUrl}${this.sizeImageItem}${this.Item.poster_path}`;
    },

    CreatedUrlBandiera() {
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

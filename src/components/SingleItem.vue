
<script>
export default {
    name: "SingleItem",
    props: {
      /**
       * Oggetto che rappresenta un singolo personaggio
       *
       * @property {number} id
       * @property {string} Title
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
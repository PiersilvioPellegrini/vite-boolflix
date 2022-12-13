import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  // array che contiene i dati delle card
  movies: {},
  series: {},
  Filters: {},
});

export function FetchMoviesData() {
    const rootUrl = "https://api.themoviedb.org/3";

  axios
    .get(rootUrl + "/search/movie", {
      // Query string nell'url finale
      params: {
        api_key: "c5ee24a319cbde73da0037547990581a",
        query: store.Filters.Title,

      }
    })
    // caso in cui la chiamata va a buon fine ed ottengo un codice 200
    .then((resp) => {
      console.log("then invocato");

      // Assegno il valore alla variabile del data charactersList
      store.movies = resp.data.results;
      

      console.log(store);
    })
    // Caso in cui c'è un error nella chiamata ed il codice è diverso da 200
    .catch((error) => {
      // error contiene un istanza di AxiosError dalla quale posso estrarre varie
      // informazioni sull'errore avvenuto
      console.log(error);

      // Codice HTTP dell'errore
      console.log("Codice errore: ", error.response.status);
    });
}

export function FetchSeriesData() {
    const rootUrl = "https://api.themoviedb.org/3";

  axios
    .get(rootUrl + "/search/tv", {
      // Query string nell'url finale
      params: {
        api_key: "c5ee24a319cbde73da0037547990581a",
        query: store.Filters.Title,

      }
    })
    // caso in cui la chiamata va a buon fine ed ottengo un codice 200
    .then((resp) => {
      console.log("then invocato");

      // Assegno il valore alla variabile del data charactersList
      store.series = resp.data.results;
      

      console.log(store);
    })
    // Caso in cui c'è un error nella chiamata ed il codice è diverso da 200
    .catch((error) => {
      // error contiene un istanza di AxiosError dalla quale posso estrarre varie
      // informazioni sull'errore avvenuto
      console.log(error);

      // Codice HTTP dell'errore
      console.log("Codice errore: ", error.response.status);
    });
}

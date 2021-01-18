import HomePage from "./components/layout/Movies.vue";
import AddMovie from "./components/layout/AddMovie.vue";
import NewArrivals from "./components/layout/NewArrivals.vue";
import Trending from "./components/layout/TrendingMovies.vue";
import Drama from "./components/movieGenres/Drama.vue";
import Thriller from "./components/movieGenres/Thriller.vue";
import Comedy from "./components/movieGenres/Comedy.vue";
import Adventure from "./components/movieGenres/Adventure.vue";
import Action from "./components/movieGenres/Action.vue";

const routes = {
  "/": Trending,
  "/trending": Trending,
  "/topRated": HomePage,
  "/newArrivals": NewArrivals,
  "/add": AddMovie,
  "/drama":Drama,
  "/thriller":Thriller,
  "/comedy":Comedy,
  "/action":Action,
  "/adventure":Adventure
};

export default {
  data() {
    return { current: window.location.pathname };
  },
  computed: {
    routedComponent() {
      return routes[this.current];
    }
  },
  render(createElement) {
    return createElement(this.routedComponent);
  }
};
<template>
<div class="row">
  <div class="column" v-for="movie in listOfDefaultMovies" :key=movie.id>
    <div class="movie zoom">
        <img :src="movie.posterurl" alt="Image">
        <h1>{{movie.name}}</h1>
        <h2>{{movie.genre}}</h2>
    </div>
  </div>
</div>
</template>

<style scoped>
.row {
 display: -ms-flexbox; 
  display: flex;
  -ms-flex-wrap: wrap; 
  flex-wrap: wrap;
}
.movie{
     padding:20px 20px;
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
     background: white;
    
}

.column {
  -ms-flex: 25%;
  flex: 25%;
  max-width: 25%;
  padding: 50px 50px;
  float:left;
  margin:0;
}

.column img {
  margin-top: 70px;
  vertical-align: middle;
  width: 100%;
  -moz-box-shadow: 0 0 15px rgb(73, 73, 73);
    -webkit-box-shadow: 0 0 15px rgb(73, 73, 73);
    box-shadow: 0 0 15px rgb(73, 73, 73);
    padding:0px;
    margin: 0%;
    height: 350px;
}
.zoom {
  transition: transform .2s;
  margin: 0 auto;
}

.zoom:hover {
  -ms-transform: scale(1.2); /* IE 9 */
  -webkit-transform: scale(1.2); /* Safari 3-8 */
  transform: scale(1.2); 
  cursor: pointer;
}
h1{
   text-align:left;
    vertical-align:top;
    font-size:25px;
    padding:0px;
    margin: 0%;
    text-transform:uppercase;
}
h2{
    text-transform:capitalize;
    margin: 0%;
    font-size:16px;
    color: rgb(77, 77, 77);
}


</style>

<script>

export default {
  data(){
       return{
         listOfDefaultMovies:[ {
    id: 2,
    name: 'The Witcher',
    genre: 'Action, Adventure, Fantasy',
    posterurl: 'https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg'
  },{
    id: 3,
    name: 'Fantasy island',
    genre: 'Action, Adventure, Fantasy',
    posterurl: 'https://www.mountaintimes.info/wp-content/uploads/2020/02/Movie-Diary-_-Fantasy-Island-690x1024.jpg'
  },{
    id: 4,
    name: 'Black panther',
    genre: 'Action, Adventure, Sci-Fi',
    posterurl: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg'
  },{
    id: 5,
    name: 'Replicas',
    genre: 'Drama, Sci-Fi, Thriller',
    posterurl: 'https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg'
  },{
    id: 6,
    name: 'Avengers',
    genre: 'Action, Adventure, Drama',
    posterurl: 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg?c=2'
  },{
    id: 7,
    name: 'Joker',
    genre: 'Crime, Drama, Thriller',
    posterurl: 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351179.jpg?c=2?imbypass=on'
  },{
    id: 8,
    name: 'Us',
    genre: 'Horror, Mystery, Thriller',
    posterurl: 'https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758'
  },{
    id: 9,
    name: 'aladdin',
    genre: 'Adventure, Family, Fantasy',
    posterurl: 'https://images-na.ssl-images-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg'
  }]  
       }
  },
    mounted() {
    
    localStorage.setItem("LIST_OF_DEFAULT_MOVIES", JSON.stringify(this.listOfDefaultMovies));
    var movies = JSON.parse(localStorage.getItem("LIST_OF_DEFAULT_MOVIES"));
    if (movies)
        console.log(movies);
}  
}


</script>
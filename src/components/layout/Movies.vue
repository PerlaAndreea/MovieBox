<template>
<div class="row">
  <div class="column">
    <div class="movie zoom">
            <img src="https://www.filmjabber.com/movie-poster-thumbs/free-guy-movie-poster-6492.jpg">
            <h1>Free Guy</h1>
            <h2>Action, Adventure, Comedy</h2>
       </div>
   <div class="movie zoom">
            <img src="https://img.moviepostershop.com/the-witcher-movie-poster-2020-1000779909.jpg">
            <h1>the witcher</h1>
            <h2>Action, Adventure, Fantasy</h2>
       </div>
    <div class="movie zoom">
            <img  src="https://www.mountaintimes.info/wp-content/uploads/2020/02/Movie-Diary-_-Fantasy-Island-690x1024.jpg">
            <h1>Fantasy island</h1>
            <h2>Action, Adventure, Fantasy</h2>
       </div>
  </div>
  <div class="column">
   <div class="movie zoom">
            <img  src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg">
            <h1>black panther</h1>
            <h2>Action, Adventure, Sci-Fi</h2>
       </div>
   <div class="movie zoom">
            <img  src="https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg">
            <h1>replicas</h1>
            <h2>Drama, Sci-Fi, Thriller</h2>
       </div>
    <div class="movie zoom">
            <img  src="https://images-na.ssl-images-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg">
            <h1>aladdin</h1>
            <h2>Adventure, Family, Fantasy</h2>
       </div>
  </div>
  <div class="column">
    <div class="movie zoom">
            <img  src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg?c=2">
            <h1>Avengers</h1>
            <h2>Action, Adventure, Drama</h2>
       </div>
    <div class="movie zoom">
            <img  src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351179.jpg?c=2?imbypass=on">
            <h1>Joker</h1>
            <h2>Crime, Drama, Thriller</h2>
       </div>
   <div class="movie zoom">
            <img  src="https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758">
          <h1>Us</h1>
            <h2>Horror, Mystery, Thriller</h2>
       </div>
  </div>
   <div class="column">
       <div class="movie zoom">
            <img  src="https://lumiere-a.akamaihd.net/v1/images/20cs_xmen_dark_phoenix_poster-keyart_2de4ace2.jpeg?region=0,0,1400,2100">
            <h1>x-men</h1>
            <h2>action</h2>
       </div>
    <div class="movie zoom">
            <img  src="https://lumiere-a.akamaihd.net/v1/images/20cs_xmen_dark_phoenix_poster-keyart_2de4ace2.jpeg?region=0,0,1400,2100">
            <h1>Us</h1>
            <h2>Horror, Mystery, Thriller</h2>
       </div>
    <div class="movie zoom">
            <img  src="https://lumiere-a.akamaihd.net/v1/images/20cs_xmen_dark_phoenix_poster-keyart_2de4ace2.jpeg?region=0,0,1400,2100">
            <h1>x-men</h1>
            <h2>action</h2>
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
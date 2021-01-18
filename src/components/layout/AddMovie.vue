<template>
   <div id="form" >
      <form action="/newArrivals">
         <h1>Add Movie:</h1>
      <div class="formcontainer">
            <hr/>
            <div class="container">
                <label for="moviename"><strong>Movie name</strong></label>
                <input type="text" v-model="movie.name" required>
                <label for="genre"><strong>Genre</strong></label>
                <input type="text" v-model="movie.genre" required>
                <label for="poster"><strong>Poster URL</strong></label>
                <input type="text" v-model="movie.posterurl" required>
            </div>
            <button type="submit" @click="addNewMovie">Add</button>
      </div >
    </form>  
   </div>  
</template>

<style scoped>
.body {
      display: flex;
      justify-content: center;
      font-family:Arial, sans-serif;
      font-size: 15px;
      }
      form {
      border: 5px solid #f1f1f1;
      }
      input[type=text] {
      width: 100%;
      padding: 16px 8px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
      }
      button {
      background-color: #2278B5;
      color: white;
      padding: 14px 0;
      margin-left: 25%;
      border: none;
      cursor: grabbing;
      width: 50%;
      font-size:20px;
      }
      h1 {
      text-align:center;
      font-size:18;
      }
      button:hover {
      opacity: 0.8;
      }
      .formcontainer {
      text-align: left;
      margin: 24px 50px 12px;
      }
      .container {
      padding: 16px 0;
      text-align:left;
      }
      span.psw {
      float: right;
      padding-top: 0;
      padding-right: 15px;
      }
      /* Change styles for span on extra small screens */
      @media screen and (max-width: 300px) {
      span.psw {
      display: block;
      float: none;
      }
      }

</style>


<script>
export default{
  name:"test",
  data(){
    return{
        listOfMovies: [],
        movie: {id:'default' ,name:'', genre:'', posterurl:''}

    }},
  mounted() {
    var movies = JSON.parse(localStorage.getItem("LIST_OF_MOVIES"));
    if (movies)
        this.listOfMovies = JSON.parse(localStorage.getItem("LIST_OF_MOVIES"));
    
  },
  methods: {
      addNewMovie() {
        let newMovie = {
            
           id:'default',
           name: this.movie.name,
           genre: this.movie.genre,
           posterurl:this.movie.posterurl
        };

        console.log("ListOFMovies:"+this.listOfMovies);
        this.listOfMovies.push(newMovie);
        localStorage.setItem("LIST_OF_MOVIES", JSON.stringify(this.listOfMovies));
      }   
}
}

</script>
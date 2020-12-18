<template>
<div class="row">
  <div class="column">
    <div class="movie zoom">
            <img src="https://lumiere-a.akamaihd.net/v1/images/20cs_xmen_dark_phoenix_poster-keyart_2de4ace2.jpeg?region=0,0,1400,2100">
            <h1>x-men</h1>
            <h2>action</h2>
       </div>
   <div class="movie zoom">
            <img src="https://lumiere-a.akamaihd.net/v1/images/20cs_xmen_dark_phoenix_poster-keyart_2de4ace2.jpeg?region=0,0,1400,2100">
            <h1>x-men</h1>
            <h2>action</h2>
       </div>
    <div class="movie zoom">
            <img  src="https://lumiere-a.akamaihd.net/v1/images/20cs_xmen_dark_phoenix_poster-keyart_2de4ace2.jpeg?region=0,0,1400,2100">
            <h1>x-men</h1>
            <h2>action</h2>
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
            <h1>x-men</h1>
            <h2>action</h2>
       </div>
    <div class="movie zoom">
            <img  src="https://lumiere-a.akamaihd.net/v1/images/20cs_xmen_dark_phoenix_poster-keyart_2de4ace2.jpeg?region=0,0,1400,2100">
            <h1>x-men</h1>
            <h2>action</h2>
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
            <h1>x-men</h1>
            <h2>action</h2>
       </div>
   <div class="movie zoom" onclick="location.href='/x-men';" style="cursor: pointer;">
            <img  src="https://lumiere-a.akamaihd.net/v1/images/20cs_xmen_dark_phoenix_poster-keyart_2de4ace2.jpeg?region=0,0,1400,2100">
            <h1>x-men</h1>
            <h2>action</h2>
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
            <h1>x-men</h1>
            <h2>action</h2>
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
}
.zoom {
  transition: transform .2s;
  margin: 0 auto;
}

.zoom:hover {
  -ms-transform: scale(1.2); /* IE 9 */
  -webkit-transform: scale(1.2); /* Safari 3-8 */
  transform: scale(1.2); 
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
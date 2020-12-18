<template>
    <div class="footer">
        <div class="container">
        
        <div class="top-left">the movie box</div>
        <div class="bottom-left">Designed by Railescu Perla</div>
        <div class="top-right">
          <a href="/about">About</a>
          <a href="/movies">Movies</a>
          <a href="/ratings">Ratings</a>
          <a href="/contact">Contact</a>
        </div>
        </div>
    </div>
</template>

<style scoped>
.footer{
    width:100%;
    height:200px;
    background-color:#333;
}

.container {
  position: relative;
  text-align: center;
  color: white;
  width: 100%;
  height: 100%;
  background-size:cover;
}
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
  font-size:15px;
  padding-bottom:20px ;
}
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
    text-transform:uppercase;
  font-weight: bolder;
  font-size: 30px;
  padding-top:20px ;
}
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
  overflow: hidden;
  
  margin: 0%;
}
.top-right a {
  float: left;
  font-size: 18px;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
 
}

</style>
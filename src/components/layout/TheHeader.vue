<template>
 <div class="header">
        <div class="container">
        <img src="https://www.enlivant.com/~/media/images/blog/blogpost_movies_header_1155x357.ashx">
        <div class="bottom-left">Watch movies now!</div>
        <div class="top-left">the movie box</div>
        <div class="top-right">
          <a href="/login">Log in</a>
          <a href="/signup">Sign up</a>
        </div>
        </div>
    </div>
</template>

<style scoped>

img{
  position: center;
  object-fit: cover;
  width: 100%;
  height: 400px;
}
.header{
  margin:0;
}
.container {
  position: relative;
  text-align: center;
  color: white;
  width: 100%;
  background-size:cover;
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

.top-right a:hover, .dropdown:hover .dropbtn {
  background-color: #333;
}


.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
  font-size: 50px;
}
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
   text-transform:uppercase;
  font-weight: bolder;
  font-size: 100px;
  -webkit-text-stroke: 3px rgb(78, 78, 78);
}
</style>
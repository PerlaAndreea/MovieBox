<template>
<div>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="navbar">
        <a href="/trending">Trending</a>
        <a href="/topRated">Top Rated</a>
        <a href="/newArrivals">New Arrivals</a>
        <div class="search-container">
            <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search">
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
        <div class="dropdown">
        <button class="dropbtn" onclick="myFunction()">Genre
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content" id="myDropdown">
            <a href="/drama">Drama</a>
            <a href="/action">Action</a>
            <a href="/horror">Horror</a>
            <a href="/comedy">Comedy</a>
        </div>
        
    </div> 
  </div>
</div>

</template>

<style scoped>
.navbar {
  overflow: hidden;
  background-color: #333;
  margin: 0%;
}

.navbar a {
  float: left;
  font-size: 18px;
  color: white;
  text-align: center;
  padding: 14px 40px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 18px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 30px;
  background-color: inherit;
  font-family: inherit;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: #2278B5;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #474747;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: white;
  padding: 12px 20px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #1b5a88;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.navbar .search-container {
  float:right;
}

.navbar input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.navbar .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.navbar .search-container button:hover {
  background: #ccc;
}

</style>
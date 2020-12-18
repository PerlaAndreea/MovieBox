<template>
<div>
   <the-header></the-header>
   <navigation></navigation>
   <movies></movies>
   <the-footer></the-footer>
   </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import Navigation from './components/layout/Navigation.vue';
import Movies from './components/layout/Movies.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
  components: {
    TheHeader,
    Navigation,
    Movies,
    TheFooter
  }  
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
  background-color: #F8F8F8;
}

body {
  margin: 0;
}
</style>

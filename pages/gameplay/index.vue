<template>
  <div class="fscreengame">
    <nuxt-link 
        to="/stage_finished"
        class="button--green">
        Back to Stage
        </nuxt-link>
  </div>
</template>
<style scoped>
.fscreengame{
  width: 100vw;
  height: 100vh;
  background-repeat:no-repeat;
  background-position-x:-75px;
  background-size:cover;
  background-image: url("../../assets/Game_bg.png") ;
}
</style>

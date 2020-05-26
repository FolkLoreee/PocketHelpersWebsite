<template>
  <div 
  class="fscreenstage">
  <div>
  <b-navbar 
  toggleable="lg" 
  type="light" 
  variant="warning"
  class="stagenav"
  >
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/memory" nuxt>
          <img
          class="navbtn"
          src="../../assets/Mem_btn.png">
        </b-nav-item>
        <b-nav-item to="/character" nuxt>
          <img
          class="navbtn"
          src="../../assets/Chara_btn.png">
        </b-nav-item>
        <b-nav-item to="/units" nuxt>
          <img
          class="navbtn"
          src="../../assets/Units_btn.png">
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
<b-button
  to="/gameplay" nuxt
  class="stageBtn">
  Stage 1
</b-button>
</div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.fscreenstage{
  width: 100vw;
  height: 100vh;
  background-repeat:no-repeat;
  background-size:cover;
  background-image: url("../../assets/Stage_bg.png");
}
.stagenav{
  position:fixed;
  bottom:0;
}

.stageBtn{
  position: absolute;
  color:lightpink;
  bottom:37.5vh;
  left:26vw;
  width: 9vw;
  height: 5vh;
}
.navbtn{
  width:7.5vw;
  height:7.5vh;
}
</style>
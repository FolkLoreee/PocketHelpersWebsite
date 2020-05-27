<template>
  <div>
    <div class="fscreenlog">
      <b-button
        class="startbtn"
        variant="outline-primary"
        @click="$bvToast.show('login-toast')"
      >Start Game</b-button>

      <b-toast id="login-toast" title="Sign in with Google" static no-auto-hide>
        Choose an account to continue
        <br />
        <b-button :pressed.sync="myToggle" variant="primary">
          <b-avatar variant="primary" text="SL"></b-avatar>
        </b-button>

        <p>Spark A Life</p>
        <br />
        <b-button variant="outline-primary" to="/stage">Next</b-button>
      </b-toast>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data(){
    return{
      myToggle: false,
      bg_src : { backgroundImage: "url(../../assets/Login_bg.png)" }
    };
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
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
</style>
<style scoped>
.fscreenlog {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position-x: -75px;
  background-size: cover;
  background-image: url("../assets/Login_bg.png");
}

.startbtn {
  position: absolute;
  bottom: 25vh;
  left: 42.5vw;
  width: 7.75vw;
  height: 10vh;
}
</style>
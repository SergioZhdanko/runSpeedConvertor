<template>
  <div id="app">
    <header :class="[$style.header]">
      Run Speed Convertor
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/404">404</router-link>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    //this.$router.push({ name: "about" }); // теперь после перезагрузки страницы всегда будет открываться страница about
    console.log(this.$router);
  },
};
</script>

<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  color: red;
}
</style>

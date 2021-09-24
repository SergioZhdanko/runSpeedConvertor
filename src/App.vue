<template>
  <div id="app">
    <ResultInputForm />
    <ResultList :items="resultList" />
  </div>
</template>

<script>
import ResultList from "./components/ResultList.vue";
import ResultInputForm from "./components/ResultInputForm.vue";

export default {
  name: "App",
  components: {
    ResultList,
    ResultInputForm,
  },

  data() {
    return {
      resultList: [
        {
          distance: 1000,
          speedOneKmPerMinute: 5.05,
        },
        {
          distance: 1000,
          speedOneKmPerMinute: 5.37,
        },
        {
          distance: 1000,
          speedOneKmPerMinute: 6.14,
        },
        {
          distance: 1000,
          speedOneKmPerMinute: 6.1,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

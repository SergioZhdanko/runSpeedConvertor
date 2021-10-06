<template>
  <div id="app">
    <header :class="[$style.header]">Run Speed Convertor</header>
    <AddNewRecordButton @clicked="isDisplay = !isDisplay" />
    <ResultInputForm v-if="isDisplay" />
    <ResultList />
  </div>
</template>

<script>
import ResultList from "./components/ResultList.vue";
import ResultInputForm from "./components/ResultInputForm.vue";
import AddNewRecordButton from "./components/AddNewRecordButton.vue";

export default {
  name: "App",
  components: {
    ResultList,
    ResultInputForm,
    AddNewRecordButton,
  },

  data() {
    return {
      isDisplay: false,
    };
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

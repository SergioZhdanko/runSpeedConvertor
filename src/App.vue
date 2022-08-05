<template>
  <div id="app">
    <header :class="[$style.header]">Run Speed Convertor</header>
    <AddNewRecordButton @clicked="isDisplay = !isDisplay" />
    <ResultInputForm @add="recordNewData" v-if="isDisplay" />
    <ResultList :items="resultList" @dblclicked="removeItem" />
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
      resultList: [],
    };
  },

  methods: {
    recordNewData(data) {
      this.resultList.push(data);
    },
    removeItem(i) {
      this.resultList.splice(i, 1);
    },
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

<template>
  <div id="app">
    <header :class="[$style.header]">
      Run Speed Convertor
      <a href="#dashboard">Dashboard</a>
      <a href="#about">About</a>
      <a href="#404">404</a>
    </header>
    <main>
      <PageDashBoard v-if="page === 'dashboard'" />
      <PageAbout v-if="page === 'about'" />
      <Page404 v-if="page === '404'" />
      <!-- <AddNewRecordButton @clicked="isDisplay = !isDisplay" />
      <ResultInputForm v-if="isDisplay" />
      <ResultList /> -->
    </main>
  </div>
</template>

<script>
// import ResultList from "./components/ResultList.vue";
// import ResultInputForm from "./components/ResultInputForm.vue";
// import AddNewRecordButton from "./components/AddNewRecordButton.vue";
import PageDashBoard from "./page/PageDashBoard.vue";
import PageAbout from "./page/PageAbout.vue";
import Page404 from "./page/Page404.vue";

export default {
  name: "App",
  components: {
    PageDashBoard,
    PageAbout,
    Page404,
  },

  data() {
    return {
      isDisplay: false,
      page: "dashboard",
    };
  },
  methods: {
    setPage() {
      this.page = location.hash.slice(1); //нужно для того, чтобы при перезагрузке страницы F5 мы осталавилсь на нашей странице и не рпеходили на dashboard по умолочанию
    },
  },
  mounted() {
    //реализация маршрутизации через hash
    //=======================================
    this.setPage();
    window.addEventListener("hashchange", () => {
      // объявлем слушатель события окна и вешаем на него событие hashchange
      this.page = location.hash.slice(1);
      /* меняем страницу нашего инстанса используя глобальную переменную location у которой есть св-во hash slice используем,
      чтобы избавиться от символа # с которого начинается строка с именем страницы*/
      this.setPage();
    });
  },
  //=======================================
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

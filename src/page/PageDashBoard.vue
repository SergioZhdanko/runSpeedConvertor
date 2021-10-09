<template>
  <div>
    <AddNewRecordButton @clicked="isDisplay = !isDisplay" />
    <ResultInputForm v-if="isDisplay" />
    <ResultList />
  </div>
</template>

<script>
import ResultList from "../components/ResultList.vue";
import ResultInputForm from "../components/ResultInputForm.vue";
import AddNewRecordButton from "../components/AddNewRecordButton.vue";
export default {
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

<style>
</style>
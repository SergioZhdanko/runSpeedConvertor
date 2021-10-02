<template>
  <div class="input-form">
    <input
      class="input-field"
      placeholder="Enter distance"
      v-model.number="distance"
    />
    <input
      class="input-field"
      placeholder="Enter minutes and seconds for kilometer"
      v-model.number="speedOneKmPerMinute"
    />
    <button class="show-btn" @click="save">Add record</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: {},
  data() {
    return {};
  },

  methods: {
    ...mapMutations(["setResultListData"]),
    save() {
      const { distance, speedOneKmPerMinute } = this;
      this.setResultListData([
        ...this.resultList,
        { distance, speedOneKmPerMinute },
      ]);
    },
  },
  computed: {
    ...mapState({
      resultList: (state) => state.resultList,
    }),
  },
};
</script>

<style>
.input-form {
  display: flex;
  flex-direction: column;
}
.input-field {
  width: 35%;
  font-size: 14px;
  line-height: 26px;
  margin-top: 12px;
}
.show-btn {
  font-size: 14px;
  width: 35%;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #f1f4f7;
  background: #10945d;
  border: solid 1px;
  padding: 12px 20px;
  text-decoration: none;
  display: inline-block;
  margin-top: 12px;
  -webkit-transition: background-color 1s;
  transition: background-color 1s;
  border-radius: 5px 5px 5px 5px;
}

.show-btn:hover {
  background-color: #f1f4f7;
  color: #10945d;
  border: solid 1px #f1f4f7;
}
</style>
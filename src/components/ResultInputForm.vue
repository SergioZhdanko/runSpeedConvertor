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
    <button
      class="show-btn"
      :disabled="!distance || !speedOneKmPerMinute"
      @click="save"
    >
      Add record
    </button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },

  data() {
    return {
      distance: "",
      speedOneKmPerMinute: "",
      uniqueId: "",
    };
  },

  methods: {
    save() {
      this.uniqueId = Math.random();
      const id = this.uniqueId;
      const { distance, speedOneKmPerMinute } = this;
      this.$emit("add", { distance, speedOneKmPerMinute, id });
    },
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
  cursor: pointer;
}

.show-btn:active,
.show-btn:hover {
  background-color: #f1f4f7;
  color: #10945d;
  border: solid 1px #f1f4f7;
  transition: none;
}
.show-btn:disabled {
  background: #10945d;
  cursor: default;
  color: #f1f4f7;
}
</style>
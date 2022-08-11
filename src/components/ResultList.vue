<template>
  <table>
    <!-- Элемент <th> создаёт заголовок столбца — специальную ячейку, текст в которой выделяется полужирным.  -->
    <tr>
      <th>#</th>
      <th>ID</th>
      <th>Distance</th>
      <th>Minutes for distance</th>
      <th>Speed Km/h</th>
      <th>Average temp</th>
    </tr>

    <!-- Элемент <td> создаёт ячейки таблицы, внутрь которых помещаются данные таблицы.  -->
    <tr v-for="(item, index) in items" :key="item.id">
      <td>{{ index + 1 }}</td>
      <td @dblclick="dblclicked(item.id)">{{ item.id }}</td>
      <td>{{ item.distance }}</td>
      <td>{{ item.speedOneKmPerMinute }}</td>
      <td>{{ convertToKmHour(item.distance, item.speedOneKmPerMinute) }}</td>
    </tr>
    <tr>
      <td>Summary trainig data</td>
      <td>*****</td>
      <td>{{ sumOfDistance }}</td>
      <td>{{ sumOfTime }}</td>
      <td>{{ convertToKmHour(sumOfDistance, sumOfTime) }}</td>
      <td>{{ convertToMinPerKm(sumOfDistance, sumOfTime) }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },

  methods: {
    convertToKmHour(dist, time) {
      let min = parseInt(time);
      let sec = time - min;
      min *= 60;
      sec *= 100;
      let allTime = (min + sec) / 3600;
      let distKm = dist / 1000;
      return (distKm / allTime).toFixed(2);
    },
    convertToMinPerKm(dist, time) {
      let distInKm = dist / 1000;
      let min = parseInt(time);
      let sec = time - min;
      min *= 60;
      sec *= 100;
      let allTime = min + sec;
      let timePerOneKm = Math.round(allTime / distInKm);
      let avgMin = parseInt(timePerOneKm / 60);
      let avgSec = timePerOneKm - avgMin * 60;
      console.log(avgSec);
      if (avgSec >= 10) {
        return `${avgMin}.${avgSec}`;
      } else {
        return `${avgMin}.0${avgSec}`;
      }
    },
    dblclicked(id) {
      // this.resultList.splice(i, 1);
      // console.log(this.resultList);
      // const { index } = this;
      this.$emit("dblclicked", id);
    },
  },
  computed: {
    sumOfDistance() {
      const { items } = this;

      return items.reduce((sum, cur) => sum + cur.distance, 0);
    },
    sumOfTime() {
      const { items } = this;
      let allMin = items.map((item) => parseInt(item.speedOneKmPerMinute));
      let allSec = items.map((item) => (item.speedOneKmPerMinute * 100) % 100);
      let sumOfMin = allMin.reduce((sum, cur) => sum + cur, 0);
      let sumOfSec = allSec.reduce((sum, cur) => sum + cur, 0);
      sumOfMin = sumOfMin + (sumOfSec - (sumOfSec % 60)) / 60;
      sumOfSec = sumOfSec % 60;
      return sumOfMin + sumOfSec / 100;
    },
  },
};
</script>

<style>
table {
  /*border: 1px solid grey;*/
  border-collapse: collapse;
  width: 50%;
  text-align: center;
  /*background: lightgrey;*/
}

/* границы ячеек первого ряда таблицы */
th {
  border: 1px solid grey;
}
/* границы ячеек тела таблицы */
td {
  border: 1px solid grey;
}
</style>
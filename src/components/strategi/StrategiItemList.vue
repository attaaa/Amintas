<template>
  <div style="padding: 16px;">
    <div v-for="(strategiGroup, index) in groupStrategiDataList" :key="index">
      <span class="text__title-3 block" style="margin-bottom: 24px">
        {{ formatGroupDate(strategiGroup.dateGroup) }}
      </span>
      <StrategiItem
        v-for="(strategiData, index2) in strategiGroup.strategiGroupList"
        :key="index2"
        :strategi-data="strategiData"
        @click.native="goToDetail(strategiData.id)"
        style="margin-bottom: 32px;"
      />
    </div>
  </div>
</template>

<script>
import StrategiItem from "./StrategiItem";

export default {
  name: "StrategiItemList",
  components: { StrategiItem },
  data() {
    return {
      groupStrategiDataList: []
    };
  },
  computed: {
    strategiDataList() {
      return this.$store.state.strategi.strategiHistory;
    }
  },
  watch: {
    strategiDataList() {
      this.groupDataByDate();
    }
  },
  mounted() {
    this.groupDataByDate();
  },
  methods: {
    groupDataByDate() {
      let tempGroupStrategiDataList = [];
      let currStrategiDataList = [];
      let currDate = this.strategiDataList[0].created_at.split("-")[0];
      this.strategiDataList.forEach((strategiData, idx) => {
        if (currDate !== strategiData.created_at.split("-")[0]) {
          tempGroupStrategiDataList.push({
            dateGroup: currDate,
            strategiGroupList: currStrategiDataList
          });
          currDate = strategiData.created_at.split("-")[0];
          currStrategiDataList = [];
        }

        currStrategiDataList.push({ ...strategiData, id: idx });

        if (idx === this.strategiDataList.length - 1) {
          tempGroupStrategiDataList.push({
            dateGroup: currDate,
            strategiGroupList: [...currStrategiDataList.reverse()]
          });
        }
      });
      this.groupStrategiDataList = tempGroupStrategiDataList;
    },

    goToDetail(strategiId) {
      this.$router.push("/strategi/history/" + strategiId);
    },

    formatGroupDate(date) {
      const monthList = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
      ];

      const dateObj = new Date(date);
      return `${monthList[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
    }
  }
};
</script>

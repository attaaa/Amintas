<template>
  <div>
    <div v-for="(journalGroup, index) in groupJournalDataList" :key="index">
      <span class="text__title-3 block" style="margin-bottom: 24px">
        {{ journalGroup.dateGroup }}
      </span>
      <JournalPreviewItem
        v-for="(journalData, index2) in journalGroup.journalGroupList"
        :key="index2"
        :journal-data="journalData"
        @click.native="goToDetail(journalData.id)"
        style="margin-bottom: 32px;"
      />
    </div>
  </div>
</template>

<script>
import JournalPreviewItem from "./JournalPreviewItem";

export default {
  name: "JournalPreviewItemList",
  components: { JournalPreviewItem },
  data() {
    return {
      groupJournalDataList: []
    };
  },
  mounted() {
    this.groupDataByDate();
  },
  methods: {
    groupDataByDate() {
      let tempGroupJournalDataList = [];
      let currJournalDataList = [];
      let currDate = this.journalDataList[0].created_at.split("-")[0];
      this.journalDataList.forEach((journalData, idx) => {
        if (currDate !== journalData.created_at.split("-")[0]) {
          tempGroupJournalDataList.push({
            dateGroup: currDate,
            journalGroupList: currJournalDataList
          });
          currDate = journalData.created_at.split("-")[0];
          currJournalDataList = [];
        }

        currJournalDataList.push(journalData);

        if (idx === this.journalDataList.length - 1) {
          tempGroupJournalDataList.push({
            dateGroup: currDate,
            journalGroupList: currJournalDataList
          });
        }
      });
      this.groupJournalDataList = tempGroupJournalDataList;
    },
    goToDetail(journalId) {
      this.$router.push("journal/detail/" + journalId);
    }
  },
  computed: {
    journalDataList() {
      return this.$store.state.journal.journalDataList;
    }
  }
};
</script>

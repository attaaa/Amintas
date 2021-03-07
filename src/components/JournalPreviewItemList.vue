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
        style="margin-bottom: 32px;"
      />
    </div>
  </div>
</template>

<script>
import JournalPreviewItem from "./JournalPreviewItem";

const exampleJournalDataList = [
  {
    id: "1",
    moodTitle: "Sangat Buruk",
    dateCreated: "Sabtu, 31 Okt 2020",
    timeCreated: "21:06",
    labelMoodList: ["Marah", "Kecewa", "Malu", "Gugup"],
    journalTitle: "Manusia Menyebalkan",
    journalContent:
      "Selayaknya manusia, kita seringkali kesulitan mengungkapkan dengan tep..."
  },
  {
    id: "2",
    moodTitle: "2 Sangat Buruk",
    dateCreated: "Sabtu, 31 Okt 2020",
    timeCreated: "21:06",
    labelMoodList: ["Marah", "Kecewa", "Gugup", "Kecewa"],
    journalTitle: "2 Manusia Menyebalkan",
    journalContent:
      "Selayaknya manusia, kita seringkali kesulitan mengungkapkan dengan tep..."
  }
];

export default {
  name: "JournalPreviewItemList",
  components: { JournalPreviewItem },
  data() {
    return {
      journalDataList: exampleJournalDataList,
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
      let currDate = this.journalDataList[0].dateCreated;
      this.journalDataList.forEach((journalData, idx) => {
        console.log(currDate);
        console.log(journalData.dateCreated);
        if (currDate !== journalData.dateCreated) {
          tempGroupJournalDataList.push({
            dateGroup: currDate,
            journalGroupList: currJournalDataList
          });
          currDate = journalData.dateCreated;
          currJournalDataList = [];
        } else {
          currJournalDataList.push(journalData);
        }

        if (idx === this.journalDataList.length - 1) {
          tempGroupJournalDataList.push({
            dateGroup: currDate,
            journalGroupList: currJournalDataList
          });
        }
      });

      console.log(tempGroupJournalDataList);
      this.groupJournalDataList = tempGroupJournalDataList;
    }
  }
};
</script>

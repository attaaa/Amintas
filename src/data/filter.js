const todayDate = new Date();

const FILTER = {
  mood: [
    {
      id: "all",
      icon: "assets/icons/mood-base/semua-mood.svg",
      name: "Semua Mood"
    },
    {
      id: "sangat baik",
      icon: "assets/icons/mood-base/sangat-baik.svg",
      name: "Sangat Baik"
    },
    {
      id: "baik",
      icon: "assets/icons/mood-base/baik.svg",
      name: "Baik"
    },
    {
      id: "netral",
      icon: "assets/icons/mood-base/netral.svg",
      name: "Netral"
    },
    {
      id: "buruk",
      icon: "assets/icons/mood-base/buruk.svg",
      name: "Buruk"
    },
    {
      id: "sangat buruk",
      icon: "assets/icons/mood-base/sangat-buruk.svg",
      name: "Sangat Buruk"
    }
  ],
  date: [
    {
      id: 0,
      value: 0,
      name: "Semua Tanggal Jurnal",
      dateRange: null
    },
    {
      id: 1,
      value: new Date(new Date().setDate(todayDate.getDate() - 30)),
      name: "30 Hari Terakhir",
      dateRange: {
        from: new Date(),
        to: new Date(new Date().setDate(todayDate.getDate() - 30))
      }
    },
    {
      id: 2,
      value: new Date(new Date().setDate(todayDate.getDate() - 90)),
      name: "90 Hari Terakhir",
      dateRange: {
        from: new Date(),
        to: new Date(new Date().setDate(todayDate.getDate() - 90))
      }
    },
    {
      id: 3,
      value: 1,
      name: "Atur Tanggal Sendiri",
      dateRange: {
        from: null,
        to: null
      }
    }
  ]
};

const CUSTOM_DATE = {
  year: [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022"
  ],
  month: [
    "January",
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
  ],
  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des"
  ]
};

export { CUSTOM_DATE, FILTER };

import { date } from "quasar";

export function generateTimeStamp() {
  const currDate = Date.now();
  let formattedDate = date.formatDate(currDate, "dddd, DD MMM YYYY-HH:mm", {
    days: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Des"
    ]
  });
  return formattedDate;
}

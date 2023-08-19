export function formatDate(dateInput) {
  const customMonths = [
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
  ];

  const day = dateInput.getDate();
  const month = customMonths[dateInput.getMonth()];
  const year = dateInput.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
}

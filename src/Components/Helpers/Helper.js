export const generateYears = () => {
  let startYear;
  let currentYear = new Date().getFullYear(),
    years = [];
  startYear = startYear || 1970;
  while (startYear <= currentYear) {
    years.push(startYear++);
  }
  return years;
};
export const formatAuthors = (data) => {
  data.forEach((element) => {
    if (element.authors.length > 1) {
      element.displayedAuthors =
        element.authors[0].name + ' ' + element.authors[0].surname + '...';
    } else {
      element.displayedAuthors =
        element.authors[0].name + ' ' + element.authors[0].surname;
    }
  });

  return data;
};

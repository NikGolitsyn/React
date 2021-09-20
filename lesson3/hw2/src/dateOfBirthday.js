export default dateOfBirthday => {
  const date = new Date(dateOfBirthday);
  const Months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'Jule',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return `${date.getDate()} ${Months[date.getMonth()]} ${date.getFullYear().toString().slice(-2)}`;
};

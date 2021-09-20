export default dateOfBirthday => {
  const Months = ['Jan','Feb','Mar', 'Apr', 'May','June','Jule', 'Aug', 'Sep','Oct', 'Nov','Dec'];

  return `${dateOfBirthday.getDate()} ${Months[dateOfBirthday.getMonth()]} ${dateOfBirthday
    .getFullYear()
    .toString()
    .slice(-2)}`;
};

const CountryData = require('./models/country_data.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countryData = new CountryData();
  countryData.getData();

  // const selectElement = document.querySelector('select#countries');
  // const countryDropdown = new SelectView(selectElement);
  // countryDropdown.bindEvents();


});

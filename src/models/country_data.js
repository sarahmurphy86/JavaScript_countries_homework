const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const CountryData = function(){
};

// CountryData.prototype.bindEvents = function () {
//   PubSub.subscribe('SelectView:submit', (evt) => {
//     this.handleCountrySubmit(evt.detail);
//   })
// };

CountryData.prototype.getData = function () {

  const request = new Request('https://restcountries.eu/rest/v2/all');

  request.get((data) => {
    PubSub.publish('CountryData:country-loaded', data);
    console.log(data);
  });
};

// CountryData.prototype.handleCountrySubmit = function (country) {
//   this.getData(country);
// };

module.exports = CountryData;

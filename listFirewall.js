require('dotenv').config();
var request = require('request');

var VULTR_API_KEY = process.env.VULTR_API_KEY;
var FIREWALL_GROUP_ID = process.env.FIREWALL_GROUP_ID;

var options = {
  'method': 'GET',
  'url': `https://api.vultr.com/v2/firewalls/${FIREWALL_GROUP_ID}/rules`,
  'headers': {
    'Authorization': 'Bearer '+VULTR_API_KEY
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
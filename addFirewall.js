require('dotenv').config();
var request = require('request');

var VULTR_API_KEY = process.env.VULTR_API_KEY;
var FIREWALL_GROUP_ID = process.env.FIREWALL_GROUP_ID;

var options = {
    'method': 'POST',
    'url': `https://api.vultr.com/v2/firewalls/${FIREWALL_GROUP_ID}/rules`,
    'headers': {
        'Authorization': 'Bearer '+VULTR_API_KEY,
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        "ip_type": "v4", //v4 or v6
        "protocol" : "TCP", //ICMP , TCP , UDP , GRE , ESP , AH
        "port" : "80", //tcp or udp only
        "subnet" : "1.1.1.1", // ip here
        "subnet_size" : 32, //32 if 1 IP
        "source": ""
    })
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    //ID
    console.log(JSON.parse(response.body).firewall_rule.id);
});
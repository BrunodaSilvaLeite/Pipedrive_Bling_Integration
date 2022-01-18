const axios = require('axios');
const pipedrive_url = require('../url/pipedrive')

pipedriveApiToken = process.env.PIPEDRIVE_API_TOKEN;

class ListWonDealsController {
    async ListwonDeals() {
     
        const response = await axios.get(`${pipedrive_url}deals?status=won&start=0&api_token=${pipedriveApiToken}`);
 
        const { data } = response.data;
  
        return data;
    };

}
module.exports = new ListWonDealsController();
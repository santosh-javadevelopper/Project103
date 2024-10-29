import axios from 'axios';
const API_URL="http://localhost:8080"

class ResisterService{

    saveResister(Resister1)
    {
        console.log(Resister1);
       return axios.post(API_URL + '/Posting',Resister1)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error.response.data);
  });

    }

}
export default new ResisterService;
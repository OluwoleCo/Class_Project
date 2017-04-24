import axios from 'axios';

var baseUrl = 'http://localhost:3000';

var service = {
  get: function(url) {
    return axios.get(baseUrl + url)
    .then(function(response) {
      return response.data
    })
  }
}

export default service

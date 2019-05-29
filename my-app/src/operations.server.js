const axios = require('axios');

export function getOperations() {
    return axios.get('http://localhost:3001/operations')
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log(error);
      });
}

export function postOperation(type, amount) {
  const currentDate = new Date();
  let formatted_date = currentDate.getDate() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear()
    return axios({
        method: 'post',
        url: 'http://localhost:3001/operations',
        data: {
            amount: amount,
            date: formatted_date,
            type:type
        }
      }).then((response) => {
        return response.data
      });
}
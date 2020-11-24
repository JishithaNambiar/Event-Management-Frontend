const axios = require("axios"),



  getEvents1 = async () => {
    const response = await axios.get("http://localhost:7000/api/events");
    console.log(response);
     data = response.data;
 
  };

// export function getEvents() {
//     return getEvents1();
//   }

getEvents1();

getData = () => {
    return data;
}

module.exports.getEvents = getData();

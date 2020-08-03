//First XMLHttp Request
// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener("load", function () {
//   console.log("IT WORKED!!!");
//   const data = JSON.parse(this.responseText);
//   for (const planet of data.results) {
//     console.log(planet.name);
//   }
// });

// firstReq.addEventListener("error", () => {
//   console.log("ERROR!!!!!!");
// });

// firstReq.open("GET", "https://swapi.dev/api/planets/");
// firstReq.send();
// console.log("Request Sent!");
//
//
//
//
//

//HITTING SWAPI API WITH FETCH()
/*fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for (let planets of data.results) {
      console.log(planets.name);
    }
    const nextURL = data.next;
    return fetch(nextURL);
  })
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    //FETCHED NEXT PAGE OF PLANETS
    console.log("FETCHING NEXT 10 PLANETS");
    for (const planets of data.results) {
      console.log(planets.name);
    }
  })
  .catch((error) => {
    console.log("Something Went Wrong with Fetch!");
    console.log(error);
  });*/
//
//
//
//
//CLEANING UP THE SWAPI CODE ABOVE
/*const checkStatusAndParse = (response) => {
  if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
  return response.json();
};

const printPlanets = (data) => {
  for (let planets of data.results) {
    console.log(planets.name);
  }
  //this Promise.resolve will return a promise for the next chain
  return Promise.resolve(data);
};

const fetchNextPlanets = (url) => {
  console.log("These are the next planets");
  return fetch(url.next);
};

fetch("https://swapi.dev/api/planets/")
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((error) => {
    console.log("Something Went Wrong with Fetch!");
    console.log(error);
  });
*/

//WELCOME TO AXIOS
/*
  .get("https://swapi.dev/api/planets/")
  .then(({ data }) => {
    console.log(data);
    for (const planets of data.results) {
      console.log(planets.name);
    }
    //this part will return a promise*** So it can be chained
    return axios.get(data.next);
  })
  .then(({ data }) => {
    console.log(data);
    for (const planets of data.results) {
      console.log(planets.name);
    }
  })
  .catch((err) => {
    console.log(err);
  });
  */

//Restructuring the above axios code
const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
  return axios.get(url);
};

const printPlanets = ({ data }) => {
  console.log(data);
  for (const planets of data.results) {
    console.log(planets.name);
  }
  return Promise.resolve(data.next);
};

fetchNextPlanets().then(printPlanets).then(fetchNextPlanets).then(printPlanets);

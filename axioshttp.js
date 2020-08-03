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

//HITTING SWAPI API WITH FETCH()
fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    const filmData = data.results[0].films[0];
    return fetch(filmData);
  })
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Something Went Wrong with Fetch!");
    console.log(error);
  });

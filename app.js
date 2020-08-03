// const btn = document.querySelector("button");

// // setTimeout(() => {
// //   btn.style.transform = `translateX(100px)`;
// //   setTimeout(() => {
// //     btn.style.transform = `translateX(200px)`;
// //     setTimeout(() => {
// //       btn.style.transform = `translateX(300px)`;
// //       setTimeout(() => {
// //         btn.style.transform = `translateX(400px)`;
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// const moveX = (element, amount, delay, callback) => {
//   setTimeout(() => {
//     element.style.transform = `translateX(${amount}px)`;
//     if (callback) callback();
//   }, delay);
// };

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 200, 1000);
// });

// const btn = document.querySelector("button");

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   setTimeout(() => {
//     const bodyBoundary = document.body.clientWidth;
//     const elRight = element.getBoundingClientRect().right;
//     const currLeft = element.getBoundingClientRect().left;
//     if (elRight + amount > bodyBoundary) {
//       onFailure();
//     } else {
//       element.style.transform = `translateX(${currLeft + amount}px)`;
//       onSuccess();
//     }
//   }, delay);
// };

// LOOK AT THIS UGLY MESS!
// moveX(
//   btn,
//   300,
//   1000,
//   () => {
//     //success callback
//     moveX(
//       btn,
//       300,
//       1000,
//       () => {
//         //success callback
//         moveX(
//           btn,
//           300,
//           1000,
//           () => {
//             //success callback
//             moveX(
//               btn,
//               300,
//               1000,
//               () => {
//                 //success callback
//                 moveX(
//                   btn,
//                   300,
//                   1000,
//                   () => {
//                     //success callback
//                     alert("YOU HAVE A WIDE SCREEN!");
//                   },
//                   () => {
//                     //failure callback
//                     alert("CANNOT MOVE FURTHER!");
//                   }
//                 );
//               },
//               () => {
//                 //failure callback
//                 alert("CANNOT MOVE FURTHER!");
//               }
//             );
//           },
//           () => {
//             //failure callback
//             alert("CANNOT MOVE FURTHER!");
//           }
//         );
//       },
//       () => {
//         //failure callback
//         alert("CANNOT MOVE FURTHER!");
//       }
//     );
//   },
//   () => {
//     //failure callback
//     alert("CANNOT MOVE FURTHER!");
//   }
// );

// const buyNewPhone = new Promise((resolve, reject) => {
//   const randNum = Math.random();
//   if (randNum < 0.2) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// buyNewPhone
//   .then(() => {
//     console.log("Nice!!! We got a new Phone!");
//   })
//   .catch(() => {
//     console.log("Awwwww No New Phone!");
//   });

// const makePhonePromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randNum = Math.random();
//       if (randNum < 0.2) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// };

// makePhonePromise()
//   .then(() => {
//     console.log("Nice!!! We got a new Phone!");
//   })
//   .catch(() => {
//     console.log("Awwwww No New Phone!");
//   });

//Resolving & Rejecting with values with Promises
// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pages = {
//         "/users": [
//           { id: 1, username: "Black" },
//           { id: 2, username: "Dorothy" },
//         ],
//         "/users/1": {
//           id: 1,
//           username: "Bilbo",
//           upvotes: 360,
//           city: "Lisbon",
//           topPostId: 454321,
//         },
//         "/users/5": {
//           id: 5,
//           username: "Esmerelda",
//           upvotes: 571,
//           city: "Honolulu",
//         },
//         "/posts/454321": {
//           id: 454321,
//           title: "Ladies & Gentlemen, may I introduce my pet pig, Hamlet",
//         },
//         "/about": "This is the about page!",
//       };
//       const data = pages[url];
//       if (data) {
//         resolve({ status: 200, data });
//       } else {
//         reject({ status: 404 });
//       }
//     }, 3000);
//   });
// };

// fakeRequest("/users")
//   .then((res) => {
//     console.log(res);
//     const id = res.data[0].id;
//     return fakeRequest(`/users/${id}`);
//   })
//   .then((res) => {
//     console.log(res);
//     const postID = res.data.topPostId;
//     return fakeRequest(`/posts/${postID}`);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log("Oh nooooo!!", error);
//   });

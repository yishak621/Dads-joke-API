//remember in some cases u will have an acess to a specific api json files but not always
//XHR object method
const content = document.querySelector('.content');
const URL = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const img = document.querySelector('.container img');
btn.addEventListener('click', async () => {
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
});

function displayData(data) {
  const { value: resp } = data;
  //const text = resp.value;
  content.textContent = resp;
  //random animation
  const random = Math.random() * 1000;
  img.classList.add('shake');
  setTimeout(() => {
    img.classList.remove('shake');
  }, random);
}

//we dont have to do this
// function getData(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState !== 4) return;
//       if (xhr.status === 200) {
//         resolve(xhr.responseText);
//       } else {
//         reject({
//           status: xhr.status,
//           text: xhr.statusText,
//         });
//       }
//     };
//   });
// }

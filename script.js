//remember in some cases u will have an acess to a specific api json files but not always
//XHR object method
const content = document.querySelector('.content');
const URL = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const img = document.querySelector('.container img');
btn.addEventListener('click', () => {
  getText(URL);
});

function getText(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onreadystatechange = () => {
    //we can also do this
    //if( xhr.readyState!==4) return;
    // if(xhr.status===200){console.log(responseText)}
    if (xhr.readyState === 4 && xhr.status === 200) {
      const { value: resp } = JSON.parse(xhr.responseText); //when we recive we want it as an object JSON.parse
      //const text = resp.value;
      content.textContent = resp;
      //random animation
      const random = Math.random() * 1000;
      img.classList.add('shake');
      setTimeout(() => {
        img.classList.remove('shake');
      }, random);
    } else {
      console.log({ status: xhr.status, Text: xhr.statusText });
    }
  };
  xhr.send();
}

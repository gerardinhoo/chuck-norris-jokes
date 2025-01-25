const api = `https://api.chucknorris.io/jokes/random`;
const jokeButton = document.querySelector('#joke-btn');
let displayJoke = document.querySelector('#joke');

async function norisJokes() {
   try{
      let response = await fetch(api);
      let jsonResponse = await response.json();
      if(!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`)
      }  
      displayJoke.textContent = jsonResponse.value;
      return displayJoke;
   } catch(error) {
      console.log(error);
      displayJoke.textContent = 'Error displaying a joke. Please try again Later.'
   }
}

jokeButton.addEventListener('click', norisJokes)



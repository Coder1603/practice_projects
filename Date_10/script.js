// const btn = document.querySelector('.btn')
// const noidung = document.querySelector('#content')
// const arrayContent = [
//     'What do you call a guy lying on your doorstep? Matt.',
//     'How does a scientist freshen their breath? With experi-mints!',
//     'I burned 2000 calories today, I left my food in the oven for too long.',
//     'Where do you learn to make banana splits? At sundae school.',
//     'I got an A on my origami assignment when I turned my paper into my teacher',
//     'Why do ducks make great detectives? They always quack the case.',
//     "Two satellites decided to get married. The wedding wasn't much, but the reception was incredible.",
//     "Two guys walked into a bar, the third one ducked.",
//     "Why does it take longer to get from 1st to 2nd base, than it does to get from 2nd to 3rd base? Because there’s a Shortstop in between!",
//     "Don't tell secrets in corn fields. Too many ears around.",
//     "What is the tallest building in the world? The library – it’s got the most stories!",
//     "I knew a guy who collected candy canes, they were all in mint condition",
//     'A man is washing the car with his son. The son asks...... "Dad, can’t you just use a sponge?"',
//     'I made a playlist for hiking. It has music from Peanuts, The Cranberries, and Eminem. I call it my Trail Mix.',
// ]
// let index = 0;

// noidung.innerHTML = arrayContent[0]

// btn.addEventListener('click', () => {
//     if(index < arrayContent.length - 1) {
//         index++
//         noidung.innerHTML = arrayContent[index]
//     } else {
//         index = 0   
//         noidung.innerHTML = arrayContent[index]
//     }

// })

const jokeEl = document.querySelector('#content')
const jokeBtn = document.querySelector('.btn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   const res = await fetch('https://icanhazdadjoke.com', config)

//   const data = await res.json()

//   jokeEl.innerHTML = data.joke 

// }





// USING .then()
function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke
    })
}

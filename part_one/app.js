const baseURL = "http://numbersapi.com"
const favNum = 16

// Part One

// quesiton 1

$.getJSON(`${baseURL}/${favNum}?json`, response => {
    console.log(response)
})

// question two 

favNumsArr = [1,2,3]

$.getJSON(`${baseURL}/${favNumsArr}?json`).then(data => {
    console.log(data)
    $('<ul>').appendTo('body')
    for(let [key, value] of Object.entries(data)) {
        $('<li>').text(value).appendTo('ul')
    }
})

// question three

Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${baseURL}/${favNum}?json`);
    })
  ).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });
  

  
// other examples 

  // async function numberFacts (){
//     let res = await axios.get(`${baseURL}/${favNum}?json`)
// console.log(res)
// }

// numberFacts()

// async function favNumbers(){
//     let res = await axios.get(`${BASE_URL}/${favNumsArr}?json`)
//     console.log(res)
// }

// favNumbers()
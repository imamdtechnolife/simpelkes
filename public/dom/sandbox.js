let ikeh = document.querySelectorAll('div.name')
console.log(ikeh);

// ikeh.setAttribute('Imam Afriyadi', 'Antony Stark');

let dragon = document.querySelectorAll('p');

dragon.forEach(element => {
    console.log(element);
     element.innerHTML += " hebaat!";
});


const yonkou = ['akagami','shirohige','big mam','kaidou'];
const kaidou = document.querySelector('.kakuju')

yonkou.forEach(element => {
    console.log(element)
    kaidou.innerHTML += `<p>${element}</p>`;
})


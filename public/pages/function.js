// function declaration
// function great(){
//     console.log('declaration')
// }

// function expression
// const imam = function(){
//     console.log("hellow world")
// }

// imam()
// dragon('tegal','iqbal')

//arguments and paramenter
// function dragon(name = 'kuningan', alias = 'mas yana'){
//     console.log(`hello ${alias} the dragon ${name}`)
// }

// returning values
// const hitung = function(radius){
//     let hasil = 3.14 * radius**2 
//     //console.log(hasil)
//     return hasil
// }


// const oke = hitung(13)
// console.log(oke)

//regular function
// const im = function(radius){
//     return radius * 12
// }
// const imsama = im(12) 
// console.log(imsama)

// //arrow function
// const ikeh = (radius, o) => {
//     return radius * 12 + o
// }
// console.log(ikeh(2, 1))

// //arrow function with no paramaters
// const okeh = () => {
//     return 12
// }
// console.log(okeh())

// //arrow function with no paramaters and no brackets
// const okeh = () => 12 * 12

// console.log(okeh())


// //practise arrow function
// const dragon = (belanja, pajak) => {
//     hasil = 0
//     for(let i = 0; i < belanja.length ; i++){
//         hasil += belanja[i] + belanja[i] * pajak
//         return hasil
//     }
// }
    
// console.log(dragon([20,15,30], 0,2))

// //function
// const dragon = () => "hello world"
// console.log(dragon())

// //method
// const name = "imam"
// name.toUpperCase()
// console.log(name.toUpperCase())

//callback function


// const dragon = (name, index) => {
//     console.log(`${index} sama dengan ${name}`)
// }

// person.forEach(dragon)


//get reference to the ul
const ul = document.querySelector('.saudara');

const person = ['imam','selvi','arya','ari']

let html = ``;

const kaidou = (orang => {
    html += `<li>${orang}</li>`;       
});

person.forEach(function(orang){
    html += `<li>${orang}</li>`; 
});
console.log(html);

ul.innerHTML = html;

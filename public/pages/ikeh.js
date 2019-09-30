// x=10
// var x
// console.log(x);

// let firstName = 'imam';
// let lastName = 'afriyadi';
// let fullName = firstName+' '+lastName;

//  let email = 'imamdtechnolifea@gmail.com'

// console.log(fullName);

// string length
// console.log(fullName.length)

//characters index position / getting characters
// console.log(fullName[1])

//uppercase method
// console.log(fullName.toUpperCase())
// let result = fullName.toLowerCase()
// console.log(result, fullName)

// console.log(email.lastIndexOf('m'))

// let result = email.substr(2,5)

// let result = email.slice(2, 5)

// let result = email.replace('a', 'o')

// const phi = 3.14
// let radius = 10
// let result = phi * radius**2
// console.log(result)

// console.log(2 / 2)

// for(let i = 0; i <= 5; i++){
//     console.log("loop for : ", i)
// }

// console.log('loop finished')

 let i = 0

// while(i < 5){
//     console.log(i)
//     i++
// }

// let names = ['imam','selvi','arya','ari']

//while loop
// while(i < names.length){
//     console.log(names[i])
//     i++
// }

//do while loop
// do{
//     console.log('in loop : ',i)
//     i++
// }
// while(i < 5)

//conditional statement
// const pass = 'ikeho'
// console.log(pass.length)

// if(pass.length >= 25){
//     console.log('password terlalu panjang')
// } else if(pass.length > 10 || pass.includes('@') && pass.length >= 5 ) {
//     console.log('password cukup panjang')
// } else {
//     console.log('password tidak terlalu panjang')
// }

//logical not
// let user = !true

// if(!user){
//     console.log('user login')
// } else {
//     console.log('user not login')
// }

// console.log(!false)
// console.log(!true)

//breaks and continue
// const score = [10,40,50,0,100,70,80]

// for(let i = 0; i < score.length; i++)
// {
//     console.log(score[i])
//     if(score[i] === 0){
//         continue
//     }
//     if(score[i] === 100){
//         console.log('yee, you got the top score!')
//         break
//     }
// }

//switch case
// let grade = 'D';

// switch(grade){
//     case 'A':
//         console.log("you got A")
//         break
//     case 'B':
//         console.log("you got B")
//         break
//     case 'C':
//         console.log("you got C")
//         break
//     default:
//         console.log("you got nothing!")
// }

//variable and block scope
// let ikeh = 30

// if(ikeh === 30){
//     let ikeh = 40
//     console.log("inside block : ", ikeh)
// }

// console.log("outside block : ", ikeh)
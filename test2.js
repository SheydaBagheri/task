// let usernameValue = document.getElementById('input-user');
// let clickBtn = document.getElementById('btn');



// console.log(usernameValue.value);


// clickBtn.addEventListener('click' , removeValue)

// function removeValue(){
    
//     console.log(usernameValue.removeAttribute('placeholder'));





// }
// let submitLogin =  document.querySelector('.login-form');

// submitLogin.addEventListener('submit' , function(event){
//     event.preventDefault()
//     console.log(event)
    





// })

// let texinbox = document.querySelector('textarea');


// function copyHandler(event){
//     event.preventDefault()


// }

// function cutHandler(event){
//     event.preventDefault()
    
// }

// function pasteHandler(event){
//     event.preventDefault()

    
// }





// texinbox.addEventListener('copy' , copyHandler);
// texinbox.addEventListener('cut' , cutHandler);
// texinbox.addEventListener('paste' , pasteHandler);
// const inputElem = document.querySelector('input')
// const ulItems = document.querySelector('ul')

// function trimVal(val){
//     return val.trim()
// }
// function tolowercamel(val){
//     return val.toLowerCase()



// }
// inputElem.addEventListener('keyup', function(event){
//     if(event.keyCode === 13){
//        let inputList = '<li>'+tolowercamel(trimVal(inputElem.value))+ '</li>'
//         ulItems.insertAdjacentHTML('beforeend' , inputList )
//         inputElem.value = ''
//     }

// })


// function sum (num1 ,num2){
//     return num1 + num2;

// }
// console.log(sum (8 ,10))


// // const tavan = (num1 , num2) =>{
// //     return num1**num2

// // }
// const tavan = (num1 , num2) => num1**num2
// console.log(tavan(2,4))

// let nums = [2,4,6]
// const sum  = (a,b,c)=> {
//     a+b+c
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(arguments)
//     // arguments.array.forEach(item => {
//     //     console.log(item)
//     // });

// }

// console.log(sum(...nums))



// const sum =  ( ...args)=>{
//     // console.log(arguments)
//     let sumArgs = 0
//     args.forEach(item => sumArgs += item);
//     return sumArgs

// }

// console.log(sum(2, 10 , 20))

// let abArray =[a , b] = [10, 12]
// console.log(abArray)






// let numbers = [1,2,3,4,2,1,3,4,2,1,2];

// console.log(...numbers)
// let users = [1 ,  , 'bagheri' , 21 , 'female'];
// let [userId , userFname  , userLname , age , jensiat] = users
// console.log(userFname)





'use strict'


// let {id:userId, name , age} = user

// console.log(userId)

// const liList = document.querySelectorAll('.list')

// for(let item of liList){
//     console.log(item)
//     item.addEventListener('click' , e => e.target.remove())
// }
// let users = {
//     id: 1,
//     name: 'moein',
//     age : 22

// }


// for(let user in users){
//     console.log(`${user} :  ${users[user]}`)


// }
//h
// let numbers4slice = numbers.slice(-4)
// let number3Slice = numbers.slice()
// let numbersStar = numbers4slice.padStart(numbers.length , '*')
// console.log(numbersStar)
// console.log(number3Slice)



// let price = 70_000_000 //70000000
// console.log(price)

// let userAge = 20
// userAge>18 &&  console.log('your older than 18 ')
// userAge<18 && console.log('your younger')

// import { Users } from "./func"
// import { isLogin } from "./func"


// let rejaxCode = /b.+b/
// let text = 'i am sheyda bagherinsab webdeveloper'
// console.log(rejaxCode.test(text))



// let listItem = document.querySelectorAll('.list');

// const sumNumber  = ()=>{
//     let sum = 0 ;
//     for(let arg of arguments){
//         sum += arg

//     }
//     return sum
// }
// console.log(sumNumber(2,3,1))


// let users = {
//     id:1 , 
//     Fname : 'sheyda' , 
//     Lname : 'bagheri',
//     age : 21,
//     walk : ()=>{
//         console.log(`${this.Fname} is walking`)

//     },
//     aboutUser : ()=>{
//         console.log(`${this.Fname} is ${this.age} years old`)
//     }
// };
// let users2 = {
//     id:2 , 
//     Fname : 'shahin' , 
//     Lname : 'tadbiri',
//     age : 15,
//     // walk : function(){
//     //     console.log(`${this.Fname} is walking`)

//     // }
// };
// users.walk(users2)

// const showUser = (score)=>{
//     console.log( `hello youe name is ${this.Fname} ${this.Lname} and your age is ${this.age} score : ${score}`)

// }
// showUser(2)

// function users(Fname , Lname , userJob , userAge){
//     this.Firstname = Fname;
//     this.lastName = Lname;



// }
// let usersSheyda = new users('sheyda' , 'bagheri')
// console.log(users)

// 

// let users= {
//     id: 1,
//     name : 'sheyda',
//     Lname : 'bagherinasab'
// }

// for(let item in users){
//     console.log(`${item} : ${users[item]}`)
// }

//regex 














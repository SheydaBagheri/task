//array chalenje//
// calcTip = function(bills){

//     if(bills>50 && bills<200){

//         return bills * .25

//     }
//     else{
//         return bills
//     }


// }
// const bills =[125 , 44 ,555]

// const tips =[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
// consle.log(tips)

// const moshakhsat = {
//     firstName :'sheyda' ,
//     lasttName :'bagherinasab' ,
//     birthday : 18,

// }
// console.log(`${moshakhsat['firstName']} has a ${moshakhsat['birthday']}`)

// const jonas={

//     firstname : 'jonas',
//     frinds : ['roze' , 'sarah' , 'michele']

// };

// console.log(`${jonas.firstname} has a ${jonas.frinds.length} frends and the best frends has a 
//     ${jonas.frinds[2]}`)

// const jonas={

//     firstname : 'jonas',
//     birthday : 1991 ,
//     job : teacher ,
//     driverlicence : true ,
//     frinds : ['roze' , 'sarah' , 'michele'],

//     moshkhasat : function(jonas1){

//        return `${this.firstname} is a ${2037 - this.birthday} 
//        years old ${this.driverlicence ? 'true': 'he has driver licenc' }`




//     }
// };

// console.log(jonas.moshkhasat())

// const mark = {

//     firstName : 'mark' ,
//     lastName : 'miller',
//     wheite : '78',
//     mass : '1.69',
//     clcbmi : function(){
//          return this.mass / this.wheite **2


//     }




// }
// const john={

//     firstName : 'john' ,
//     lastName : 'smith',
//     wheite : '92',
//     mass : '1.98',
//     clcbmi : function(){
//         return this.mass / this.wheite **2


//    }


// }
// console.log(`${mark.clcbmi()} mark bmi and  ${john.clcbmi()}`)


// number1=prompt('lotfa add wared konid');
// number2=prompt('lotfa add wared konid');

// majmoe = Number(number1 )+ Number(number2);

// alert(majmoe)
// const number1=prompt('lotfa add wared konid');
// const number2=prompt('lotfa add wared konid');
// const number3=prompt('lotfa add wared konid');

// const miangin = (Number(number1) +Number(number2)+ Number(number3) )/3

// alert(miangin)

//ya mitonim ghabl promp number bezarim//

// const age = prompt('pleas enter your age ');

// if(age<=18){

//     alert(`sen shoma ${age} nemitavanid vared site shavid`)


// }
// else{
//     alert(`sen shoma ${age} mitavanid vared site shavid`)
// }


// const Number1 = Number(prompt('please enter number :  ' ,0));
// const number2 = Number(prompt('please enter number :  ', 0));

// const tavanDoadad = Number1 ** number2;
// alert(`tavanDo adad barabar ast ba : ${tavanDoadad}`);


// const birthday = Number(prompt(`please enter your birthday` , 1300 )) ;
// const year = 1403 ; 
// const mohasebeBirthday = year -  birthday;
// alert(`sen shoma ${mohasebeBirthday} ast `)
// if(isNaN(mohasebeBirthday)){

//     alert('lotfa tarikh motabar vared konid ')


// }
// if(mohasebeBirthday > year){

//     alert('lotfa tarikh motabar vared konid ')
// }
// else{
//     alert(`sen shoma ${mohasebeBirthday} ast `)
// }



// const ageUser = prompt(' sen khod ra vared konid :  ', 0);
// const jensiatUser =prompt(' jensiart khod ra begoid : ' , "mard");

// if(ageUser<=18 || jensiatUser=== 'zan'){

//     alert('shoma ejaze vrod nadarid ')
// }
// else{
//     alert('shoma ejaze vrord darid ')
// }

// shart tak khaty 

// (ageUser<=18 || jensiatUser=== 'zan') ? prompt('no vrod ') : prompt('yes vrod')


// const moadelDaneshamozan = (prompt('moadel khod ra vared konid : '));

// switch(moadelDaneshamozan){

// case '18' :
// case '19':
// case'20':
//      alert('A level ') 
//      break;

// case '17':
// case '16':
// case '15':
//     alert(' B level ')
//     break;

// case '14':
// case '13':
// case '12':
//     alert(' c level ')
//     break;

// default:
//    alert(' oftady ');
  



// }


// function number (zogFard){

//     const namayeshadd = zogFard / 2 ;
//     if(zogFard === 0){

//         alert('add zoj ast')

//     }
//     else{
//         alert('add fard ast')

//     }
//     return namayeshadd

// }

// number(12)


// const miangin = function(a , b , c){

//     return `miangin addad shoma barabar ast ba ${(a + b + c ) / 3}`

// }

// alert(miangin(1 , 4 , 7))



// const uzername = prompt('enter your youser name :  ');
// const password = prompt('enter your password : ')

// if(uzername === undefined){

//     uzername = 'yourname'

// }
// if(uzername.length<3 && password.length< 8 ){

// alert('uzer name hadaghal 3 harf pass hadaghl 8 harf')

// }
// else{
//     alert('shoma sabt nam shodid : ')
// }

// const uzerName = prompt('enter your uzerName :  ')
// if(uzerName.toLowerCase()=== 'ali'){

//     alert('shoma login shodid ')
// }

// else{
//     alert('lotfa mojadad talash konid ')
// }


// let uzerName = 'sheyda'

// for(let i = 0 ; i < uzerName.length ; i++){
//     console.log(`${i} : ${uzerName[i]}`)


// }

// let number = 0
// for(let i = 0 ; i/2 === 0  &&  i > number; i++ ){
//     console.log(`${number[i]} `)

// }

//for(let i = 0 ; i <100 ; i+=2){
//console.log(i)
//}
//نمایش اعداد زوج تا 100 در حلقه 

// let mony = 0

// for(let i = 0 ; i<5 ;  i++){

//    let majmo = mony + Number(prompt());
   
// }

// console.log(majmo)

// var numbers = 0

// for(let i = 0 ; i< 5 ; i++){

//     var numbers = numbers + Number(prompt('addad vared konid : '));
//       (numbers[i] *5 )



// }
// alert(numbers /5)

// var numbers = 0

// for(let i=0 ; i<5 ; i++){

//     var numbers = numbers.+ num
// }


// let i = 0
// while( i<100){

//     console.log(i)
//     i += 2






// }

// number1uzer = Number(prompt('enter your number : '));
// number2uzer = Number(prompt('enter your number : '));

// if(number1uzer/2 === 0 ){
//     while(number1uzer<number2uzer){
//         console.log(number2uzer)
//         number1uzer += 2
//     }

// }

// var userNumbers = []
// var userNumber = 0
// var som = 0

// while( userNumber != -1){

//     userNumber = Number(prompt('enter your number if finish send -1 '))
//     if(userNumber != -1){
//         userNumbers.push(userNumber)
        

//     }


// }
// for(var i = 0  ; i < userNumbers.lenght ; i++){

//     som = som + userNumbers[i];

// }
// console.log(som / userNumbers.lenght)
// hwuoldiruo // 
//,watsyour name//

// const etelaat = [
// {id : 1 ,  firstName : 'ali' , lastName : 'mahammadi' , age : 18 , email: 'asdkljsk@gmail.com'} ,

// {id : 2 ,  firstName : 'amin' , lastName : 'eslam'   , age : 24 , email: 'addfffljsk@gmail.com'} ,

// {id : 3 ,  firstName : 'meisam' , lastName : 'hosseiny'   , age : 29 , email: 'hhhhhejsk@gmail.com'} ,

// ]

// const userName = prompt('enter your first name');
// const userlastName = prompt('enter your last name');
// const userAge = prompt('enter your age');
// const userEmail = prompt('enter your email');

// if(userName.length <3 && userName.length >10 ){
//     console.log('enter your firstName 3 to 10 hrof');
// }
// else if(userlastName.length <3 && userlastName.length >15){
//     console.log('enter your lastName 3 to 15 hrof');
//   }
// else if(isNaN(userAge) && userAge.length > 3){
//     console.log('enter your Age true');

// }
// else{
//     const user ={
//         id :4 ,
//         firstName : userName,
//         lastName : userlastName ,
//         age : userAge ,
//         email : userEmail ,


//     }

// console.log(user)





// }

// const etelaat =[
// {id : 1 , FirstName : ' sheyda' , lastName : 'bagherinasab' , age:20},
// {id : 2 , FirstName : ' mohsen' , lastName : 'eslami' , age:40},
// {id : 3 , FirstName : ' nima' , lastName : 'mozafari' , age:24},
// {id : 4 , FirstName : ' samira' , lastName : 'bagherpasand' , age:32},

// ]

// etelaat.forEach(function(etela){

//     console.log(`name : ${etela.FirstName} ${etela.lastName}`)



// })


// const login = prompt('enter your name : ');

// const userName = [
// 'ali',
// 'amir',
// 'ahmad',

// ]

// const isUsername = userName.includes(login);

// if(isUsername){
//     console.log(` khosh omadi ${login} `)

// }else{
//     console.log(` lotfa sabt nam kon! `)
// }


// const mahsolat =[
// {id : 1 , mahsolName : 'rozh' , gheymatMahsol : 44000},
// {id : 2 , mahsolName : 'medad' , gheymatMahsol : 20000},
// {id : 3 , mahsolName : 'goshvare' , gheymatMahsol : 5000000},
// ]


// var sabadKharid = [
// {id : 1 , mahsolName : 'rozh' , gheymatMahsol : 44000},
// {id : 2 , mahsolName : 'medad' , gheymatMahsol : 20000},
// ];

// const userKala = prompt('enter your userKala')
// var requestKala;
// isunsabad = mahsolat.some(function(mahsoll){
//     if(mahsoll.mahsolName === userKala){
//         requestKala === mahsoll
//         return true


//     }



// })

// if(isunsabad === true){
//     var newMahsol = {
//         id: 4 ,
//         mahsolName : requestKala.mahsolName,
//         gheymatMahsol : requestKala.gheymatMahsol,
//     }
//     newproducts.push(newMahsol)
//     var some = 0
//     newproducts.forEach(function(product) {
//         some  = some + product.gheymatMahsol
    
//     });
//     console.log(`gheymat kole mahsolat ${some}`)

// }
// else{
//     console.log('mojod nist ! ')
// }


// var userages =[12 , 22 , 34 , 45];
// istrue  = userages.every(function(age){
//     return age > 18 
    

// })
// if(istrue){

//     console.log('ejaze konferans darid')


// }else{
//     console.log('ejaze konferans nadarid')


// }

// const numbers= [1 , 3 , 5 ,20 , 22 , 21 , 13 , 15 , 19 ,35 ]

// changenumber = numbers.splice(3 , 2)
// console.log(numbers)



// var mahsolat =[
// {id : 1 , mahsolName : 'rozh' , gheymatMahsol : 44000},
// {id : 2 , mahsolName : 'medad' , gheymatMahsol : 20000},
// {id : 3 , mahsolName : 'goshvare' , gheymatMahsol : 5000000},
// {id : 4 , mahsolName : 'pakon' , gheymatMahsol : 8000},
// {id : 5 , mahsolName : 'daftar' , gheymatMahsol : 90000},


// ]
// var sabadKharid =[
//     {id : 1 , mahsolName : 'rozh' , gheymatMahsol : 44000},
//     {id : 2 , mahsolName : 'medad' , gheymatMahsol : 20000},
//     {id : 3 , mahsolName : 'goshvare' , gheymatMahsol : 5000000},
// ]

// usersgozine = (prompt('enter 1 or 2 '));

// if(usersgozine === '1'){
//    ezafeuser = prompt(' kodam az kalaye ma mikhaid ezafe shavad ;');
//    var mahsolData;
//    isinezafe = mahsolat.some(function(ezafe){
// if(mahsolat.mahsolName=== ezafeuser ){
//         mahsolData = ezafe;
//         return true
//     }
//    })

// if(isinezafe === true){
//     var newMahsol ={
//         id :4 ,
//         mahsolName : mahsolData.mahsolName,
//         gheymatMahsol : mahsolData.gheymatMahsol
//     };
//     sabadKharid.push(newMahsol);
//     console.log(sabadKharid)
// }
//      else{
//     console.log('hamchin kalayi vojod nadarad !')

// }
// }
// else if(usersgozine === '2'){
//     hazfMahsol = prompt('kadom mahsol hazf shvad ? ');
//     isinHazf = mahsolat.findIndex(function(hazf){
//         return hazfMahsol === hazf.mahsolName


//     })
//     sabadKharid.splice(isinHazf , 1);
//     console.log(sabadKharid)
    
// }

// else{
//     console.log('lota gozine dorost entekhab namaid ! ')

// }

// var userproducts = [
//      {id : 1 , mahsolName : 'rozh' , gheymatMahsol : 44000},
//      {id : 2 , mahsolName : 'medad' , gheymatMahsol : 20000},
//      {id : 3 , mahsolName : 'goshvare' , gheymatMahsol : 5000000},
//      {id : 4 , mahsolName : 'pakon' , gheymatMahsol : 8000},
//      {id : 5 , mahsolName : 'daftar' , gheymatMahsol : 90000},
//      {id : 6 , mahsolName : 'mobile' , gheymatMahsol : 2000000},

// ]

// var filterKala = userproducts.filter(function(product){
//     return product.gheymatMahsol < 100000
   


// })
// // if(filterKala){
// //     console.log(filterKala)
// // }

// if(filterKala){
//     var postCost = userproducts *1000
//     var h2 = 0
//     userproducts.forEach(function(post){
//         h2 = h2 + post.gheymatMahsol
//         return h2
//     })
//     console.log(h2 + postCost )
// }


// var kalme = prompt('enter youe kalame : ');

// var kalametfkik = kalme.split('')
// var aksKalme = kalametfkik.reverse()
// var joinaksKalame = aksKalme.join('')
// console.log(joinaksKalame)

// if(joinaksKalame === kalme){
//     console.log('barabar ast')
// }
// else{
//     console.log('barabar niast')

// }

// var todolist = [
//     {id: 1 , names: 'learnjs' , isdoing: true },
//     {id: 2 , names: 'learnzaban' , isdoing: false },
//     {id: 3 , names: 'learnphp' , isdoing: false },
// ]
//  var userTodoList = Number(prompt('1ezafe kardan todolist \n 2 hazf todolist \n 3 anjam todo list'));

//  if(userTodoList===1){
//     //add to list
//     var addUserList = prompt('enter your todolist names :  ');
//     var newUserTodoList ={
//         id: todolist.length +1,
//         names: addUserList,
//         isdoing: false ,
//     }
//     todolist.push(newUserTodoList)
//     console.log(todolist)

//  }
//  else if(userTodoList===2){  
//     //delet list
//     var deletUserList = prompt('enter your todolist names :  ');
//     todolist.findIndex(function(todo){
//         return deletUserList === todo.title

//     })
//     todolist.splice(deletUserList,1)
//     console.log(todolist)

//  }
//  else if(userTodoList===3){
//     //true the todo list
//     var isdoingUserList = prompt('enter your todolist names :  ');
//     todolist.forEach(function(doing){
//         if(isdoingUserList=== doing.names){
//            doing.isdoing === true
//         }



//     })
//     console.log(todolist)

//  }

// let citys = {
//     tehran : [ 'tehran', 'shahriar' , 'eslamshahr' ],
//     tabriz :['tabriz' , 'marand' , 'maraghe' ],
//     shiraz:['shirazabad' , 'fars' , 'shiraz']
// }

// let usercity = prompt('enter your city :  ');

// let mainCity = citys[usercity];

// mainCity.forEach(function(city) {
//     console.log(city)
    
// });


// let queiz =[
//     {id:1, soal : '2*2', answer: '4'},
//     {id:2, soal : '10/2' , answer: '5'},
//     {id:3, soal : '5*10' , answer: '50'},
//     {id:4, soal : '2 + 10 ', answer: '12'},
//     {id:5, soal :' 2*4', answer: '8'},
//     {id:6, soal : 'paytakht iran' , answer: 'tehran'},
// ]
// let score = 0
// let mainanswer =''
// // let userqueiz = prompt( queiz.soal + '?')
// queiz.forEach(function(q1) {

//     let mainanswer = prompt( q1.soal + '?');
//     if(mainanswer === q1.answer){
//         score++


//     }
    
// });
// console.log(score)


// let deytaUzerPass = [
//     {id: 1 , name : 'amir' , password : 1200003332 },
//     {id: 2 , name : 'amin' , password : 13333444444 },
//     {id: 3 , name : 'amirali' , password : 120034444 },
//     {id: 4 , name : 'aysan' , password : 120074774 },

// ];

// let passuser = prompt('enter your name :');

// let passFInd = deytaUzerPass.find(function(user){
//     return user.name === passuser

// });

// if (passFInd === undefined) {
//     console.log('shoma sabt nam nakardid!')
    
// }
// else{
//     console.log(`your password is ${passFInd.password}`)

// }


// var sanie = +prompt('enter your saniye ');
// var dagheghe = +prompt('enter your daghighe ');

// var timer = setInterval(function(){

    
    
//     if(sanie===0){
//         dagheghe --
//         sanie = 59

//     }
//     if(dagheghe === 0 && sanie === 0){
//         clearInterval(timer)



//     }
//     console.log(` ${dagheghe} : ${sanie} `);
//     sanie--


// },1000)

// let helem = document.getElementsByClassName('h2elem')

// console.log(helem[0].innerHTML)

// let userName = prompt('enter your name :');

// let newDivElem = document.createElement('div')

// newDivElem.innerHTML = userName ;

// console.log(newDivElem)

// let ulElem = document.querySelector('ul');

// let liElem = document.createElement('li');

// liElem.innerHTML = 'service';

// ulElem.append(liElem)

// console.log(ulElem)

// let h2Elem = document.querySelector('h2');

// function changeColor(){
//     h2Elem.style.color = 'blue'
// }


// const Users = [
//     {id:1 , Fname: 'sheyda' , Lname:'bagheri' , age:21},
//     {id:2 , Fname: 'shayan' , Lname:'bagheri' , age:13},
//     {id:3 , Fname: 'maryam' , Lname:'bibak' , age:41},
//     {id:4 , Fname: 'sanaz' , Lname:'mohseni' , age:32},
//     {id:5 , Fname: 'meysam' , Lname:'hoseini' , age:60},
// ];

// const isLogin = userId => {
//     let isInUsers = Users.some(user => user.id === userId);
//     return isInUsers
// }

// export{isLogin };


// let rejaxCode = /sheyda/

// let text = 'i am sheyda bagherinsab webdeveloper'
// console.log(rejaxCode.test(text))

// let rejeX = /0./
// let numbers = '09324324343';

// console.log(rejeX.test(numbers))

// let rejex = /.+@.+.com/

// let emailText = 'ssssssss@gmail.com'

// console.log(rejex.test(emailText))

//this

// let listElems = document.querySelectorAll(".list")
// listElems.forEach(listEl => {
//     listEl.addEventListener('click' , function(){
//         listEl.remove()
//     })
    
// });


// this in function show window//

// const showFunc = ()=>{
//     console.log(this)
// }
// showFunc()

// let user = {
//     id:1,
//     name:'Elina',
//     age : 22,
//     walk: function(){
//         console.log(this)

//     }
// }
// user.walk()
// this in object show object

// let user1 = {
//     id:1,
//     name: 'sheyda',
//     age : 22 ,
// }

// function showUser(){
//     console.log(`your name is ${this.name}`)


// }
// showUser.call(user1)

// let user1 = {
//     id:1,
//     name: 'sheyda',
//     age : 22,
// };
// let user2={
//     id:2,
//     name:'mohammad',
//     age : 34
// };
// function showuser(score){
//     console.log(this)
//     setTimeout(()=>{

//         console.log(`your name is ${this.name} ,
//             your age is ${this.age} and your score is ${score} `)


//     },2000)

// //arrow function don't need .bind
// }
// showuser.apply(user2, [12])
// // showuser.call(user1 , 20)
// // showuser.call(user2 , 14)
// //apply in arrey
// // showuser.apply(user1 , [20])
// let showUs = showuser.bind(user1 , 20)
// console.log(showUs)

//nullish ??

// let num = NaN;

// let nulishNUm = num ?? 2000
// console.log(nulishNUm) return Nan 

// but undefined and null return 2000

// let num = null
// let  nulishNUm = num ?? 2000
// console.log(nulishNUm)


let user = {
    id: '1',
    name: 'Sheyda',
    age : 20 ,
    adress : {
        contry:'Iran',
        city: 'Tehran'
    }
};

// let usertNUll = user.id ?? user.age; //1
let usertNUll = user.adress.city ? user.adress.city.street : undefined;
// or
let usersStreet = user.adress.city?.street
console.log(usertNUll , usersStreet)











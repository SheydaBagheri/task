
const inputElem = document.querySelector('#input-T');
const button = document.querySelector('#button-click');
const listTodo = document.querySelector('.list-item');

button.addEventListener('click' , function(){
    if(inputElem.value === ''){
    }else{
    listTodo.insertAdjacentHTML('beforeend' , 
        ` <li>  ${inputElem.value}<span> ${'\u00d7'} </span></li>`)
    inputElem.value=''
}
})
listTodo.addEventListener('click' , function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked')}
    else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove()
    }


})




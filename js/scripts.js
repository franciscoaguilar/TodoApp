// var addlist = document.querySelector(."add-To-list");
//
// let list = document.getElementById('list');
// let listinput = documnet.getElementById('input');
// let newLiElement = document.createElement('li');
// let addLitext = document.createTextNode(list);
//
// let listbutton = document.form.todoinput.submitBtn;
// listbutton.addEventListener('click', e => {
//
// newLiElement.appendChild('#input');
// list.appendChild('newLiElement');
// });
const myBtn = document.getElementById('btn');



myBtn.addEventListener('click', e =>{
  let createElementLi = document.createElement("LI");
    let usersInput = document.getElementById('usersInput').value;
  let newTextNode = document.createTextNode(usersInput);
  createElementLi.appendChild(newTextNode);
  document.getElementById("list").appendChild(createElementLi);
})

//
// }

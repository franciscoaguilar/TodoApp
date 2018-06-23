
const myBtn = document.getElementById('btn'); //create a variable to be able to acess the button

let todos = [];
// function Task(task){
//   this.task = task;
// }
 myBtn.addEventListener('click', e =>{
  let createElementLi = document.createElement("LI"); //create a new list element (just the bullet)
  let usersInput = document.getElementById('usersInput').value; //gets whatever tasked the user typed in
  let newTextNode = document.createTextNode(usersInput); //create a new text node with whatever task the user typed in, so that i can later add to the list elemet
  let deleteButtonElement = document.createElement('button'); //creates a button, ill be making this a delete butoon

deleteButtonElement.className = "deleteClass";
  let editButtonElement = document.createElement('button');// creates a button, ill be making this a edit butoon
 // let newUsersInput = new Task(usersInput);
 document.getElementById("list").appendChild(createElementLi); //adds nand displays the combined element and task to the current list


  createElementLi.appendChild(newTextNode); //adds the the new task to the newlist element(bullet)
  createElementLi.appendChild(deleteButtonElement); //adds
  createElementLi.appendChild(editButtonElement);
todos.push(usersInput); //adds the new input to an array
document.forms.taskform.reset();

console.log(todos);

})

let deleteBtn = document.getElementsByClassName( 'deleteClass' );

deleteBtn.addEventListener('click', e => {
  console.log(e.target.value)
   const removeElement = e.target.textContent;
    e.target.value = removeElement.parentNode.removeChild();
})

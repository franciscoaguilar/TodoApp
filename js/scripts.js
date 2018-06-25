
const myAddBtn = document.getElementById('btn'); //create a variable to be able to acess the button
// const deleteBtn = document.getElementsByTagName('button');
let todos = [];
// function Task(task){
//   this.task = task;
// }
 myAddBtn.addEventListener('click', e =>{
  let createElementLi = document.createElement("LI"); //create a new list element (just the bullet)
  let usersInput = document.getElementById('usersInput').value; //gets whatever tasked the user typed in
  let newTextNode = document.createTextNode(usersInput); //create a new text node with whatever task the user typed in, so that i can later add to the list elemet
// let elementsInputbox = document.createElement('input');
// elementsInputbox.className = "inputBox";
  let deleteButtonElement = document.createElement('button'); //creates a button, ill be making this a delete butoon
  deleteButtonElement.className = "delBtn";
   let editButtonElement = document.createElement('button');// creates a button, ill be making this a edit butoon
editButtonElement.className = "editBtn";


 document.getElementById("list").appendChild(createElementLi); //adds nand displays the combined element and task to the current list
  // createElementLi.appendChild(elementsInputbox);
  createElementLi.appendChild(newTextNode); //adds the the new task to the newlist element(bullet)
  createElementLi.appendChild(deleteButtonElement); //adds delete btn to the li
  createElementLi.appendChild(editButtonElement);
  todos.push(usersInput); //adds the new input to an array

  deleteButtonElement.addEventListener('click', e =>{
    const removeElement= e.target.parentNode;
    console.log(removeElement);
     removeElement.parentNode.removeChild(removeElement);
 })
 editButtonElement.addEventListener('click', e =>{
   const editElement = e.target.parentNode;
   let ul = editElement.parentNode;
  let   promptEdit = prompt('edit:' );
  let newChildInput = document.createTextNode(promptEdit);
  editElement.replaceChild(newChildInput, editElement.firstChild);
})
document.forms.taskform.reset();


console.log(todos);

})




// deletetask (event){
//   let node = eve
// }

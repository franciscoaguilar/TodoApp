
const myAddBtn = document.getElementById('btn'); //create a variable to be able to acess the button
// const deleteBtn = document.getElementsByTagName('button');
let todos = [];
let todosCompleted = [];
function Task(task){
  this.task = task;
}

 myAddBtn.addEventListener('click', e =>{

  let createElementLi = document.createElement("LI"); //create a new list element (just the bullet)
  let usersInput = document.getElementById('usersInput').value; //gets whatever tasked the user typed in
  let newTextNode = document.createTextNode(usersInput); //CONVERTS WHAT THE USERS WROTE TO A TEXT NODE
  let createSpanElement = document.createElement('span');
  createSpanElement.appendChild(newTextNode);



   newTextNode.className = "inputSpace";
  let deleteButtonElement = document.createElement('button'); //creates a button, ill be making this a delete butoon
    deleteButtonElement.className = "fas fa-trash";

  let editButtonElement = document.createElement('button');// creates a button, ill be making this a edit butoon
    editButtonElement.className = "fas fa-edit";

  let checkboxElement = document.createElement('input');
  checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.className = "checkboxBtn";


if (usersInput=='' ){ //edge casing make shure the users adds something
  alert('HEY! STOP! you have too add something');
}
else{
 document.getElementById("list").appendChild(createElementLi); //adds nand displays the combined element and task to the current list
  // createElementLi.appendChild(elementsInputbox);
  createElementLi.appendChild(createSpanElement); //adds the the new task to the newlist element(bullet)
  createElementLi.appendChild(deleteButtonElement); //adds delete btn to the li
  createElementLi.appendChild(editButtonElement);
  createElementLi.appendChild(checkboxElement);
  todos.push(usersInput); //adds the new input to an array

  deleteButtonElement.addEventListener('click', e =>{
 confirmation = prompt('are you shure you wanna delete?');
 if (confirmation=="yes"){
    const removeElement= e.target.parentNode;
    console.log(removeElement);
     removeElement.parentNode.removeChild(removeElement);
}
else return;

 })


 editButtonElement.addEventListener('click', e =>{
      const editElement = e.target.parentNode;
    let ul = editElement.parentNode;
   let   promptEdit = prompt('edit:' );
   let newInput = document.createTextNode(promptEdit);
   let todosArray = editElement.replaceChild(newInput, editElement.firstChild);
   console.log(todosArray); //adds the new input to an array
})


checkboxElement.addEventListener('click', e =>{

const checkBox = e.target.parentNode; // allow me to target the parents node of the checkbox
 let createCompletedLiElement = document.createElement('li'); ///create another LI element for the done list
 document.getElementById('doneList').appendChild(createCompletedLiElement);// acess the done list and add the li element that ive created on the above step
 let completedTask = createCompletedLiElement.append(checkBox.firstChild);// appends the users input (newTextNode) to the newly created li
 todosCompleted.push(completedTask);
 console.log(completedTask);
checkBox.remove(); //removes the entire li element since i target the parentNode when i declared checkbox.
})
document.forms.taskform.reset();



console.log(todos);
}
})

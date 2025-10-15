let inputVal = document.getElementById('inputVal'); // input id fetch
let btn = document.getElementById('btn'); // add btn id fetch
let myUl = document.getElementById('myUl'); // ul id fetch

function takeInput(text){
  if (text === '') {
    alert("Please enter task!");
  }else{
    console.log("Task added in the list.")
    return text;
  }
}



btn.addEventListener('click', function() {
  // write code
   let text = inputVal.value;
   let result = takeInput(text.trim());

  //  Now list part

  // create a div
  let taskContainer = document.createElement("div");
  taskContainer.className = "task-container"; // assign the class to task container

  // create a list
  let list = document.createElement("li");

  // create span
  let taskSpan = document.createElement("span");
  taskSpan.textContent = result;
  taskSpan.className = "task-text";

  // inside div put span
  taskContainer.appendChild(taskSpan);

  // create complete and delete buttons
  let completeBtn = document.createElement('button');
  completeBtn.className = 'complete-task';
  completeBtn.textContent = 'complete';

  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-task';
  deleteBtn.textContent = 'delete';

  // add buttons into div 
  taskContainer.appendChild(completeBtn);
  taskContainer.appendChild(deleteBtn);

  list.appendChild(taskContainer);
  myUl.appendChild(list);
  
  // delete and complete button function
  deleteBtn.addEventListener('click', function(){
    let divContainer = this.parentElement; // this means this current button you pressed. parentElement means where the button lives in?
    let listContainer = divContainer.parentElement; // divContainer = div , parentElement = li
    listContainer.remove(); 
  });

  completeBtn.addEventListener('click', function(){
    let divContainer = this.parentElement; // div
    let taskText = divContainer.querySelector('.task-text');
    if(taskText){
      taskText.classList.toggle('complete');
    }
  })
  inputVal.value = "";
})

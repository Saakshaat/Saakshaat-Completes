//we are using an object to store local data in the browser
//HTML5 faciliates storing data locally on tbe browser wihtout having to rely on cookies
//the object data has two arrays:
//todo anc completed
//each holds several list items
//we'll be manipulating these arrays for adding, removing and completing items


//using the if statement, we are checking if there is something already in the local storage or not
//

var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
    todo: [],
    completed: []
};
 

var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>'
var completeSVG = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>'
//remove and complete icons
//assigning SVG code values to variables

//this fetches data from localStorage and converts it into innerHTML
//we are rendering the application after declaring the SVG variables because otherwise,
//the SVG icons will be undefined
render();

const submitBtn = document.getElementById('add');
//user clicks button to add todo item
//user given item gets added to todo list
submitBtn.addEventListener('click', function(){
    
    var value = document.getElementById('item').value;
    if(value) {
        addItem(value);    
    }

    submitBtn.style.background = '#444';
});

//below is the implementation of using the ENTER key to press submit
//keydown is the event which corresponds to any key being pressed on the keyboard
//to specify which key, we'll bw using a test for e.code within the function definition
document.getElementById('item').addEventListener('keydown', function(e) {
    var value = this.value;
    if((e.code === 'Enter' || e.code === 'NumpadEnter') && value){
            addItem(value);
    }
});

function addItem(value){

    addItemToDOM(value);
    //to reset the value, we make the value into ''
    //NOTE: you cannot 
    document.getElementById('item').value = '';  

    //push is used to push/append the value
    data.todo.push(value);
    dataObjectUpdated();
}

//we are going to store the object data in local storage
//we'll be using this function for updating local storage this everytime the user makes an updation

function dataObjectUpdated(){
    // localStorage is used to stor stuff in local Storage
    // this function only stores in clear Text
    // so we will convert data to JSON
    //there are three main functions to local storage:
    //setItem()
    //getItem()
    //removeItem()
    // localStorage.setIten() creates an element in local storagetakes 2 parameters
    // one is the stuff you want to add to local storage as
    // the second is the value that you are passing to the first parameter
    
    console.log(localStorage.setItem('todoList',JSON.stringify(data)));//we'll be fetching this value whenever we start the app
}

function render(){
    //if both todo and complete arrays are empty, return command back to the everything after render
    if(!data.todo.length && !data.completed.length) return;

    //we are rendering both the arrays in local storage and 
    for(var i=0;i<data.todo.length;i++){
        var value = data.todo[i];
        addItemToDOM(value);
    }

    for(var j=0;j<data.completed.length;j++){
        var value = data.completed[i];
        addItemToDOM(value,true);
    }
}


//function to remove items from the stack
function removeItem(e){
    //selects the item using the this. keyword
    //this is used for making current selections
    //we use parentNode twice to get to go 2 upper layers
    var item = this.parentNode.parentNode;
    //parent is used to select the parent node of item
    var parent = item.parentNode;
    var id = parent.id;

    var value = item.innerHTML;

    if(id === 'to-do'){
        //here, we are deleting the selected item from the todo array of object data
        data.todo.splice(data.todo.indexOf(value),1);
    }
    else{
        //here, we are reversing the order and first deleting it from the completed(current) array
        data.completed.splice(data.completed.indexOf(value),1);
    }

    //we are going to update the user's local storage using this function after 
    //every add/remove/complete function
    dataObjectUpdated();

    parent.removeChild(item);
}

function completingList(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;


    //getting parentID for the purpose of
    //deciding whether it's a 
    //**completed item to be re-done */
    //**to-do item which is completed */
    var parentID = parent.id;

    //value helps us catch the main element which is to be completed
    //the main element is HTML
    var value = item.innerHTML;

    //completingItem() works like a toggle for items between todo and completed
    //which is also why we introduce parentID to decide the target of the selected list element
    
    //here, we are going to first delete item from current array(todo/completed)
    //then we are going to add that item to the order array

    if(parentID === 'to-do'){
        //here, we are deleting the selected item from the todo array of object data
        data.todo.splice(data.todo.indexOf(value),1);
        //then, we are adding that item to the completed array of object data
        data.completed.push(value);
    }
    else{
        //here, we are reversing the order and first deleting it from the completed(current) array
        data.completed.splice(data.completed.indexOf(value),1);
        //then, we adding that item to the todo array
        data.todo.push(value);
    }

    //we are going to update the user's local storage using this function after 
    //every add/remove/complete function
    dataObjectUpdated();

    //we are going to assign a value to target->where the selected item goes
    //for this, we are going to test the parentID
    //we will use a ternary operator (so, don't freak out :p)
    var target = (parentID === 'to-do')? document.getElementById('completed'):document.getElementById('to-do');
    
    //we are removing the child element
    parent.removeChild(item);
    //now, we are inserting the child element to the target site
    target.insertBefore(item, target.childNodes[0]);
}


//adds new items to the to-do list
function addItemToDOM(text, completed){
    //grabbing the to-do list
    var list = (completed) ? document.getElementById('completed'): document.getElementById('to-do');

    var item = document.createElement('li');
    item.innerHTML = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');    

    var remove = document.createElement('button');
    remove.innerHTML = removeSVG;
    remove.classList.add('remove');

    //Adding click event for removing item
    //the reason, I'm making a seperate function is because
    //this call is made in the scope of the addItemToDOM() function
    //I will be removing items in other functions too
    remove.addEventListener('click', removeItem);



    var complete = document.createElement('button');
    complete.innerHTML = completeSVG;
    complete.classList.add('complete');

    complete.addEventListener('click', completingList);

    //appendChild() works by appending the value of the parameter to the parent

    //parent->buttons & child->remove&&complete
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    //parent->item child->buttons
    item.appendChild(buttons);

    //parent->list (to-do) child->item

    //below is the code to prepend the item
    //this ensures that the newly created card is on top of the stack and 
    //not at the bottom
    //first parameter
    list.insertBefore(item, list.childNodes[0]);
    
}

submitBtn.addEventListener('mouseleave',(e)=>{
    submitBtn.style.background = '#fff';
});
